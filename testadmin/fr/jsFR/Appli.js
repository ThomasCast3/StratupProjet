function changetextC(site) {
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

let langage;

if (localStorage.getItem("langue") !== null){
    langage = localStorage.getItem("langue");
} else {
    langage = "Francais";
}

if (langage === "Anglais") {
    window.onload = function () {
        document.getElementById("txtTitre").innerHTML = "Discover our application :"
        document.getElementById("WhatIs").innerHTML = "What is MyPartner ?"
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
    }
}

requestURL = "/fr/jsonFR/generalcross.json";
fetch(requestURL)
    .then(response => response.json())
    .then(jsonData => {
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
        changetextC(jsonData)
    })
