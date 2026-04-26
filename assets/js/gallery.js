(() => {
  const modal = document.querySelector("[data-gallery-modal]");
  if (!modal) return;

  const image = modal.querySelector("[data-gallery-modal-image]");
  const placeholder = modal.querySelector("[data-gallery-modal-placeholder]");
  const title = modal.querySelector("[data-gallery-modal-title]");
  const caption = modal.querySelector("[data-gallery-modal-caption]");
  const closeButtons = modal.querySelectorAll("[data-gallery-close]");
  const masthead = document.querySelector(".masthead");
  let activeCard = null;
  let mastheadDisplay = "";

  const openModal = (card) => {
    activeCard = card;
    title.textContent = card.dataset.title || "";
    caption.textContent = card.dataset.caption || "";

    if (card.dataset.src) {
      image.src = card.dataset.src;
      image.alt = card.dataset.alt || card.dataset.title || "";
      image.hidden = false;
      placeholder.hidden = true;
    } else {
      image.removeAttribute("src");
      image.hidden = true;
      placeholder.textContent = card.dataset.title || "";
      placeholder.hidden = false;
    }

    modal.hidden = false;
    document.body.classList.add("gallery-modal-open");
    if (masthead) {
      mastheadDisplay = masthead.style.display;
      masthead.style.display = "none";
    }
    modal.querySelector(".gallery-modal__close").focus({ preventScroll: true });
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("gallery-modal-open");
    if (masthead) masthead.style.display = mastheadDisplay;
    if (activeCard) activeCard.focus({ preventScroll: true });
  };

  document.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card));
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
})();
