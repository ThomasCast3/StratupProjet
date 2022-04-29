function changetext(site) {
    document.getElementById('txtTitre').innerHTML = site[langage]["Titre"];
}
function changetextC(site) {

    document.getElementById("francais").addEventListener("click",function () {
        localStorage.setItem("langue","Francais")
        if (localStorage.getItem("langue") === "Francais") {
            document.location.reload();
        }
    })
    document.getElementById("anglais").addEventListener("click",function () {
        localStorage.setItem("langue","Anglais")
        if (localStorage.getItem("langue") === "Anglais") {
            document.location.reload();
        }
    })
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
            Confiance.innerHTML = Confiance.innerHTML + '<img class="TailleImg" src="' + site["Francais"]["Confiance"][i]["Image"] +'"></div>';
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
function changetextP(site){
    document.getElementById('stxtTitre').innerHTML = site[langage]["SousTitre"];
    document.getElementById('description1').innerHTML = site[langage]["description1"];
    document.getElementById('description2').innerHTML = site[langage]["description2"];
    document.getElementById('description3').innerHTML = site[langage]["description3"];
    document.getElementById('description4').innerHTML = site[langage]["description4"];
    document.getElementById('description5').innerHTML = site[langage]["description5"];
    document.getElementById('descriptionP1').innerHTML = site[langage]["descriptionP1"];
    document.getElementById('descriptionP2').innerHTML = site[langage]["descriptionP2"];
    document.getElementById('descriptionP3').innerHTML = site[langage]["descriptionP3"];
    document.getElementById('descriptionP4').innerHTML = site[langage]["descriptionP4"];
    document.getElementById('descriptionP5').innerHTML = site[langage]["descriptionP5"];
    document.getElementById('descriptionP6').innerHTML = site[langage]["descriptionP6"];
    document.getElementById('descriptionP7').innerHTML = site[langage]["descriptionP7"];
    document.getElementById('descriptionP8').innerHTML = site[langage]["descriptionP8"];
    document.getElementById('DescActi').innerHTML = site[langage]["Activity"];
    document.getElementById("access").addEventListener('click',function () {
        if (key === 16){
            let pop = prompt("Entrer le mot de passe")
            if (pop === "$2a$10$ce.wKWbjl3Y8buc9A6MbBOI4lIS81s8MeK.95FzkocF6i/c5/bLgC"){
                localStorage.setItem("valide","$2a$10$ce.wKWbjl3Y8buc9A6MbBOI4lIS81s8MeK.95FzkocF6i/c5/bLgC")
                if (localStorage.getItem("valide") === "$2a$10$ce.wKWbjl3Y8buc9A6MbBOI4lIS81s8MeK.95FzkocF6i/c5/bLgC"){
                    document.location.href = "../securite/modifaccueil.html";
                }
            }
        }
        else
        {
            document.location.href = "../../index.html";
        }
    })
}
function changetextPC(site){
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
    document.getElementById('LP1').src = site["Francais"]["left1P"];
    document.getElementById('LP2').src = site["Francais"]["left2P"];
    document.getElementById('LP3').src = site["Francais"]["left3P"];
    document.getElementById('LP4').src = site["Francais"]["left4P"];
    document.getElementById('LP5').src = site["Francais"]["left5P"];
    document.getElementById('LP6').src = site["Francais"]["left6P"];
    document.getElementById('LP7').src = site["Francais"]["left7P"];
    document.getElementById('LP8').src = site["Francais"]["left8P"];
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
}

let key;

document.onkeydown = function (e) {
    e = e || window.event;
    key = e.keyCode;
}
document.onkeyup = function (e) {
    key = null;
}

let langage;

if (localStorage.getItem("langue") !== null){
    langage = localStorage.getItem("langue");
} else {
    langage = "Francais";
}

var requestURL = "/fr/jsonFR/generalcross.json";
fetch(requestURL)
    .then(response => response.json())
    .then(jsonData => {
        changetextC(jsonData)
    })
requestURL = "/fr/jsonFR/accueilcross.json";
fetch(requestURL)
    .then(response => response.json())
    .then(jsonData => {
        changetextPC(jsonData)
    })

if (langage === "Francais") {
    requestURL = "/fr/jsonFR/general.json";
    fetch(requestURL)
        .then(response => response.json())
        .then(jsonData => {
            changetext(jsonData)
        })
    requestURL = "/fr/jsonFR/accueil.json";
    fetch(requestURL)
        .then(response => response.json())
        .then(jsonData => {
            changetextP(jsonData)
        })
} else {
    requestURL = "/en/jsonEN/general.json";
    fetch(requestURL)
        .then(response => response.json())
        .then(jsonData => {
            document.getElementById("Services").innerHTML = "Our services :";
            document.getElementById("NosProduit").innerHTML = "Our products :";
            document.getElementById("Industrie4").innerHTML = "Industry 4.0";
            document.getElementById("Activite").innerHTML = "Our activity";
            document.getElementById("parte").innerHTML = "Our partners :";
            document.getElementById("confia").innerHTML = "Trust us :";
            document.getElementById("Produit").innerHTML = "PRODUCTS";
            document.getElementById("Tour").innerHTML = "Washing tower";
            document.getElementById("Electro").innerHTML = "Wet/dry electrofilters";
            document.getElementById("Filtre").innerHTML = "Bag filters";
            document.getElementById("EDIP").innerHTML = "EDIP: Powder Dosing and Injection Equipment";
            document.getElementById("Installation").innerHTML = "“Turnkey” installations";
            document.getElementById("Recuperation").innerHTML = "Energy Recovery";
            document.getElementById("Fourniture").innerHTML = "Supply of spare parts";
            document.getElementById("solution").innerHTML = "Connected remote management solution";
            document.getElementById("Audit").innerHTML = "Installation Audits and Expertise";
            document.getElementById("Remise").innerHTML = "Upgrading to regulatory standards";
            document.getElementById("Valor").innerHTML = "Energetic valuation";
            document.getElementById("Etude").innerHTML = "Feasibility studies, pre-projects and detailed studies";
            document.getElementById("Maintenance").innerHTML = "Preventive / curative maintenance";
            document.getElementById("industrie").innerHTML = "INDUSTRY 4.0";
            document.getElementById("Savoir").innerHTML = "EXPERTISE";
            document.getElementById("Metier").innerHTML = "Our job";
            document.getElementById("Servithen").innerHTML = "Why Servithen";
            document.getElementById("Engagement").innerHTML = "Our engagement";
            document.getElementById("contact").innerHTML = "CONTACT US";
            document.getElementById("accueil").innerHTML = "HOME";
            document.getElementById("Copyright").innerHTML = '&copy; Copyright 1986 - 2022 | SERVITHEN | All rights reserved | <a class="Copyright" href="/fr/MentionsLegales.html">Legal Notice</a>';
            document.getElementById("Coordonnees").innerHTML = "Coordinates :";
            changetext(jsonData)
        })
    requestURL = "/en/jsonEN/accueil.json";
    fetch(requestURL)
        .then(response => response.json())
        .then(jsonData => {
            changetextP(jsonData)
        })
}