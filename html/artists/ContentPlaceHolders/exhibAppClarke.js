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
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../../images/artistsImages/clarke/HC5.jpg" alt="Art image">`;
  title.innerText = `Helen Clarke`;
  excerpt.innerHTML = `<p> <strong> Helen Clarke </strong>  creates artworks using the mediums of drawing, painting and printmaking as well as teaching people to use printmaking as a creative medium to explore visual ideas 
</p>
<p>
She is interested in the relationship between the everyday world and memories; between people, places and stories; how fragments of objects can produce fragments of memories.
</p>
The flora and fauna of Australia fascinate her: their uniqueness, how they have evolved, how they relate to each other and how the landscape has such a profound influence on many people.
She studies, grows and photographs Australian flora. 
<p>
She wants to create more understanding of the necessity to conserve our unique environment. 
</p>
<p>“The artworks in this exhibition are a result of a visit to Finland few years ago.</p>
<p>A chance meeting early in 2013 with Finnish artist, Jaana Löonroos, led to a visit to Finland and artist residency in 2014.</p>
<p>I was most interested to see the differences between the climate and landscape of Australia and Finland.  These differences are very obvious although the people I met in Finland have very similar attitudes to those in Australia.   One reason could be that the climate in both places can be very harsh and we all adapt by insulating ourselves from the climatic extremes.</p>
<p>Being a country so close to the North Pole, the amount of sunlight each day has a profound influence on the lives of the people.  There are just a few hours of weak sunlight on the southern horizon in midwinter while in midsummer, there is no time of complete darkness.  The land of the midnight sun exists</p>
<p>I considered the plant life of Finland and how they are part of Finnish life. Flowers in summer are very important because of the bright colours.  Many of the plants are not purely Finnish but are from southern Europe and other countries.  The smaller flowering plants and shrubs are all fast growing, coping with the seasonal changes - they grow, produce flowers, fruit and seeds and die off over a very short time span. </p>
<p>The landscape is fascinating and it is easy to see where Scandinavian/Finnish design originates.  The forests have minimal species – mainly pine, birch and beech that undergo many foliage changes during the seasonal cycles, all marked by the amazing vertical trunks of the trees. I loved the bright colours of painted timber houses, the use of granite in all types of structures and the preservation of culture in museums and in everyday life.  Although other nearby countries and cultures influence Finland, the character of the Finnish people stands alone.</p>
<p>It was a mind changing experience that continues to influence the creation of my artworks.”
Helen Clarke</p>

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
