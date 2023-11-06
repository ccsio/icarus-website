// const teamCarousel = document.getElementById("teamCarousel");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");

// let currentIndex = 0;
// const totalTeamMembers = document.querySelectorAll(".team-member").length;
// const slidesToShow = Math.min(4, totalTeamMembers); // Number of slides to show (maximum 4)

// function updateCarousel() {
//     const slideWidth = teamCarousel.clientWidth / slidesToShow;
//     teamCarousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
// }

// function showSlide(index) {
//     currentIndex = index < 0 ? totalTeamMembers - slidesToShow : index >= totalTeamMembers - slidesToShow ? 0 : index;
//     updateCarousel();
// }

// prevBtn.addEventListener("click", () => {
//     showSlide(currentIndex - 1);
// });

// nextBtn.addEventListener("click", () => {
//     showSlide(currentIndex + 1);
// });

// window.addEventListener("resize", updateCarousel);
// updateCarousel();