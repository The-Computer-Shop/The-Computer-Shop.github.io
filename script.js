function restorePageState() {
  document.body.classList.remove("page-leaving");
  document.body.classList.add("page-visible");
}

window.addEventListener("pageshow", restorePageState);

document.addEventListener("DOMContentLoaded", () => {
  restorePageState();

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
  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartEmpty = document.getElementById("cart-empty");
  const cartSummary = document.getElementById("cart-summary");
  const cartTotal = document.getElementById("cart-total");

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

  function formatPrice(value) {
    return `${value.toLocaleString()} EGP`;
  }

  function renderCart() {
    if (!cartItemsContainer || !cartEmpty || !cartSummary || !cartTotal) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartEmpty.style.display = "block";
      cartSummary.style.display = "none";
      cartTotal.textContent = "0 EGP";
      return;
    }

    cartEmpty.style.display = "none";
    cartSummary.style.display = "block";

    let total = 0;

    cart.forEach((item) => {
      total += item.price * item.quantity;

      const article = document.createElement("article");
      article.className = "cart-item";
      article.innerHTML = `
        <img class="cart-item-image" src="${item.image}" alt="${item.name}">
        <div>
          <a class="cart-item-name" href="${item.url}">${item.name}</a>
          <div class="cart-item-meta">
            Quantity: ${item.quantity}<br>
            Unit Price: ${formatPrice(item.price)}
          </div>
        </div>
        <div class="cart-item-side">
          <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
          <button class="cart-remove-button" type="button" data-id="${item.id}">Remove</button>
        </div>
      `;
      cartItemsContainer.appendChild(article);
    });

    cartTotal.textContent = formatPrice(total);

    document.querySelectorAll(".cart-remove-button").forEach((button) => {
      button.addEventListener("click", () => {
        const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]").filter(
          (item) => item.id !== button.dataset.id
        );

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        renderCart();
      });
    });
  }

  addToCartButtons.forEach((button) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item) => item.id === button.dataset.id);

    if (existingItem) {
      button.textContent = "Added to Cart";
    }

    button.addEventListener("click", () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const existingItem = cart.find((item) => item.id === button.dataset.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id: button.dataset.id,
          name: button.dataset.name,
          price: Number(button.dataset.price),
          image: button.dataset.image,
          url: button.dataset.url,
          quantity: 1
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      button.textContent = "Added to Cart";
      renderCart();
    });
  });

  renderCart();

  const carousel = document.querySelector(".featured-carousel");
  const track = document.querySelector(".featured-carousel-track");
  const slides = document.querySelectorAll(".featured-slide");
  const fills = document.querySelectorAll(".carousel-progress-fill");
  const thumbnails = document.querySelectorAll(".carousel-thumbnail");
  const carouselImages = document.querySelectorAll(".featured-image-frame img");
  const prevArrow = document.querySelector(".carousel-arrow-left");
  const nextArrow = document.querySelector(".carousel-arrow-right");
  const isManualCarousel = carousel && carousel.classList.contains("manual-carousel");

  if (track && slides.length) {
    let currentSlide = 0;
    let autoSlideInterval;

    function positionArrows() {
      const currentFrame = slides[currentSlide].querySelector(".featured-image-frame");
      if (!currentFrame || !prevArrow || !nextArrow || currentFrame.offsetHeight === 0) return;

      const topPosition = currentFrame.offsetTop + currentFrame.offsetHeight / 2;
      prevArrow.style.top = `${topPosition}px`;
      nextArrow.style.top = `${topPosition}px`;
    }

    function scheduleArrowPosition() {
      requestAnimationFrame(() => {
        positionArrows();
        setTimeout(positionArrows, 60);
      });
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
      scheduleArrowPosition();

      thumbnails.forEach((thumbnail, thumbnailIndex) => {
        thumbnail.classList.toggle("active", thumbnailIndex === currentSlide);
      });
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
        if (!isManualCarousel) startAutoSlide();
      });
    }

    if (nextArrow) {
      nextArrow.addEventListener("click", () => {
        nextSlide();
        if (!isManualCarousel) startAutoSlide();
      });
    }

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        const targetSlide = Number(thumbnail.dataset.slide);
        showSlide(targetSlide);
        if (!isManualCarousel) startAutoSlide();
      });
    });

    carouselImages.forEach((image) => {
      if (!image.complete) {
        image.addEventListener("load", scheduleArrowPosition);
      }
    });

    window.addEventListener("load", scheduleArrowPosition);
    window.addEventListener("resize", scheduleArrowPosition);

    showSlide(0);
    scheduleArrowPosition();
    if (!isManualCarousel) startAutoSlide();
  }
});
