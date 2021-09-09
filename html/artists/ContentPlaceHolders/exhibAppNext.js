const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");
const statementTitle = document.getElementById("statement");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_text = document.querySelectorAll(".animated-bg-text");
const exhibStatement = document.querySelector(".statement");
setTimeout(() => {
  getData();
}, 2000);

function getData() {
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../images/artistsImages/nextExhib/i0TA21.png" alt="Art image">`;
  title.innerText = `Five eminent  Western Australian visual artists `;
  excerpt.innerHTML = `<p>ASIAN TAKEAWAYS features the work of five eminent  Western Australian visual artists and sculptors who have  used clay as a medium for this exhibition
</p>

<p>Each artist has undertaken residencies in Asia, including  China. Their highly skilled art work undoubtedly reflects their first hand experiences  of working along side art practitioners in these countries and the practicalities of craft and art  impacting on the everyday lives of peoples both here and in those Asian countries.`;
  profile_img.innerHTML = `<img class="profile-img" src="../images/David.jpg" alt="artist"></p>`;
  name.textContent = `David Forrest`;
  date.textContent = `September 10th, 2021`;

  statementTitle.innerText = `Catalogue Essay`;
  exhibStatement.innerText = `Pending `;

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bgs_text.forEach((bgtxt) => {
    bgtxt.classList.remove("animated-bg-text");
  });
}
