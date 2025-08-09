  window.addEventListener("scroll", function () {
      const container = document.getElementById("container");
      const scrollY = window.scrollY;
      const fadePoint = 600;

      // Calculate opacity (1 at top, 0 when reaching fadePoint)
      let opacity = 1 - scrollY / fadePoint;
      if (opacity < 0) opacity = 0;
      if (opacity > 1) opacity = 1;

      container.style.opacity = opacity;
    });