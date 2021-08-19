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
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../../images/artistsImages/artBooks/2021/EMY.jpg" alt="Art image">`;
  title.innerText = `Artists’ Books Exhibition 2021`;
  excerpt.innerHTML = `<table width="100%" border="0">
  <tr><p>Gallery East in conjunction with Gallery  Central<br>(North Metropolitan TAFE)</p>
          <p ><span> Aberdeen Street, Perth, Western Australia</span></p>
            <p><img src="../../images/artistsImages/artBooks/TAFE-NMetro_colourSm.jpg" width="50%" height="50%" alt="menu"><img src="../../images/artistsImages/artBooks/Symbol.gif" alt="GElogo" width="20%" height="20%"></p>
  </tr>
  <br>
    <div width="90%" >
        <p><em>Between the Sheets, Artists&rsquo;  Books 2021,</em> forms the  fifth in the biennial series of exhibitions of artists' books organised by  Gallery East in Western Australia. Despite the social upheaval, disruption of  everyday lives, not least in art schools, and a sclerotic postal service, caused  by the pandemic, the high level of representation by leading international and  Australian artists working in this field experienced  over the last decade was sustained for the 2021 exhibition. We greatly welcome  the 65 works from 55 artists represented in this outstanding show.</p>
        <h3>Participating Artists</h3>
        <p><em>Australia</em></p>
        <p><em>New South Wales</em>: Caelli Jo Brooker;  , Peter McLean; Avril Makula; <br>
        Monica Oppen; Alison Smith;  Marama Warren; Ahn Wells. <br>
        <em>Queensland</em>: Robyn Foster;  Lorraine Lamothe; Gael E Phillips; Sue Poggioli; Rose Rigley. <br>
        <em>Victoria</em>: Lyn Ashby; Alex  Hamilton; Lesley O'Gorman: Peter Ward<br>
        <em>Western Australia: </em>Min Adlide; Jane  Button; Leslie Chalmers; <br>
        Shelley Cowper; Claire Davenhall;  Martin Dickie; Eimear Doyle; <br>
        Denise Gillies; &nbsp;Marie Haass; Chloe Henderson; Penny Hudson; <br>
        Shana James;&nbsp;Bor&oacute;ka  Egerhazi Kis; Guundie Kuchling; Pam Langdon; <br>
        Claire Lawson;  Lesley Le Grove; Pippa Lightfoot: Elisa Markes-Young; <br>
        Sarah Matheson:  Annemie McAuliffe; Clyde McGill; <br>
        rShona McGregor;  Lynne Mitchell; J&aacute;nis Ned&eacute;la; Amy Norma; Layli Rakhsha; David Jay Reed: &nbsp;Judy Rogers; Annette Seeman; Britta Sorensen; <br>
        Gabriel Stevens;  John Teschendorff, Paul Uhlmann; Vanessa Wallace; <br>
        Gera Woltjer;  Christopher Young.</p>
        <p><em>Brazil</em>: Grupo Gralha Azul<br>
          <em>Germany: </em>Christiane Fichtner;  Constanze Kreiser <br>
          <em>Italy</em>: Virginia Milici<br>
          <em>Lithunania</em>:&nbsp;K&#281;stutis&nbsp;Vasili&#363;nas</p>
    
    </div>
  
      <p><span><a href="#"> Paul Uhlmann's foreward to the exhibit -- CNA</a></span></p>
</div>
`;
  profile_img.innerHTML = `<img class="profile-img" src="../../images/David.jpg" "alt="artist"></p>`;
  name.textContent = `David Forrest`;
  date.textContent = `30 April 2021`;

  statementTitle.innerText = `Introduction by Dr Christopher Crouch`;
  exhibStatement.innerHTML = ` <div width="80%"><blockqoute>
  The artist&rsquo;s book has many formal manifestations that  celebrate the essence of the book in some cases and in others pushes it to the  edge of comprehensibility. There are a bevy of artists testing the potential of  the book as a creative form, mirrored by a cluster of curators and scholars recording  and analysing their work. In this context this exhibition is a snapshot of  creativity in the contemporary field of practice where the personal world of  the creative individual is thrown open for examination by a wider public and  set against current aesthetic and sociological presumptions. The exhibition is the  dialogue between the particular nature of the individual book and its artist  originator and the general discourse that surrounds it, made public. What interests  me is observing how individual creative approaches challenge and confirm the  practices that act as the foundation on which these activities take place. <br>
  Ann  Moeglin-Delcroix has argued that the  importance of the artist's book lies in in its generally modest form and size which  makes it possible to reflect intimately on the place of art in a way often  denied us by the more theatrical forms of institutional art exhibitions. Thus,  she says, it is the intimacy of the artist&rsquo;s book that allows contemporary art  to find a purpose in everyday life. She goes further, suggesting that the  artist's book, by proposing a kind of democratic economy of art, offers an  alternative to the exclusivity of the contemporary art market (1). My following observations are more modest and are more  concerned with the typologies of the artist book (2) and how that allows us to  find meaning in them.<br>
  How is a book  made by an artist different from an artist&rsquo;s book? I think the answer lies in  the dialogue that the maker has with the form of the book. My observations rest  on a two fundamental questions - does the book we are engaging with reflexively  engageme with the book&rsquo;s institutional form and history? When we look at what  is being said and how it is being said, does the book itself become part of  what is being expressed or discussed? Playing with the rules inside and outside  the systems of practice within any field causes tensions that can be creative  or destructive, and I would suggest that part of the skill of the artist&rsquo;s book  is to play on the tensions between traditional and radical practices.<br>
  From this position I would argue  that William Blake&rsquo;s astonishing handcrafted books, <em>Songs of Innocence and  Experience</em> for example, are not aesthetic investigations of the nature of  the book itself. His books were not a reinvention of either art or the book. He  saw his work as an intimate part of the evolving chronology of both the book  and art. The book&rsquo;s form remained unquestioned, he did not see himself engaging  in a discursive relationship with it. &nbsp;The content of his books, the textual and  pictorial imagery, can be taken out of the formal, physical vehicle of its presentation  and whilst this might diminish the original book&rsquo;s aesthetic dimension it does not  render them incomprehensible. While Blake&rsquo;s books were rich in pictorial  imagery that reinforced the text, and while the radical processes and design of  the books contribute significantly to the text&rsquo;s meaning and aesthetic  experience, they nevertheless remain books, grounded in the technologies of  book production and the expectations of what the book form might be.<br>
  Towards the other end of the  continuum of books made by artists and the artist&rsquo;s book, the book form becomes  subsumed under the formal categories of artworks. In Anselm Kiefer&rsquo;s case,  sculpture.&nbsp; In <em>Zweistromland/The high  priestess (</em>1986-89) Kiefer&rsquo;s initial iteration of his huge books, 200  hundred books with pages made of lead sheets were displayed on a steel  bookshelf nearly five metres tall and nine metres long. The books contain  imagery on every page, but functionally they are almost impossible to read. As  he developed these lead books they became purely sculptural, stacked in piles on  gallery floors. They became symbolic representations of books rather than books  themselves. <br>
  In  developing a practical and theoretical idea of the artist&rsquo;s book the intent  isn&rsquo;t to say definitively this is, or this isn&rsquo;t, an artist&rsquo;s book and to kill  the viewers aesthetic experience, but rather to enhance that experience by  engaging with the subtleties of form and its relationship to meaning. To this  end it is possible to frame the artist&rsquo;s book in a set of dynamic, methodological  dialogues. Firstly, the idea of the altered or transformed book, where the  delight lies in the way in which the physical function and intellectual intent  of the book has been toyed with. Secondly, the anti-book, where the intent of  the book has been negated, and where notions of illegibility, real and  metaphorical, are deployed. Thirdly, the book as object, where its intrinsic processes  and aesthetic potential is celebrated. This does not preclude many other ways  of making and looking, all of which enrich our imaginative and critical  sensibilities. <br>
  I&rsquo;ll conclude by  paraphrasing Moeglin-Delcroix in asserting that the artist's book changes not  only approaches to artistic practice, but also ways of thinking about the book  itself. The particular choice of the book as a medium of creation is productive  for the artist and the cultural analyst in shining a light on the general  relationship between contemporary art and tradition and further proposing a  critical reflection on the place that art occupies - or could occupy - in the  social realm.</blockqoute></div>
  <p><strong>1. Ann Moeglin-Delcroix (2014) <em>Le Livre d'artiste : quels  projets pour l'art?</em> Paris&nbsp;: Incertain  Sens.</h1>
<p><strong>2. I direct the reader to Duncan Chappell&rsquo;s essay <em>Typologising  the artist&rsquo;s book</em>. Art Libraries Journal, volume 28, issue 4, 2003, pp 12  -20. </strong></p>`;

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bgs_text.forEach((bgtxt) => {
    bgtxt.classList.remove("animated-bg-text");
  });
}
