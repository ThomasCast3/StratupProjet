var requestURL = "/en/jsonEN/general.json";
fetch(requestURL)
  .then(response => response.json())
  .then(jsonData => {
    changetext(jsonData)
  })
function changetext(site){
    document.getElementById('txtTitre').innerHTML = site["Anglais"]["Titre"];
    document.getElementById('Telephone').innerHTML = site["Anglais"]["Telephone"];
    document.getElementById('Telephone').href = site["Anglais"]["TelephoneURL"];
    document.getElementById('Mail').innerHTML = site["Anglais"]["Mail"];
    document.getElementById('Mail').href = site["Anglais"]["MailURL"];
    document.getElementById('Linkedin').innerHTML = site["Anglais"]["Linkedin"];
    document.getElementById('Linkedin').href = site["Anglais"]["LinkedinURL"];
    document.getElementById('Local').innerHTML = site["Anglais"]["Localisation"];
    document.getElementById('Local').href = site["Anglais"]["LocalisationURL"];
    document.getElementById('infoAccueil').innerHTML = '<img src="' + site["Anglais"]["Backgroundimg"] + '" class="fondaccueil">' + document.getElementById('infoAccueil').innerHTML;
    let Confiance = document.getElementById('Confiance')
    for (let i = 0; i < site["Anglais"]["Confiance"].length; i++) {
        if (i == 4){
        Confiance.innerHTML = Confiance.innerHTML + '<div class="slide"><img class="TailleImg" src="' + site["Anglais"]["Confiance"][i]["Image"] +'"></div>';
        } else {
            Confiance.innerHTML = Confiance.innerHTML + '<div class="slide"><img src="' + site["Anglais"]["Confiance"][i]["Image"] +'"></div>';
        }
    }
    let Partenaire = document.getElementById('Partenaire')
    for (let i = 0; i < site["Anglais"]["Partenaire"].length; i++) {
        Partenaire.innerHTML = Partenaire.innerHTML + '<div class="slide"><img src="' + site["Anglais"]["Partenaire"][i]["Image"] +'"></div>';
    }
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });


    $('.customer-logos2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });
}
var requestURL = "/en/jsonEN/service3.json";
fetch(requestURL)
  .then(response => response.json())
  .then(jsonData => {
    changetextP(jsonData)
  })
  function changetextP(site){
    document.getElementById('stxtTitre').innerHTML = site["Anglais"]["SousTitre"];
    document.getElementById('text1').innerHTML = site["Anglais"]["text1"];
    document.getElementById('text2').innerHTML = site["Anglais"]["text2"];
    let Photo = document.getElementById('containerPhoto')
    Photo.innerHTML="";
    for (let i = 0; i < site["Anglais"]["img"].length; i++) {
        Photo.innerHTML = Photo.innerHTML + '<img class="photoService" src="' + site["Anglais"]["img"][i]["Image"] +'">';
    }
  }