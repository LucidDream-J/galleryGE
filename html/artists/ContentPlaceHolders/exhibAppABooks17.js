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
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../../images/artistsImages/artBooks/2017/AB23web.jpg" alt="Art image">`;
  title.innerText = `Artists’ Books Exhibition 2017`;
  excerpt.innerHTML = `<p>Gallery East in conjunction with Gallery  Central<br>(North Metropolitan TAFE)</p>
          <p ><span> Aberdeen Street, Perth, Western Australia</span></p>
            <p><img src="../../images/artistsImages/artBooks/TAFE-NMetro_colourSm.jpg" width="50%" height="50%" alt="menu"><img src="../../images/artistsImages/artBooks/Symbol.gif" alt="GElogo" width="20%" height="20%"></p><br>
            <p>Gallery East in conjunction with Australian Galleries, </p>
            <p align="left" class="MsoNormal">28 Derby Street, Collingwood, Victoria</p>


    <div width="90%" >
    <h3 align="left">Participating Artists</h3>
    <blockqoute>
    <p align="left" class="MsoNormal"><strong>Australia</strong>:</p>
    <p align="left" class="MsoNormal"><strong>ACT</strong>:  Nan Morphett; Joy Tonkin</p>
    <p align="left" class="MsoNormal"><strong>New South Wales</strong>: Lee Bethel; Julie Bookless; Caelli Jo Brooker; Anne-Maree Hunter; Yvette Sullivan.</p>
    <p align="left" class="MsoNormal"><strong>Queensland</strong>: Lorraine Lamothe; Helen Malone; Jack Oudyn; Stephen Spurrier</p>
    <p align="left" class="MsoNormal"><strong>South Australia</strong>: Beth Evans</p>
    <p align="left" class="MsoNormal"><strong>Victoria</strong>: Barb Adams; Debbie Hill; Deborah Klein; Lesley O'Gorman</p>
    <p align="left" class="MsoNormal"><strong>Western Australia</strong>: Eve Arnold; Zoe Barry; Bina Butcher-Monsees; Helen Clarke; Claire Davenhall; Martin Dickie; Sandra Dunbar; Tania Ferrier; Caroline Goodlet; Jane Grierson; Penny Hudson; Bront&euml; Jones; Shana James; Rebecca Jensen &amp; Sophie La Maitre; Mari Katayama; Daniel Kristjansson; Pam Langdon; Lesley Le Grove; Eden Lennox; Elisa Markes-Young; Clyde McGill; Shona McGregor; J&aacute;nis Ned&eacute;la; Annette Nykiel; Matthew Pope; Adele Price; Layli Rakhsha; Jennifer Sadler; Cim Sears; Annette Seeman; John Teschendorff; Paul Uhlmann; Vanessa Wallace; Rebecca Westlund; Gera Woltjer</p>
    <p align="left" class="MsoNormal">&nbsp;</p>
    <p align="left" class="MsoNormal"><strong>Brazil</strong>: Jussara Pires</p>
   
    <p align="left" class="MsoNormal"><strong>Canada</strong>: Lorraine Kwan</p>
   
    <p align="left" class="MsoNormal"><strong>Chile</strong>: Magdalena Cordero</p>
    
    <p align="left" class="MsoNormal"><strong>England</strong>: Thurle Wright</p>
   
    <p align="left" class="MsoNormal"><strong>Italy</strong>: Virginia Milici</p>
  
    <p align="left" class="MsoNormal"><strong>Lithunania</strong>: K&#281;stutis&nbsp;Vasili&#363;nas</p>
   
    <p align="left" class="MsoNormal"><strong>Scotland</strong>: Su Grierson</p>
   
    <p align="left" class="MsoNormal"><strong>United States of America</strong>: Cristina de Almeida; Timothy Frerichs</p>
  </blockquote>

  <p align="center"><br>

  <h2 align="center"><img src="../../images/artistsImages/artBooks/2017/Floortalk7.jpg" width="100%" alt="menu"></h2>
  <blockquote>
    <p align="left"><strong><em><a href="main2.htm"></a></em></strong><em>Between  the Sheets, 2017, Floor Talk with Robert Heather, Director, New England Rgional Art Museum &amp; founder of Artists Books 3.0; </em><em>Gallery Central, Perth</em> </p>
    <p align="left"><a href="../../images/artistsImages/artBooks/2017/ConditionsofEntry2017.pdf">Conditions of Entry and Entry Form can be downloaded here</a></span></p>
  </blockquote>
</div>
`;
  profile_img.innerHTML = `<img class="profile-img" src="../../images/symbol.gif" "alt="artist"></p>`;
  name.textContent = `William Yeoman`;
  date.textContent = `March 25 - 26 2017`;

  statementTitle.innerText = `Review by William Yeoman in the West Australian of 25 March 2017`;
  exhibStatement.innerHTML = ` <div width="80%"> <div data-reactid="313">
  <p data-reactid="314">For centuries books have assumed different forms and made use of different materials. From stone tablets, palm leaves, bamboo strips and papyrus scrolls through the stained glass, altarpiece and statuary narratives of the great cathedrals to illuminated manuscripts, Renaissance frescoes and painted ceilings to early printed codexes, paperbacks, ebooks and multi-media chimeras, they have always questioned their own identities.</p>
<p data-reactid="316">Of course, so much depends on your definition of a book. Gallery East&rsquo;s Between the Sheets: Artists&rsquo; Books Exhibition 2017 on show at Gallery Central, takes the broad view. The result feels like a library of maquettes produced by some vast confabulist scriptorium. In a good way.</p>
<p data-reactid="318">The 78 works by 61 artists from nine countries &mdash; including 36 WA participants, seven of them recent graduates from North Metro TAFE and Edith Cowan University &mdash; are made by &ldquo;printmakers, photographers, architects, wordsmiths, textile artists, painters, sculptors and digital artists&rdquo;. As Robert Heather writes in his catalogue essay, &ldquo;exhibitions such as this also demonstrate that artists&rsquo; books can transcend our temporary or imposed borders&rdquo;.</p>
<p data-reactid="320">Thus Janis Nedela&rsquo;s Bedfellows III, rubber-stoppered test tubes filled with &ldquo;reconstructed book, paper pulp, wood and charcoal&rdquo; line up like glass reliquaries. Pam Langdon&rsquo;s Under the Eaves, made from 31 reconstructed books and recycled timber, replicates nature&rsquo;s growth patterns in the folds and rolls of the &ldquo;discarded, unloved&rdquo; pages.</p>
<p data-reactid="322">Elisa Markes-Young&rsquo;s delicate, moving Treny (The Laments) is &ldquo;a rosary made out of a copy of Jan Kochanowski&rsquo;s Treny<em data-reactid="324">,</em>&nbsp;a collection of 19 poems written in 1579 in memory of his daughter, Urszula, who died aged 30 months&rdquo;.</p>
<p data-reactid="327">Helen Malone&rsquo;s The Sunken Boat, a &ldquo;flexible sculptural book structure of etched Perspex&rdquo; contorts like the translucent ghost of a scrimshawed whalebone.</p>
<p data-reactid="329">There are soft books, some of which can be handled with gloves, some without, allowing the conjunction of text and texture to be felt and seen. There are hard books in plastic, wood or other materials which are sculptures in all but name. There are pierced, filigree books which admit light through their wounded bodies. There are printed and painterly books, defaced and destroyed books, and maps, charts and calligraphic fantasies that strive to escape the very surface that gives them life.</p>
<p data-reactid="331">In Medieval Modern: Art out of Time, Alexander Nagel writes: &ldquo;Modernism may have died a long time ago, but the modernist historical frame is lifting only now, and that means the &lsquo;medieval strain&rsquo; in modern art is becoming visible, making it possible, in turn, to think through the history of modern art in new ways.&rdquo;</p>
<p data-reactid="333">The artists&rsquo; book is arguably one of the chief protagonists in the history of modern art as seen through the lens of medievalism in all its organic, protean religiosity and profane sensuousness.</p>
<p data-reactid="335">In that sense, Between the Sheets evokes not just a library but a church in which the word is indeed made flesh.</p>
<p data-reactid="337">Between the Sheets: Artists&rsquo; Books Exhibition 2017 is on at Gallery Central, Aberdeen Street, Perth until April 8. View the works at galleryeast.com.au/general/ books2017</p>
</div> </div>`;

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bgs_text.forEach((bgtxt) => {
    bgtxt.classList.remove("animated-bg-text");
  });
}
