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
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../images/artistsImages/black/Cat2324.jpg" alt="Art image">`;
  title.innerText = `Sandra Black`;
  excerpt.innerHTML = `<table width="100%"  cellspacing="0" cellpadding="0">
        <tr>
          <td height="98" align="left"><p align="left"><strong>Critical Space,<br>
              an exhibition of new works by </strong></p>
            <p align="center"><strong>Sandra Black</strong></p>
         
            <p><strong>&nbsp;</strong></p>
            <p align="center">The exhibition is dedicated to Dr Robert  Bell AM. 1946-2018, </p>
            <p align="center">formerly Curator of Craft  and Design at the Art Gallery of Western  Australia and Senior Curator of Decorative Arts at the  National Gallery of Australia</p>
            <p align="center"><strong>&nbsp;</strong></p>
            <p align="left"><strong>Sandra Black</strong> is one of Australia's foremost ceramic artists, creating porcelain vessels  recognised for their craftsmanship &nbsp;and intricately carved and pierced  surfaces. Sandra &nbsp;explores the material's character through throwing, hand  building and casting techniques, and its ability to transfer light through  carving and piercing. She was initially attracted to the translucency and  hardness of porcelain, and the fine surface it provided for carving and  piercing. The purity of the medium added to its appeal, allowing her to infuse her  pieces with a presence that she had not achieved using other clay. <br>
              <br>
              Sandra&rsquo;s work has a delicate quality, more akin with intricate lace or crochet  than ceramic vessels. Its intimate scale enhances this feeling, resulting in  work that departs from tradition and prompts a new way of considering the  medium. <br>
  <br>
              Sandra &nbsp;began practicing in the mid 1970s, in 1975 taking up a part-time  lecturing position at the Western Australian Institute of Technology. Since  them she has continued this involvement with art education, lecturing in  institutions and workshops throughout Australia, New Zealand, USA and also in &nbsp;Canada &nbsp;. She has been  exhibited widely in the context of dealer galleries, selected and curated  exhibitions and with public institutions. On several occasions her work was featured in the New Zealand Fletcher Challenge Ceramics  Award, winning the award outright in 1988 and receiving a merit award in 1989.  She has also undertaken taken residencies overseas, in Canada, India and most  recently &nbsp;at &ldquo;The Pottery workshop&rdquo; in Jingdezhen, China, famous for its  fine porcelain production. &nbsp;Her work is held in major ceramics collections in Australia, Canada New  Zealand and Asia. </p>
            <p>Sandra writes of the title of the exhibition:</p>
            <p align="left"><em>&ldquo;When I was in China earlier this year I was reflecting  on a bowl I was throwing, and was taken back to my time with Joan Campbell in  her pottery classes at UWA student guild in the early 1970&rsquo;s. Back then I was  struggling with the centring of the clay and opening up the vessel shape. Joan brought  to my attention the interior space and told me that was the most important part  of the vessel. The walls were there to enclose and hold that critical space. My  focus from then was to be on perfecting that inner space, and the outside would  take care of itself in the careful finishing and balance of the exterior. It&rsquo;s  a lesson that&rsquo;s always remained powerfully instilled in my making.</em><br>
              <em>The second critical space is the positive and negative  spacing of decorative elements. To get the balance in the layout of those  surface elements takes time, care and inspiration from what the current themes  are that I am working on. Each element is carefully placed in balance with the  form it is applied to.</em><br>
              <em>The third is my working space where the work is  assembled. That necessarily quiet space is mainly in my garden studio in South  Fremantle, but has also taken place in the various residencies I have  undertaken in other parts of the world. Each of the residencies have allowed me  time and a working space to rethink what I am making, to expose myself to  different cultures and ways of working in that space, and to play with the  clay, freed up from one&rsquo;s normal daily routine. New ways of working and sources  of inspiration have arisen from that time and space I have allowed myself to  have. </em><br>
              <em>These are to me three different, but Critical spatial  elements that act upon and influence the making of my work. &ldquo;</em></p>
            <p align="left">&nbsp;</p>
            <font color="#666666" size="2" face="Verdana, Arial, Helvetica, sans-serif">&nbsp; </font></td>
          <td valign="top">&nbsp;</td>
        </tr>
      </table>
`;
  profile_img.innerHTML = `<img class="profile-img" src="../../../images/David.jpg" "alt="artist"></p>`;
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
