var requestURL = "StudentsData.json";
fetch(requestURL)
  .then(response => response.json())
  .then(jsonData => {
    console.log(jsonData)
    changetext(jsonData)
  })
function changetext(site){
  document.getElementById('txtTitre').value = site["Francais"]["Titre"];
  document.getElementById('stxtTitre').value = site["Francais"]["SousTitre"];
  document.getElementById('DescActi').value = site["Francais"]["Activity"];
  document.getElementById('Telephone').value = site["Francais"]["Telephone"];
  document.getElementById('Telephone').value = site["Francais"]["TelephoneURL"];
  document.getElementById('Mail').value = site["Francais"]["Mail"];
  document.getElementById('Mail').value = site["Francais"]["MailURL"];
  document.getElementById('Linkedin').value = site["Francais"]["Linkedin"];
  document.getElementById('Linkedin').value = site["Francais"]["LinkedinURL"];
  document.getElementById('Local').value = site["Francais"]["Localisation"];
  document.getElementById('Local').value = site["Francais"]["LocalisationURL"];
  document.getElementById('Background').value = site["Francais"]["Backgroundimg"];
  document.getElementById('left1').value = site["Francais"]["left1"];
  document.getElementById('left2').value = site["Francais"]["left2"];
  document.getElementById('left3').value = site["Francais"]["left3"];
  document.getElementById('left4').value = site["Francais"]["left4"];
  document.getElementById('right1').value = site["Francais"]["right1"];
  document.getElementById('right2').value = site["Francais"]["right2"];
  document.getElementById('right3').value = site["Francais"]["right3"];
  document.getElementById('right4').value = site["Francais"]["right4"];
  document.getElementById('middle1').value = site["Francais"]["middle1"];
  document.getElementById('middle2').value = site["Francais"]["middle2"];
  document.getElementById('middle3').value = site["Francais"]["middle3"];
  document.getElementById('middle4').value = site["Francais"]["middle4"];
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
  let Confiance = document.getElementById('Confiance')
  let i = 0;
    for (i = 0; i < site["Francais"]["Confiance"].length; i++) {
      Confiance.innerHTML = Confiance.innerHTML + '<textarea id="Conf' + i + '" name="Conf' + i + '" ></textarea>';
    }
    restart("Conf");
    document.getElementById('ConfB+').addEventListener('click',function(){
      Confiance.innerHTML = Confiance.innerHTML + '<textarea id="Conf' + i + '" name="Conf' + i + '" ></textarea>';
      i++;
      restart("Conf");
    })
    document.getElementById('ConfB-').addEventListener('click',function(){
      i--;
      document.getElementById('Conf'+i).remove();
    })
    let Partenaire = document.getElementById('Partenaire');
    let j = 0;
    for (j = 0; j < site["Francais"]["Partenaire"].length; j++) {
      Partenaire.innerHTML = Partenaire.innerHTML + '<textarea id="Part' + j + '" name="Part' + j + '" ></textarea>';
      document.getElementById('Part'+ j).value = site["Francais"]["Partenaire"][j]["Image"];
    }
    restart("Part");
    document.getElementById('PartB+').addEventListener('click',function(){
      Partenaire.innerHTML = Partenaire.innerHTML + '<textarea id="Part' + j + '" name="Part' + j + '" ></textarea>';
      j++;
      restart("Part");
    })
    document.getElementById('PartB-').addEventListener('click',function(){
      j--;
      document.getElementById('Part'+j).remove();
    })
}