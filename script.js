document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-visible");

  const pageLinks = document.querySelectorAll('a[href]');

  pageLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      link.target === "_blank"
    ) {
      return;
    }

    link.addEventListener("click", (event) => {
      const destination = link.href;

      if (destination === window.location.href) return;

      event.preventDefault();
      document.body.classList.remove("page-visible");
      document.body.classList.add("page-leaving");

      setTimeout(() => {
        window.location.href = destination;
      }, 400);
    });
  });

  const toggles = document.querySelectorAll(".filter-toggle");
  const inputs = document.querySelectorAll('.filter-content input[type="checkbox"]');
  const cards = document.querySelectorAll(".product-card");
  const noResults = document.getElementById("no-results");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const item = toggle.parentElement;
      item.classList.toggle("open");
    });
  });

  function getChecked(name) {
    return Array.from(
      document.querySelectorAll(`input[name="${name}"]:checked`)
    ).map((input) => input.value);
  }

  function applyFilters() {
    if (!cards.length) return;

    const selectedRam = getChecked("ram");
    const selectedCpu = getChecked("cpu");
    const selectedGpu = getChecked("gpu");

    let visible = 0;

    cards.forEach((card) => {
      const ram = card.dataset.ram;
      const cpu = card.dataset.cpu;
      const gpu = card.dataset.gpu;

      const ramMatch = selectedRam.length === 0 || selectedRam.includes(ram);
      const cpuMatch = selectedCpu.length === 0 || selectedCpu.includes(cpu);
      const gpuMatch = selectedGpu.length === 0 || selectedGpu.includes(gpu);

      const show = ramMatch && cpuMatch && gpuMatch;

      card.style.display = show ? "block" : "none";

      if (show) visible++;
    });

    if (noResults) {
      noResults.style.display = visible === 0 ? "block" : "none";
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("change", applyFilters);
  });

  applyFilters();

  const track = document.querySelector(".featured-carousel-track");
  const slides = document.querySelectorAll(".featured-slide");
  const fills = document.querySelectorAll(".carousel-progress-fill");
  const prevArrow = document.querySelector(".carousel-arrow-left");
  const nextArrow = document.querySelector(".carousel-arrow-right");

  if (track && slides.length) {
    let currentSlide = 0;
    let autoSlideInterval;

    function positionArrows() {
      const currentFrame = slides[currentSlide].querySelector(".featured-image-frame");
      if (!currentFrame || !prevArrow || !nextArrow) return;

      const topPosition = currentFrame.offsetTop + currentFrame.offsetHeight / 2;
      prevArrow.style.top = `${topPosition}px`;
      nextArrow.style.top = `${topPosition}px`;
    }

    function restartProgress() {
      fills.forEach((fill) => {
        fill.style.transition = "none";
        fill.style.width = "0";
      });

      const currentFill = fills[currentSlide];
      if (!currentFill) return;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          currentFill.style.transition = "width 7s linear";
          currentFill.style.width = "100%";
        });
      });
    }

    function showSlide(index) {
      currentSlide = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      restartProgress();
      positionArrows();
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    function startAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(() => {
        nextSlide();
      }, 7000);
    }

    if (prevArrow) {
      prevArrow.addEventListener("click", () => {
        prevSlide();
        startAutoSlide();
      });
    }

    if (nextArrow) {
      nextArrow.addEventListener("click", () => {
        nextSlide();
        startAutoSlide();
      });
    }

    window.addEventListener("resize", positionArrows);

    showSlide(0);
    startAutoSlide();
  }
});
