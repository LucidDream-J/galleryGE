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
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../../images/artistsImages/artBooks/2019/55.jpg" alt="Art image">`;
  title.innerText = `Artists’ Books Exhibition 2019`;
  excerpt.innerHTML = `<table width="100%" border="0">
  <tr><p>Gallery East in conjunction with Gallery  Central<br>(North Metropolitan TAFE)</p>
          <p ><span> Aberdeen Street, Perth, Western Australia</span></p>
            <p><img src="../../images/artistsImages/artBooks/TAFE-NMetro_colourSm.jpg" width="50%" height="50%" alt="menu"><img src="../../images/artistsImages/artBooks/Symbol.gif" alt="GElogo" width="20%" height="20%"></p>
  </tr>
  <br>
    <div width="90%" >
    <h3 align="left" class="style31">Participating Artists</h3>
    <blockqoute>
    <p class="style31"><strong>Australia:</strong><br>
      <strong>New South Wales: Lee Bethel; Caelli Jo Brooker; Lisa Giles; Avril  Makula; Jane Simon; Yvette Sullivan;  Marama Warren.</strong><br>
      <strong>Queensland:  Robyn Foster; Rhi Johnson; Lorraine Lamothe; Sue Poggioli. </strong><br>
      <strong>South Australia; Beth Evans</strong><br>
      <strong>Victoria: Lyn Ashby; Alex Hamilton; Petr Herel; Debbie Hill; Deborah Klein; Lesley O'Gorman: Peter  Ward</strong><br>
      <strong>Western Australia: Gabriela Antonini; Susanna Castleden; Molly Coy, Christopher  Crouch; &nbsp;Claire Davenhall; Martin Dickie;  Shanti Gelmi; Louise Grimshaw; &nbsp;Chloe Henderson; Penny Hudson; Shana James; &nbsp;Pam Langdon; Lesley Le Grove; Monica Lukowska;  Elisa Markes-Young; Cherish Marrington; Jacky McFarlane; Clyde McGill; Shona  McGregor; Melanie McKee; Dragicia Milunovic; J&aacute;nis Ned&eacute;la; Annette Nykiel; Sherry Paddon; Marcella  Polain; Layli Rakhsha; Judy Rogers; Catherine  Schultz; &nbsp; Annette Seeman; Anne Shilo; Lydia Trethewey;  Paul Uhlmann; Vanessa Wallace; Gera Woltjer.</strong><br>
      Brazil: <strong> Grupo Gralha Azul</strong><br>
      <strong>Germany:</strong> <strong>Dorothea Fleiss</strong><br>
      Italy: <strong>Virginia Milici</strong><br>
      <strong>Latvia:</strong> <strong>Anda Munkevica</strong><br>
      Lithunania:  <strong>K&#281;stutis&nbsp;Vasili&#363;nas</strong><br>
      United  States of America: <strong>Cristina de Almeida</strong> </p>
    <p class="style31">&nbsp;</p>
  </blockquote>
  <p>&nbsp;</p>
  <p align="center"><br>
  Paul Uhlmann is an artist and Senior Lecturer at Edith Cowan University, he is<br>
  coFounder  of <em>fold</em> (artists books and editions)  with Marcella Polain<br>
  and  his own artist&rsquo;s book imprint is <em>trembling  hands</em>.</p>

`;
  profile_img.innerHTML = `<img class="profile-img" src="../../images/symbol.gif" "alt="artist"></p>`;
  name.textContent = `Paul Uhlmann`;
  date.textContent = `30 April 2019`;

  statementTitle.innerText = `Foreward by Paul Uhlmann`;
  exhibStatement.innerHTML = ` <div width="80%"> 
<p align="center"><strong>Incomprehensible objects: books made by artists </strong></p>
<p>Two decades  before the end of the 20th century within the Art Nouveau buildings of Canberra  School of Art I was among a small group of students who stood gaping at an odd  creation. What lay before us was something unusual. Within the folds of grey  Ingres paper a Navajo poem was printed using letterpress and accompanying this,  seven prints made from broken pieces of slate printed in gloss black so that the  images appeared rather like faint disappearing fossils. The illusion of light  emanating from the cracks and symbols on the stones arose from luminous dust &ndash; these  images of the invisible looked like successive moments of the creation of life  itself. I had never seen anything like this; I was told this object was an  artist&rsquo;s book. </p>
<p>Slowly, rather organically, the workshop known as Graphic  Investigation began an intense focus on artist book creation which was to last  20 years. Whether anyone consciously knew it or not, the students and staff  were all active researchers within this field of endeavour. Paper was made and  milled within the school, Letterpress installed, presses arranged. Experimental  ideas were tested using material means for example, photocopiers were tampered  with so that fine carbon power could be mixed for new colours &ndash; deeper  blue-blacks &ndash; to produce marvellous prints on Japanese paper. The head of  workshop, Czech artist Petr Herel, was part of a European tradition that  stretched back to the Gutenberg revolution and he brought a focus on the  interplay of poetry with image; students were sometimes given a project whereby  they created images for a text they had not yet read. Being one of the artists  on production, one could observe close at hand how reading was slowed down;  setting tiny hot metal type letters backwards and upside down created a kind of  mirror world within the mind so that the poem became a material manifestation;  images created for this world were ambiguous but linked to key obsessions of each  student. This materiality was evident later when prints were placed in dialogue  with the texts. </p>
<p>At that time, the concept of the artist&rsquo;s book seemed  a world unto itself existing within small circles of makers; it was an  experience to try and sell a book to a library or an institution, for there was  no real benchmark that had been established; these books were oddities which  were incomprehensible to most librarians, art dealers and museums. It is  possible to look at something and to not really see it &ndash; to be lost for words  and meaning. Early on however I noted an odd trait of human nature &ndash; the need  for factions and groups within the art world to claim the title of artists&rsquo;  books for themselves &ndash; to declare their model as the one true way or form of  books. Hence, we have the endless list of classifications; altered books; the  book as unopenable object; livre de peintre (the beautiful painter&rsquo;s book); the  book as performance; the book as skin and body; the book as memory object; the  book as archive; the book as concept and many more. Since my initial encounter,  artists&rsquo; books have grown exponentially and become an international phenomenon;  many attempts have been made to define the characteristics of an artist&rsquo;s book;  to tame it, to give it shape but an artist&rsquo;s book &ndash; a book made by an artist &ndash;  will defy classification, just as all artists strive to develop their own  unique voice. It is the wrong question to ask what an artist&rsquo;s book is rather  one should ask questions about the creative process that drives the development  of such objects.<br>
  For the poet Arthur Rimbaud the creative process was fuelled  by a systematic &lsquo;derangement of the senses&rsquo;; Max Ernst worked on ways to create  distance so that there was no author of the work, rather he watched as  frottages and collages almost formed themselves; Roni Horn found a universe  within Iceland and travels there regularly from her home in New York, her  artists&rsquo; books reveal her embodied sensations, her isolation and the sense that  landscape reveals something essential to human nature. Contemporary Australian  artist Alexander Hamilton has made exact facsimiles of his notebooks which are  always carried with him; these pages depict the process of cancer as it moved  through his body and as the drugs attacked the cells &ndash; such miro-battles were  tested with drawings, he also made studies for his ice trumpet &ndash; the ephemeral  music captured with his own graphic language. These examples and more illuminate  the creative drive which strives to understand what it is to be human. For amongst  the curious topology of artists&rsquo; books there is exact technical polish  contrasted with messy clumsy invention; so long as there is the possibility of astonishment,  there is value in achieving the incomprehensible, to make someone look again,  look closer. </p>
<p>August 2019</p>
<p>&nbsp;</p> </div>`;

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bgs_text.forEach((bgtxt) => {
    bgtxt.classList.remove("animated-bg-text");
  });
}
