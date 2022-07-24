/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/howler/dist/howler.js":
/*!********************************************!*\
  !*** ./node_modules/howler/dist/howler.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Pool of unlocked HTML5 Audio objects.
      self._html5AudioPool = [];
      self.html5PoolSize = 10;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto audio unlocker.
      self.autoUnlock = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Handle stopping all sounds globally.
     */
    stop: function() {
      var self = this || Howler;

      // Loop through all Howls and stop them.
      for (var i=0; i<self._howls.length; i++) {
        self._howls[i].stop();
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var ua = self._navigator ? self._navigator.userAgent : '';
      var checkOpera = ua.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);
      var checkSafari = ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1;
      var safariVersion = ua.match(/Version\/(.*?) /);
      var isOldSafari = (checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType('audio/wav')).replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        m4b: !!(audioTest.canPlayType('audio/x-m4b;') || audioTest.canPlayType('audio/m4b;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _unlockAudio: function() {
      var self = this || Howler;

      // Only run this if Web Audio is supported and it hasn't already been unlocked.
      if (self._audioUnlocked || !self.ctx) {
        return;
      }

      self._audioUnlocked = false;
      self.autoUnlock = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function(e) {
        // Create a pool of unlocked HTML5 Audio objects that can
        // be used for playing sounds without user interaction. HTML5
        // Audio objects must be individually unlocked, as opposed
        // to the WebAudio API which only needs a single activation.
        // This must occur before WebAudio setup or the source.onended
        // event will not fire.
        while (self._html5AudioPool.length < self.html5PoolSize) {
          try {
            var audioNode = new Audio();

            // Mark this Audio object as unlocked to ensure it can get returned
            // to the unlocked pool when released.
            audioNode._unlocked = true;

            // Add the audio node to the pool.
            self._releaseHtml5Audio(audioNode);
          } catch (e) {
            self.noAudio = true;
            break;
          }
        }

        // Loop through any assigned audio nodes and unlock them.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and unlock the audio nodes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node && !sound._node._unlocked) {
                sound._node._unlocked = true;
                sound._node.load();
              }
            }
          }
        }

        // Fix Android can not play in suspend state.
        self._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._audioUnlocked = true;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
          document.removeEventListener('click', unlock, true);
          document.removeEventListener('keydown', unlock, true);

          // Let all sounds know that audio has been unlocked.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('unlock');
          }
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);
      document.addEventListener('click', unlock, true);
      document.addEventListener('keydown', unlock, true);

      return self;
    },

    /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */
    _obtainHtml5Audio: function() {
      var self = this || Howler;

      // Return the next object from the pool if one exists.
      if (self._html5AudioPool.length) {
        return self._html5AudioPool.pop();
      }

      //.Check if the audio is locked and throw a warning.
      var testPlay = new Audio().play();
      if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
        testPlay.catch(function() {
          console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
        });
      }

      return new Audio();
    },

    /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */
    _releaseHtml5Audio: function(audio) {
      var self = this || Howler;

      // Don't add audio to the pool if we don't know if it has been unlocked.
      if (audio._unlocked) {
        self._html5AudioPool.push(audio);
      }

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';

        // Handle updating the state of the audio context after suspending.
        var handleSuspension = function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        };

        // Either the state gets suspended or it is interrupted.
        // Either way, we need to update the state to suspended.
        self.ctx.suspend().then(handleSuspension, handleSuspension);
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self.ctx.state !== 'interrupted' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended' || self.state === 'running' && self.ctx.state === 'interrupted') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean' || o.preload === 'metadata') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhr = {
        method: o.xhr && o.xhr.method ? o.xhr.method : 'GET',
        headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
        withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false,
      };

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
        Howler._unlockAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload && self._preload !== 'none') {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended.
        // If there is, play that sound. If not, continue as usual.
        if (!self._playLock) {
          var num = 0;
          for (var i=0; i<self._sounds.length; i++) {
            if (self._sounds[i]._paused && !self._sounds[i]._ended) {
              num++;
              id = self._sounds[i]._id;
            }
          }

          if (num === 1) {
            sprite = null;
          } else {
            id = null;
          }
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Mark this sound as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);
      var start = self._sprite[sprite][0] / 1000;
      var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      sound._sprite = sprite;

      // Mark the sound as ended instantly so that this async playback
      // doesn't get grabbed by another call to play while this one waits to start.
      sound._ended = false;

      // Update the parameters of the sound.
      var setParams = function() {
        sound._paused = false;
        sound._seek = seek;
        sound._start = start;
        sound._stop = stop;
        sound._loop = !!(sound._loop || self._sprite[sprite][2]);
      };

      // End the sound instantly if seek is at the end.
      if (seek >= stop) {
        self._ended(sound);
        return;
      }

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._playLock = false;
          setParams();
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
              self._loadQueue();
            }, 0);
          }
        };

        if (Howler.state === 'running' && Howler.ctx.state !== 'interrupted') {
          playWebAudio();
        } else {
          self._playLock = true;

          // Wait for the audio context to resume before playing.
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Some browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Set param values immediately.
              setParams();

              // Releases the lock and executes queued actions.
              play
                .then(function() {
                  self._playLock = false;
                  node._unlocked = true;
                  if (!internal) {
                    self._emit('play', sound._id);
                  } else {
                    self._loadQueue();
                  }
                })
                .catch(function() {
                  self._playLock = false;
                  self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                    'on mobile devices and Chrome where playback was not within a user interaction.');

                  // Reset the ended and paused values.
                  sound._ended = true;
                  sound._paused = true;
                });
            } else if (!internal) {
              self._playLock = false;
              setParams();
              self._emit('play', sound._id);
            }

            // Setting rate before playing won't work in IE, so we set it again here.
            node.playbackRate = sound._rate;

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices and Chrome where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default' || sound._loop) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // If this is streaming audio, make sure the src is set and load again.
        if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
          node.src = self._src;
          node.load();
        }

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          self._playLock = true;
          self._state = 'loading';

          var listener = function() {
            self._state = 'loaded';
            
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();

              // If this is a live stream, stop download once the audio is stopped.
              if (sound._node.duration === Infinity) {
                self._clearSound(sound._node);
              }
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded'|| self._playLock) {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded'|| self._playLock) {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Make sure the to/from/len values are numbers.
      from = Math.min(Math.max(0, parseFloat(from)), 1);
      to = Math.min(Math.max(0, parseFloat(to)), 1);
      len = parseFloat(len);

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Make sure the volume is in the right bounds.
        if (diff < 0) {
          vol = Math.max(to, vol);
        } else {
          vol = Math.min(to, vol);
        }

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;

              // If playing, restart playback to ensure looping updates.
              if (self.playing(ids[i])) {
                self.pause(ids[i], true);
                self.play(ids[i], true);
              }
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            if (self.playing(id[i])) {
              sound._rateSeek = self.seek(id[i]);
              sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            }
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        if (self._sounds.length) {
          id = self._sounds[0]._id;
        }
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return 0;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (typeof seek === 'number' && (self._state !== 'loaded' || self._playLock)) {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
            sound._node.currentTime = seek;
          }

          // Seek and emit when ready.
          var seekAndEmit = function() {
            // Restart the playback if the sound was playing.
            if (playing) {
              self.play(id, true);
            }

            self._emit('seek', id);
          };

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                seekAndEmit();
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            seekAndEmit();
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          self._clearSound(sounds[i]._node);

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
          sounds[i]._node.removeEventListener('ended', sounds[i]._endFn, false);

          // Release the Audio object back to the pool.
          Howler._releaseHtml5Audio(sounds[i]._node);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);
      }

      // Remove the references in the global Howler object.
      var index = Howler._howls.indexOf(self);
      if (index >= 0) {
        Howler._howls.splice(index, 1);
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id, true);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop || 0;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;
      var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

      if (Howler._scratchBuffer && node.bufferSource) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        if (isIOS) {
          try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
        }
      }
      node.bufferSource = null;

      return self;
    },

    /**
     * Set the source to a 0-second silence to stop any downloading (except in IE).
     * @param  {Object} node Audio node to clear.
     */
    _clearSound: function(node) {
      var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
      if (!checkIE) {
        node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
      }
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else if (!Howler.noAudio) {
        // Get an unlocked Audio object from the pool.
        self._node = Howler._obtainHtml5Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Listen for the 'ended' event on the sound to account for edge-case where
        // a finite sound has a duration of Infinity.
        self._endFn = self._endListener.bind(self);
        self._node.addEventListener('ended', self._endFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = parent._preload === true ? 'auto' : parent._preload;
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    },

    /**
     * HTML5 Audio ended listener callback.
     */
    _endListener: function() {
      var self = this;
      var parent = self._parent;

      // Only handle the `ended`` event if the duration is Infinity.
      if (parent._duration === Infinity) {
        // Update the parent duration to match the real audio duration.
        // Round up the duration to account for the lower precision in HTML5 Audio.
        parent._duration = Math.ceil(self._node.duration * 10) / 10;

        // Update the sprite that corresponds to the real duration.
        if (parent._sprite.__default[1] === Infinity) {
          parent._sprite.__default[1] = parent._duration * 1000;
        }

        // Run the regular ended method.
        parent._ended(self);
      }

      // Clear the event listener since the duration is now correct.
      self._node.removeEventListener('ended', self._endFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open(self._xhr.method, url, true);
      xhr.withCredentials = self._xhr.withCredentials;
      xhr.responseType = 'arraybuffer';

      // Apply any custom headers to the request.
      if (self._xhr.headers) {
        Object.keys(self._xhr.headers).forEach(function(key) {
          xhr.setRequestHeader(key, self._xhr.headers[key]);
        });
      }

      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Fire a load error if something broke.
    var error = function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    };

    // Load the sound on success.
    var success = function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      } else {
        error();
      }
    };

    // Decode the buffer into an audio source.
    if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
      Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
    } else {
      Howler.ctx.decodeAudioData(arraybuffer, success, error);
    }
  }

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // If we have already detected that Web Audio isn't supported, don't run this step again.
    if (!Howler.usingWebAudio) {
      return;
    }

    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // If the audio context creation still failed, set using web audio to false.
    if (!Howler.ctx) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : Howler._volume, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // Add support for CommonJS libraries such as browserify.
  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Add to global in Node.js (for testing, etc).
  if (typeof global !== 'undefined') {
    global.HowlerGlobal = HowlerGlobal;
    global.Howler = Howler;
    global.Howl = Howl;
    global.Sound = Sound;
  } else if (typeof window !== 'undefined') {  // Define globally in case AMD is not available or unused.
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];

      if (typeof self.ctx.listener.positionX !== 'undefined') {
        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
      }
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];

      if (typeof self.ctx.listener.forwardX !== 'undefined') {
        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
      }
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(pan, 0, 0);
              }
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setPosition(x, y, z);
            }
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.orientationX !== 'undefined') {
              sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(x, y, z);
            }
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      } else if (self._panner) {
        // Disconnect the panner.
        self._panner.disconnect(0);
        self._panner = undefined;
        parent._refreshBuffer(self);
      }

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;

      if (typeof sound._panner.positionX !== 'undefined') {
        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      }

      if (typeof sound._panner.orientationX !== 'undefined') {
        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
      }
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/audio/audioGameOver.mp3":
/*!*************************************!*\
  !*** ./src/audio/audioGameOver.mp3 ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "audio/76d6e593571dba26bb838cd4fcb5bf0f.mp3");

/***/ }),

/***/ "./src/audio/audioJump.mp3":
/*!*********************************!*\
  !*** ./src/audio/audioJump.mp3 ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "audio/274420784754a85ae6f332475fc4326a.mp3");

/***/ }),

/***/ "./src/audio/audioLaser.mp3":
/*!**********************************!*\
  !*** ./src/audio/audioLaser.mp3 ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "audio/6157ff2ff8e4898a2d5c7c0e0d24ed9d.mp3");

/***/ }),

/***/ "./src/audio/audioLosePowerUp.mp3":
/*!****************************************!*\
  !*** ./src/audio/audioLosePowerUp.mp3 ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "audio/3753d48f393dba500213951b9c526a26.mp3");

/***/ }),

/***/ "./src/audio/audioZombieDeath.mp3":
/*!****************************************!*\
  !*** ./src/audio/audioZombieDeath.mp3 ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "audio/c345f3e01c2705526392303b2fc261c5.mp3");

/***/ }),

/***/ "./src/audio/coinCollect.mp3":
/*!***********************************!*\
  !*** ./src/audio/coinCollect.mp3 ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "audio/3644f0c3e2c2face4b67fad3b18b26f1.mp3");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6eaa17d14ef7cc837d3d83c53cfd322f.png");

/***/ }),

/***/ "./src/img/block.png":
/*!***************************!*\
  !*** ./src/img/block.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4fa3afe1e9cecf5e68b06ad1b514c0be.png");

/***/ }),

/***/ "./src/img/blockTri.png":
/*!******************************!*\
  !*** ./src/img/blockTri.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "96e6ccbe7847040d5563121a15ff2f75.png");

/***/ }),

/***/ "./src/img/coin.png":
/*!**************************!*\
  !*** ./src/img/coin.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d38329d0157be564b5bfc68cb889e88c.png");

/***/ }),

/***/ "./src/img/cyclopsJumpLeft.png":
/*!*************************************!*\
  !*** ./src/img/cyclopsJumpLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "967e7c908450c19e0314c06f4a7a97cd.png");

/***/ }),

/***/ "./src/img/cyclopsJumpRight.png":
/*!**************************************!*\
  !*** ./src/img/cyclopsJumpRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9ab9f4bce60430a4317b567e8eb8f457.png");

/***/ }),

/***/ "./src/img/cyclopsLeftStand.png":
/*!**************************************!*\
  !*** ./src/img/cyclopsLeftStand.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8abe9f7ce60fd91a34b5b601f1b49d9b.png");

/***/ }),

/***/ "./src/img/cyclopsRightStand.png":
/*!***************************************!*\
  !*** ./src/img/cyclopsRightStand.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f7c391676d3ac0ba33bb21031c5b3e95.png");

/***/ }),

/***/ "./src/img/cyclopsRunLeft.png":
/*!************************************!*\
  !*** ./src/img/cyclopsRunLeft.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "639129d8fb4bad2c6cf9f5bdf97c030e.png");

/***/ }),

/***/ "./src/img/cyclopsRunRight.png":
/*!*************************************!*\
  !*** ./src/img/cyclopsRunRight.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b2a2a97a3bbc6584faeb8677b3f6d4f2.png");

/***/ }),

/***/ "./src/img/helpPage/b1.png":
/*!*********************************!*\
  !*** ./src/img/helpPage/b1.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "507a3a3a3e70dc153787b8620454eb1c.png");

/***/ }),

/***/ "./src/img/helpPage/b2.png":
/*!*********************************!*\
  !*** ./src/img/helpPage/b2.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3e56198b20f72b8ac5747b7bdd5f338b.png");

/***/ }),

/***/ "./src/img/helpPage/b3.png":
/*!*********************************!*\
  !*** ./src/img/helpPage/b3.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "664cd869dd7e388396b16b41b9555424.png");

/***/ }),

/***/ "./src/img/helpPage/b4.png":
/*!*********************************!*\
  !*** ./src/img/helpPage/b4.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0318e320b8a13975fe095dae09a2335d.png");

/***/ }),

/***/ "./src/img/helpPage/b5.png":
/*!*********************************!*\
  !*** ./src/img/helpPage/b5.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "81f7456f52a72402fd50142b0c3a9cd7.png");

/***/ }),

/***/ "./src/img/helpPage/b6.png":
/*!*********************************!*\
  !*** ./src/img/helpPage/b6.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8c4a198bbc49747250cf44fe3c2ff7e6.png");

/***/ }),

/***/ "./src/img/helpPage/b7.png":
/*!*********************************!*\
  !*** ./src/img/helpPage/b7.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "105cac41fe282841a5a634dd626b673d.png");

/***/ }),

/***/ "./src/img/helpPage/b8.png":
/*!*********************************!*\
  !*** ./src/img/helpPage/b8.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "13d24667bf01120f676f744a6e3306cd.png");

/***/ }),

/***/ "./src/img/helpPage/helpPage.png":
/*!***************************************!*\
  !*** ./src/img/helpPage/helpPage.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7a9783d148f2094527b0403cc43af0ba.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9635140862156c6def9efbdceb4c22f0.png");

/***/ }),

/***/ "./src/img/homePage/background.png":
/*!*****************************************!*\
  !*** ./src/img/homePage/background.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dd82f97426889e449dc28b7f61695671.png");

/***/ }),

/***/ "./src/img/homePage/help.png":
/*!***********************************!*\
  !*** ./src/img/homePage/help.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "432a18910feab5f72c6cfc8361acb890.png");

/***/ }),

/***/ "./src/img/homePage/play.png":
/*!***********************************!*\
  !*** ./src/img/homePage/play.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "16e90429c3412dc7ec617abc89f8ffc7.png");

/***/ }),

/***/ "./src/img/homePage/shop.png":
/*!***********************************!*\
  !*** ./src/img/homePage/shop.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "352bc49337a1b8beb3515dbbe43bac82.png");

/***/ }),

/***/ "./src/img/level2/background.png":
/*!***************************************!*\
  !*** ./src/img/level2/background.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "36fc18c20ae2a7573d6d75ba7643162a.png");

/***/ }),

/***/ "./src/img/level2/hills.png":
/*!**********************************!*\
  !*** ./src/img/level2/hills.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cf0ffdb6eb5f477ddaba34b708eb3d3a.png");

/***/ }),

/***/ "./src/img/level2/platform.png":
/*!*************************************!*\
  !*** ./src/img/level2/platform.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a484b20283869d7099ac2359b768c799.png");

/***/ }),

/***/ "./src/img/level2/tPlatform.png":
/*!**************************************!*\
  !*** ./src/img/level2/tPlatform.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "51f79942fd05353c59acbb4d1cbf43b3.png");

/***/ }),

/***/ "./src/img/level2/xtPlatform.png":
/*!***************************************!*\
  !*** ./src/img/level2/xtPlatform.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "80c1ecd728407a58d6ed8732006ce064.png");

/***/ }),

/***/ "./src/img/level3/background.png":
/*!***************************************!*\
  !*** ./src/img/level3/background.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "982e293c97eb58627e9da5d47725db69.png");

/***/ }),

/***/ "./src/img/level3/hills.png":
/*!**********************************!*\
  !*** ./src/img/level3/hills.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "44d1de80e73c3efaa05239b1bb6f1f37.png");

/***/ }),

/***/ "./src/img/level3/platform.png":
/*!*************************************!*\
  !*** ./src/img/level3/platform.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "54f5fdf195d842dc7abe3c3d0b84e2ca.png");

/***/ }),

/***/ "./src/img/level3/tPlatform.png":
/*!**************************************!*\
  !*** ./src/img/level3/tPlatform.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d199417e91c0c755380116455290de50.png");

/***/ }),

/***/ "./src/img/level3/xtPlatform.png":
/*!***************************************!*\
  !*** ./src/img/level3/xtPlatform.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "981df066be69887134787b8f66f92605.png");

/***/ }),

/***/ "./src/img/pad.png":
/*!*************************!*\
  !*** ./src/img/pad.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0884ff3a225181895df6418048d2c227.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5ac895a222b44afa764095976c192fb4.png");

/***/ }),

/***/ "./src/img/potion.png":
/*!****************************!*\
  !*** ./src/img/potion.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dcccd20cbfaa6ed2c1eb44faec7a4e35.png");

/***/ }),

/***/ "./src/img/shopPage/b10.png":
/*!**********************************!*\
  !*** ./src/img/shopPage/b10.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "26825e9ffa195150f71fd1f845dd3cd3.png");

/***/ }),

/***/ "./src/img/shopPage/b9.png":
/*!*********************************!*\
  !*** ./src/img/shopPage/b9.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "73f2b8968222e6076ee88f081fe454c5.png");

/***/ }),

/***/ "./src/img/shopPage/shopPage.png":
/*!***************************************!*\
  !*** ./src/img/shopPage/shopPage.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d34cebc4ab06fb9ecfb9265f6b81e6d5.png");

/***/ }),

/***/ "./src/img/tPlatform.png":
/*!*******************************!*\
  !*** ./src/img/tPlatform.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9952ca93fe24142d94a962812a1bbb52.png");

/***/ }),

/***/ "./src/img/toadJumpLeft.png":
/*!**********************************!*\
  !*** ./src/img/toadJumpLeft.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "44192aae5c5523a72a04eaf98b7f0c85.png");

/***/ }),

/***/ "./src/img/toadJumpRight.png":
/*!***********************************!*\
  !*** ./src/img/toadJumpRight.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "69c435d693088828d8b2dfe9d635cbf1.png");

/***/ }),

/***/ "./src/img/toadLeftStand.png":
/*!***********************************!*\
  !*** ./src/img/toadLeftStand.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6fc6daf6c4feea9af1517a97a370f16f.png");

/***/ }),

/***/ "./src/img/toadRightStand.png":
/*!************************************!*\
  !*** ./src/img/toadRightStand.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7a10ccf77974ffb6f7be7369469dcd50.png");

/***/ }),

/***/ "./src/img/toadRunLeft.png":
/*!*********************************!*\
  !*** ./src/img/toadRunLeft.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "038c06055735f80f7264fe6d34bd775b.png");

/***/ }),

/***/ "./src/img/toadRunRight.png":
/*!**********************************!*\
  !*** ./src/img/toadRunRight.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "872ca4427aab13684615f07ac1ce0a5a.png");

/***/ }),

/***/ "./src/img/xtPlatform.png":
/*!********************************!*\
  !*** ./src/img/xtPlatform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2647c1640b09e9444edfad03621913e8.png");

/***/ }),

/***/ "./src/img/zombieSprite.png":
/*!**********************************!*\
  !*** ./src/img/zombieSprite.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e75586ebafcc55c25773159ed2a570a2.png");

/***/ }),

/***/ "./src/img/zombieSpriteRight.png":
/*!***************************************!*\
  !*** ./src/img/zombieSpriteRight.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "937104f3cf8cd479f67fe30486233031.png");

/***/ }),

/***/ "./src/js/audio.js":
/*!*************************!*\
  !*** ./src/js/audio.js ***!
  \*************************/
/*! exports provided: audio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audio", function() { return audio; });
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _audio_audioGameOver_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audio/audioGameOver.mp3 */ "./src/audio/audioGameOver.mp3");
/* harmony import */ var _audio_audioJump_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio/audioJump.mp3 */ "./src/audio/audioJump.mp3");
/* harmony import */ var _audio_audioLaser_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../audio/audioLaser.mp3 */ "./src/audio/audioLaser.mp3");
/* harmony import */ var _audio_audioLosePowerUp_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../audio/audioLosePowerUp.mp3 */ "./src/audio/audioLosePowerUp.mp3");
/* harmony import */ var _audio_audioZombieDeath_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../audio/audioZombieDeath.mp3 */ "./src/audio/audioZombieDeath.mp3");
/* harmony import */ var _audio_coinCollect_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../audio/coinCollect.mp3 */ "./src/audio/coinCollect.mp3");







var audio = {
  audioGameOver: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
    src: [_audio_audioGameOver_mp3__WEBPACK_IMPORTED_MODULE_1__["default"]],
    volume: 0.4
  }),
  audioJump: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
    src: [_audio_audioJump_mp3__WEBPACK_IMPORTED_MODULE_2__["default"]],
    volume: 0.25
  }),
  audioLaser: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
    src: [_audio_audioLaser_mp3__WEBPACK_IMPORTED_MODULE_3__["default"]],
    volume: 0.4
  }),
  audioLosePowerUp: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
    src: [_audio_audioLosePowerUp_mp3__WEBPACK_IMPORTED_MODULE_4__["default"]],
    volume: 0.4
  }),
  audioZombieDeath: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
    src: [_audio_audioZombieDeath_mp3__WEBPACK_IMPORTED_MODULE_5__["default"]],
    volume: 0.4
  }),
  coinCollect: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
    src: [_audio_coinCollect_mp3__WEBPACK_IMPORTED_MODULE_6__["default"]],
    volume: 0.4
  })
};

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_tPlatform_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/tPlatform.png */ "./src/img/tPlatform.png");
/* harmony import */ var _img_xtPlatform_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/xtPlatform.png */ "./src/img/xtPlatform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_block_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/block.png */ "./src/img/block.png");
/* harmony import */ var _img_blockTri_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/blockTri.png */ "./src/img/blockTri.png");
/* harmony import */ var _img_pad_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/pad.png */ "./src/img/pad.png");
/* harmony import */ var _img_toadRunRight_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/toadRunRight.png */ "./src/img/toadRunRight.png");
/* harmony import */ var _img_toadRunLeft_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/toadRunLeft.png */ "./src/img/toadRunLeft.png");
/* harmony import */ var _img_toadRightStand_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/toadRightStand.png */ "./src/img/toadRightStand.png");
/* harmony import */ var _img_toadLeftStand_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/toadLeftStand.png */ "./src/img/toadLeftStand.png");
/* harmony import */ var _img_toadJumpRight_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/toadJumpRight.png */ "./src/img/toadJumpRight.png");
/* harmony import */ var _img_toadJumpLeft_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/toadJumpLeft.png */ "./src/img/toadJumpLeft.png");
/* harmony import */ var _img_cyclopsRunRight_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/cyclopsRunRight.png */ "./src/img/cyclopsRunRight.png");
/* harmony import */ var _img_cyclopsRunLeft_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/cyclopsRunLeft.png */ "./src/img/cyclopsRunLeft.png");
/* harmony import */ var _img_cyclopsRightStand_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/cyclopsRightStand.png */ "./src/img/cyclopsRightStand.png");
/* harmony import */ var _img_cyclopsLeftStand_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/cyclopsLeftStand.png */ "./src/img/cyclopsLeftStand.png");
/* harmony import */ var _img_cyclopsJumpRight_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../img/cyclopsJumpRight.png */ "./src/img/cyclopsJumpRight.png");
/* harmony import */ var _img_cyclopsJumpLeft_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../img/cyclopsJumpLeft.png */ "./src/img/cyclopsJumpLeft.png");
/* harmony import */ var _img_zombieSprite_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../img/zombieSprite.png */ "./src/img/zombieSprite.png");
/* harmony import */ var _img_zombieSpriteRight_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../img/zombieSpriteRight.png */ "./src/img/zombieSpriteRight.png");
/* harmony import */ var _img_potion_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../img/potion.png */ "./src/img/potion.png");
/* harmony import */ var _img_coin_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../img/coin.png */ "./src/img/coin.png");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./audio.js */ "./src/js/audio.js");
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./images.js */ "./src/js/images.js");





function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }




























var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var coinsCollectedElem = document.querySelector("[data-coins]");
var helpBtns = document.querySelector('helpBtns'); // gravity strength

var gravity = 0.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Player);

    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 90;
    this.height = 120; //sprite animations imported

    this.frames = 0;
    this.sprites = {
      stand: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_toadRightStand_png__WEBPACK_IMPORTED_MODULE_15__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_toadLeftStand_png__WEBPACK_IMPORTED_MODULE_16__["default"]),
        potion: {
          right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_cyclopsRightStand_png__WEBPACK_IMPORTED_MODULE_21__["default"]),
          left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_cyclopsLeftStand_png__WEBPACK_IMPORTED_MODULE_22__["default"])
        }
      },
      run: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_toadRunRight_png__WEBPACK_IMPORTED_MODULE_13__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_toadRunLeft_png__WEBPACK_IMPORTED_MODULE_14__["default"]),
        potion: {
          right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_cyclopsRunRight_png__WEBPACK_IMPORTED_MODULE_19__["default"]),
          left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_cyclopsRunLeft_png__WEBPACK_IMPORTED_MODULE_20__["default"])
        }
      },
      jump: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_toadJumpRight_png__WEBPACK_IMPORTED_MODULE_17__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_toadJumpLeft_png__WEBPACK_IMPORTED_MODULE_18__["default"]),
        potion: {
          right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_cyclopsJumpRight_png__WEBPACK_IMPORTED_MODULE_23__["default"]),
          left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_cyclopsJumpLeft_png__WEBPACK_IMPORTED_MODULE_24__["default"])
        }
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.powerUps = {
      potion: false
    };
    this.invincible = false;
    this.opacity = 1;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Player, [{
    key: "draw",
    value: function draw() {
      c.save();
      c.globalAlpha = this.opacity;
      c.drawImage(this.currentSprite, 300 * this.frames, 0, 300, 400, this.position.x, this.position.y, this.width, this.height);
      c.restore();
    } // gravity properties

  }, {
    key: "update",
    value: function update() {
      this.frames++;
      var currentSprite = this.currentSprite,
          sprites = this.sprites;
      if (this.frames > 28 && (currentSprite === sprites.stand.right || currentSprite === sprites.stand.left || currentSprite === sprites.stand.potion.left || currentSprite === sprites.stand.potion.right)) this.frames = 0;else if (this.frames > 59 && (currentSprite === sprites.run.right || currentSprite === sprites.run.left || currentSprite === sprites.run.potion.right || currentSprite === sprites.run.potion.left)) this.frames = 0;else if (currentSprite === sprites.jump.right || currentSprite === sprites.jump.left || currentSprite === sprites.jump.potion.right || currentSprite === sprites.jump.potion.left) this.frames = 0;
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;

      if (this.invincible) {
        if (this.opacity === 1) this.opacity = 0;else this.opacity = 1;
      } else this.opacity = 1;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image,
        block = _ref.block,
        help = _ref.help,
        shop = _ref.shop,
        play = _ref.play;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.block = block;
    this.help = help;
    this.shop = shop;
    this.play = play;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }]);

  return Platform;
}();

var Button = /*#__PURE__*/function () {
  function Button(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image,
        b1 = _ref2.b1,
        b2 = _ref2.b2,
        b3 = _ref2.b3,
        b4 = _ref2.b4,
        b5 = _ref2.b5,
        b6 = _ref2.b6,
        b7 = _ref2.b7,
        b8 = _ref2.b8;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Button);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.b1 = b1;
    this.b2 = b2;
    this.b3 = b3;
    this.b4 = b4;
    this.b5 = b5;
    this.b6 = b6;
    this.b7 = b7;
    this.b8 = b8;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Button, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }]);

  return Button;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }]);

  return GenericObject;
}();

var Zombie = /*#__PURE__*/function () {
  function Zombie(_ref4) {
    var position = _ref4.position,
        velocity = _ref4.velocity,
        _ref4$distance = _ref4.distance,
        distance = _ref4$distance === void 0 ? {
      limitLeft: 75,
      limitRight: -75,
      traveled: 0
    } : _ref4$distance;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Zombie);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.width = 120;
    this.height = 150;
    this.sprites = {
      walk: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_zombieSpriteRight_png__WEBPACK_IMPORTED_MODULE_26__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_zombieSprite_png__WEBPACK_IMPORTED_MODULE_25__["default"])
      }
    };
    this.currentSprite = this.sprites.walk.left;
    this.frames = 0;
    this.distance = distance;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Zombie, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = 'red'
      // c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.currentSprite, 300 * this.frames, 0, 300, 400, this.position.x, this.position.y, this.width, this.height, this.position.x);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 47 && (this.currentSprite === this.sprites.walk.left || this.currentSprite === this.sprites.walk.right)) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity; //walk the zombie backwards

      this.distance.traveled -= this.velocity.x;

      if (this.distance.traveled > this.distance.limitLeft) {
        this.distance.traveled = 0;
        this.velocity.x = -this.velocity.x;
        this.currentSprite = this.sprites.walk.right;
      } else if (this.distance.traveled < this.distance.limitRight) {
        this.distance.traveled = 0;
        this.velocity.x = -this.velocity.x;
        this.currentSprite = this.sprites.walk.left;
      }
    }
  }]);

  return Zombie;
}();

var Pad = /*#__PURE__*/function () {
  function Pad(_ref5) {
    var x = _ref5.x,
        y = _ref5.y,
        image = _ref5.image;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Pad);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Pad, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }]);

  return Pad;
}();

var Potion = /*#__PURE__*/function () {
  function Potion(_ref6) {
    var x = _ref6.x,
        y = _ref6.y,
        image = _ref6.image;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Potion);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = 40;
    this.height = 60;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Potion, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }]);

  return Potion;
}();

var Coin = /*#__PURE__*/function () {
  function Coin(_ref7) {
    var x = _ref7.x,
        y = _ref7.y,
        image = _ref7.image;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Coin);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = 50;
    this.height = 50;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Coin, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }]);

  return Coin;
}();

var Particle = /*#__PURE__*/function () {
  function Particle(_ref8) {
    var position = _ref8.position,
        velocity = _ref8.velocity,
        radius = _ref8.radius,
        _ref8$color = _ref8.color,
        color = _ref8$color === void 0 ? 'green' : _ref8$color,
        _ref8$laser = _ref8.laser,
        laser = _ref8$laser === void 0 ? false : _ref8$laser;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Particle);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.radius = radius;
    this.ttl = 300;
    this.color = color;
    this.laser = laser;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Particle, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.ttl--;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.radius + this.velocity.y <= canvas.height) this.velocity.y += gravity * 0.5;
    }
  }]);

  return Particle;
}(); //defining platforms


var platformImage;
var tPlatformImage;
var xtPlatformImage;
var blockTriImage;
var blockImage;
var padImage;
var potionImage;
var coinImage;
var player = new Player();
var platforms = [];
var genericObjects = [];
var buttons = [];
var zombiez = [];
var particles = [];
var potions = [];
var coins = [];
var pads = [];
var coinsCollected = 0;
window.totalCoinsCollected = 0;
var lastKey;
var keys;
var scrollOffset;
var game;
var currentLevel = 4;

function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

function none() {}

function selectLevel(currentLevel) {
  switch (currentLevel) {
    case 1:
      gameResetLevel1();
      break;

    case 2:
      gameResetLevel2();
      break;

    case 3:
      gameResetLevel3();
      break;

    case 4:
      goHome();
      break;

    case 5:
      goHelp();
      break;

    case 6:
      goShop();
      break;
  }
}

function gameResetLevel1() {
  return _gameResetLevel.apply(this, arguments);
}

function _gameResetLevel() {
  _gameResetLevel = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var platformsMap, platformDistance;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            currentLevel = 1;
            player = new Player();
            keys = {
              right: {
                pressed: false
              },
              left: {
                pressed: false
              }
            };
            scrollOffset = 0;
            game = {
              disableUserInput: false
            };
            _context.next = 7;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_platform_png__WEBPACK_IMPORTED_MODULE_5__["default"]);

          case 7:
            platformImage = _context.sent;
            _context.next = 10;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_tPlatform_png__WEBPACK_IMPORTED_MODULE_6__["default"]);

          case 10:
            tPlatformImage = _context.sent;
            _context.next = 13;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_xtPlatform_png__WEBPACK_IMPORTED_MODULE_7__["default"]);

          case 13:
            xtPlatformImage = _context.sent;
            _context.next = 16;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_blockTri_png__WEBPACK_IMPORTED_MODULE_11__["default"]);

          case 16:
            blockTriImage = _context.sent;
            _context.next = 19;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_block_png__WEBPACK_IMPORTED_MODULE_10__["default"]);

          case 19:
            blockImage = _context.sent;
            _context.next = 22;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_pad_png__WEBPACK_IMPORTED_MODULE_12__["default"]);

          case 22:
            padImage = _context.sent;
            _context.next = 25;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_potion_png__WEBPACK_IMPORTED_MODULE_27__["default"]);

          case 25:
            potionImage = _context.sent;
            _context.next = 28;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_coin_png__WEBPACK_IMPORTED_MODULE_28__["default"]);

          case 28:
            coinImage = _context.sent;
            zombiez = [new Zombie({
              position: {
                x: 2750,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              }
            }), new Zombie({
              position: {
                x: 6000,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 250,
                limitRight: -250,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 6100,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 250,
                limitRight: -250,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 6200,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 250,
                limitRight: -250,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 6300,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 250,
                limitRight: -250,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 8450,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              }
            }), new Zombie({
              position: {
                x: 11600,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 150,
                limitRight: -150,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 11800,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 225,
                limitRight: -225,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 12000,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 200,
                limitRight: -200,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 12200,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 175,
                limitRight: -175,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 12400,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 150,
                limitRight: -150,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 12700,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 100,
                limitRight: -100,
                traveled: 0
              }
            })];
            particles = [];
            platforms = [new Platform({
              x: 1700,
              y: 290,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 2150,
              y: 190,
              image: xtPlatformImage
            }), new Platform({
              x: 3750,
              y: 290,
              image: blockImage,
              block: true
            }), new Platform({
              x: 4125,
              y: 310,
              image: tPlatformImage
            }), new Platform({
              x: 6925,
              y: 290,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 9325,
              y: 400,
              image: blockImage,
              block: true
            }), new Platform({
              x: 9525,
              y: 400,
              image: blockImage,
              block: true
            }), new Platform({
              x: 9725,
              y: 400,
              image: blockImage,
              block: true
            }), new Platform({
              x: 9925,
              y: 350,
              image: blockImage,
              block: true
            }), new Platform({
              x: 10125,
              y: 300,
              image: blockImage,
              block: true
            }), new Platform({
              x: 10325,
              y: 250,
              image: blockImage,
              block: true
            }), new Platform({
              x: 10525,
              y: 200,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 10678,
              y: 200,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 10831,
              y: 200,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 10984,
              y: 200,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 11437,
              y: 150,
              image: blockImage,
              block: true
            }), new Platform({
              x: 11737,
              y: 150,
              image: blockImage,
              block: true
            }), new Platform({
              x: 12037,
              y: 150,
              image: blockImage,
              block: true
            }), new Platform({
              x: 12337,
              y: 150,
              image: blockImage,
              block: true
            })];
            pads = [new Pad({
              x: 13200,
              y: 420,
              image: padImage
            })];
            potions = [new Potion({
              x: 2248,
              y: 170,
              image: potionImage
            })];
            coins = [new Coin({
              x: 1750,
              y: 225,
              image: coinImage
            }), new Coin({
              x: 3750,
              y: 225,
              image: coinImage
            }), new Coin({
              x: 6100,
              y: 160,
              image: coinImage
            }), new Coin({
              x: 8975,
              y: 200,
              image: coinImage
            }), new Coin({
              x: 9730,
              y: 315,
              image: coinImage
            }), new Coin({
              x: 12037,
              y: 240,
              image: coinImage
            })];
            buttons = [];
            genericObjects = [new GenericObject({
              x: -1,
              y: 0,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_background_png__WEBPACK_IMPORTED_MODULE_9__["default"])
            }), new GenericObject({
              x: -1,
              y: 0,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_hills_png__WEBPACK_IMPORTED_MODULE_8__["default"])
            })];
            scrollOffset = 0;
            platformsMap = ['plat', 'plat', 'plat', 'plat', 'plat', 'gap', 'plat', 'plat', 'gap', 'gap', 'plat', 'plat', 'plat', 'gap', 'gap', 'tPlat', 'gap', 'xtPlat', 'gap', 'xtPlat', 'gap', 'xtPlat', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'plat', 'plat', 'plat', 'plat', 'plat', 'plat'];
            platformDistance = 0;
            platformsMap.forEach(function (symbol) {
              switch (symbol) {
                case 'plat':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - platformImage.height,
                    image: platformImage
                  }));
                  platformDistance += platformImage.width;
                  break;

                case 'gap':
                  platformDistance += 300;
                  break;

                case 'tPlat':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - tPlatformImage.height,
                    image: tPlatformImage
                  }));
                  platformDistance += tPlatformImage.width;
                  break;

                case 'xtPlat':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - xtPlatformImage.height,
                    image: xtPlatformImage
                  }));
                  platformDistance += xtPlatformImage.width;
                  break;
              }
            });

          case 41:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _gameResetLevel.apply(this, arguments);
}

function gameResetLevel2() {
  return _gameResetLevel2.apply(this, arguments);
}

function _gameResetLevel2() {
  _gameResetLevel2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var platformsMap, platformDistance;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            currentLevel = 2;
            player = new Player();
            keys = {
              right: {
                pressed: false
              },
              left: {
                pressed: false
              }
            };
            scrollOffset = 0;
            game = {
              disableUserInput: false
            };
            _context2.next = 7;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[2].platform);

          case 7:
            platformImage = _context2.sent;
            _context2.next = 10;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[2].tPlatform);

          case 10:
            tPlatformImage = _context2.sent;
            _context2.next = 13;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[2].xtPlatform);

          case 13:
            xtPlatformImage = _context2.sent;
            _context2.next = 16;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_blockTri_png__WEBPACK_IMPORTED_MODULE_11__["default"]);

          case 16:
            blockTriImage = _context2.sent;
            _context2.next = 19;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_block_png__WEBPACK_IMPORTED_MODULE_10__["default"]);

          case 19:
            blockImage = _context2.sent;
            _context2.next = 22;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_pad_png__WEBPACK_IMPORTED_MODULE_12__["default"]);

          case 22:
            padImage = _context2.sent;
            _context2.next = 25;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_potion_png__WEBPACK_IMPORTED_MODULE_27__["default"]);

          case 25:
            potionImage = _context2.sent;
            _context2.next = 28;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_coin_png__WEBPACK_IMPORTED_MODULE_28__["default"]);

          case 28:
            coinImage = _context2.sent;
            platforms = [new Platform({
              x: 2075,
              y: 350,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 2228,
              y: 350,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 2600,
              y: 350,
              image: blockImage,
              block: true
            }), new Platform({
              x: 3450,
              y: 300,
              image: blockImage,
              block: true
            }), new Platform({
              x: 3700,
              y: 220,
              image: xtPlatformImage
            }), new Platform({
              x: 4400,
              y: 375,
              image: blockImage,
              block: true
            }), new Platform({
              x: 4800,
              y: 275,
              image: blockImage,
              block: true
            }), new Platform({
              x: 5200,
              y: 375,
              image: blockImage,
              block: true
            }), new Platform({
              x: 5600,
              y: 275,
              image: blockImage,
              block: true
            }), new Platform({
              x: 6200,
              y: 370,
              image: platformImage
            }), new Platform({
              x: 7660,
              y: 370,
              image: platformImage
            }), new Platform({
              x: 7660,
              y: 290,
              image: platformImage
            }), new Platform({
              x: 7660,
              y: 210,
              image: platformImage
            }), new Platform({
              x: 8650,
              y: 210,
              image: blockImage,
              block: true
            }), new Platform({
              x: 9050,
              y: 160,
              image: blockImage,
              block: true
            }), new Platform({
              x: 9450,
              y: 210,
              image: blockImage,
              block: true
            }), new Platform({
              x: 9850,
              y: 160,
              image: blockImage,
              block: true
            }), new Platform({
              x: 11285,
              y: 290,
              image: platformImage
            }), new Platform({
              x: 11000,
              y: 370,
              image: platformImage
            }), new Platform({
              x: 11575,
              y: 370,
              image: platformImage
            })];
            zombiez = [new Zombie({
              position: {
                x: 3800,
                y: 250
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 75,
                limitRight: -75,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 6200,
                y: 300
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 175,
                limitRight: -175,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 6600,
                y: 0
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 275,
                limitRight: -275,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 6900,
                y: 300
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 175,
                limitRight: -175,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 11700,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 285,
                limitRight: -285,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 11600,
                y: 250
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 285,
                limitRight: -285,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 11500,
                y: 300
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 285,
                limitRight: -285,
                traveled: 0
              }
            })];
            particles = [];
            pads = [new Pad({
              x: 13200,
              y: 420,
              image: padImage
            })];
            potions = [new Potion({
              x: 3800,
              y: 201,
              image: potionImage
            })];
            coins = [new Coin({
              x: 2600,
              y: 275,
              image: coinImage
            }), new Coin({
              x: 4000,
              y: 340,
              image: coinImage
            }), new Coin({
              x: 6120,
              y: 160,
              image: coinImage
            }), new Coin({
              x: 7925,
              y: 425,
              image: coinImage
            }), new Coin({
              x: 9850,
              y: 90,
              image: coinImage
            }), new Coin({
              x: 11550,
              y: 250,
              image: coinImage
            })];
            buttons = [];
            genericObjects = [new GenericObject({
              x: -1,
              y: 0,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[2].background)
            }), new GenericObject({
              x: -615,
              y: 0,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[2].hills)
            })];
            platformsMap = ['plat', 'plat', 'plat', 'gap', 'gap', 'gap', 'gap', 'plat', 'plat', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'plat', 'plat', 'gap', 'gap', 'plat', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'plat', 'plat', 'plat', 'plat', 'plat', 'plat', 'plat'];
            platformDistance = 0;
            platformsMap.forEach(function (symbol) {
              switch (symbol) {
                case 'plat':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - platformImage.height,
                    image: platformImage
                  }));
                  platformDistance += platformImage.width;
                  break;

                case 'gap':
                  platformDistance += 300;
                  break;

                case 'tPlat':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - tPlatformImage.height,
                    image: tPlatformImage
                  }));
                  platformDistance += tPlatformImage.width;
                  break;

                case 'xtPlat':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - xtPlatformImage.height,
                    image: xtPlatformImage
                  }));
                  platformDistance += xtPlatformImage.width;
                  break;
              }
            });

          case 40:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _gameResetLevel2.apply(this, arguments);
}

function gameResetLevel3() {
  return _gameResetLevel3.apply(this, arguments);
}

function _gameResetLevel3() {
  _gameResetLevel3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var platformsMap, platformDistance;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            currentLevel = 3;
            player = new Player();
            keys = {
              right: {
                pressed: false
              },
              left: {
                pressed: false
              }
            };
            scrollOffset = 0;
            game = {
              disableUserInput: false
            };
            _context3.next = 7;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[3].platform);

          case 7:
            platformImage = _context3.sent;
            _context3.next = 10;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[3].tPlatform);

          case 10:
            tPlatformImage = _context3.sent;
            _context3.next = 13;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[3].xtPlatform);

          case 13:
            xtPlatformImage = _context3.sent;
            _context3.next = 16;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_blockTri_png__WEBPACK_IMPORTED_MODULE_11__["default"]);

          case 16:
            blockTriImage = _context3.sent;
            _context3.next = 19;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_block_png__WEBPACK_IMPORTED_MODULE_10__["default"]);

          case 19:
            blockImage = _context3.sent;
            _context3.next = 22;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_pad_png__WEBPACK_IMPORTED_MODULE_12__["default"]);

          case 22:
            padImage = _context3.sent;
            _context3.next = 25;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_potion_png__WEBPACK_IMPORTED_MODULE_27__["default"]);

          case 25:
            potionImage = _context3.sent;
            _context3.next = 28;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_coin_png__WEBPACK_IMPORTED_MODULE_28__["default"]);

          case 28:
            coinImage = _context3.sent;
            platforms = [new Platform({
              x: 1500,
              y: 320,
              image: tPlatformImage
            }), new Platform({
              x: 2050,
              y: 281,
              image: xtPlatformImage
            }), new Platform({
              x: 2634,
              y: 368,
              image: platformImage
            }), new Platform({
              x: 3213,
              y: 368,
              image: platformImage
            }), new Platform({
              x: 2634,
              y: 285,
              image: platformImage
            }), new Platform({
              x: 5150,
              y: 400,
              image: blockImage,
              block: true
            }), new Platform({
              x: 5350,
              y: 300,
              image: blockImage,
              block: true
            }), new Platform({
              x: 5550,
              y: 200,
              image: blockImage,
              block: true
            }), new Platform({
              x: 5850,
              y: 281,
              image: xtPlatformImage
            }), new Platform({
              x: 6390,
              y: 200,
              image: blockImage,
              block: true
            }), new Platform({
              x: 6750,
              y: 281,
              image: xtPlatformImage
            }), new Platform({
              x: 7290,
              y: 200,
              image: blockImage,
              block: true
            }), new Platform({
              x: 7650,
              y: 281,
              image: xtPlatformImage
            }), new Platform({
              x: 8300,
              y: 200,
              image: blockImage,
              block: true
            }), new Platform({
              x: 8700,
              y: 400,
              image: blockImage,
              block: true
            }), new Platform({
              x: 9100,
              y: 200,
              image: blockImage,
              block: true
            }), new Platform({
              x: 9500,
              y: 400,
              image: blockImage,
              block: true
            }), new Platform({
              x: 9900,
              y: 200,
              image: blockImage,
              block: true
            }), new Platform({
              x: 10300,
              y: 400,
              image: blockImage,
              block: true
            }), new Platform({
              x: 11000,
              y: 288,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 11151,
              y: 288,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 11302,
              y: 288,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 11453,
              y: 288,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 11604,
              y: 288,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 11755,
              y: 288,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 11906,
              y: 288,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 12057,
              y: 288,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 12208,
              y: 288,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 12359,
              y: 288,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 12510,
              y: 288,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 12661,
              y: 288,
              image: blockTriImage,
              block: true
            })];
            zombiez = [new Zombie({
              position: {
                x: 4300,
                y: 250
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 275,
                limitRight: -275,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 4550,
                y: 250
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 275,
                limitRight: -275,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 4800,
                y: 250
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 275,
                limitRight: -275,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 5950,
                y: 150
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 100,
                limitRight: -100,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 6850,
                y: 150
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 100,
                limitRight: -100,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 7750,
                y: 150
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 100,
                limitRight: -100,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 11400,
                y: 325
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 300,
                limitRight: -300,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 11550,
                y: 325
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 325,
                limitRight: -325,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 11700,
                y: 325
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 200,
                limitRight: -200,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 11850,
                y: 325
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 370,
                limitRight: -370,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 12000,
                y: 325
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 150,
                limitRight: -150,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 12300,
                y: 325
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 340,
                limitRight: -340,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 12450,
                y: 325
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 125,
                limitRight: -125,
                traveled: 0
              }
            }), new Zombie({
              position: {
                x: 12600,
                y: 325
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limitLeft: 300,
                limitRight: -300,
                traveled: 0
              }
            })];
            particles = [];
            pads = [new Pad({
              x: 13200,
              y: 420,
              image: padImage
            })];
            potions = [new Potion({
              x: 2900,
              y: 432,
              image: potionImage
            })];
            coins = [new Coin({
              x: 2140,
              y: 225,
              image: coinImage
            }), new Coin({
              x: 4350,
              y: 350,
              image: coinImage
            }), new Coin({
              x: 5925,
              y: 210,
              image: coinImage
            }), new Coin({
              x: 9100,
              y: 125,
              image: coinImage
            }), new Coin({
              x: 9900,
              y: 125,
              image: coinImage
            }), new Coin({
              x: 11750,
              y: 350,
              image: coinImage
            })];
            buttons = [];
            genericObjects = [new GenericObject({
              x: -1,
              y: 0,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[3].background)
            }), new GenericObject({
              x: -615,
              y: 0,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[3].hills)
            })];
            platformsMap = ['plat', 'plat', 'plat', 'gap', 'gap', 'gap', 'plat', 'plat', 'plat', 'plat', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'plat', 'plat', 'plat', 'plat', 'plat', 'plat', 'plat'];
            platformDistance = 0;
            platformsMap.forEach(function (symbol) {
              switch (symbol) {
                case 'plat':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - platformImage.height,
                    image: platformImage
                  }));
                  platformDistance += platformImage.width - 2;
                  break;

                case 'gap':
                  platformDistance += 300;
                  break;

                case 'tPlat':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - tPlatformImage.height,
                    image: tPlatformImage
                  }));
                  platformDistance += tPlatformImage.width;
                  break;

                case 'xtPlat':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - xtPlatformImage.height,
                    image: xtPlatformImage
                  }));
                  platformDistance += xtPlatformImage.width;
                  break;
              }
            });

          case 40:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _gameResetLevel3.apply(this, arguments);
}

function goHome() {
  return _goHome.apply(this, arguments);
}

function _goHome() {
  _goHome = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var platformsMap, platformDistance;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            currentLevel = 4;
            player = new Player();
            keys = {
              right: {
                pressed: false
              },
              left: {
                pressed: false
              }
            };
            scrollOffset = 0;
            game = {
              disableUserInput: false
            };
            _context4.next = 7;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_platform_png__WEBPACK_IMPORTED_MODULE_5__["default"]);

          case 7:
            platformImage = _context4.sent;
            zombiez = [];
            particles = [];
            platforms = [new Platform({
              x: 385,
              y: 300,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[4].help),
              help: true,
              block: true
            }), new Platform({
              x: 485,
              y: 300,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[4].shop),
              shop: true,
              block: true
            }), new Platform({
              x: 585,
              y: 300,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[4].play),
              play: true,
              block: true
            })];
            potions = [];
            coins = [];
            pads = [];
            buttons = [];
            genericObjects = [new GenericObject({
              x: 0,
              y: 0,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[4].background)
            })];
            platformsMap = ['plat', 'plat', 'plat'];
            platformDistance = 0;
            platformsMap.forEach(function (symbol) {
              switch (symbol) {
                case 'plat':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - platformImage.height + 35,
                    image: platformImage
                  }));
                  platformDistance += platformImage.width;
                  break;
              }
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _goHome.apply(this, arguments);
}

function goHelp() {
  return _goHelp.apply(this, arguments);
}

function _goHelp() {
  _goHelp = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var platformsMap, platformDistance;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            currentLevel = 5;
            player = new Player();
            keys = {
              right: {
                pressed: false
              },
              left: {
                pressed: false
              }
            };
            scrollOffset = 0;
            game = {
              disableUserInput: false
            };
            _context5.next = 7;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[3].platform);

          case 7:
            platformImage = _context5.sent;
            zombiez = [];
            particles = [];
            platforms = [];
            potions = [];
            coins = [];
            pads = [];
            buttons = [new Button({
              x: 40,
              y: 228,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[5].b1),
              b1: true
            }), new Button({
              x: 40,
              y: 285,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[5].b2),
              b2: true
            }), new Button({
              x: 40,
              y: 342,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[5].b3),
              b3: true
            }), new Button({
              x: 40,
              y: 399,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[5].b4),
              b4: true
            }), new Button({
              x: 360,
              y: 212,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[5].b5),
              b5: true
            }), new Button({
              x: 730,
              y: 228,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[5].b6),
              b6: true
            }), new Button({
              x: 730,
              y: 285,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[5].b7),
              b7: true
            }), new Button({
              x: 730,
              y: 342,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[5].b8),
              b8: true
            })];
            genericObjects = [new GenericObject({
              x: 0,
              y: 0,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[5].background)
            })];
            platformsMap = ['plat', 'plat', 'plat'];
            platformDistance = 0;
            platformsMap.forEach(function (symbol) {
              switch (symbol) {
                case 'plat':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - platformImage.height + 35,
                    image: platformImage
                  }));
                  platformDistance += platformImage.width;
                  break;
              }
            });

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _goHelp.apply(this, arguments);
}

function goShop() {
  return _goShop.apply(this, arguments);
}

function _goShop() {
  _goShop = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var platformsMap, platformDistance;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            currentLevel = 6;
            player = new Player();
            keys = {
              right: {
                pressed: false
              },
              left: {
                pressed: false
              }
            };
            scrollOffset = 0;
            game = {
              disableUserInput: false
            };
            _context6.next = 7;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[2].platform);

          case 7:
            platformImage = _context6.sent;
            zombiez = [];
            particles = [];
            platforms = [];
            potions = [];
            coins = [];
            pads = [];
            buttons = [new Button({
              x: 40,
              y: 228,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[6].b9),
              b9: true
            }), new Button({
              x: 40,
              y: 285,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[6].b10),
              b10: true
            })];
            genericObjects = [new GenericObject({
              x: 0,
              y: 0,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_js__WEBPACK_IMPORTED_MODULE_30__["images"].levels[6].background)
            })];
            platformsMap = ['plat', 'plat', 'plat'];
            platformDistance = 0;
            platformsMap.forEach(function (symbol) {
              switch (symbol) {
                case 'plat':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - platformImage.height + 35,
                    image: platformImage
                  }));
                  platformDistance += platformImage.width;
                  break;
              }
            });

          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _goShop.apply(this, arguments);
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  var homeElem = document.querySelector('.home');
  var helpElem = document.querySelector('.help');
  var shopElem = document.querySelector('.shop');
  homeElem.onclick = goHome;
  helpElem.onclick = goHelp;
  shopElem.onclick = goShop;
  genericObjects.forEach(function (genericObject) {
    genericObject.update();
    genericObject.velocity.x = 0;
  });
  platforms.forEach(function (platform) {
    platform.update();
    platform.velocity.x = 0;
  });
  buttons.forEach(function (button) {
    button.update();
    button.velocity.x = 0;

    if (currentLevel == 5 && button.b1) {
      addEventListener("click", function () {
        copyToClipboard('Polygon Testnet');
      });
    }

    if (currentLevel == 5 && button.b2) {
      addEventListener("click", function () {
        copyToClipboard('https://matic-mumbai.chainstacklabs.com');
      });
    }

    if (currentLevel == 5 && button.b3) {
      addEventListener("click", function () {
        copyToClipboard('8001');
      });
    }

    if (currentLevel == 5 && button.b4) {
      addEventListener("click", function () {
        copyToClipboard('MATIC');
      });
    }

    if (currentLevel == 5 && button.b5) {
      addEventListener("click", function () {
        copyToClipboard('https://faucet.polygon.technology');
      });
    }

    if (currentLevel == 5 && button.b6) {
      addEventListener("click", function () {
        copyToClipboard('0x04269fd82c29D81602372fBf9a18440e74AD7bbd');
      });
    }

    if (currentLevel == 5 && button.b7) {
      addEventListener("click", function () {
        copyToClipboard('Coin');
      });
    }

    if (currentLevel == 5 && button.b8) {
      addEventListener("click", function () {
        copyToClipboard('18');
        copyToClipboard = none;
      });
    }
  });
  pads.forEach(function (pad) {
    if (currentLevel == 1 || currentLevel == 2 || currentLevel == 3) {
      pad.update();
      pad.velocity.x = 0;
    }

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPad"])({
      object: player,
      pad: pad
    })) {
      game.disableUserInput = true;
      _audio_js__WEBPACK_IMPORTED_MODULE_29__["audio"].audioGameOver.play();
      player.velocity.y = 0;
      player.velocity.x = 0;
      player.opacity = 0;
      gravity = 0.5;
      selectLevel(currentLevel + 1);
    }
  }); //Toad potion powerup

  potions.forEach(function (potion, i) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["objectsTouch"])({
      object1: player,
      object2: potion
    })) {
      player.powerUps.potion = true;
      setTimeout(function () {
        potions.splice(i, 1);
        _audio_js__WEBPACK_IMPORTED_MODULE_29__["audio"].audioLaser.play();
      }, 0);
    } else potion.update();
  });
  window.totalCoinsCollected = coinsCollected; //collect coins

  coins.forEach(function (coin, i) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["objectsTouch"])({
      object1: player,
      object2: coin
    })) {
      coinsCollected++;
      coinsCollectedElem.textContent = "".concat(coinsCollected);
      setTimeout(function () {
        coins.splice(i, 1);
        _audio_js__WEBPACK_IMPORTED_MODULE_29__["audio"].coinCollect.play();
      }, 0);
    } else coin.update();
  });
  zombiez.forEach(function (zombie, index) {
    zombie.update(); //remove zombie on laser beam

    particles.filter(function (particle) {
      return particle.laser;
    }).forEach(function (particle, particleIndex) {
      if (particle.position.x + particle.radius >= zombie.position.x && particle.position.y + particle.radius >= zombie.position.y && particle.position.x - particle.radius <= zombie.position.x + zombie.width && particle.position.y - particle.radius <= zombie.position.y + zombie.height) {
        for (var i = 0; i < 50; i++) {
          particles.push(new Particle({
            position: {
              x: zombie.position.x + zombie.width / 2,
              y: zombie.position.y + zombie.height / 2
            },
            velocity: {
              x: (Math.random() - 0.5) * 5,
              y: (Math.random() - 0.5) * 10
            },
            radius: Math.random() * 2.5
          }));
        }

        setTimeout(function () {
          _audio_js__WEBPACK_IMPORTED_MODULE_29__["audio"].audioZombieDeath.play();
          zombiez.splice(index, 1);
          particles.splice(particleIndex, 1);
        }, 0);
      }
    }); //zombie squish 

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["collisionTop"])({
      object1: player,
      object2: zombie
    })) {
      //squished zombie particles
      for (var i = 0; i < 50; i++) {
        particles.push(new Particle({
          position: {
            x: zombie.position.x + zombie.width / 2,
            y: zombie.position.y + zombie.height / 2
          },
          velocity: {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 10
          },
          radius: Math.random() * 2.5
        }));
      }

      _audio_js__WEBPACK_IMPORTED_MODULE_29__["audio"].audioZombieDeath.play();
      player.velocity.y -= "25";
      setTimeout(function () {
        zombiez.splice(index, 1);
      }, 0);
    } else if (player.position.x + player.width >= zombie.position.x && player.position.y + player.height >= zombie.position.y && player.position.x <= zombie.position.x + zombie.width) {
      //player hits zombie
      if (player.powerUps.potion) {
        player.invincible = true;
        player.powerUps.potion = false;
        _audio_js__WEBPACK_IMPORTED_MODULE_29__["audio"].audioLosePowerUp.play();
        setTimeout(function () {
          player.invincible = false;
        }, 1000);
      } else if (!player.invincible) {
        _audio_js__WEBPACK_IMPORTED_MODULE_29__["audio"].audioGameOver.play();
        selectLevel(currentLevel);
      }
    }
  });
  particles.forEach(function (particle, i) {
    particle.update();
    if (particle.laser && (particle.position.x - particle.radius >= canvas.width || particle.position.x + particle.radius <= 0)) setTimeout(function () {
      particles.splice(i, 1);
    }, 0);
  });
  player.update();
  if (game.disableUserInput) return; //scrolling code start

  var hitSide = false; //left and right movement 

  if ((currentLevel == 1 || currentLevel == 2 || currentLevel == 3) && keys.right.pressed && player.position.x < 400 || (currentLevel == 4 || currentLevel == 5 || currentLevel == 6) && keys.right.pressed && player.position.x < 935) {
    player.velocity.x = player.speed;
  } else if ((currentLevel == 1 || currentLevel == 2 || currentLevel == 3) && keys.left.pressed && player.position.x > 100 || (currentLevel == 4 || currentLevel == 5 || currentLevel == 6) && keys.left.pressed && player.position.x > 0 || (currentLevel == 1 || currentLevel == 2 || currentLevel == 3) && keys.left.pressed && scrollOffset === 0 && player.position.x > 0 || (currentLevel == 4 || currentLevel == 5 || currentLevel == 6) && keys.left.pressed && scrollOffset === 0 && player.position.x > 0 || (currentLevel == 1 || currentLevel == 2 || currentLevel == 3) && keys.right.pressed && scrollOffset === 13250 && player.position.x > 13250 || (currentLevel == 4 || currentLevel == 5 || currentLevel == 6) && keys.right.pressed && scrollOffset === 0 && player.position.x > 934) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0; //scrolling code

    if (keys.right.pressed && scrollOffset < 13250) {
      for (var i = 0; i < platforms.length; i++) {
        var _platform = platforms[i];
        _platform.velocity.x = -player.speed;

        if (_platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
          object: player,
          platform: _platform
        })) {
          platforms.forEach(function (platform) {
            platform.velocity.x = 0;
          });
          hitSide = true;
          break;
        }
      }

      if (!hitSide) {
        scrollOffset += player.speed;
        genericObjects.forEach(function (genericObject) {
          genericObject.velocity.x = -player.speed * 0.66;
        });
        zombiez.forEach(function (zombie) {
          zombie.position.x -= player.speed;
        });
        potions.forEach(function (potion) {
          potion.position.x -= player.speed;
        });
        coins.forEach(function (coin) {
          coin.position.x -= player.speed;
        });
        particles.forEach(function (particle) {
          particle.position.x -= player.speed;
        });
        pads.forEach(function (pad) {
          pad.position.x -= player.speed;
        });
        buttons.forEach(function (button) {
          button.position.x -= player.speed;
        });
      }
    } else if (keys.left.pressed && scrollOffset > 0) {
      for (var _i = 0; _i < platforms.length; _i++) {
        var _platform2 = platforms[_i];
        _platform2.velocity.x = player.speed;

        if (_platform2.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
          object: player,
          platform: _platform2
        })) {
          platforms.forEach(function (platform) {
            platform.velocity.x = 0;
          });
          hitSide = true;
          break;
        }
      }

      if (!hitSide) {
        scrollOffset -= player.speed;
        genericObjects.forEach(function (genericObject) {
          genericObject.velocity.x = player.speed * 0.66;
        });
        zombiez.forEach(function (zombie) {
          zombie.position.x += player.speed;
        });
        potions.forEach(function (potion) {
          potion.position.x += player.speed;
        });
        coins.forEach(function (coin) {
          coin.position.x += player.speed;
        });
        particles.forEach(function (particle) {
          particle.position.x += player.speed;
        });
        pads.forEach(function (pad) {
          pad.position.x += player.speed;
        });
        buttons.forEach(function (button) {
          button.position.x += player.speed;
        });
      }
    }
  } // platform collision detection


  platforms.forEach(function (platform) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = 0;
    }

    if (platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitTopOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = 0;
    }

    if ((currentLevel == 1 || currentLevel == 2 || currentLevel == 3) && platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitBottomOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = -player.velocity.y;
    }

    if (platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.x = 0;
    }

    if (currentLevel == 4 && platform.play && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitBottomOfPlatform"])({
      object: player,
      platform: platform
    })) {
      _audio_js__WEBPACK_IMPORTED_MODULE_29__["audio"].audioGameOver.play();
      player.velocity.y = -player.velocity.y;
      selectLevel(currentLevel = 1);
    }

    if (currentLevel == 4 && platform.shop && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitBottomOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = -player.velocity.y;
      selectLevel(currentLevel = 6);
    }

    if (currentLevel == 4 && platform.help && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitBottomOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = -player.velocity.y;
      selectLevel(currentLevel = 5);
    } //particle bounce


    particles.forEach(function (particle, index) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatformCircle"])({
        object: particle,
        platform: platform
      })) {
        particle.velocity.y = -particle.velocity.y * 0.9;
        if (particle.radius - 0.4 < 0) particles.splice(index, 1);else particle.radius -= 0.4;
      }

      if (particle.ttl < 0) particles.splice(index, 1);
    });
    zombiez.forEach(function (zombie) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
        object: zombie,
        platform: platform
      })) zombie.velocity.y = 0;
    });
    potions.forEach(function (potion) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
        object: potion,
        platform: platform
      })) potion.velocity.y = 0;
    });
  }); //win con

  if (platformImage && scrollOffset + 400 + player.width > 13215) {} //lose con


  if (player.position.y > canvas.height) {
    _audio_js__WEBPACK_IMPORTED_MODULE_29__["audio"].audioGameOver.play();
    selectLevel(currentLevel);
  } //Sprite Switching


  if (player.velocity.y !== 0) return;

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.currentSprite = player.sprites.run.right;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
  } //cyclops(potion) sprites


  if (!player.powerUps.potion) return;

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.potion.right) {
    player.currentSprite = player.sprites.run.potion.right;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.potion.left) {
    player.currentSprite = player.sprites.run.potion.left;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.potion.left) {
    player.currentSprite = player.sprites.stand.potion.left;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.potion.right) {
    player.currentSprite = player.sprites.stand.potion.right;
  }
}

selectLevel(currentLevel); //gameResetLevel0()
//gameResetLevel1()
//gameResetLevel2()
//gameResetLevel3()

animate(); // down key listener (asdw)

addEventListener('keydown', function (_ref9) {
  var keyCode = _ref9.keyCode;
  if (game.disableUserInput) return;

  switch (keyCode) {
    case 13:
      //(selectLevel(currentLevel - 3))
      lastKey = 'enter';
      break;

    case 65:
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case 83:
      break;

    case 68:
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 87:
      player.velocity.y -= 15;
      _audio_js__WEBPACK_IMPORTED_MODULE_29__["audio"].audioJump.play();
      if (lastKey === 'right') player.currentSprite = player.sprites.jump.right;else player.currentSprite = player.sprites.jump.left;
      if (!player.powerUps.potion) break;
      if (lastKey === 'right') player.currentSprite = player.sprites.jump.potion.right;else player.currentSprite = player.sprites.jump.potion.left;
      break;

    case 32:
      if (!player.powerUps.potion) return;
      _audio_js__WEBPACK_IMPORTED_MODULE_29__["audio"].audioLaser.play();
      var velocity = 60;
      if (lastKey === 'left') velocity = -60;
      particles.push(new Particle({
        position: {
          x: player.position.x + player.width / 2,
          y: player.position.y + player.height / 2 - 43
        },
        velocity: {
          x: velocity,
          y: 0
        },
        radius: 3,
        color: 'red',
        laser: true
      }));
      particles.push(new Particle({
        position: {
          x: player.position.x + player.width / 2,
          y: player.position.y + player.height / 2 - 35
        },
        velocity: {
          x: velocity,
          y: 0
        },
        radius: 3,
        color: 'red',
        laser: true
      }));
  }
}); // up key listener (asdw)

addEventListener('keyup', function (_ref10) {
  var keyCode = _ref10.keyCode;
  if (game.disableUserInput) return;

  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      break;

    case 83:
      break;

    case 68:
      keys.right.pressed = false;
      break;

    case 87:
      break;
  }
});

/***/ }),

/***/ "./src/js/images.js":
/*!**************************!*\
  !*** ./src/js/images.js ***!
  \**************************/
/*! exports provided: images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "images", function() { return images; });
/* harmony import */ var _img_homePage_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/homePage/background.png */ "./src/img/homePage/background.png");
/* harmony import */ var _img_homePage_help_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/homePage/help.png */ "./src/img/homePage/help.png");
/* harmony import */ var _img_homePage_shop_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/homePage/shop.png */ "./src/img/homePage/shop.png");
/* harmony import */ var _img_homePage_play_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/homePage/play.png */ "./src/img/homePage/play.png");
/* harmony import */ var _img_helpPage_helpPage_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/helpPage/helpPage.png */ "./src/img/helpPage/helpPage.png");
/* harmony import */ var _img_helpPage_b1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/helpPage/b1.png */ "./src/img/helpPage/b1.png");
/* harmony import */ var _img_helpPage_b2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/helpPage/b2.png */ "./src/img/helpPage/b2.png");
/* harmony import */ var _img_helpPage_b3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/helpPage/b3.png */ "./src/img/helpPage/b3.png");
/* harmony import */ var _img_helpPage_b4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/helpPage/b4.png */ "./src/img/helpPage/b4.png");
/* harmony import */ var _img_helpPage_b5_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/helpPage/b5.png */ "./src/img/helpPage/b5.png");
/* harmony import */ var _img_helpPage_b6_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/helpPage/b6.png */ "./src/img/helpPage/b6.png");
/* harmony import */ var _img_helpPage_b7_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/helpPage/b7.png */ "./src/img/helpPage/b7.png");
/* harmony import */ var _img_helpPage_b8_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/helpPage/b8.png */ "./src/img/helpPage/b8.png");
/* harmony import */ var _img_shopPage_shopPage_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/shopPage/shopPage.png */ "./src/img/shopPage/shopPage.png");
/* harmony import */ var _img_shopPage_b9_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/shopPage/b9.png */ "./src/img/shopPage/b9.png");
/* harmony import */ var _img_shopPage_b10_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/shopPage/b10.png */ "./src/img/shopPage/b10.png");
/* harmony import */ var _img_level2_background_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/level2/background.png */ "./src/img/level2/background.png");
/* harmony import */ var _img_level2_hills_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/level2/hills.png */ "./src/img/level2/hills.png");
/* harmony import */ var _img_level2_platform_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/level2/platform.png */ "./src/img/level2/platform.png");
/* harmony import */ var _img_level2_tPlatform_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/level2/tPlatform.png */ "./src/img/level2/tPlatform.png");
/* harmony import */ var _img_level2_xtPlatform_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/level2/xtPlatform.png */ "./src/img/level2/xtPlatform.png");
/* harmony import */ var _img_level3_background_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/level3/background.png */ "./src/img/level3/background.png");
/* harmony import */ var _img_level3_hills_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/level3/hills.png */ "./src/img/level3/hills.png");
/* harmony import */ var _img_level3_platform_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../img/level3/platform.png */ "./src/img/level3/platform.png");
/* harmony import */ var _img_level3_tPlatform_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../img/level3/tPlatform.png */ "./src/img/level3/tPlatform.png");
/* harmony import */ var _img_level3_xtPlatform_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../img/level3/xtPlatform.png */ "./src/img/level3/xtPlatform.png");


























var images = {
  levels: {
    1: {
      background: ''
    },
    2: {
      background: _img_level2_background_png__WEBPACK_IMPORTED_MODULE_16__["default"],
      hills: _img_level2_hills_png__WEBPACK_IMPORTED_MODULE_17__["default"],
      platform: _img_level2_platform_png__WEBPACK_IMPORTED_MODULE_18__["default"],
      tPlatform: _img_level2_tPlatform_png__WEBPACK_IMPORTED_MODULE_19__["default"],
      xtPlatform: _img_level2_xtPlatform_png__WEBPACK_IMPORTED_MODULE_20__["default"]
    },
    3: {
      background: _img_level3_background_png__WEBPACK_IMPORTED_MODULE_21__["default"],
      hills: _img_level3_hills_png__WEBPACK_IMPORTED_MODULE_22__["default"],
      platform: _img_level3_platform_png__WEBPACK_IMPORTED_MODULE_23__["default"],
      tPlatform: _img_level3_tPlatform_png__WEBPACK_IMPORTED_MODULE_24__["default"],
      xtPlatform: _img_level3_xtPlatform_png__WEBPACK_IMPORTED_MODULE_25__["default"]
    },
    4: {
      background: _img_homePage_background_png__WEBPACK_IMPORTED_MODULE_0__["default"],
      help: _img_homePage_help_png__WEBPACK_IMPORTED_MODULE_1__["default"],
      shop: _img_homePage_shop_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      play: _img_homePage_play_png__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    5: {
      background: _img_helpPage_helpPage_png__WEBPACK_IMPORTED_MODULE_4__["default"],
      b1: _img_helpPage_b1_png__WEBPACK_IMPORTED_MODULE_5__["default"],
      b2: _img_helpPage_b2_png__WEBPACK_IMPORTED_MODULE_6__["default"],
      b3: _img_helpPage_b3_png__WEBPACK_IMPORTED_MODULE_7__["default"],
      b4: _img_helpPage_b4_png__WEBPACK_IMPORTED_MODULE_8__["default"],
      b5: _img_helpPage_b5_png__WEBPACK_IMPORTED_MODULE_9__["default"],
      b6: _img_helpPage_b6_png__WEBPACK_IMPORTED_MODULE_10__["default"],
      b7: _img_helpPage_b7_png__WEBPACK_IMPORTED_MODULE_11__["default"],
      b8: _img_helpPage_b8_png__WEBPACK_IMPORTED_MODULE_12__["default"]
    },
    6: {
      background: _img_shopPage_shopPage_png__WEBPACK_IMPORTED_MODULE_13__["default"],
      b9: _img_shopPage_b9_png__WEBPACK_IMPORTED_MODULE_14__["default"],
      b10: _img_shopPage_b10_png__WEBPACK_IMPORTED_MODULE_15__["default"]
    }
  }
};
images.background;

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: createImage, createImageAsync, isOnTopOfPlatform, isOnTopOfPad, collisionTop, isOnTopOfPlatformCircle, hitTopOfPlatform, hitBottomOfPlatform, hitSideOfPlatform, objectsTouch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImage", function() { return createImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImageAsync", function() { return createImageAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnTopOfPlatform", function() { return isOnTopOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnTopOfPad", function() { return isOnTopOfPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collisionTop", function() { return collisionTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnTopOfPlatformCircle", function() { return isOnTopOfPlatformCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitTopOfPlatform", function() { return hitTopOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitBottomOfPlatform", function() { return hitBottomOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitSideOfPlatform", function() { return hitSideOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectsTouch", function() { return objectsTouch; });
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
} //create image function


function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
} //create player after platforms loaded function

function createImageAsync(imageSrc) {
  return new Promise(function (resolve) {
    var image = new Image();

    image.onload = function () {
      resolve(image);
    };

    image.src = imageSrc;
  });
}
function isOnTopOfPlatform(_ref) {
  var object = _ref.object,
      platform = _ref.platform;
  return object.position.y + object.height <= platform.position.y + 41 && object.position.y + object.height + object.velocity.y >= platform.position.y + 41 && object.position.x + object.width >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}
function isOnTopOfPad(_ref2) {
  var object = _ref2.object,
      pad = _ref2.pad;
  return object.position.y + object.height <= pad.position.y + 15 && object.position.y + object.height + object.velocity.y >= pad.position.y + 15 && object.position.x + object.width >= pad.position.x && object.position.x <= pad.position.x + pad.width;
}
function collisionTop(_ref3) {
  var object1 = _ref3.object1,
      object2 = _ref3.object2;
  return object1.position.y + object1.height <= object2.position.y && object1.position.y + object1.height + object1.velocity.y >= object2.position.y && object1.position.x + object1.width >= object2.position.x && object1.position.x <= object2.position.x + object2.width;
}
function isOnTopOfPlatformCircle(_ref4) {
  var object = _ref4.object,
      platform = _ref4.platform;
  return object.position.y + object.radius <= platform.position.y + 41 && object.position.y + object.radius + object.velocity.y >= platform.position.y + 41 && object.position.x + object.radius >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}
function hitTopOfPlatform(_ref5) {
  var object = _ref5.object,
      platform = _ref5.platform;
  return object.position.y + object.height <= platform.position.y && object.position.y + object.height + object.velocity.y >= platform.position.y && object.position.x + object.width >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}
function hitBottomOfPlatform(_ref6) {
  var object = _ref6.object,
      platform = _ref6.platform;
  return object.position.y <= platform.position.y + platform.height && object.position.y - object.velocity.y >= platform.position.y + platform.height && object.position.x + object.width >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}
function hitSideOfPlatform(_ref7) {
  var object = _ref7.object,
      platform = _ref7.platform;
  return object.position.x + object.width + object.velocity.x - platform.velocity.x >= platform.position.x && object.position.x + object.velocity.x <= platform.position.x + platform.width && object.position.y <= platform.position.y + platform.height && object.position.y + object.height >= platform.position.y;
}
function objectsTouch(_ref8) {
  var object1 = _ref8.object1,
      object2 = _ref8.object2;
  return object1.position.x + object1.width >= object2.position.x && object1.position.x <= object2.position.x + object2.width && object1.position.y + object1.height >= object2.position.y && object1.position.y <= object2.position.y + object2.height;
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map