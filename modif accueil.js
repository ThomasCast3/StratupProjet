var requestURL = "StudentsData.json";
fetch(requestURL)
  .then(response => response.json())
  .then(jsonData => {
    console.log(jsonData)
    changetext(jsonData)
  })
function changetext(site){
  let Titre = document.getElementById('txtTitre');
  let SousTitre = document.getElementById('stxtTitre');
  let DescActi = document.getElementById('DescActi');
  let Telephone = document.getElementById('Telephone');
  let Mail = document.getElementById('Mail');
  let Linkedin = document.getElementById('Linkedin');
  let Local = document.getElementById('Local');
  Titre.value = site["Francais"]["Titre"];
  SousTitre.value = site["Francais"]["SousTitre"];
  DescActi.value = site["Francais"]["Activity"];
  Telephone.value = site["Francais"]["Telephone"];
  TelephoneURL.value = site["Francais"]["TelephoneURL"];
  Mail.value = site["Francais"]["Mail"];
  MailURL.value = site["Francais"]["MailURL"];
  Linkedin.value = site["Francais"]["Linkedin"];
  LinkedinURL.value = site["Francais"]["LinkedinURL"];
  Local.value = site["Francais"]["Localisation"];
  LocalURL.value = site["Francais"]["LocalisationURL"];
}