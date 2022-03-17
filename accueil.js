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
    console.debug(DescActi.innerHTML);
    Titre.innerHTML = site["Francais"]["Titre"];
    SousTitre.innerHTML = site["Francais"]["SousTitre"];
    DescActi.innerHTML = site["Francais"]["Activity"];
    Telephone.innerHTML = site["Francais"]["Telephone"];
    Telephone.href = site["Francais"]["TelephoneURL"];
    Mail.innerHTML = site["Francais"]["Mail"];
    Mail.href = site["Francais"]["MailURL"];
    Linkedin.innerHTML = site["Francais"]["Linkedin"];
    Linkedin.href = site["Francais"]["LinkedinURL"];
    Local.innerHTML = site["Francais"]["Localisation"];
    Local.href = site["Francais"]["LocalisationURL"];
}