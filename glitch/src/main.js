(function(){
  // http://x-tags.org/docs

  xtag.register('x-glitch', {
    content: '<img /><img /><img />',
    lifecycle: {
      created: function() {
        this.xtag.images = this.querySelectorAll('img');

        this.xtag.listeners = {
          update:           this.update.bind(this),
          visibilityChange: this.visibilityChange.bind(this),
        };

        this.xtag.interval = null;

        this.render();
      },

      inserted: function() {
        this.start();
        this.bind();
      },

      removed: function() {
        this.unbind();
        this.stop();
      }
    },
    accessors: {
      src: {
        attribute: {},
        set: function(value){
          this.setSrc(value);
        }
      }
    },
    methods: {
      render: function() {
        for (var i=1; i<3; i++) {
          const el = this.xtag.images[i];

          el.style.position = 'absolute';
          el.style.top = 0;
          el.style.left = (i === 1 ? -2 : 2) + 'px';
        }
      },

      start: function() {
        if (this.xtag.interval) return;

        this.xtag.interval = this.requestInterval(this.xtag.listeners.update, 120);
      },

      stop: function() {
        if (!this.xtag.interval) return;

        this.clearRequestInterval(this.xtag.interval);
        this.xtag.interval = null;
      },

      update: function() {
        const width = this.offsetWidth;
        const height = this.offsetHeight;

        for (var i=1; i<3; i++) {
          this.xtag.images[i].style.clip = this.getRect(i, width, height, -1);
        }
      },

      visibilityChange: function() {
        if (document.visibilityState === 'hidden') {
          this.stop();
        } else {
          this.start();
        }
      },

      bind: function() {
        document.addEventListener('visibilitychange', this.xtag.listeners.visibilityChange);
      },

      unbind: function() {
        document.removeEventListener('visibilitychange', this.xtag.listeners.visibilityChange);
      },

      requestInterval: function(fn, delay) {
      	if (!window.requestAnimationFrame) {
      		return window.setInterval(fn, delay);
        }

      	var start = new Date().getTime();
        const handle = {};

      	function loop() {
      		const current = new Date().getTime();

      		if (current - start >= delay) {
      			fn.call();
      			start = new Date().getTime();
          }

      		handle.value = window.requestAnimationFrame(loop);
      	};

      	handle.value = window.requestAnimationFrame(loop);

        return handle;
      },

      clearRequestInterval: function(handle) {
        if (!window.cancelAnimationFrame) {
          window.clearInterval(handle);
          return;
        }
        window.cancelAnimationFrame(handle.value)
      },

      setSrc: function(src) {
        if (!src) return;

        for (var i=0; i<3; i++) {
          this.xtag.images[i].setAttribute('src', src);
        }
      },

      getRand: function(value) {
        return Math.round(Math.random() * value);
      },

      getRect: function(num, width, height, size) {
        const height1 = this.getRand(height);
        const height2 = this.getRand(height);
        const rect = height1 + 'px,' + width + 'px,' + height2 + 'px,0';
        return 'rect(' + rect + ')';
      }
    }
  });

})();
