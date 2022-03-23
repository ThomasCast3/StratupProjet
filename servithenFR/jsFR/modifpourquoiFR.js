var requestURL = "general.json";
fetch(requestURL)
  .then(response => response.json())
  .then(jsonData => {
    changetext(jsonData)
  })
function changetext(site){
  document.getElementById('txtTitre').value = site["Francais"]["Titre"];
  document.getElementById('stxtTitre').value = site["Francais"]["SousTitre"];
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
var requestURL = "pourquoi.json";
fetch(requestURL)
  .then(response => response.json())
  .then(jsonData => {
    changetextP(jsonData)
  })
  function changetextP(site){
    document.getElementById('P1').innerHTML = site["Francais"]["Presentation1"];
    document.getElementById('P2').innerHTML = site["Francais"]["Presentation2"];
    document.getElementById('P3').innerHTML = site["Francais"]["Presentation3"];
}