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
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../../images/artistsImages/artBooks/2015/BTS39.jpg" alt="Art image">`;
  title.innerText = `Artists’ Books Exhibition 2015`;
  excerpt.innerHTML = `<p>Gallery East in conjunction with Gallery  Central<br>(North Metropolitan TAFE)</p>
          <p ><span> Aberdeen Street, Perth, Western Australia</span></p>
            <p><img src="../../images/artistsImages/artBooks/Central_logo_RGBLandscape.jpg" width="50%" height="50%" alt="menu"><img src="../../images/artistsImages/artBooks/Symbol.gif" alt="GElogo" width="20%" height="20%"></p><br>


    <div width="90%" >
    <h3 align="left">Participating Artists</h3>
    <blockquote>
    <p align="left"><span style="font-family:'Gill Sans MT','sans-serif'; font-size:11.0pt; "> <br>
      Venue:<strong> </strong>Gallery Central, 12 Aberdeen Street, Perth, Western Australia</span></p>
    <p align="center"><span style="font-family:'Gill Sans MT','sans-serif'; font-size:11.0pt; ">Exhibition Dates:&nbsp; <strong>7 March &ndash; 2 April&nbsp; 2015</strong></span> <br>
    </p>
    <h3 align="left">Participating Artists</h3>
    <p align="left"><em>Zimbabwe</em>:  Tafadzwa Gwetai<br>
      <br>
      <em>United States of America</em>: Cristina de Almeida<br>
      <br>
      <em>United  Kingdom</em>: Thurle Wright<br>
      <br>
      <em>Singapore</em>:&nbsp;Jesvin Yeo</p>
    <p align="left"><em>Lithunania</em>:  K&#281;stutis&nbsp;Vasili&#363;nas</p>
    <p align="left"><em>Italy</em>: Loretta Cappanera; Virginia Milici</p>
    <p align="left"><em>Germany</em>: Christiane Fichtner; Dorothea Fleiss</p>
    <h3 align="left"><br>
      <em>Australia</em></h3>
    <p align="left"><em>ACT</em>: Caren Florance; Nicci Haynes<br>
      <em>New South Wales</em>: Caelli Brooker;  Anne-Maree Hunter; Yvette Sullivan<br>
      <em>Queensland</em>: Fiona Dempster; Robyn Foster; Helen Malone; Stephen Spurrier<br>
      <em>South Australia</em>: Beth Evans;  Margaret Sanders<br>
      <em>Victoria</em>:  Debbie Hill; Petr Herel; Deborah Klein; Clyde McGill; Lesley O'Gorman</p>
    <h3 align="left"><br>
      <em>Western  Australia</em>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h3>
    <p align="left">Eve Arnold;  Kathy Aspinall; Denise Brown &amp; Gail Robinson; Ella Borrello; Kristen Brownfield;  Caitlin Dominey; Sandra Dunbar; Martin Heine &amp; Gunnar M&uuml;ller; Emmaline James; Shana James;  Pam Langdon; Nikki Lundy; Aliesha Mafrici; Elisa Markes-Young; Dragica Milunovic; Laura  Mitchell; J&aacute;nis Ned&eacute;la; Manon Raath; Stewart Scambler; Annette Seeman; Jessica Tan; John Teschendorff;  Paul Uhlmann; Rebecca Westlund; Angelyne Wolfe; Gera Woltjer </p>
  </blockquote>
  <blockquote>
    <h4 align="left">Between the Sheets: Artists. Books 2015 is held in parallel with the 7th International Artists Books exhibition in Vilnius, Lithuania</h4>
    <p align="left"><a herf="http://exhibitions.artistsbook.lt/2013/09/24/7th-international-artists-book-triennial-vilnius-2015"> <em>7th-international-artists-book-triennial-vilnius-2015</em></a></p>
    <p align="left">&nbsp;</p>
    <p align="center"><a href="#"><img src="../../images/artistsImages/artBooks/2015/BTS53.jpg" width="40%" 
  </blockquote>
</div>
`;
  profile_img.innerHTML = `<img class="profile-img" src="../../images/Symbol.gif" "alt="artist"></p>`;
  name.textContent = `David Forrest`;
  date.textContent = `7 March – 2 April  2015`;

  statementTitle.innerText = `Essay Pending`;
  exhibStatement.innerHTML = ` <div width="80%">  </div>`;

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bgs_text.forEach((bgtxt) => {
    bgtxt.classList.remove("animated-bg-text");
  });
}
