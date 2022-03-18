var requestURL = "accueil.json";
fetch(requestURL)
  .then(response => response.json())
  .then(jsonData => {
    console.log(jsonData)
    changetext(jsonData)
  })
function changetext(site){
    document.getElementById('txtTitre').innerHTML = site["Francais"]["Titre"];
    document.getElementById('stxtTitre').innerHTML = site["Francais"]["SousTitre"];
    document.getElementById('DescActi').innerHTML = site["Francais"]["Activity"];
    document.getElementById('Telephone').innerHTML = site["Francais"]["Telephone"];
    document.getElementById('Telephone').href = site["Francais"]["TelephoneURL"];
    document.getElementById('Mail').innerHTML = site["Francais"]["Mail"];
    document.getElementById('Mail').href = site["Francais"]["MailURL"];
    document.getElementById('Linkedin').innerHTML = site["Francais"]["Linkedin"];
    document.getElementById('Linkedin').href = site["Francais"]["LinkedinURL"];
    document.getElementById('Local').innerHTML = site["Francais"]["Localisation"];
    document.getElementById('Local').href = site["Francais"]["LocalisationURL"];
    document.getElementById('infoAccueil').innerHTML = '<img src="' + site["Francais"]["Backgroundimg"] + '" class="fondaccueil">' + document.getElementById('infoAccueil').innerHTML;
    document.getElementById('description1').innerHTML = site["Francais"]["description1"];
    document.getElementById('description2').innerHTML = site["Francais"]["description2"];
    document.getElementById('description3').innerHTML = site["Francais"]["description3"];
    document.getElementById('description4').innerHTML = site["Francais"]["description4"];
    document.getElementById('L1').src = site["Francais"]["left1"];
    document.getElementById('L2').src = site["Francais"]["left2"];
    document.getElementById('L3').src = site["Francais"]["left3"];
    document.getElementById('L4').src = site["Francais"]["left4"];
    document.getElementById('R1').src = site["Francais"]["right1"];
    document.getElementById('R2').src = site["Francais"]["right2"];
    document.getElementById('R3').src = site["Francais"]["right3"];
    document.getElementById('R4').src = site["Francais"]["right4"];
    document.getElementById('M1').src = site["Francais"]["middle1"];
    document.getElementById('M2').src = site["Francais"]["middle2"];
    document.getElementById('M3').src = site["Francais"]["middle3"];
    document.getElementById('M4').src = site["Francais"]["middle4"];
    let Confiance = document.getElementById('Confiance')
    for (let i = 0; i < site["Francais"]["Confiance"].length; i++) {
        if (i == 4){
        Confiance.innerHTML = Confiance.innerHTML + '<div class="slide"><img class="TailleImg" src="' + site["Francais"]["Confiance"][i]["Image"] +'"></div>';
        } else {
            Confiance.innerHTML = Confiance.innerHTML + '<div class="slide"><img src="' + site["Francais"]["Confiance"][i]["Image"] +'"></div>';
        }
    }
    let Partenaire = document.getElementById('Partenaire')
    for (let i = 0; i < site["Francais"]["Partenaire"].length; i++) {
        Partenaire.innerHTML = Partenaire.innerHTML + '<div class="slide"><img src="' + site["Francais"]["Partenaire"][i]["Image"] +'"></div>';
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