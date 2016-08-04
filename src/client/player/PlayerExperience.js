import * as soundworks from 'soundworks/client';
import SpatSourcesHandler from './SpatSourcesHandler';

const audioContext = soundworks.audioContext;
const client = soundworks.client;

// html template used by `View` of the `PlayerExperience`
const template = `
  <div class="section-top"></div>
  <div class="section-center flex-center">
    <p class="big"><%= center %></p>
  </div>
  <div class="section-center flex-center">
  </div>
  <div class="section-bottom"></div>
`;

/**
 * Illustration of the use of the web-audio-ambisonic library within the soundworks framework
 */
export default class PlayerExperience extends soundworks.Experience {
  constructor(assetsDomain, audioFiles) {
    super();

    // setup soundworks services
    this.require('platform', { features: 'web-audio' });
    this.loader = this.require('loader', { files: audioFiles });

    // bind methods to the instance to keep a safe `this` in callbacks
    this.setSourcePos = this.setSourcePos.bind(this);
  }

  /**
   * Initialize the experience when all services are ready.
   */
  init() {

    // init local parameters
    this.spatSourceHandler = new SpatSourcesHandler(this.loader.buffers[0]);

    // configure and instanciate the view of the experience
    this.viewContent = { center: 'Drag your finger on the screen to move the audio source.'};
    this.viewTemplate = template;
    this.viewCtor = soundworks.SegmentedView;
    this.view = this.createView();
  }

  /**
   * Start the experience when all services are ready.
   */
  start() {
    super.start();

    // if the experience has never started, initialize it
    if (!this.hasStarted)
      this.init();

    // request the `viewManager` to display the view of the experience
    this.show();

    // create touch event source referring to our view
    const surface = new soundworks.TouchSurface(this.view.$el);

    // setup touch listeners
    surface.addListener('touchstart', this.setSourcePos);
    surface.addListener('touchmove', this.setSourcePos);
  }

  setSourcePos(id, normX, normY) {
    // id here is just to comply with the arguments passed by the
    // surface.addListener arguments function
    var azim = -90.0 * (2 * normX - 1);
    var elev = -45.0 * (2 * normY - 1);
    this.spatSourceHandler.setSourcePos(azim, elev);
  }

}
