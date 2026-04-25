const BUILD_DETAILS = {
  build1: {
    id: "build1",
    name: "The Aorus Master",
    price: 508000,
    image: "build1.png",
    url: "build.html?build=build1",
    title: "The Aorus Master - The Computer Shop",
    photos: [
      { src: "build1-case1.png", alt: "Build 1 Case Photo 1" },
      { src: "build1-case2.png", alt: "Build 1 Case Photo 2" },
      { src: "build1-case3.png", alt: "Build 1 Case Photo 3" }
    ],
    specs: [
      ["CPU", "Intel Core Ultra 9 285K"],
      ["GPU", "Aorus RTX 5090 Xtreme Waterforce 32GB"],
      ["RAM", "Corsair Dominator Titanium RGB 192GB (4x48GB) DDR5 7000MT/s"],
      ["Motherboard", "Gigabyte Z890 Aorus Master"],
      ["Cooler", "AORUS WATERFORCE II 360 ARGB"],
      ["Storage", "WD Black SN7100 500GB Gen4 NVMe"],
      ["Case", "Lian Li O11 Dynamic EVO XL"],
      ["Power Supply", "Gigabyte UD1600PM 1600W 80+ Platinum"]
    ]
  },
  build2: {
    id: "build2",
    name: "The Aorus Elite",
    price: 212000,
    image: "build2.png",
    url: "build.html?build=build2",
    title: "The Aorus Elite - The Computer Shop",
    photos: [
      { src: "build2-case1.png", alt: "Build 2 Case Photo 1" },
      { src: "build2-case2.png", alt: "Build 2 Case Photo 2" },
      { src: "build2-case3.png", alt: "Build 2 Case Photo 3" }
    ],
    specs: [
      ["CPU", "Core Ultra 7 265K"],
      ["Cooler", "AORUS WATERFORCE II 360 ARGB"],
      ["Motherboard", "Gigabyte Z890 Aorus Elite Wifi7"],
      ["RAM", "Corsair Dominator Titanium RGB 96GB (2x48GB) DDR5 7000MT/s"],
      ["Storage", "WD Black SN7100 500GB NVMe"],
      ["GPU", "Gigabyte RTX 5070 Ti Gaming OC 16GB"],
      ["Case", "Lian Li O11 Dynamic EVO RGB"],
      ["Power Supply", "P1000W 80+ Platinum AORUS ELITE"]
    ]
  },
  build3: {
    id: "build3",
    name: "Aorus Core",
    price: 117000,
    image: "build3.png",
    url: "build.html?build=build3",
    title: "Aorus Core - The Computer Shop",
    photos: [
      { src: "build3.png", alt: "Build 3 Photo 1" },
      { src: "build3-photo2.png", alt: "Build 3 Photo 2" },
      { src: "build3-photo3.png", alt: "Build 3 Photo 3" },
      { src: "build3-photo4.png", alt: "Build 3 Photo 4" },
      { src: "build3-photo5.png", alt: "Build 3 Photo 5" },
      { src: "build3-photo6.png", alt: "Build 3 Photo 6" },
      { src: "build3-photo7.png", alt: "Build 3 Photo 7" }
    ],
    specs: [
      ["CPU", "Core Ultra 5 245K"],
      ["Cooler", "AORUS WATERFORCE II 360 ARGB AIO Cooler"],
      ["Motherboard", "Gigabyte Z890 AORUS ELITE WIFI7"],
      ["RAM", "CORSAIR VENGEANCE RGB DDR5 48GB (2x24GB) 6000MT/s CL36"],
      ["Storage", "WD Black SN7100 500GB NVMe"],
      ["GPU", "GIGABYTE AORUS RTX 5060 Ti Elite 16GB"],
      ["Case", "Gigabyte C500 Panoramic Stealth"],
      ["Power Supply", "AORUS ELITE P850W 80+ Platinum"]
    ]
  },
  build4: {
    id: "build4",
    name: "The ROG Helios",
    price: 553000,
    image: "build4.png",
    url: "build.html?build=build4",
    title: "The ROG Helios - The Computer Shop",
    photos: [
      { src: "build4.png", alt: "Build 4 Photo 1" },
      { src: "build4-photo2.png", alt: "Build 4 Photo 2" },
      { src: "build4-photo3.png", alt: "Build 4 Photo 3" },
      { src: "build4-photo4.png", alt: "Build 4 Photo 4" },
      { src: "build4-photo5.png", alt: "Build 4 Photo 5" },
      { src: "build4-photo6.png", alt: "Build 4 Photo 6" },
      { src: "build4-photo7.png", alt: "Build 4 Photo 7" },
      { src: "build4-photo8.png", alt: "Build 4 Photo 8" }
    ],
    specs: [
      ["CPU", "Core Ultra 9 285K"],
      ["Cooler", "Asus ROG Ryujin III 360 ARGB Extreme"],
      ["Motherboard", "ASUS ROG MAXIMUS Z890 EXTREME"],
      ["RAM", "Corsair Dominator Titanium RGB 192GB (4x48GB) DDR5 7000MT/s"],
      ["Storage", "WD Black SN7100 500GB NVMe"],
      ["GPU", "Asus ROG Astral LC RTX 5090 32GB"],
      ["Case", "Asus ROG Strix Helios II"],
      ["Power Supply", "ASUS ROG Thor 1600W Titanium"]
    ]
  },
  build5: {
    id: "build5",
    name: "The Asus Strix",
    price: 209039,
    image: "build5.png",
    url: "build.html?build=build5",
    title: "The Asus Strix - The Computer Shop",
    photos: [
      { src: "build5.png", alt: "Build 5 Photo 1" },
      { src: "build5-photo2.png", alt: "Build 5 Photo 2" },
      { src: "build5-photo3.png", alt: "Build 5 Photo 3" },
      { src: "build5-photo4.png", alt: "Build 5 Photo 4" },
      { src: "build5-photo5.png", alt: "Build 5 Photo 5" },
      { src: "build5-photo6.png", alt: "Build 5 Photo 6" },
      { src: "build5-photo7.png", alt: "Build 5 Photo 7" }
    ],
    specs: [
      ["CPU", "Core Ultra 7 265K Tray"],
      ["Cooler", "Asus ROG Ryujin III 360 ARGB Extreme"],
      ["Motherboard", "ASUS ROG Maximus Z890 Hero"],
      ["RAM", "Corsair Vengeance RGB 64GB (2x32GB) 6000MT/s"],
      ["Storage", "WD Black SN7100 500GB NVMe"],
      ["GPU", "ROG Strix GeForce RTX 5070 Ti 16GB"],
      ["Case", "Corsair 6500D Airflow"],
      ["Power Supply", "ASUS ROG STRIX 1000W Platinum"]
    ]
  },
  build6: {
    id: "build6",
    name: "The Asus TUF",
    price: 123000,
    image: "build6.png",
    url: "build.html?build=build6",
    title: "The Asus TUF - The Computer Shop",
    photos: [
      { src: "build6.png", alt: "Build 6 Photo 1" },
      { src: "build6-photo2.png", alt: "Build 6 Photo 2" },
      { src: "build6-photo3.png", alt: "Build 6 Photo 3" },
      { src: "build6-photo4.png", alt: "Build 6 Photo 4" },
      { src: "build6-photo5.png", alt: "Build 6 Photo 5" },
      { src: "build6-photo6.png", alt: "Build 6 Photo 6" }
    ],
    specs: [
      ["CPU", "Core Ultra 5 245K"],
      ["Cooler", "Asus TUF Gaming LC III 360 ARGB LCD AIO"],
      ["Motherboard", "ASUS TUF GAMING Z890-PLUS WIFI 7"],
      ["RAM", "CORSAIR VENGEANCE RGB DDR5 48GB (2x24GB) 6000MT/s"],
      ["Storage", "WD Black SN7100 500GB NVMe"],
      ["GPU", "Asus TUF GAMING OC GeForce RTX 5060 Ti 16GB"],
      ["Case", "Asus TUF Gaming GT502"],
      ["Power Supply", "ASUS ROG Thor 850W Platinum II"]
    ]
  }
};

function restorePageState() {
  document.body.classList.remove("page-leaving");
  document.body.classList.add("page-visible");
}

window.addEventListener("pageshow", restorePageState);

document.addEventListener("DOMContentLoaded", () => {
  restorePageState();

  function populateBuildPage() {
    const titleElement = document.getElementById("build-title");
    const priceElement = document.getElementById("build-price");
    const specsList = document.getElementById("build-specs-list");
    const carouselTrack = document.getElementById("build-carousel-track");
    const thumbnailsContainer = document.getElementById("build-thumbnails");
    const addToCartButton = document.getElementById("build-add-to-cart");

    if (!titleElement || !priceElement || !specsList || !carouselTrack || !thumbnailsContainer || !addToCartButton) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const buildKey = params.get("build");
    const build = BUILD_DETAILS[buildKey];

    if (!build) {
      titleElement.textContent = "Build Not Found";
      specsList.innerHTML = "<p>This build does not exist.</p>";
      carouselTrack.innerHTML = "";
      thumbnailsContainer.innerHTML = "";
      addToCartButton.style.display = "none";
      document.title = "Build Not Found - The Computer Shop";
      return;
    }

    document.title = build.title;
    titleElement.textContent = build.name;
    priceElement.textContent = `${Number(build.price).toLocaleString()} EGP`;

    specsList.innerHTML = build.specs
      .map(([label, value]) => `<p><span>${label}:</span> ${value}</p>`)
      .join("");

    carouselTrack.innerHTML = build.photos
      .map((photo, index) => `
        <article class="featured-slide${index === 0 ? " active" : ""}">
          <div class="featured-image-frame">
            <img src="${photo.src}" alt="${photo.alt}">
          </div>
        </article>
      `)
      .join("");

    thumbnailsContainer.innerHTML = build.photos
      .map((photo, index) => `
        <button class="carousel-thumbnail${index === 0 ? " active" : ""}" type="button" data-slide="${index}" aria-label="Show photo ${index + 1}">
          <img src="${photo.src}" alt="${photo.alt}">
        </button>
      `)
      .join("");

    addToCartButton.dataset.id = build.id;
    addToCartButton.dataset.name = build.name;
    addToCartButton.dataset.price = String(build.price);
    addToCartButton.dataset.image = build.image;
    addToCartButton.dataset.url = build.url;
  }

  populateBuildPage();

  const pageLinks = document.querySelectorAll('a[href]');
  const toggles = document.querySelectorAll(".filter-toggle");
  const inputs = document.querySelectorAll('.filter-content input[type="checkbox"]');
const productsGrid = document.querySelector(".products-grid");
const sortButton = document.getElementById("sort-button");
const sortOptions = document.querySelectorAll(".sort-option");
const cards = document.querySelectorAll(".product-card");
const noResults = document.getElementById("no-results");

const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
const buyNowButtons = document.querySelectorAll(".buy-now-button");
const quantityControls = document.querySelectorAll(".quantity-control");

  const cartItemsContainer = document.getElementById("cart-items");
  const cartEmpty = document.getElementById("cart-empty");
  const cartSummary = document.getElementById("cart-summary");
  const cartTotal = document.getElementById("cart-total");
  const cartCheckoutButtons = document.querySelectorAll(".cart-checkout-button");
  const checkoutForm = document.getElementById("checkout-form");
  const checkoutEmpty = document.getElementById("checkout-empty");
  const checkoutSummary = document.getElementById("checkout-summary");
  const checkoutItemsContainer = document.getElementById("checkout-items");
  const checkoutTotal = document.getElementById("checkout-total");
  const checkoutCartData = document.getElementById("checkout-cart-data");
  const checkoutTotalData = document.getElementById("checkout-total-data");
  const checkoutSuccess = document.getElementById("checkout-success");
  const navCartCounts = document.querySelectorAll(".nav-cart-count");

  const carousel = document.querySelector(".featured-carousel");
  const track = document.querySelector(".featured-carousel-track");
  const slides = document.querySelectorAll(".featured-slide");
  const fills = document.querySelectorAll(".carousel-progress-fill");
  const thumbnails = document.querySelectorAll(".carousel-thumbnail");
  const carouselImages = document.querySelectorAll(".featured-image-frame img");
  const prevArrow = document.querySelector(".carousel-arrow-left");
  const nextArrow = document.querySelector(".carousel-arrow-right");
  const isManualCarousel = carousel && carousel.classList.contains("manual-carousel");

  let pageLoader = document.querySelector(".page-loader");

  if (!pageLoader) {
    pageLoader = document.createElement("div");
    pageLoader.className = "page-loader";
    pageLoader.innerHTML = `<div class="page-loader-spinner" aria-hidden="true"></div>`;
    document.body.appendChild(pageLoader);
  }

  function showPageLoader() {
    pageLoader.classList.add("active");
  }

  function hidePageLoader() {
    pageLoader.classList.remove("active");
  }

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

  cards.forEach((card, index) => {
    card.dataset.originalIndex = String(index);
  });

  let activeSort = "";

  function updateSortButtonLabel() {
    if (!sortButton) return;

    if (activeSort === "desc") {
      sortButton.textContent = "Highest to Lowest";
    } else if (activeSort === "asc") {
      sortButton.textContent = "Lowest to Highest";
    } else {
      sortButton.textContent = "Sort By";
    }
  }

  function applySort() {
    if (!productsGrid) return;

    const sortedCards = Array.from(cards).sort((a, b) => {
      const priceA = Number(a.dataset.price || 0);
      const priceB = Number(b.dataset.price || 0);

      if (activeSort === "desc") return priceB - priceA;
      if (activeSort === "asc") return priceA - priceB;

      return Number(a.dataset.originalIndex) - Number(b.dataset.originalIndex);
    });

    sortedCards.forEach((card) => {
      productsGrid.appendChild(card);
    });

    sortOptions.forEach((option) => {
      option.classList.toggle(
        "active",
        activeSort !== "" && option.dataset.sort === activeSort
      );
    });

    updateSortButtonLabel();
  }

  sortOptions.forEach((option) => {
    option.addEventListener("click", () => {
      showPageLoader();

      setTimeout(() => {
        const selectedSort = option.dataset.sort;

        if (selectedSort === "default") {
          activeSort = "";
        } else {
          activeSort = selectedSort;
        }

        applySort();
        hidePageLoader();
      }, 300);
    });
  });

  updateSortButtonLabel();

  function getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }

  function setCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function formatPrice(value) {
    return `${value.toLocaleString()} EGP`;
  }

  function renderCartBadge() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    navCartCounts.forEach((badge) => {
      badge.textContent = String(totalItems);
      badge.style.display = totalItems > 0 ? "inline-block" : "none";
    });
  }

  function renderCart() {
    if (!cartItemsContainer || !cartEmpty || !cartSummary || !cartTotal) {
      renderCartBadge();
      return;
    }

    const cart = getCart();
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartEmpty.style.display = "block";
      cartSummary.style.display = "none";
      cartTotal.textContent = "0 EGP";
      renderCartBadge();
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
        <div class="cart-item-info">
          <a class="cart-item-name" href="${item.url}">${item.name}</a>
          <div class="cart-item-meta">
            Unit Price: ${formatPrice(item.price)}
          </div>
          <div class="quantity-control cart-quantity-control">
            <button class="quantity-button cart-quantity-minus" type="button" data-id="${item.id}" aria-label="Decrease quantity">−</button>
            <input class="quantity-value cart-quantity-value" type="text" value="${item.quantity}" readonly aria-label="Quantity">
            <button class="quantity-button cart-quantity-plus" type="button" data-id="${item.id}" aria-label="Increase quantity">+</button>
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
    renderCartBadge();
    document.querySelectorAll(".cart-remove-button").forEach((button) => {
      button.addEventListener("click", () => {
        showPageLoader();

        setTimeout(() => {
          const updatedCart = getCart().filter((item) => item.id !== button.dataset.id);
          setCart(updatedCart);
          renderCart();
          hidePageLoader();
        }, 500);
      });
    });

    document.querySelectorAll(".cart-quantity-minus").forEach((button) => {
      button.addEventListener("click", () => {
        showPageLoader();

        setTimeout(() => {
          const updatedCart = getCart().flatMap((item) => {
            if (item.id !== button.dataset.id) return [item];
            if (item.quantity === 1) return [];
            return [{ ...item, quantity: item.quantity - 1 }];
          });

          setCart(updatedCart);
          renderCart();
          hidePageLoader();
        }, 300);
      });
    });

    document.querySelectorAll(".cart-quantity-plus").forEach((button) => {
      button.addEventListener("click", () => {
        showPageLoader();

        setTimeout(() => {
          const updatedCart = getCart().map((item) =>
            item.id === button.dataset.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );

          setCart(updatedCart);
          renderCart();
          hidePageLoader();
        }, 300);
      });
    });
  }

  function renderCheckout() {
    if (!checkoutForm || !checkoutEmpty || !checkoutSummary || !checkoutItemsContainer || !checkoutTotal || !checkoutCartData || !checkoutTotalData) {
      return;
    }

    const params = new URLSearchParams(window.location.search);

    if (params.get("submitted") === "true") {
      localStorage.removeItem("cart");

      if (checkoutSuccess) {
        checkoutSuccess.hidden = false;
      }

      checkoutForm.style.display = "none";
      checkoutSummary.style.display = "none";
      checkoutEmpty.style.display = "none";
      renderCartBadge();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const cart = getCart();
    checkoutItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      checkoutEmpty.style.display = "block";
      checkoutForm.style.display = "none";
      checkoutSummary.style.display = "none";
      checkoutTotal.textContent = "0 EGP";
      checkoutCartData.value = "";
      checkoutTotalData.value = "0 EGP";
      return;
    }

    checkoutEmpty.style.display = "none";
    checkoutForm.style.display = "block";
    checkoutSummary.style.display = "block";

    let total = 0;
    const orderLines = [];

    cart.forEach((item) => {
      total += item.price * item.quantity;
      orderLines.push(`${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}`);

      const row = document.createElement("div");
      row.className = "checkout-item";
      row.innerHTML = `
        <div>
          <div class="checkout-item-name">${item.name}</div>
          <div class="checkout-item-meta">
            Quantity: ${item.quantity}<br>
            Unit Price: ${formatPrice(item.price)}
          </div>
        </div>
        <div class="checkout-item-price">${formatPrice(item.price * item.quantity)}</div>
      `;

      checkoutItemsContainer.appendChild(row);
    });

    checkoutTotal.textContent = formatPrice(total);
    checkoutCartData.value = orderLines.join("\n");
    checkoutTotalData.value = formatPrice(total);
  }

  quantityControls.forEach((control) => {
    const minusButton = control.querySelector(".quantity-minus");
    const plusButton = control.querySelector(".quantity-plus");
    const valueElement = control.querySelector(".quantity-value");

    if (!minusButton || !plusButton || !valueElement) return;

    minusButton.addEventListener("click", () => {
      const currentValue = Math.max(1, Number(valueElement.value) || 1);
      valueElement.value = String(Math.max(1, currentValue - 1));
    });

    plusButton.addEventListener("click", () => {
      const currentValue = Math.max(1, Number(valueElement.value) || 1);
      valueElement.value = String(currentValue + 1);
    });

    valueElement.addEventListener("input", () => {
      valueElement.value = valueElement.value.replace(/[^0-9]/g, "");
    });

    valueElement.addEventListener("blur", () => {
      const currentValue = Math.max(1, Number(valueElement.value) || 1);
      valueElement.value = String(currentValue);
    });
  });

  addToCartButtons.forEach((button) => {
    button.textContent = "Add to Cart";

    button.addEventListener("click", () => {
      showPageLoader();

      setTimeout(() => {
        const cart = getCart();
        const existingCartItem = cart.find((item) => item.id === button.dataset.id);
        const purchaseActions = button.closest(".purchase-actions");
        const quantityValue = purchaseActions?.querySelector(".quantity-value");
        const selectedQuantity = Math.max(1, Number(quantityValue?.value || 1));

        if (existingCartItem) {
          existingCartItem.quantity += selectedQuantity;
        } else {
          cart.push({
            id: button.dataset.id,
            name: button.dataset.name,
            price: Number(button.dataset.price),
            image: button.dataset.image,
            url: button.dataset.url,
            quantity: selectedQuantity
          });
        }

        setCart(cart);
        renderCart();
        hidePageLoader();

        button.textContent = "Added to Cart";

        clearTimeout(button.resetTextTimeout);

        button.resetTextTimeout = setTimeout(() => {
          button.textContent = "Add to Cart";
        }, 3000);
      }, 500);
    });
  });

  buyNowButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showPageLoader();

      setTimeout(() => {
        const addToCartButton = document.getElementById("build-add-to-cart");
        const purchaseActions = button.closest(".purchase-actions");
        const quantityValue = purchaseActions?.querySelector(".quantity-value");
        const selectedQuantity = Math.max(1, Number(quantityValue?.value || 1));

        if (!addToCartButton) {
          hidePageLoader();
          return;
        }

        const checkoutCart = [
          {
            id: addToCartButton.dataset.id,
            name: addToCartButton.dataset.name,
            price: Number(addToCartButton.dataset.price),
            image: addToCartButton.dataset.image,
            url: addToCartButton.dataset.url,
            quantity: selectedQuantity
          }
        ];

        setCart(checkoutCart);
        renderCart();
        hidePageLoader();
        window.location.href = "checkout.html";
      }, 300);
    });
  });

  renderCart();
  renderCheckout();

  cartCheckoutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "checkout.html";
    });
  });

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

window.addEventListener("contextmenu", function (event) {
  event.preventDefault();
}, true);

document.addEventListener("dragstart", (event) => {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
  }
});

document.addEventListener("copy", (event) => {
  const selection = window.getSelection().toString();
  if (selection.length > 0) {
    event.preventDefault();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "F12" ||
    event.key === "PrintScreen" ||
    ((event.ctrlKey || event.metaKey) && ["s", "u", "c"].includes(event.key.toLowerCase())) ||
    (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(event.key.toLowerCase()))
  ) {
    event.preventDefault();
  }
});
