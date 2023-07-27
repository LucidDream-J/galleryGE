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
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../../images/heroImages/Stewart-min.jpg" alt="Art image">`;
  title.innerText = `David J Reed`;
  excerpt.innerHTML = `<p>Stewart  Scambler is a leading authority and teacher in ceramics and one of Western  Australia's most prominent wood-firers.&nbsp;  His ceramic forms are an exploration of his response to the land, the  underlying presence rather than the landscape.<p class="GEaddress"> They are about the emotional and  spiritual effect that the land has on the people within it and the stillness  that it generates within. The clay comes from Beverly in the &nbsp;Western Australian wheat belt. He hand-makes  the clay blend to give him the properties that are necessary for his work. The  wood that he burns comes from his property in York, The surfaces on his work  come from the fusion of wood ash (from the fuel) and the clay the work is made  from. These surface effects are only possible at the high temperature that he  works (1320 oC ) over 2-3 days firing. Ultimately the surfaces build  up by having the fire throwing ash and carbon onto them.</p> The works carry the  marks of their making and their fiery birth, with neither the form nor the  surface dominating.</p>
                          <p>The work in  this exhibition is a continuation of his exploration into his response to the  land&mdash;specifically the Western Australian arid areas-and how that influences  identity. </p>
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
