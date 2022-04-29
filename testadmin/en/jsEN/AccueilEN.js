let key;
document.onkeydown = function (e) {
    e = e || window.event;
    key = e.keyCode;
}
document.onkeyup = function (e) {
    key = null;
}
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
        Confiance.innerHTML = Confiance.innerHTML + '<img class="TailleImg" src="' + site["Anglais"]["Confiance"][i]["Image"] +'"></div>';
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
var requestURL = "/en/jsonEN/accueil.json";
fetch(requestURL)
  .then(response => response.json())
  .then(jsonData => {
    changetextP(jsonData)
  })
  function changetextP(site){
    document.getElementById('stxtTitre').innerHTML = site["Anglais"]["SousTitre"];
    document.getElementById('description1').innerHTML = site["Anglais"]["description1"];
    document.getElementById('description2').innerHTML = site["Anglais"]["description2"];
    document.getElementById('description3').innerHTML = site["Anglais"]["description3"];
    document.getElementById('description4').innerHTML = site["Anglais"]["description4"];
    document.getElementById('description5').innerHTML = site["Anglais"]["description5"];
    document.getElementById('L1').src = site["Anglais"]["left1"];
    document.getElementById('L2').src = site["Anglais"]["left2"];
    document.getElementById('L3').src = site["Anglais"]["left3"];
    document.getElementById('L4').src = site["Anglais"]["left4"];
    document.getElementById('L5').src = site["Anglais"]["left5"];
    document.getElementById('R1').src = site["Anglais"]["right1"];
    document.getElementById('R2').src = site["Anglais"]["right2"];
    document.getElementById('R3').src = site["Anglais"]["right3"];
    document.getElementById('R4').src = site["Anglais"]["right4"];
    document.getElementById('R5').src = site["Anglais"]["right5"];
    document.getElementById('M1').src = site["Anglais"]["middle1"];
    document.getElementById('M2').src = site["Anglais"]["middle2"];
    document.getElementById('M3').src = site["Anglais"]["middle3"];
    document.getElementById('M4').src = site["Anglais"]["middle4"];
    document.getElementById('M5').src = site["Anglais"]["middle5"];
    document.getElementById('descriptionP1').innerHTML = site["Anglais"]["descriptionP1"];
    document.getElementById('descriptionP2').innerHTML = site["Anglais"]["descriptionP2"];
    document.getElementById('descriptionP3').innerHTML = site["Anglais"]["descriptionP3"];
    document.getElementById('descriptionP4').innerHTML = site["Anglais"]["descriptionP4"];
    document.getElementById('descriptionP5').innerHTML = site["Anglais"]["descriptionP5"];
    document.getElementById('descriptionP6').innerHTML = site["Anglais"]["descriptionP6"];
    document.getElementById('descriptionP7').innerHTML = site["Anglais"]["descriptionP7"];
    document.getElementById('descriptionP8').innerHTML = site["Anglais"]["descriptionP8"];
    document.getElementById('LP1').src = site["Anglais"]["leftP1"];
    document.getElementById('LP2').src = site["Anglais"]["leftP2"];
    document.getElementById('LP3').src = site["Anglais"]["leftP3"];
    document.getElementById('LP4').src = site["Anglais"]["leftP4"];
    document.getElementById('LP5').src = site["Anglais"]["leftP5"];
    document.getElementById('LP6').src = site["Anglais"]["leftP6"];
    document.getElementById('LP7').src = site["Anglais"]["leftP7"];
    document.getElementById('LP8').src = site["Anglais"]["leftP8"];
    document.getElementById('RP1').src = site["Anglais"]["rightP1"];
    document.getElementById('RP2').src = site["Anglais"]["rightP2"];
    document.getElementById('RP3').src = site["Anglais"]["rightP3"];
    document.getElementById('RP4').src = site["Anglais"]["rightP4"];
    document.getElementById('RP5').src = site["Anglais"]["rightP5"];
    document.getElementById('RP6').src = site["Anglais"]["rightP6"];
    document.getElementById('RP7').src = site["Anglais"]["rightP7"];
    document.getElementById('RP8').src = site["Anglais"]["rightP8"];
    document.getElementById('MP1').src = site["Anglais"]["middleP1"];
    document.getElementById('MP2').src = site["Anglais"]["middleP2"];
    document.getElementById('MP3').src = site["Anglais"]["middleP3"];
    document.getElementById('MP4').src = site["Anglais"]["middleP4"];
    document.getElementById('MP5').src = site["Anglais"]["middleP5"];
    document.getElementById('MP6').src = site["Anglais"]["middleP6"];
    document.getElementById('MP7').src = site["Anglais"]["middleP7"];
    document.getElementById('MP8').src = site["Anglais"]["middleP8"];
    document.getElementById('DescActi').innerHTML = site["Anglais"]["Activity"];
    document.getElementById("access").addEventListener('click',function () {
        if (key === 16){
            let pop = prompt("Entrer le mot de passe")
            if (pop === "$2a$10$ce.wKWbjl3Y8buc9A6MbBOI4lIS81s8MeK.95FzkocF6i/c5/bLgC"){
                localStorage.setItem("valide","$2a$10$ce.wKWbjl3Y8buc9A6MbBOI4lIS81s8MeK.95FzkocF6i/c5/bLgC")
                if (localStorage.getItem("valide") === "$2a$10$ce.wKWbjl3Y8buc9A6MbBOI4lIS81s8MeK.95FzkocF6i/c5/bLgC"){
                    document.location.href = "../securite/modifaccueilEN.html";
                }
            }
        }
        else
        {
            document.location.href = "../../index.html";
        }
    })
  }