var requestURL = "/fr/jsonFR/general.json";
fetch(requestURL)
  .then(response => response.json())
  .then(jsonData => {
    changetext(jsonData)
  })
function changetext(site){
    document.getElementById('txtTitre').innerHTML = site["Francais"]["Titre"];
    document.getElementById('Telephone').innerHTML = site["Francais"]["Telephone"];
    document.getElementById('Telephone').href = site["Francais"]["TelephoneURL"];
    document.getElementById('Mail').innerHTML = site["Francais"]["Mail"];
    document.getElementById('Mail').href = site["Francais"]["MailURL"];
    document.getElementById('Linkedin').innerHTML = site["Francais"]["Linkedin"];
    document.getElementById('Linkedin').href = site["Francais"]["LinkedinURL"];
    document.getElementById('Local').innerHTML = site["Francais"]["Localisation"];
    document.getElementById('Local').href = site["Francais"]["LocalisationURL"];
    document.getElementById('infoAccueil').innerHTML = '<img src="' + site["Francais"]["Backgroundimg"] + '" class="fondaccueil">' + document.getElementById('infoAccueil').innerHTML;
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
var requestURL = "/fr/jsonFR/accueil.json";
fetch(requestURL)
  .then(response => response.json())
  .then(jsonData => {
    changetextP(jsonData)
  })
  function changetextP(site){
    document.getElementById('stxtTitre').innerHTML = site["Francais"]["SousTitre"];
    document.getElementById('description1').innerHTML = site["Francais"]["description1"];
    document.getElementById('description2').innerHTML = site["Francais"]["description2"];
    document.getElementById('description3').innerHTML = site["Francais"]["description3"];
    document.getElementById('description4').innerHTML = site["Francais"]["description4"];
    document.getElementById('description5').innerHTML = site["Francais"]["description5"];
    document.getElementById('L1').src = site["Francais"]["left1"];
    document.getElementById('L2').src = site["Francais"]["left2"];
    document.getElementById('L3').src = site["Francais"]["left3"];
    document.getElementById('L4').src = site["Francais"]["left4"];
    document.getElementById('L5').src = site["Francais"]["left5"];
    document.getElementById('R1').src = site["Francais"]["right1"];
    document.getElementById('R2').src = site["Francais"]["right2"];
    document.getElementById('R3').src = site["Francais"]["right3"];
    document.getElementById('R4').src = site["Francais"]["right4"];
    document.getElementById('R5').src = site["Francais"]["right5"];
    document.getElementById('M1').src = site["Francais"]["middle1"];
    document.getElementById('M2').src = site["Francais"]["middle2"];
    document.getElementById('M3').src = site["Francais"]["middle3"];
    document.getElementById('M4').src = site["Francais"]["middle4"];
    document.getElementById('M5').src = site["Francais"]["middle5"];
    document.getElementById('descriptionP1').innerHTML = site["Francais"]["descriptionP1"];
    document.getElementById('descriptionP2').innerHTML = site["Francais"]["descriptionP2"];
    document.getElementById('descriptionP3').innerHTML = site["Francais"]["descriptionP3"];
    document.getElementById('descriptionP4').innerHTML = site["Francais"]["descriptionP4"];
    document.getElementById('descriptionP5').innerHTML = site["Francais"]["descriptionP5"];
    document.getElementById('descriptionP6').innerHTML = site["Francais"]["descriptionP6"];
    document.getElementById('descriptionP7').innerHTML = site["Francais"]["descriptionP7"];
    document.getElementById('descriptionP8').innerHTML = site["Francais"]["descriptionP8"];
    document.getElementById('LP1').src = site["Francais"]["leftP1"];
    document.getElementById('LP2').src = site["Francais"]["leftP2"];
    document.getElementById('LP3').src = site["Francais"]["leftP3"];
    document.getElementById('LP4').src = site["Francais"]["leftP4"];
    document.getElementById('LP5').src = site["Francais"]["leftP5"];
    document.getElementById('LP6').src = site["Francais"]["leftP6"];
    document.getElementById('LP7').src = site["Francais"]["leftP7"];
    document.getElementById('LP8').src = site["Francais"]["leftP8"];
    document.getElementById('RP1').src = site["Francais"]["rightP1"];
    document.getElementById('RP2').src = site["Francais"]["rightP2"];
    document.getElementById('RP3').src = site["Francais"]["rightP3"];
    document.getElementById('RP4').src = site["Francais"]["rightP4"];
    document.getElementById('RP5').src = site["Francais"]["rightP5"];
    document.getElementById('RP6').src = site["Francais"]["rightP6"];
    document.getElementById('RP7').src = site["Francais"]["rightP7"];
    document.getElementById('RP8').src = site["Francais"]["rightP8"];
    document.getElementById('MP1').src = site["Francais"]["middleP1"];
    document.getElementById('MP2').src = site["Francais"]["middleP2"];
    document.getElementById('MP3').src = site["Francais"]["middleP3"];
    document.getElementById('MP4').src = site["Francais"]["middleP4"];
    document.getElementById('MP5').src = site["Francais"]["middleP5"];
    document.getElementById('MP6').src = site["Francais"]["middleP6"];
    document.getElementById('MP7').src = site["Francais"]["middleP7"];
    document.getElementById('MP8').src = site["Francais"]["middleP8"];
    document.getElementById('DescActi').innerHTML = site["Francais"]["Activity"];
  }