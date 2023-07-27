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
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../../images/artistsImages/reed/pear.jpg" alt="Art image">`;
  title.innerText = `David J Reed`;
  excerpt.innerHTML = `<p>“Putting text and imagery together, to create an artistic message, has been part of my life from the day I embarked on a career as a graphic designer. For most designers, imagery and text are intermixable, depending on what the message is meant to convey. Sometimes the text supports the image and sometimes vice versa. .</p>
                          <p>I became aware of the power of the juxtaposition of unrelated text and images while I was traveling in Japan. Upon reaching an Inn, I decided to use the men's toilet. Just above the toilet handle was a sign that read, ‘When finished pee, turn cock right’. For the next six years, I endeavoured to create artworks that combined ‘Japlish’ with Japanese imagery, to create pictures which were generally amusing or ironic, but also could make social statements.  </p>
   <p>I used Print Gocco, a type of silk-screening process, to replicate the original hand drawn images. I then tore and burnt the pages, and added a seal to represent the dying traditions, as Japan continues to modernize.</p>

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
