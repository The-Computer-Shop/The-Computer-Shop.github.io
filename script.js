document.addEventListener("DOMContentLoaded", () => {
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
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(
      (input) => input.value
    );
  }

  function applyFilters() {
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

    noResults.style.display = visible === 0 ? "block" : "none";
  }

  inputs.forEach((input) => {
    input.addEventListener("change", applyFilters);
  });
document.addEventListener("DOMContentLoaded", () => {
  const featuredSlides = document.querySelectorAll(".featured-slide");
  const prevArrow = document.querySelector(".carousel-arrow-left");
  const nextArrow = document.querySelector(".carousel-arrow-right");

  if (!featuredSlides.length) return;

  let currentSlide = 0;
  let autoSlideInterval;

  function showSlide(index) {
    featuredSlides[currentSlide].classList.remove("active");
    currentSlide = (index + featuredSlides.length) % featuredSlides.length;
    featuredSlides[currentSlide].classList.add("active");
  }

  function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 7000);
  }

  if (prevArrow) {
    prevArrow.addEventListener("click", () => {
      showSlide(currentSlide - 1);
      startAutoSlide();
    });
  }

  if (nextArrow) {
    nextArrow.addEventListener("click", () => {
      showSlide(currentSlide + 1);
      startAutoSlide();
    });
  }

  startAutoSlide();
});
  applyFilters();
});
