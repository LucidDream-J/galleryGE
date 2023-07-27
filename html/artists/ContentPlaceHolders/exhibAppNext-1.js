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
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../images/2023JpImages/Cat 49.jpg" alt="Art image" title="Nathan Beard">`;
  title.innerText = `Opened by Russell Kelty, Curator, Asian Art, Art Gallery of South Australia`;
  excerpt.innerHTML = `<p>The long and rich heritage of print making in Japan is well suited to the Japanese temperament which prizes excellence, precise craftsmanship, respect for materials, artistic sensitivity and an eye for composition, balance and colour. 
</p>

<p>Japanese woodblock prints of the 18th and 19th Centuries record an exotic, vibrant, colourful and highly sophisticated society in a form which constitutes a significant element in the history of world graphic art. The imagery takes the viewer into a world of Kabuki plays and actors, courtesans and beautiful women, heroes of legend, historical battles, the Japanese landscape, and erotica. Moreover, their design and the highly skilled colour woodblock printing technique had an extraordinary and lasting influence on Western art and graphic design </p>

<p>This heritage of print making experienced a renaissance both between the two World Wars and into the modern era. As a result, Japanese prints of all periods have been collected ever since Japan opened to the West in the mid-19th Century and continues to resonate with collectors, artists and the viewing public today.
</p>

<table width="100%" border="0">
  <tr><h2>Gallery East in conjunction with Gallery  Central<br>(North Metropolitan TAFE)</h2>
          <h4 ><span> Aberdeen Street, Perth, Western Australia</span></h4>
          <p><img src="../../images/artistsImages/artBooks/Symbol.gif" alt="GElogo" width="20%" height="20%"> <br /><br />Gallery East <br />
            08 6498 9833 &nbsp; &nbsp;  0405 698 799  <br />
            admin@galleryeast.com.au <br /> 
            www.galleryeast.com.au </p><br />
          <p><img src="../../images/artistsImages/artBooks/TAFE-NMetro_colourSm.jpg" width="50%" height="50%" alt="Gallery Central"> <br /><br /> Gallery Central <br /> 
            08 9427 1318<br />
            gallery@central.wea.edu.au<br />
            www.gallerycentral.com.au
</p>
              
  </tr>`;

  profile_img.innerHTML = `<img class="profile-img" src="../images/David.jpg" alt="artist"> <p></p>`;
  name.textContent = `David Forrest`;
  date.textContent = `August 10th, 2023`;

  // statementTitle.innerText = `Catalogue Essay`;
  // exhibStatement.innerText = `Pending `;

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bgs_text.forEach((bgtxt) => {
    bgtxt.classList.remove("animated-bg-text");
  });
}
