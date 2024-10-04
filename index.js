const res_navbar = document.getElementById("res_navbar");
const res_navbar_openbtn = document.getElementById("res_navbar_openbtn");
const res_navbar_closebtn = document.getElementById("res_navbar_closebtn");
const navbar_logo = document.getElementById("navbar_logo");
const services_dropdownbtn = document.getElementById("services_dropdownbtn");
const services_dropdown = document.getElementById("services_dropdown");
const Services_openbtn = document.getElementById("Services_openbtn")
const Services_menu = document.getElementById("Services_menu")
const res_navbar_link = document.querySelectorAll(".res_navbar_link")
// Function for opening resnavbar
res_navbar_openbtn.addEventListener("click", () => {
  res_navbar_openbtn.style.display = "none";
  navbar_logo.style.display = "none";
  const contentHeight = res_navbar.scrollHeight + "px";
  res_navbar.style.height = "0";
  setTimeout(() => {
    res_navbar.style.height = contentHeight;
  }, 0);
});
// Function for closing resnavbar
res_navbar_closebtn.addEventListener("click", () => {
  res_navbar.style.height="0%"
  res_navbar_openbtn.style.display = "block"
  navbar_logo.style.display = "block";
  Services_menu.style.display = "none"
});
// Function For Opening Faq's Questions
const faq_card = document.querySelectorAll(".faq-card");
faq_card.forEach((curElem) => {
  curElem.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    curElem.classList.add("active");
  });
});
// Function For Opening Servies Menu
Services_openbtn.addEventListener("click",()=>{
  Services_menu.style.display = "flex"
})
// Function That Close Responsive navbar When Click on Responsive navbar link
res_navbar_link.forEach((curElem)=>{
  curElem.addEventListener("click",()=>{
    res_navbar.style.maxWidth = "0rem";
    res_navbar_openbtn.style.display = "block"
    navbar_logo.style.display = "block";
    document.body.style.overflowY = "scroll"
    Services_menu.style.display = "none"
  })
})

// Function For Handeling Scrolling Funcnality In Cards Section Services
document.addEventListener("DOMContentLoaded", function() {
  const leftArrow = document.getElementById('left_arrow');
  const rightArrow = document.getElementById('right_arrow');
  const cardsContainer = document.getElementById("cards");

  // Calculate the width of one card including gap
  const cardWidth = cardsContainer.querySelector('.card').offsetWidth + 16; // 16px for gap

  // Function to scroll left
  function scrollLeft() {
      cardsContainer.scrollBy({
          left: -cardWidth, // Scroll one card width to the left
          behavior: 'smooth'
      });
  }

  // Function to scroll right
  function scrollRight() {
      cardsContainer.scrollBy({
          left: cardWidth, // Scroll one card width to the right
          behavior: 'smooth'
      });
  }

  // Add event listeners to arrows
  leftArrow.addEventListener('click', scrollLeft);
  rightArrow.addEventListener('click', scrollRight);
});
document.addEventListener("DOMContentLoaded", function() {
  const leftArrow = document.getElementById('left_arrow_reviews');
  const rightArrow = document.getElementById('right_arrow_reviews');
  const cardsContainer = document.getElementById("cards_reviews");

  // Calculate the width of one card including gap
  const cardWidth = cardsContainer.querySelector('.card').offsetWidth + 16; // 16px for gap

  // Function to scroll left
  function scrollLeft() {
      cardsContainer.scrollBy({
          left: -cardWidth, // Scroll one card width to the left
          behavior: 'smooth'
      });
  }

  // Function to scroll right
  function scrollRight() {
      cardsContainer.scrollBy({
          left: cardWidth, // Scroll one card width to the right
          behavior: 'smooth'
      });
  }

  // Add event listeners to arrows
  leftArrow.addEventListener('click', scrollLeft);
  rightArrow.addEventListener('click', scrollRight);
});
