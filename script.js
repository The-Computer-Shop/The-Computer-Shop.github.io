document.addEventListener("DOMContentLoaded", () => {
  const filterGroups = document.querySelectorAll(".filter-group");
  const filterHeaders = document.querySelectorAll(".filter-header");
  const filterInputs = document.querySelectorAll('.filter-options input[type="checkbox"]');
  const buildCards = document.querySelectorAll(".build-card");
  const noResults = document.getElementById("no-results");

  filterHeaders.forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".filter-group");
      group.classList.toggle("open");
    });
  });

  function getSelectedValues(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(
      (input) => input.value
    );
  }

  function matchesFilter(cardValue, selectedValues) {
    if (selectedValues.length === 0) return true;
    return selectedValues.includes(cardValue);
  }

  function applyFilters() {
    const selectedRam = getSelectedValues("ram");
    const selectedCpu = getSelectedValues("cpu");
    const selectedGpu = getSelectedValues("gpu");

    let visibleCount = 0;

    buildCards.forEach((card) => {
      const ram = card.dataset.ram;
      const cpu = card.dataset.cpu;
      const gpu = card.dataset.gpu;

      const show =
        matchesFilter(ram, selectedRam) &&
        matchesFilter(cpu, selectedCpu) &&
        matchesFilter(gpu, selectedGpu);

      card.style.display = show ? "block" : "none";

      if (show) visibleCount++;
    });

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  filterInputs.forEach((input) => {
    input.addEventListener("change", applyFilters);
  });

  if (filterGroups.length > 0) {
    filterGroups[0].classList.add("open");
  }

  applyFilters();
});
