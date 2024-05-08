window.addEventListener("scroll", function () {
  var header = document.querySelector(".header-inner");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const galleryImages = document.querySelectorAll(".gallery-image");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeModal = document.querySelector(".close");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    if (window.innerWidth >= 500) {
      // Перевірка ширини вікна
      modal.style.display = "flex";
      modalContent.src = image.src;
    }
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
