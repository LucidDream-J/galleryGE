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
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../../images/artistsImages/reed/images2022/20-min.jpg" alt="Art image">`;
  title.innerText = `David J Reed`;
  excerpt.innerHTML = `
   <p>During my time in China, I became extremely interested in Chinese ancient mythology. My first series concentrated on the Chinese gods, but in this current series, I have looked at the mythological coupling of flora and fauna, which can forecast good omens for the owners of the artworks. For this series I use computer applications to create and paint the images. The background colours were inspired by the artworks of Roger Dean and are variable.</p>
   <p>While living in New York State, I began the shadow series and continued the set after I went to China. This sampling is meant to depict humorous situations, using shadows as the subject. The initial concept was inspired by the photography of Henri Cartier-Bresson, and again, I have used computer applications to create and paint the images. </p>
   <p>The artwork, The Cycle of Life-Birth was inspired by a dream.”</p>

<p class="GEaddress" style="text-align:justify;">&nbsp;</p>
`;
  profile_img.innerHTML = `<img class="profile-img" src="../../images/David.jpg" "alt="artist"></p>`;
  name.textContent = `David Forrest`;
  date.textContent = `August 1, 2021`;

  statementTitle.innerText = ``;
  exhibStatement.innerHTML = ` <h3 class="heading-tertiary u-margin-bottom-small">
                For further information, please contact David Forrest on 0405 698 799
            </h3>`;

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bgs_text.forEach((bgtxt) => {
    bgtxt.classList.remove("animated-bg-text");
  });
}
