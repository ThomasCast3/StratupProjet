var requestURL = "/securite/jsonFR/general.json";
fetch(requestURL)
  .then(response => response.json())
  .then(jsonData => {
    changetext(jsonData)
  })
function changetext(site){
  document.getElementById('txtTitre').value = site["Francais"]["Titre"];
  console.log(document.getElementById('Telephone'));
  console.log(site["Francais"]["Telephone"]);
  document.getElementById('Telephone').value = site["Francais"]["Telephone"];
  document.getElementById('TelephoneURL').value = site["Francais"]["TelephoneURL"];
  document.getElementById('Mail').value = site["Francais"]["Mail"];
  document.getElementById('MailURL').value = site["Francais"]["MailURL"];
  document.getElementById('Linkedin').value = site["Francais"]["Linkedin"];
  document.getElementById('LinkedinURL').value = site["Francais"]["LinkedinURL"];
  document.getElementById('Local').value = site["Francais"]["Localisation"];
  document.getElementById('LocalURL').value = site["Francais"]["LocalisationURL"];
  document.getElementById('Background').value = site["Francais"]["Backgroundimg"];
  function restart(Type){
    if (Type == "Conf"){
      for(let r = 0;r < site["Francais"]["Confiance"].length;r++){
        document.getElementById('Conf'+ r).value = site["Francais"]["Confiance"][r]["Image"];
      }
    }
    if (Type == "Part"){
      for(let r = 0;r < site["Francais"]["Partenaire"].length;r++){
        document.getElementById('Part'+ r).value = site["Francais"]["Partenaire"][r]["Image"];
      }
    }
  }
  let ConfNumb = document.getElementById('NumbConf')
  let Confiance = document.getElementById('Confiance')
  let i = 0;
    for (i = 0; i < site["Francais"]["Confiance"].length; i++) {
      Confiance.innerHTML = Confiance.innerHTML + '<textarea id="Conf' + i + '" name="Conf' + i + '" ></textarea>';
    }
    restart("Conf");
    ConfNumb.value = i;
    document.getElementById('ConfB+').addEventListener('click',function(){
      Confiance.innerHTML = Confiance.innerHTML + '<textarea id="Conf' + i + '" name="Conf' + i + '" ></textarea>';
      i++;
      restart("Conf");
      ConfNumb.value = i;
    })
    document.getElementById('ConfB-').addEventListener('click',function(){
      i--;
      document.getElementById('Conf'+i).remove();
      ConfNumb.value = i;
    })
    let NumbPart = document.getElementById('NumbPart')
    let Partenaire = document.getElementById('Partenaire');
    let j = 0;
    for (j = 0; j < site["Francais"]["Partenaire"].length; j++) {
      Partenaire.innerHTML = Partenaire.innerHTML + '<textarea id="Part' + j + '" name="Part' + j + '" ></textarea>';
      document.getElementById('Part'+ j).value = site["Francais"]["Partenaire"][j]["Image"];
    }
    restart("Part");
    NumbPart.value = j;
    document.getElementById('PartB+').addEventListener('click',function(){
      Partenaire.innerHTML = Partenaire.innerHTML + '<textarea id="Part' + j + '" name="Part' + j + '" ></textarea>';
      j++;
      restart("Part");
      NumbPart.value = j;
    })
    document.getElementById('PartB-').addEventListener('click',function(){
      j--;
      document.getElementById('Part'+j).remove();
      NumbPart.value = j;
    })
}
var requestURL = "/securite/jsonFR/accueil.json";
fetch(requestURL)
  .then(response => response.json())
  .then(jsonData => {
    changetextP(jsonData)
  })
  function changetextP(site){
    document.getElementById('stxtTitre').value = site["Francais"]["SousTitre"];
    document.getElementById('description1').value = site["Francais"]["description1"];
    document.getElementById('description2').value = site["Francais"]["description2"];
    document.getElementById('description3').value = site["Francais"]["description3"];
    document.getElementById('description4').value = site["Francais"]["description4"];
    document.getElementById('description5').value = site["Francais"]["description5"];
    document.getElementById('left1').value = site["Francais"]["left1"];
    document.getElementById('left2').value = site["Francais"]["left2"];
    document.getElementById('left3').value = site["Francais"]["left3"];
    document.getElementById('left4').value = site["Francais"]["left4"];
    document.getElementById('left5').value = site["Francais"]["left5"];
    document.getElementById('right1').value = site["Francais"]["right1"];
    document.getElementById('right2').value = site["Francais"]["right2"];
    document.getElementById('right3').value = site["Francais"]["right3"];
    document.getElementById('right4').value = site["Francais"]["right4"];
    document.getElementById('right5').value = site["Francais"]["right5"];
    document.getElementById('middle1').value = site["Francais"]["middle1"];
    document.getElementById('middle2').value = site["Francais"]["middle2"];
    document.getElementById('middle3').value = site["Francais"]["middle3"];
    document.getElementById('middle4').value = site["Francais"]["middle4"];
    document.getElementById('middle5').value = site["Francais"]["middle5"];
    document.getElementById('descriptionP1').value = site["Francais"]["descriptionP1"];
    document.getElementById('descriptionP2').value = site["Francais"]["descriptionP2"];
    document.getElementById('descriptionP3').value = site["Francais"]["descriptionP3"];
    document.getElementById('descriptionP4').value = site["Francais"]["descriptionP4"];
    document.getElementById('descriptionP5').value = site["Francais"]["descriptionP5"];
    document.getElementById('descriptionP6').value = site["Francais"]["descriptionP6"];
    document.getElementById('descriptionP7').value = site["Francais"]["descriptionP7"];
    document.getElementById('descriptionP8').value = site["Francais"]["descriptionP8"];
    document.getElementById('leftP1').value = site["Francais"]["leftP1"];
    document.getElementById('leftP2').value = site["Francais"]["leftP2"];
    document.getElementById('leftP3').value = site["Francais"]["leftP3"];
    document.getElementById('leftP4').value = site["Francais"]["leftP4"];
    document.getElementById('leftP5').value = site["Francais"]["leftP5"];
    document.getElementById('leftP6').value = site["Francais"]["leftP6"];
    document.getElementById('leftP7').value = site["Francais"]["leftP7"];
    document.getElementById('leftP8').value = site["Francais"]["leftP8"];
    document.getElementById('rightP1').value = site["Francais"]["rightP1"];
    document.getElementById('rightP2').value = site["Francais"]["rightP2"];
    document.getElementById('rightP3').value = site["Francais"]["rightP3"];
    document.getElementById('rightP4').value = site["Francais"]["rightP4"];
    document.getElementById('rightP5').value = site["Francais"]["rightP5"];
    document.getElementById('rightP6').value = site["Francais"]["rightP6"];
    document.getElementById('rightP7').value = site["Francais"]["rightP7"];
    document.getElementById('rightP8').value = site["Francais"]["rightP8"];
    document.getElementById('middleP1').value = site["Francais"]["middleP1"];
    document.getElementById('middleP2').value = site["Francais"]["middleP2"];
    document.getElementById('middleP3').value = site["Francais"]["middleP3"];
    document.getElementById('middleP4').value = site["Francais"]["middleP4"];
    document.getElementById('middleP5').value = site["Francais"]["middleP5"];
    document.getElementById('middleP6').value = site["Francais"]["middleP6"];
    document.getElementById('middleP7').value = site["Francais"]["middleP7"];
    document.getElementById('middleP8').value = site["Francais"]["middleP8"];
    document.getElementById('DescActi').value = site["Francais"]["Activity"];
  }