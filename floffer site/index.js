//* playing with innerHtml hum log innerHtml ka use kr k html tags ko bhi change krskte hain means jesy k mein ne paragraph ko h4 tag mein badal dia

// const letschangeit= document.getElementById('second-para');
// letschangeit.innerHTML= "<h4> This is a car </h4>";

// const letsChange= document.getElementById('second-para');
// letsChange.innerText="Hy Guys";

const menuBarEl = document.getElementById("menuBar");
const menuMobileEl = document.querySelector(".menu-mobile");
const onClose = () => {
  menuMobileEl.classList.toggle("show_menu");
};

menuBarEl.addEventListener("click", () => {
  onClose();
});
