/**
 * ============================================================================
 * BATANG RILES CHRISTMAS PARTY — EDITORIAL STORYTELLING CONTROLLER
 * "Every Light Has a Story"
 * Full non-scrollable experience: Year 1 • Year 2 • Year 3 | Donate
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATA: VERIFIED ASSETS
  // --------------------------------------------------------------------------
  const Y1_PHOTOS = [
    {
      src: "assets/y1/493287965_9624732004231283_4549465918225996649_n.jpg",
      caption: "Our first gathering along the Batang Riles."
    },
    {
      src: "assets/y1/493289802_9624731784231305_7127571553046975064_n.jpg",
      caption: "Neighbors and friends joining hands."
    },
    {
      src: "assets/y1/493321025_9624731677564649_2545488810557613247_n.jpg",
      caption: "Handing out warm food and holiday packs."
    },
    {
      src: "assets/y1/493323425_9624731937564623_9140821885106563697_n.jpg",
      caption: "Smiles that proved kindness reaches everywhere."
    },
    {
      src: "assets/y1/493323925_9624731910897959_1903460172793317334_n.jpg",
      caption: "Sharing love with the children of the tracks."
    },
    {
      src: "assets/y1/493724784_9624731857564631_7095615976664399269_n.jpg",
      caption: "A Christmas they will always remember."
    },
    {
      src: "assets/y1/493311663_9624731594231324_5134322259221507723_n.jpg",
      caption: "Year 1 photo memory."
    },
    {
      src: "assets/y1/493324719_9624731934231290_6326396567770831715_n.jpg",
      caption: "Year 1 photo memory."
    },
    {
      src: "assets/y1/493523360_9624733154231168_8135422787766545367_n.jpg",
      caption: "Year 1 photo memory."
    },
    {
      src: "assets/y1/493547838_9624733167564500_4285533070001285137_n.jpg",
      caption: "Year 1 photo memory."
    },
    {
      type: "video",
      src: "assets/y1/FDownload.App_AQMBjvnWUvF4TRO_gM11odv3-_5VGVnCWc5GECmdd0ZAVx-4OWFC_-bXbAgUvuT7b-dD4XQcQm3hu-NBcGcQOwI881cd-hzjyFY_720p_(HD).mp4",
      caption: "Year 1 video."
    },
    {
      type: "video",
      src: "assets/y1/FDownload.App_AQNIAF0mCiB5qtAOOPObAxoPvT8uXfCpkOIfhv8WuRHCYDcKxnBzxh_wldIJ2eCaAlGYKFe55rwsskZRCHS7lGsO_360p_(SD).mp4",
      caption: "Year 1 video."
    },
    {
      type: "video",
      src: "assets/y1/FDownload.App_AQNSPTmJowT9yiSA2euO0h5FiBgoiOpwL7r-2y2fqsrGcwIuts3Bdt7V4wMawD6eHJJoaW7NEH5dh2jB9HoAVVEw_360p_(SD).mp4",
      caption: "Year 1 video."
    }
  ];

  const Y2_MEMORIES = [
    {
      type: "video",
      src: "assets/y2/AQO4l5d9cltypX3lUbg4ANPOamBt1sD4AziFFb2eyshOaqZaDnakhgv9P_IVybO64hI0B803xjJjA-Uq58xXal8.mp4",
      caption: "Live Moments: Year 2 Celebration Along the Tracks"
    },
    {
      type: "photo",
      src: "assets/y2/513997002_23901728916105020_1539537465338944568_n.jpg",
      caption: "Year 2 — Even more children welcomed to the celebration."
    },
    {
      type: "photo",
      src: "assets/y2/514110249_23901727462771832_808282950336976319_n.jpg",
      caption: "Volunteers preparing gifts with care and dedication."
    },
    {
      type: "photo",
      src: "assets/y2/514531703_23901727576105154_2039336411891229169_n.jpg",
      caption: "Fun parlor games and shared laughter beside the rails."
    },
    {
      type: "photo",
      src: "assets/y2/515071034_23901727439438501_4105133231036175267_n.jpg",
      caption: "A tradition of giving that continues to grow."
    },
    {
      type: "photo",
      src: "assets/y2/513892834_23901728832771695_1884060609950216739_n.jpg",
      caption: "Year 2 photo memory."
    },
    {
      type: "photo",
      src: "assets/y2/514410300_23901727459438499_8284945922910118241_n.jpg",
      caption: "Year 2 photo memory."
    },
    {
      type: "photo",
      src: "assets/y2/514851232_23901728966105015_6037658630787141137_n.jpg",
      caption: "Year 2 photo memory."
    },
    {
      type: "video",
      src: "assets/y2/FDownload.App_AQMf27KILRNjNLuLkNYsJ775jRY35bMR0yrKi06ptbxd4ZtqYriLfRn40PUFghGGyCr7R9sYb1i79Tr_JPdLpQsqKgwrg_FUtt4_720p_(HD).mp4",
      caption: "Year 2 video."
    },
    {
      type: "video",
      src: "assets/y2/FDownload.App_AQOTTfdSW8y_OEa9EaGCsFuKUQe9yLny_IZZGtThqTaishj6IylpM485jw0j9HYWo9Tja7iQBnluP57xf9Z_ZETx9ICWumDSqBk_720p_(HD).mp4",
      caption: "Year 2 video."
    },
    {
      type: "video",
      src: "assets/y2/FDownload.App_AQPM7GhbmJLTDvgY3RFh03CImv2qHz2ac3BPPJUCKpXCXtXEZsaPXxjZnURzKg15qw4AgFfixybv0NVN9isN5z1DBM3yZjNlAN0_720p_(HD).mp4",
      caption: "Year 2 video."
    }
  ];

  const Y3_PHOTOS = [
    {
      src: "assets/y3/604937792_25441717665439463_3297288499249756309_n.jpg",
      caption: "Festive balloons and smiles lighting up the community."
    },
    {
      src: "assets/y3/605530373_122136373076968837_57530036743135763_n.jpg",
      caption: "A day filled with laughter, food, and Christmas love."
    },
    {
      src: "assets/y3/605548154_25441719375439292_7841804007462445616_n.jpg",
      caption: "Handing out Christmas Noche Buena bundles to families."
    },
    {
      src: "assets/y3/605805038_25441705935440636_8885756335427832884_n.jpg",
      caption: "Pure childhood happiness right beside the railway."
    },
    {
      src: "assets/y3/606019992_25441711308773432_8766147545984948019_n.jpg",
      caption: "Three years of memories, hope, and generosity."
    },
    {
      src: "assets/y3/603744885_25441721335439096_4468631055696321921_n.jpg",
      caption: "Year 3 photo memory."
    },
    {
      src: "assets/y3/605260413_25441724975438732_1130861993841132022_n.jpg",
      caption: "Year 3 photo memory."
    },
    {
      type: "video",
      src: "assets/y3/FDownload.App_AQNkdeAPUG-W42cCbOT3uGwI5hJaz5Xqjgbzp0knLZRcaCva3VBlppWm61JrXUmodRJAZDiWm1vnCR0gsRgHvgm1gPnEH5w1HZ0_720p_(HD).mp4",
      caption: "Year 3 video."
    }
  ];

  const CHAPTER_IDS = [
    'chapter-intro',
    'chapter-year1',
    'chapter-year2',
    'chapter-year3',
    'chapter-finale'
  ];

  let currentChapter = 0;
  let y1Index = 0;
  let y2Index = 0;
  let y3Index = 0;
  let y2ShowingVideo = true;

  // DOM Elements
  const mediaPlayer = document.getElementById('bg-music-player');
  const y1Video = document.getElementById('y1-campaign-video');
  const y2Video = document.getElementById('y2-campaign-video');
  const y3Video = document.getElementById('y3-campaign-video');
  const donationModal = document.getElementById('donation-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Lightbox
  const lightbox = document.getElementById('memories-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  // --------------------------------------------------------------------------
  // 2. BACKGROUND SOUNDTRACK
  // --------------------------------------------------------------------------
  function initSoundtrack() {
    if (!mediaPlayer) return;
    mediaPlayer.volume = 0.7;
    mediaPlayer.muted = false;

    const playPromise = mediaPlayer.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        mediaPlayer.muted = true;
        mediaPlayer.play().then(() => {
          const unmute = () => {
            if (mediaPlayer) mediaPlayer.muted = false;
            ['click', 'touchstart', 'mousemove', 'keydown'].forEach(e => {
              window.removeEventListener(e, unmute);
            });
          };
          ['click', 'touchstart', 'mousemove', 'keydown'].forEach(e => {
            window.addEventListener(e, unmute, { once: true, passive: true });
          });
        }).catch(() => {});
      });
    }
  }

  // --------------------------------------------------------------------------
  // 2.5 GLOBAL FLOATING GOLDEN PARTICLES (All Pages — Embers / Alitaptap)
  // --------------------------------------------------------------------------
  let particles = [];
  let animFrameId = null;

  function setupParticles() {
    // Use the new global fixed canvas (visible on ALL chapters)
    const canvas = document.getElementById('global-particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticleArray();
    }

    function initParticleArray() {
      const count = Math.min(Math.floor(window.innerWidth * 0.045), 55);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2.2 + 0.7,
          speedY: -(Math.random() * 0.42 + 0.14),
          speedX: (Math.random() - 0.5) * 0.25,
          alpha: Math.random() * 0.55 + 0.2,
          pulseSpeed: Math.random() * 0.025 + 0.012,
          color: Math.random() > 0.4 ? 'rgba(212, 175, 55,' : 'rgba(255, 222, 145,'
        });
      }
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed * 0.05) * 0.007;

        if (p.alpha < 0.1) p.alpha = 0.1;
        if (p.alpha > 0.78) p.alpha = 0.78;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + ' ' + p.alpha + ')';
        ctx.shadowBlur = 9;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.65)';
        ctx.fill();
      }

      animFrameId = requestAnimationFrame(render);
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();
    render();
  }

  // --------------------------------------------------------------------------
  // 3. CHAPTER NAVIGATION
  // --------------------------------------------------------------------------
  function goToChapter(index) {
    if (index < 0 || index >= CHAPTER_IDS.length) return;

    const currentEl = document.getElementById(CHAPTER_IDS[currentChapter]);
    if (currentEl) currentEl.classList.remove('active');

    currentChapter = index;

    const nextEl = document.getElementById(CHAPTER_IDS[currentChapter]);
    if (nextEl) nextEl.classList.add('active');

    // Update topbar station tabs (Year 1 = index 1, Year 2 = index 2, Year 3 = index 3)
    document.querySelectorAll('.station-tab').forEach((tab) => {
      const tabTarget = parseInt(tab.getAttribute('data-chapter-index'), 10);
      if (tabTarget === currentChapter) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    const videos = [y1Video, y2Video, y3Video].filter(Boolean);
    const activeVideo = currentChapter === 1 ? y1Video : currentChapter === 2 ? y2Video : currentChapter === 3 ? y3Video : null;
    videos.forEach((video) => {
      if (video !== activeVideo) video.pause();
    });
    const activeItems = currentChapter === 1 ? Y1_PHOTOS : currentChapter === 2 ? Y2_MEMORIES : currentChapter === 3 ? Y3_PHOTOS : null;
    const activeIndex = currentChapter === 1 ? y1Index : currentChapter === 2 ? y2Index : y3Index;
    if (activeVideo && activeItems && activeItems[activeIndex].type === 'video') {
      activeVideo.play().catch(() => {});
    }

    // Manage automatic photo slideshow for the active chapter
    startPhotoAutoAdvance();
  }

  // --------------------------------------------------------------------------
  // 3.5 AUTOMATIC PHOTO SLIDESHOW (Moves Automatically Across All Chapters)
  // --------------------------------------------------------------------------
  let photoAutoTimer = null;
  const SLIDESHOW_INTERVAL = 3800;

  function stopPhotoAutoAdvance() {
    if (photoAutoTimer) {
      clearTimeout(photoAutoTimer);
      clearInterval(photoAutoTimer);
      photoAutoTimer = null;
    }
  }

  function startPhotoAutoAdvance() {
    stopPhotoAutoAdvance();

    const year = currentChapter;
    if (year < 1 || year > 3) return;
    const items = year === 1 ? Y1_PHOTOS : year === 2 ? Y2_MEMORIES : Y3_PHOTOS;
    const index = year === 1 ? y1Index : year === 2 ? y2Index : y3Index;
    const delay = items[index].type === 'video' ? 6000 : SLIDESHOW_INTERVAL;

    photoAutoTimer = setTimeout(() => {
      if (year === 1) {
        y1Index = (y1Index + 1) % Y1_PHOTOS.length;
        updateY1Photo(true);
      } else if (year === 2) {
        y2Index = (y2Index + 1) % Y2_MEMORIES.length;
        updateY2Media(true);
      } else {
        y3Index = (y3Index + 1) % Y3_PHOTOS.length;
        updateY3Photo(true);
      }
      startPhotoAutoAdvance();
    }, delay);
  }

  function setPhotoWithFade(imgEl, newSrc) {
    if (!imgEl) return;
    imgEl.style.opacity = '0.35';
    setTimeout(() => {
      imgEl.src = newSrc;
      imgEl.style.opacity = '1';
    }, 160);
  }

  // --------------------------------------------------------------------------
  // 4. YEAR 1 PHOTO FLIPPER (Auto-advancing + manual controls)
  // --------------------------------------------------------------------------
  function updateY1Photo(withFade = false) {
    const photoEl = document.getElementById('y1-hero-img');
    const videoEl = y1Video;
    const item = Y1_PHOTOS[y1Index];
    const labelEl = document.getElementById('y1-indicator-text');
    const captionEl = document.getElementById('y1-photo-caption');

    if (item.type === 'video') {
      if (videoEl) {
        photoEl.style.display = 'none';
        videoEl.style.display = 'block';
        if (videoEl.dataset.mediaSrc !== item.src) {
          videoEl.dataset.mediaSrc = item.src;
          videoEl.src = item.src;
          videoEl.load();
        }
        if (currentChapter === 1) videoEl.play().catch(() => {});
      }
    } else {
      if (videoEl) {
        videoEl.pause();
        videoEl.style.display = 'none';
      }
      if (photoEl) {
        photoEl.style.display = 'block';
        if (withFade) setPhotoWithFade(photoEl, item.src);
        else photoEl.src = item.src;
      }
    }
    if (labelEl) labelEl.textContent = `Memory ${y1Index + 1} of ${Y1_PHOTOS.length}`;
    if (captionEl && item.caption) {
      captionEl.textContent = item.caption;
    }

    // Update dot bar
    const dots = document.querySelectorAll('#y1-dots .photo-thumb-dot');
    dots.forEach((dot, idx) => {
      if (idx === y1Index) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  }

  function setupY1() {
    const prevBtn = document.getElementById('y1-btn-prev');
    const nextBtn = document.getElementById('y1-btn-next');
    const photoEl = document.getElementById('y1-hero-img');
    const mountEl = document.getElementById('y1-mount');
    const dotsWrap = document.getElementById('y1-dots');

    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      Y1_PHOTOS.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'photo-thumb-dot' + (idx === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to memory ${idx + 1}`);
        dot.addEventListener('click', () => {
          y1Index = idx;
          updateY1Photo(true);
          startPhotoAutoAdvance();
        });
        dotsWrap.appendChild(dot);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        y1Index = (y1Index - 1 + Y1_PHOTOS.length) % Y1_PHOTOS.length;
        updateY1Photo(true);
        startPhotoAutoAdvance();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        y1Index = (y1Index + 1) % Y1_PHOTOS.length;
        updateY1Photo(true);
        startPhotoAutoAdvance();
      });
    }
    if (photoEl) {
      photoEl.addEventListener('click', () => {
        const item = Y1_PHOTOS[y1Index];
        if (item.type !== 'video') openLightbox(item.src, item.caption);
      });
    }

    if (mountEl) {
      mountEl.addEventListener('mouseenter', stopPhotoAutoAdvance);
      mountEl.addEventListener('mouseleave', () => {
        if (currentChapter === 1) startPhotoAutoAdvance();
      });
    }

    updateY1Photo();
  }

  // --------------------------------------------------------------------------
  // 5. YEAR 2 UNIFIED MEDIA (Video + Photos in ONE Continuous Stream)
  // Zero Separation — Everything in one unified carousel!
  // --------------------------------------------------------------------------
  function updateY2Media(withFade = false) {
    const item = Y2_MEMORIES[y2Index];
    const photoEl = document.getElementById('y2-hero-img');
    const labelEl = document.getElementById('y2-indicator-text');
    const captionEl = document.getElementById('y2-photo-caption');
    const soundToggle = document.getElementById('btn-video-sound');

    if (item.type === 'video') {
      if (y2Video) {
        y2Video.style.display = 'block';
        if (y2Video.dataset.mediaSrc !== item.src) {
          y2Video.dataset.mediaSrc = item.src;
          y2Video.src = item.src;
          y2Video.load();
        }
        if (currentChapter === 2) {
          y2Video.play().catch(() => {});
        }
      }
      if (photoEl) photoEl.style.display = 'none';
      if (soundToggle) soundToggle.style.display = 'flex';
    } else {
      if (y2Video) {
        y2Video.style.display = 'none';
        y2Video.pause();
      }
      if (soundToggle) soundToggle.style.display = 'none';
      if (photoEl) {
        photoEl.style.display = 'block';
        if (withFade) setPhotoWithFade(photoEl, item.src);
        else photoEl.src = item.src;
      }
    }

    if (labelEl) labelEl.textContent = `Memory ${y2Index + 1} of ${Y2_MEMORIES.length}`;
    if (captionEl && item.caption) {
      captionEl.textContent = item.caption;
    }

    const dots = document.querySelectorAll('#y2-dots .photo-thumb-dot');
    dots.forEach((dot, idx) => {
      if (idx === y2Index) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  }

  function setupY2() {
    const soundToggle = document.getElementById('btn-video-sound');
    const soundText = document.getElementById('video-sound-text');
    const prevBtn = document.getElementById('y2-btn-prev');
    const nextBtn = document.getElementById('y2-btn-next');
    const photoEl = document.getElementById('y2-hero-img');
    const mountEl = document.getElementById('y2-mount');
    const dotsWrap = document.getElementById('y2-dots');

    if (soundToggle && y2Video) {
      soundToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        y2Video.muted = !y2Video.muted;
        if (soundText) soundText.textContent = y2Video.muted ? 'Sound Off' : 'Sound On';
      });
    }

    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      Y2_MEMORIES.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'photo-thumb-dot' + (idx === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to memory ${idx + 1}`);
        dot.addEventListener('click', () => {
          y2Index = idx;
          updateY2Media(true);
          startPhotoAutoAdvance();
        });
        dotsWrap.appendChild(dot);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        y2Index = (y2Index - 1 + Y2_MEMORIES.length) % Y2_MEMORIES.length;
        updateY2Media(true);
        startPhotoAutoAdvance();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        y2Index = (y2Index + 1) % Y2_MEMORIES.length;
        updateY2Media(true);
        startPhotoAutoAdvance();
      });
    }
    if (photoEl) {
      photoEl.addEventListener('click', () => {
        const item = Y2_MEMORIES[y2Index];
        if (item.type === 'photo') {
          openLightbox(item.src, item.caption);
        }
      });
    }

    if (mountEl) {
      mountEl.addEventListener('mouseenter', stopPhotoAutoAdvance);
      mountEl.addEventListener('mouseleave', () => {
        if (currentChapter === 2) startPhotoAutoAdvance();
      });
    }

    updateY2Media();
  }

  // --------------------------------------------------------------------------
  // 6. YEAR 3 PHOTO FLIPPER (All 6 Photos with Auto-advance)
  // --------------------------------------------------------------------------
  function updateY3Photo(withFade = false) {
    const photoEl = document.getElementById('y3-hero-img');
    const videoEl = y3Video;
    const item = Y3_PHOTOS[y3Index];
    const labelEl = document.getElementById('y3-indicator-text');
    const captionEl = document.getElementById('y3-photo-caption');

    if (item.type === 'video') {
      if (videoEl) {
        if (photoEl) photoEl.style.display = 'none';
        videoEl.style.display = 'block';
        if (videoEl.dataset.mediaSrc !== item.src) {
          videoEl.dataset.mediaSrc = item.src;
          videoEl.src = item.src;
          videoEl.load();
        }
        if (currentChapter === 3) videoEl.play().catch(() => {});
      }
    } else {
      if (videoEl) {
        videoEl.pause();
        videoEl.style.display = 'none';
      }
      if (photoEl) {
        photoEl.style.display = 'block';
        if (withFade) setPhotoWithFade(photoEl, item.src);
        else photoEl.src = item.src;
      }
    }
    if (labelEl) labelEl.textContent = `Memory ${y3Index + 1} of ${Y3_PHOTOS.length}`;
    if (captionEl && item.caption) {
      captionEl.textContent = item.caption;
    }

    const dots = document.querySelectorAll('#y3-dots .photo-thumb-dot');
    dots.forEach((dot, idx) => {
      if (idx === y3Index) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  }

  function setupY3() {
    const prevBtn = document.getElementById('y3-btn-prev');
    const nextBtn = document.getElementById('y3-btn-next');
    const photoEl = document.getElementById('y3-hero-img');
    const mountEl = document.getElementById('y3-mount');
    const dotsWrap = document.getElementById('y3-dots');

    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      Y3_PHOTOS.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'photo-thumb-dot' + (idx === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to memory ${idx + 1}`);
        dot.addEventListener('click', () => {
          y3Index = idx;
          updateY3Photo(true);
          startPhotoAutoAdvance();
        });
        dotsWrap.appendChild(dot);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        y3Index = (y3Index - 1 + Y3_PHOTOS.length) % Y3_PHOTOS.length;
        updateY3Photo(true);
        startPhotoAutoAdvance();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        y3Index = (y3Index + 1) % Y3_PHOTOS.length;
        updateY3Photo(true);
        startPhotoAutoAdvance();
      });
    }
    if (photoEl) {
      photoEl.addEventListener('click', () => {
        const item = Y3_PHOTOS[y3Index];
        if (item.type !== 'video') openLightbox(item.src, item.caption);
      });
    }

    if (mountEl) {
      mountEl.addEventListener('mouseenter', stopPhotoAutoAdvance);
      mountEl.addEventListener('mouseleave', () => {
        if (currentChapter === 3) startPhotoAutoAdvance();
      });
    }

    updateY3Photo();
  }

  // --------------------------------------------------------------------------
  // 7. LIGHTBOX MODAL
  // --------------------------------------------------------------------------
  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('open');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
  }

  function setupLightbox() {
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });
    }
  }

  // --------------------------------------------------------------------------
  // 8. DONATION MODAL POPUP
  // --------------------------------------------------------------------------
  function openDonationModal() {
    if (!donationModal) return;
    donationModal.classList.add('open');
  }

  function closeDonationModal() {
    if (!donationModal) return;
    donationModal.classList.remove('open');
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
      try {
        const tempInput = document.createElement('textarea');
        tempInput.value = text;
        tempInput.style.position = 'fixed';
        tempInput.style.opacity = '0';
        document.body.appendChild(tempInput);
        tempInput.focus();
        tempInput.select();
        const success = document.execCommand('copy');
        document.body.removeChild(tempInput);
        if (success) resolve();
        else reject(new Error('Copy command failed'));
      } catch (err) {
        reject(err);
      }
    });
  }

  function setupDonationModal() {
    document.querySelectorAll('[data-open-donate]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openDonationModal();
      });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeDonationModal);
    if (donationModal) {
      donationModal.addEventListener('click', (e) => {
        if (e.target === donationModal) closeDonationModal();
      });
    }

    // Download the supplied QR as a file while retaining the native link fallback.
    document.querySelectorAll('.btn-save-qr').forEach((link) => {
      link.addEventListener('click', (e) => {
        if (link.dataset.nativeDownload === 'true') return;
        e.preventDefault();
        fetch(link.href)
          .then((response) => {
            if (!response.ok) throw new Error('QR download failed');
            return response.blob();
          })
          .then((blob) => {
            const objectUrl = URL.createObjectURL(blob);
            const download = document.createElement('a');
            download.href = objectUrl;
            download.download = link.getAttribute('download') || 'Batang-Riles-GCash-QR.jpg';
            document.body.appendChild(download);
            download.click();
            download.remove();
            setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
          })
          .catch(() => {
            link.dataset.nativeDownload = 'true';
            link.click();
            delete link.dataset.nativeDownload;
          });
      });
    });

    // QR Image Lightbox click
    const qrFrame = document.getElementById('gcash-qr-frame');
    if (qrFrame) {
      qrFrame.addEventListener('click', () => {
        openLightbox('assets/gcash-qr-code.jpg', 'Batang Riles GCash QR Code (0917-276-4606)');
      });
    }

    // Copy Phone Number
    document.querySelectorAll('.btn-copy-number').forEach(btn => {
      btn.addEventListener('click', function () {
        const num = this.getAttribute('data-copy') || '09172764606';

        copyTextToClipboard(num).then(() => {
          const orig = this.innerHTML;
          this.classList.add('copied');
          this.innerHTML = `
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>✓ Copied 09172764606!</span>
          `;
          setTimeout(() => {
            this.classList.remove('copied');
            this.innerHTML = orig;
          }, 2400);
        }).catch(() => {});
      });
    });
  }

  // --------------------------------------------------------------------------
  // 9. EVENT LISTENERS
  // --------------------------------------------------------------------------
  function setupNavigationEvents() {
    // Next / Prev chapter triggers
    document.querySelectorAll('[data-next-chapter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        goToChapter(currentChapter + 1);
      });
    });

    document.querySelectorAll('[data-prev-chapter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        goToChapter(currentChapter - 1);
      });
    });

    document.querySelectorAll('[data-goto-chapter]').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const target = parseInt(this.getAttribute('data-goto-chapter'), 10);
        if (!isNaN(target)) goToChapter(target);
      });
    });

    // Topbar Tabs: Year 1 (1), Year 2 (2), Year 3 (3)
    document.querySelectorAll('.station-tab').forEach(tab => {
      tab.addEventListener('click', function () {
        const target = parseInt(this.getAttribute('data-chapter-index'), 10);
        if (!isNaN(target)) goToChapter(target);
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (donationModal && donationModal.classList.contains('open')) {
          closeDonationModal();
          return;
        }
        if (lightbox && lightbox.classList.contains('open')) {
          closeLightbox();
          return;
        }
      }

      const isModalOpen = (donationModal && donationModal.classList.contains('open')) ||
                          (lightbox && lightbox.classList.contains('open'));
      if (!isModalOpen) {
        if (e.key === 'ArrowRight') goToChapter(currentChapter + 1);
        if (e.key === 'ArrowLeft') goToChapter(currentChapter - 1);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 10. INITIALIZATION
  // --------------------------------------------------------------------------
  function init() {
    initSoundtrack();
    setupParticles();
    setupY1();
    setupY2();
    setupY3();
    setupLightbox();
    setupDonationModal();
    setupNavigationEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
