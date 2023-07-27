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
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../../images/artistsImages/crouch/2023Exhib/CCrouchAFWMid-min.jpg" alt="Art image">`;
  title.innerText = `Dr Christopher Crouch`;
  excerpt.innerHTML = `<p>Dr. Christopher Crouch has held professorial roles in Australian and Chinese art schools and his work is held in public and private collections in Australia. This is his seventh exhibition with Gallery East.</p>
<p>His past work has focused on parkland and urban trees, investigating their relationship to both nature and their social context. Critics have described him as ‘a consummate draughtsman’, drawing ironically on a realist tradition and making work that resembles ‘socialist realism in a slow motion car crash’.
</p>

<p>His work is held in the collections of Museo Internacional de Electrografia Universidad de Castilla la Mancha, Spain; The University of Liverpool, UK, the Liverpool School of Architecture, UK, Art Bank, Wesfarmers, Western  Australia, Edith Cowan University, and Qingdao Art Gallery, the People’s Republic of China.`;
  profile_img.innerHTML = `<img class="profile-img" src="../../images/lenin.jpg" alt="artist"></p>`;
  name.textContent = `Christopher Crouch`;
  date.textContent = `2 May   2022`;

  statementTitle.innerText = `Another floating world.`;
  exhibStatement.innerText = `Alienated and excluded from contemporary political life, the Japanese bourgeoisie of the Edo period created a ‘floating world’ of pleasure, living in a dream of a perpetual present without consequences. When the pleasures of the flesh and the consumption of goods became too much, there was always redemption to be found in nature. The art produced during this period is one of the great celebrations of what it is to be human, albeit in denial of the state violence playing out around the floating worlds of the aesthetic.

  Christopher Crouch’s new paintings dwell on our contemporary floating world, in which our perpetual present is one of aesthetic and emotional disruption, and in which the very fabric of nature is being torn apart, making redemption in nature an increasingly difficult task.  The paintings in Crouch’s ‘Another floating world’ series have a sensuousness about them that is constantly under siege as pictorial devices fracture the unity and logic of the composition. Perspectives vary on the same surface, images rest on the surface contradicting the illusion of pictorial space, and abstract voids rupture the aesthetics of naturalism.
  
  As usual Crouch has set Oulipian limits on the way in which the paintings’ narratives are generated. In this series Jupiter, the Green Man and Digory Kirke (the magician’s nephew from the eponymous book in the Narnia Chronicles who travelled between different realities by jumping into the bottomless pools in the wood between worlds) move in and out of the landscapes in their varying cultural and demonstrative manifestations.
  
  The paintings are meant to be read and taken seriously at the very same time as they undermine the processes by which that might happen. In that way they play with the homophonic pun of ‘the floating world’ in its Japanese form ‘Ukiyo’, which in ancient Buddhist texts refers to the material ‘sorrowful world’ that had to be escaped before spiritual enlightenment can begin. Alas, it appears there is no chance of spiritual redemption in travelling these worlds floating amidst the abys
   `;

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bgs_text.forEach((bgtxt) => {
    bgtxt.classList.remove("animated-bg-text");
  });
}
