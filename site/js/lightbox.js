(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var lightbox = document.getElementById("lightbox");
    if (!lightbox) return;

    var lightboxImg = lightbox.querySelector(".lightbox-img");
    var closeBtn = lightbox.querySelector(".lightbox-close");
    var lastTrigger = null;

    function open(trigger) {
      var img = trigger.querySelector("img");
      if (!img) return;
      lastTrigger = trigger;
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt || "";
      lightbox.hidden = false;
      document.body.classList.add("lightbox-open");
      closeBtn.focus();
    }

    function close() {
      lightbox.hidden = true;
      lightboxImg.src = "";
      document.body.classList.remove("lightbox-open");
      if (lastTrigger) {
        lastTrigger.focus();
        lastTrigger = null;
      }
    }

    document.querySelectorAll(".shot-trigger").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        open(trigger);
      });
    });

    closeBtn.addEventListener("click", close);

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) close();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !lightbox.hidden) close();
    });
  });
})();
