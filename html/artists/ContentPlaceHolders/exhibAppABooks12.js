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
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../../images/artistsImages/artBooks/2012/17.jpg" alt="Art image">`;
  title.innerText = `Artists’ Books Exhibition 2012`;
  excerpt.innerHTML = `
            <p><img src="../../images/artistsImages/artBooks/Swanlogo.jpg" width="50%" height="50%" alt="menu">&nbsp;&nbsp;&nbsp;&nbsp;<img src="../../images/artistsImages/artBooks/Symbol.gif" alt="GElogo" width="20%" height="20%"></p><br>
            <p class="style71">Gallery East in partnership with the City of Swan presents Between the Sheets: 2012 Artists' Books Exhibition</p>
    <div width="90%" >
      <h3 align="left">Participating Artists</h3>
                  <blockquote>
                    <p align="left"><span class="style65">Zimbabwe:</span><span class="style63"> Arthur Azevedo; Virginia Chihota; Tadadzwa Gwetai; Masimba Hwati; 
                            Helen Lieros; Wallen Mapondera; Munyaradzi Mazarire; Gina Maxim; 
                          Gareth Nyandoro </span></p>
                    <p align="left"><span class="style65">USA</span></span><span class="style63">: Mary-Ellen Campbell; Cristina de Almeida; Amandine Nabarra-Piomelli</span> 
                      </span></p>
                    <p align="left" class="style63"><span class="style56">United Kingdom</span>: Thurle Wright; Johan Hybschmann; Aine Scannell </p>
                    <p align="left" class="style63"><span class="style56">Singapore</span>: Jesvin Yeo </p>
                    <p align="left" class="style63"><span class="style56">Lithunania</span>: Roberta Vaigeltait&eacute;; Kestutis Vasiliunas </p>
                    <p align="left" class="style63"><span class="style56">Italy:</span> Loretta Cappanera </p>
                    <p align="left" class="style63"><span class="style56">Australia</span>: Barb Adams; Kathy Aspinall; Caelli Brooker; Denise Brown; Janet Carter; 
                        Jo Davall; Fiona Dempster; Beth Evans, Roger Goodman; Peter Hill; 
                       Helen Hopcroft; Anne-Maree Hunter; Pam Langdon; Helen Malone; 
                        Elisa Markes-Young; Clyde McGill; Dragica Milunovic; Laura Mitchell; 
                       Janis Nedela; Annette Seeman; Stephen Spurrier &amp; John Teschendorf; 
                      Kate Stead &amp; Caitlin Reilly; Kate Thompson &amp; Stephen Smith; Gera Woltjer </p>
                  </blockquote>
</div>
`;
  profile_img.innerHTML = `<img class="profile-img" src="../../images/Symbol.gif" "alt="artist">`;
  name.textContent = `David Forrest`;
  date.textContent = `13 January - 5 February  `;

  statementTitle.innerText = `Essay pending`;
  exhibStatement.innerHTML = ` <div width="80%"> </div>`;

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bgs_text.forEach((bgtxt) => {
    bgtxt.classList.remove("animated-bg-text");
  });
}
