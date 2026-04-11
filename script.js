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

  applyFilters();
});
