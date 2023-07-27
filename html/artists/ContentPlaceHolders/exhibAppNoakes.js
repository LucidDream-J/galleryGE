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
  header.innerHTML = `<img id="exhibition-image" class="card-img-top" src="../../images/heroImages/Philip Noakes Feather-min.jpg" alt="Art image">`;
  title.innerText = `Philip Noakes : Silversmith`;
  excerpt.innerHTML = `  <table width="90%" align="center" cellpadding="2" cellspacing="6" bgcolor="#FFFFFF" id="table1" style="font-family: Arial; font-size: 10pt; color:#000000">
 
  <tr>
    <td align="center" valign="bottom"><p align="center">&nbsp;</p>
      <p align="left"><strong>Philip Noakes</strong>, one of  the most eminent&nbsp; goldsmiths, silversmiths and jewellers in Australia,  will celebrate his successful and distinguished fifty-year career with a major  survey exhibition &ndash;&nbsp;<em>Philip  Noakes: Sculptural Silver</em>&nbsp;&ndash;  at the Lawrence Wilson Art Gallery, University of Western Australia, 25 May &ndash;  17 August 2019.</p>
      <p align="left"><br>
        This elegant body of  work includes over 40 new&nbsp; vessels in sterling silver, Britannia silver,  fine silver, heat flamed copper and various carat gold is the largest  hollowware exhibition in Western Australia since the 1970s.</p>
      <p align="center"><img src="../../images/artistsImages/noakes/PN5.jpg" width="100%"  alt="menu"></p>
      <p align="center"><strong>&nbsp;</strong><strong> </strong></p>
      <p align="left">From his schoolboy  dream of wanting to make metal objects and his training at the Sir John Cass  College of Art in London to his recognition as a Fellow of the Institute of  Professional Goldsmiths, United Kingdom, in 2016, Philip has single-mindedly  focused on his career to become a renowned master craftsman and highly sought-after  teacher. He has worked with some of the world&rsquo;s most prestigious names in the  industry, exhibited both nationally and internationally, and won many awards  and accolades for the quality and design of his work, particularly his  contemporary jewellery. Philip has returned to his first passion of  silversmithing now creating innovative and challenging sculptural forms while  continuing to undertake commissions.</p>
   <br>
      <p align="center"><strong><img src="../../images/artistsImages/noakes/PN13.jpg" width="100%" alt="menu">&nbsp;</strong></p>
      <p align="center">The exhibition will be  accompanied&nbsp; by the publication of the monograph, written by Dr. Dorothy  Erikson, &nbsp;</p>
      <p>A PASSION FOR SILVERSMITHING<br>
        PHILIP NOAKES<br>
        G O L D A N D S I L V E R S M I T H</p>
<p align="center">&nbsp;</p>
      <p align="center">Please click on the image below to download the Order Form </p>
      <p align="center">&nbsp;</p></td>
  </tr>
  <tr>
    <td align="center" valign="bottom"><a href="../../images/artistsImages/noakes/BookOrderForm.pdf"><img src="../../images/artistsImages/noakes/PN12.jpg"" width="100%"  alt="menu"></a></td>
  </tr>
  <tr>
    <td align="center" valign="bottom"><p align="center">The  project was by grants from the Department of Local Government,  Health, Culture and the Arts</p></td>
  </tr>
  <tr>
    <td height="56" align="left" valign="bottom"><img src="../../images/artistsImages/noakes/Logo.jpg" width="215" height="70" alt="menu"></td>
  </tr>
  <tr>
    <td align="center" valign="bottom">&nbsp;</td>
  </tr>
  <tr>
    <td align="center" valign="bottom">a selection of works from the exhibition are detailed in the online exhibit linked below</td>
  </tr>
</table>
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
