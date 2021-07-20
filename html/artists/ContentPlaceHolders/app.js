const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_text = document.querySelectorAll(".animated-bg-text");
setTimeout(() => {
  getData();
}, 2000);

function getData() {
  header.innerHTML = `<img class="card-img-top" src="./images/DS3.png" alt="">`;
  title.innerText = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = ` <p> Dr Christopher Crouch has held professorial roles in Australian and Chinese art schools and his work is held in public and private collections in Australia. This is his seventh exhibition with Gallery East.</p>
<p>His past work has focused on parkland and urban trees, investigating their relationship to both nature and their social context. Critics have described him as ‘a consummate draughtsman’, drawing ironically on a realist tradition and making work that resembles ‘socialist realism in a slow motion car crash’.

 .77885.331734386911950/1238430636242316/?type=3Lenins-exile-in-Perth-1925-1953</p>

<p>His work is held in the collections of Museo Internacional de Electrografia Universidad de Castilla la Mancha, Spain; The University of Liverpool, UK, the Liverpool School of Architecture, UK, Art Bank, Wesfarmers, Western  Australia, Edith Cowan University, and Qingdao Art Gallery, the People’s Republic of China.`;
  profile_img.innerHTML = ` <img src="https://randomuser.me/api/portraits/women/45.jpg" alt=""></p>`;
  name.textContent = `Christopher Crouch`;
  date.textContent = `August 1, 2021`;

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bgs_text.forEach((bgtxt) => {
    bgtxt.classList.remove("animated-bg-text");
  });
}
