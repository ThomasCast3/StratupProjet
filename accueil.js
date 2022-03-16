var requestURL = "site.json";
fetch(requestURL)
  .then(response => response.json())
  .then(jsonData => {
    console.log(jsonData)
    changetext(jsonData)
  })
function changetext(site){
    let Titre = document.getElementById('txtTitre')
    let SousTitre = document.getElementById('stxtTitre')
    let DescActi = document.getElementById('DescActi')
    console.debug(DescActi.innerHTML);
    Titre.innerHTML = site["Titre"];
    SousTitre.innerHTML = site["SousTitre"];
    DescActi.innerHTML = site["Activity"];
}