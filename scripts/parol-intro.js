/**
 * ============================================================================
 * CINEMATIC PAROL INTRODUCTION & BACKGROUND SOUNDTRACK CONTROLLER
 * "Every Light Has a Story" - Batang Riles Christmas Party (Year 4)
 * Music plays automatically & continuously without button clutter
 * Clean, human, zero AI artifacts
 * ============================================================================
 */

(function () {
  'use strict';

  class ParolIntro {
    constructor() {
      this.overlay = document.getElementById('parol-intro-overlay');
      this.enterBtn = document.getElementById('btn-enter-story');
      this.skipBtn = document.getElementById('btn-skip-intro');
      this.skipTopBtn = document.getElementById('btn-skip-top');
      this.mediaPlayer = document.getElementById('bg-music-player');
      this.canvas = document.getElementById('intro-particles-canvas');

      this.isPlaying = false;
      this.animationFrameId = null;
      this.particles = [];
      this.STORAGE_KEY = 'cpbr_parol_intro_seen';
    }

    init() {
      // 1. Start soundtrack automatically in the background
      this.setupSoundtrack();

      // 2. Setup intro overlay state
      if (!this.overlay) return;

      const urlParams = new URLSearchParams(window.location.search);
      const forceReplay = urlParams.get('replay') === '1';

      if (!forceReplay && sessionStorage.getItem(this.STORAGE_KEY) === 'true') {
        this.overlay.classList.add('dismissed');
        this.overlay.style.display = 'none';
        document.body.classList.remove('intro-locked');
        return;
      }

      document.body.classList.add('intro-locked');
      this.setupCanvas();
      this.bindEvents();
    }

    // ------------------------------------------------------------------------
    // Automatic Background Soundtrack Playback ("Himig Ng Pasko")
    // Plays seamlessly on page open without requiring any click
    // ------------------------------------------------------------------------
    setupSoundtrack() {
      if (!this.mediaPlayer) return;

      this.mediaPlayer.volume = 0.8;

      // Attempt direct unmuted playback
      this.mediaPlayer.muted = false;
      const playPromise = this.mediaPlayer.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isPlaying = true;
          })
          .catch(() => {
            // If browser policy initially restricts unmuted audio on zero-touch load,
            // immediately start stream and unmute on any natural cursor movement or scroll:
            this.mediaPlayer.muted = true;
            this.mediaPlayer.play()
              .then(() => {
                const autoUnmute = () => {
                  if (this.mediaPlayer) {
                    this.mediaPlayer.muted = false;
                    this.isPlaying = true;
                  }
                  ['mousemove', 'pointermove', 'scroll', 'wheel', 'touchstart', 'keydown', 'click'].forEach(evt => {
                    window.removeEventListener(evt, autoUnmute);
                  });
                };

                ['mousemove', 'pointermove', 'scroll', 'wheel', 'touchstart', 'keydown', 'click'].forEach(evt => {
                  window.addEventListener(evt, autoUnmute, { once: true, passive: true });
                });
              })
              .catch(() => {});
          });
      }
    }

    // ------------------------------------------------------------------------
    // Floating Golden Particles (Alitaptap / Midnight Embers)
    // ------------------------------------------------------------------------
    setupCanvas() {
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      const resize = () => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.initParticles();
      };

      window.addEventListener('resize', resize);
      resize();
      this.render();
    }

    initParticles() {
      const count = Math.min(Math.floor(window.innerWidth * 0.04), 45);
      this.particles = [];
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          radius: Math.random() * 2 + 0.8,
          speedY: -(Math.random() * 0.45 + 0.15),
          speedX: (Math.random() - 0.5) * 0.3,
          alpha: Math.random() * 0.6 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          color: Math.random() > 0.4 ? 'rgba(212, 175, 55,' : 'rgba(255, 222, 145,'
        });
      }
    }

    render() {
      if (!this.ctx || (this.overlay && this.overlay.classList.contains('dismissed'))) return;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed * 0.05) * 0.008;

        if (p.alpha < 0.15) p.alpha = 0.15;
        if (p.alpha > 0.8) p.alpha = 0.8;

        if (p.y < -10) {
          p.y = this.canvas.height + 10;
          p.x = Math.random() * this.canvas.width;
        }
        if (p.x < -10) p.x = this.canvas.width + 10;
        if (p.x > this.canvas.width + 10) p.x = -10;

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color + ' ' + p.alpha + ')';
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
        this.ctx.fill();
      }

      this.animationFrameId = requestAnimationFrame(() => this.render());
    }

    // ------------------------------------------------------------------------
    // Transitions & Navigation (Music continues playing across site)
    // ------------------------------------------------------------------------
    dismissIntro() {
      if (this.mediaPlayer && this.mediaPlayer.paused) {
        this.mediaPlayer.muted = false;
        this.mediaPlayer.play().catch(() => {});
      }

      try {
        sessionStorage.setItem(this.STORAGE_KEY, 'true');
      } catch (e) {}

      if (this.overlay) {
        this.overlay.classList.add('dismissed');
        setTimeout(() => {
          this.overlay.style.display = 'none';
          document.body.classList.remove('intro-locked');
          if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
          }
        }, 1000);
      }
    }

    bindEvents() {
      if (this.enterBtn) {
        this.enterBtn.addEventListener('click', () => this.dismissIntro());
      }
      if (this.skipBtn) {
        this.skipBtn.addEventListener('click', () => this.dismissIntro());
      }
      if (this.skipTopBtn) {
        this.skipTopBtn.addEventListener('click', () => this.dismissIntro());
      }

      // Mobile Menu Toggle
      const mobileToggle = document.getElementById('nav-mobile-toggle');
      const mobileDrawer = document.getElementById('nav-mobile-drawer');
      if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
          const isOpen = mobileDrawer.classList.toggle('open');
          mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        mobileDrawer.querySelectorAll('.nav-link').forEach(link => {
          link.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
            mobileToggle.setAttribute('aria-expanded', 'false');
          });
        });
      }
    }
  }

  // Global helper if ever needed programmatically
  window.replayParolIntro = function () {
    try {
      sessionStorage.removeItem('cpbr_parol_intro_seen');
    } catch (e) {}
    window.location.reload();
  };

  // Mount on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const intro = new ParolIntro();
      intro.init();
    });
  } else {
    const intro = new ParolIntro();
    intro.init();
  }
})();
