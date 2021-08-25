const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");
const floatingBTN = document.querySelector(".footerBtn");
const buyArt = document.getElementById("buying");

// attach an event listener
floatingBTN.addEventListener("click", (e) => {
  // select the footer
  const footer = document.querySelector(".footer");

  // check if the class exists (active) then remove
  if (footer.classList.contains("active")) {
    // remove the class
    footer.classList.remove("active");
    // return the original text
    e.target.innerText = "Terms, Privacy, Currency & more";
  } else {
    // we add the active class to the footer
    footer.classList.add("active");

    // add the close text
    e.target.innerText = "X Close";
  }
});

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});

///////////////////////////// Not Available message///////////////////////////

document.querySelectorAll(".message").forEach((msg) => {
  msg.addEventListener("mouseover", () => {
    msg.classList.toggle("change");
    // msg.nextElementSibling.classList.toggle("change");
  });
});

// Hearts//////////////////////////////////////////////////

// const loveMe = document.querySelector(".loveMe");
// const times = document.querySelector("#times");
// let clickTime = 0;
// let timesClicked = 0;

// loveMe.addEventListener("click", (e) => {
//   if (clickTime === 0) {
//     clickTime = new Date().getTime();
//   } else {
//     if (new Date().getTime() - clickTime < 800) {
//       createHeart(e);
//       clickTime = 0;
//     } else {
//       clickTime = new Date().getTime();
//     }
//   }
// });

// function createHeart(e) {
//   const heart = document.createElement("i");
//   heart.classList.add("fas");
//   heart.classList.add("fa-heart");

//   const x = e.clientX;
//   const y = e.clientY;

//   const leftOffset = e.target.offsetLeft;
//   const topOffset = e.target.offsetTop;

//   const xInside = x - leftOffset;
//   const yInside = y - topOffset;

//   //   console.log(x, xInside, y, yInside);

//   heart.style.top = `${yInside}px`;
//   heart.style.left = `${xInside}px`;

//   loveMe.appendChild(heart);
//   times.textContent = ++timesClicked;

//   setTimeout(() => {
//     heart.remove();
//   }, 1000);
// }
////////////////////////////////// CLIENT GEOLOCATION ///////////////////////////////////////////////////
// if ("geolocation" in navigator) {
//   /* geolocation is available */
//   console.log("geolocation is available ");
//   navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position);
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     document.getElementById("latitude").textContent = lat;
//     document.getElementById("longitude").textContent = lon;
//   });
// } else {
//   /* geolocation IS NOT available */
//   console.log("geolocation is not available ");
// }
