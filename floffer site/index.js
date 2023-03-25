const menuBarEl = document.getElementById("menuBar");
const menuMobileEl = document.querySelector(".menu-mobile");
const onClose = () => {
  menuMobileEl.classList.toggle("show_menu");

  if (menuMobileEl.classList.contains("show_menu")) {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.height = "auto";
    document.body.style.overflow = "visible";
  }
};

menuBarEl.addEventListener("click", () => {
  onClose();
});

const body = document.querySelector("body");
const overlay = document.createElement("div");
overlay.classList.add("overlay");
body.appendChild(overlay);

menuBarEl.addEventListener("click", () => {
  const icon = menuBarEl.querySelector("i");

  if (icon.classList.contains("bx-menu")) {
    overlay.style.zIndex = "1000000";
    overlay.style.display = "block";
  }
});

const cross = document.querySelector(".bx-x");

cross.addEventListener("click", () => {
  if (overlay.style.display === "block") {
    overlay.style.display = "none";
  }
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  onClose();
});

const menuLinks = document.querySelectorAll(".links");
menuLinks.forEach((value) => {
  value.addEventListener("click", () => {
    if (overlay.style.display === "block") {
      overlay.style.display = "none";
    }
  });
});
