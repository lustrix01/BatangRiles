/**
 * ============================================================================
 * MEMORIES — Campaign Photo & Video Gallery
 * "Three Years, One Journey."
 * Batang Riles Christmas Party Donation Drive (Year 4)
 * ============================================================================
 *
 * Features:
 * - Lightbox for photos (keyboard + click navigation)
 * - Inline video playback with native controls
 * - Scroll-reveal animations for each media item and section heading
 * - Uses only verified campaign assets (zero fabrication)
 * - No external libraries required
 */

(function () {
  "use strict";

  /* --------------------------------------------------------------------------
     MEDIA REGISTRY
     All filenames are verified against the actual assets folder.
     Do NOT rename, move, or fabricate any entry here.
     -------------------------------------------------------------------------- */
  const MEDIA = {
    y1: {
      label: "Station 01",
      year: "Year 1",
      heading: "Where It All Began",
      caption:
        "Every beautiful story begins with a single act of kindness.",
      photos: [
        {
          id: "y1-1",
          src: "assets/y1/493287965_9624732004231283_4549465918225996649_n.jpg",
          alt: "Year 1 — Campaign outreach, first gathering of Batang Riles",
        },
        {
          id: "y1-2",
          src: "assets/y1/493289802_9624731784231305_7127571553046975064_n.jpg",
          alt: "Year 1 — Community members coming together along the riles",
        },
        {
          id: "y1-3",
          src: "assets/y1/493321025_9624731677564649_2545488810557613247_n.jpg",
          alt: "Year 1 — Distributing blessings to the children of Batang Riles",
        },
        {
          id: "y1-4",
          src: "assets/y1/493323425_9624731937564623_9140821885106563697_n.jpg",
          alt: "Year 1 — Smiles and warmth shared along the tracks",
        },
        {
          id: "y1-5",
          src: "assets/y1/493323925_9624731910897959_1903460172793317334_n.jpg",
          alt: "Year 1 — Families receiving gifts and Christmas cheer",
        },
        {
          id: "y1-6",
          src: "assets/y1/493724784_9624731857564631_7095615976664399269_n.jpg",
          alt: "Year 1 — Children and families of the Batang Riles community",
        },
      ],
      videos: [],
    },

    y2: {
      label: "Station 02",
      year: "Year 2",
      heading: "A Growing Light",
      caption: "What started as a small gesture became something bigger.",
      photos: [
        {
          id: "y2-1",
          src: "assets/y2/513997002_23901728916105020_1539537465338944568_n.jpg",
          alt: "Year 2 — Growing outreach impact along the Batang Riles",
        },
        {
          id: "y2-2",
          src: "assets/y2/514110249_23901727462771832_808282950336976319_n.jpg",
          alt: "Year 2 — Community volunteers and members joining the cause",
        },
        {
          id: "y2-3",
          src: "assets/y2/514531703_23901727576105154_2039336411891229169_n.jpg",
          alt: "Year 2 — Joy of giving reflected in the faces along the tracks",
        },
        {
          id: "y2-4",
          src: "assets/y2/515071034_23901727439438501_4105133231036175267_n.jpg",
          alt: "Year 2 — Heartfelt connections forged through the donation drive",
        },
      ],
      videos: [
        {
          id: "y2-v1",
          src: "assets/y2/AQO4l5d9cltypX3lUbg4ANPOamBt1sD4AziFFb2eyshOaqZaDnakhgv9P_IVybO64hI0B803xjJjA-Uq58xXal8.mp4",
          alt: "Year 2 — Campaign documentation reel",
          type: "video/mp4",
        },
      ],
    },

    y3: {
      label: "Station 03",
      year: "Year 3",
      heading: "The Journey Continues",
      caption:
        "Three years later, the memories remain, and the purpose continues.",
      photos: [
        {
          id: "y3-1",
          src: "assets/y3/605530373_122136373076968837_57530036743135763_n.jpg",
          alt: "Year 3 — Batang Riles community, the journey continues",
        },
      ],
      videos: [],
      placeholderNotice:
        "Our newest memories are still being gathered.",
    },
  };

  /* --------------------------------------------------------------------------
     LIGHTBOX STATE
     -------------------------------------------------------------------------- */
  let lightboxImages = []; // flat array of { src, alt } for current year's photos
  let lightboxIndex = 0;

  const lightbox = document.getElementById("memories-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  function openLightbox(images, index) {
    lightboxImages = images;
    lightboxIndex = index;
    renderLightboxImage();
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
    lightboxImages = [];
  }

  function renderLightboxImage() {
    const item = lightboxImages[lightboxIndex];
    if (!item || !lightboxImg) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    // Show/hide nav
    if (lightboxPrev) lightboxPrev.style.display = lightboxImages.length <= 1 ? "none" : "";
    if (lightboxNext) lightboxNext.style.display = lightboxImages.length <= 1 ? "none" : "";
  }

  function lightboxStep(dir) {
    lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
    renderLightboxImage();
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }
  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", function (e) {
      e.stopPropagation();
      lightboxStep(-1);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener("click", function (e) {
      e.stopPropagation();
      lightboxStep(1);
    });
  }
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!lightbox || !lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lightboxStep(-1);
    if (e.key === "ArrowRight") lightboxStep(1);
  });

  /* --------------------------------------------------------------------------
     SCROLL REVEAL
     -------------------------------------------------------------------------- */
  function initScrollReveal() {
    const targets = document.querySelectorAll(".reveal-on-scroll, .media-item");
    if (!targets.length) return;

    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      targets.forEach(function (el, i) {
        // Stagger media items within a grid
        if (el.classList.contains("media-item")) {
          el.style.transitionDelay = (i % 10) * 0.07 + "s";
        }
        obs.observe(el);
      });
    } else {
      // Fallback: reveal all immediately
      targets.forEach(function (el) {
        el.classList.add("revealed");
      });
    }
  }

  /* --------------------------------------------------------------------------
     WIRE UP photo click → lightbox per station
     -------------------------------------------------------------------------- */
  function wirePhotoLightbox(stationEl, images) {
    var photoItems = stationEl.querySelectorAll(".media-item-photo[data-lightbox]");
    photoItems.forEach(function (item, i) {
      item.addEventListener("click", function () {
        openLightbox(images, i);
      });
      // Keyboard accessibility
      item.setAttribute("tabindex", "0");
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(images, i);
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     INLINE VIDEO — clicking the poster play button starts real video
     -------------------------------------------------------------------------- */
  function wireVideoItem(itemEl) {
    var overlay = itemEl.querySelector(".video-play-overlay");
    var video = itemEl.querySelector("video");
    if (!overlay || !video) return;

    overlay.addEventListener("click", function (e) {
      e.stopPropagation();
      overlay.style.display = "none";
      video.controls = true;
      video.play().catch(function () {});
    });
  }

  /* --------------------------------------------------------------------------
     INIT — called on DOMContentLoaded
     -------------------------------------------------------------------------- */
  function init() {
    // Wire each station
    ["y1", "y2", "y3"].forEach(function (yearKey) {
      var stationEl = document.getElementById("station-" + yearKey);
      if (!stationEl) return;

      var data = MEDIA[yearKey];
      if (!data) return;

      // Wire photo lightbox
      wirePhotoLightbox(stationEl, data.photos);

      // Wire videos
      var videoItems = stationEl.querySelectorAll(".media-item-video");
      videoItems.forEach(wireVideoItem);
    });

    // Init scroll reveal after a short delay (let layout settle)
    setTimeout(initScrollReveal, 120);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

