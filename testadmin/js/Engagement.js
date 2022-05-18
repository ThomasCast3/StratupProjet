function deleteslash(text) {
    target = "";
    newtext = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === "\\" ){
            target = "/";
        } else if (target === "\\" && text.charAt(i) === "'"){
            newtext += "" + text.charAt(i);
            target = "";
            console.log(newtext)
        } else if (target === "\\" && text.charAt(i) !== "'"){
            newtext += "\\" + text.charAt(i);
            target = "";
        } else {
            newtext += text.charAt(i);
        }
    }
    return newtext;
}
function changetext(site) {
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
    document.getElementById('txtTitre').innerHTML = deleteslash(site[langage]["Titre"]);
}
function changetextC(site) {
    document.getElementById('Telephone').innerHTML = deleteslash(site["Francais"]["Telephone"]);
    document.getElementById('Telephone').href = deleteslash(site["Francais"]["TelephoneURL"]);
    document.getElementById('Mail').innerHTML = deleteslash(site["Francais"]["Mail"]);
    document.getElementById('Mail').href = deleteslash(site["Francais"]["MailURL"]);
    document.getElementById('Linkedin').innerHTML = deleteslash(site["Francais"]["Linkedin"]);
    document.getElementById('Linkedin').href = deleteslash(site["Francais"]["LinkedinURL"]);
    document.getElementById('Local').innerHTML = deleteslash(site["Francais"]["Localisation"]);
    document.getElementById('Local').href = deleteslash(site["Francais"]["LocalisationURL"]);
    let Confiance = document.getElementById('Confiance')
    for (let i = 0; i < site["Francais"]["numbC"]; i++) {
        Confiance.innerHTML = Confiance.innerHTML + '<div class="slide"><img src="/img/LogoConfiance/Conf' + i +'.png"></div>';
    }
    let Partenaire = document.getElementById('Partenaire')
    for (let i = 0; i < site["Francais"]["numbP"]; i++) {
        Partenaire.innerHTML = Partenaire.innerHTML + '<div class="slide"><img src="/img/Partenaire/Part'+i+'.png"></div>';
    }
    R = site["Francais"]["red"];
    G = site["Francais"]["green"];
    B = site["Francais"]["blue"];
    document.getElementsByClassName("coordonne")[0].style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementsByClassName("navbar")[0].style.boxShadow = "rgb("+R+","+G+","+B+" / 62%) 0 5px 20px";
    document.getElementsByClassName("page")[0].style.backgroundColor = "rgb("+R+","+G+","+B+")";
    for (let k = 0; k < document.getElementsByClassName("sphère").length; k++) {
        document.getElementsByClassName("sphère")[k].style.backgroundColor = "rgb("+R+","+G+","+B+")";
    }
    for (let k = 0; k < document.getElementsByClassName("barre").length; k++) {
        document.getElementsByClassName("barre")[k].style.backgroundColor = "rgb("+R+","+G+","+B+")";
    }
    document.getElementById("infoAccueil").style.backgroundImage = "linear-gradient( rgb("+R+","+G+","+B+"), rgba(0,0,0,0))";
}
function changetextP(site){
    document.getElementById('stxtTitre').innerHTML = site["Francais"]["SousTitre"];
    document.getElementById('P1').innerHTML = site["Francais"]["Presentation1"];
    document.getElementById('P2').innerHTML = site["Francais"]["Presentation2"];
    document.getElementById('P3').innerHTML = site["Francais"]["Presentation3"];
}
function formatG(site){
    document.getElementsByClassName('logo')[0].src = document.getElementsByClassName('logo')[0].src + site["Francais"]["Logo"];
    document.getElementsByClassName('fondaccueil')[0].src = document.getElementsByClassName('fondaccueil')[0].src + site["Francais"]["Backgroundimg"];
    for (let i = 0; i < document.getElementsByClassName("comptC").length; i++) {
        document.getElementById("Conf"+i).src = document.getElementById("Conf"+i).src + site["Francais"]["Conf"+i];
    }
    for (let i = 0; i < document.getElementsByClassName("comptP").length; i++) {
        document.getElementById("Part"+i).src = document.getElementById("Part"+i).src + site["Francais"]["Part"+i];
    }
    $('.customer-logos').slick({
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

if (langage === "Francais") {
    var requestURL = "/fr/jsonFR/generalcross.json";
    fetch(requestURL)
        .then(response => response.json())
        .then(jsonData => {
            changetextC(jsonData)
            requestURL = "/fr/jsonFR/engagement.json";
            fetch(requestURL)
                .then(response => response.json())
                .then(jsonData => {
                    changetextP(jsonData)
                    requestURL = "/fr/jsonFR/formatGeneral.json";
                    fetch(requestURL)
                        .then(response => response.json())
                        .then(jsonData => {
                            formatG(jsonData)
                            requestURL = "/fr/jsonFR/general.json";
                            fetch(requestURL)
                                .then(response => response.json())
                                .then(jsonData => {
                                    changetext(jsonData)
                                })
                        })
                })
        })
} else {
    var requestURL = "/fr/jsonFR/generalcross.json";
    fetch(requestURL)
        .then(response => response.json())
        .then(jsonData => {
            changetextC(jsonData)
            requestURL = "/fr/jsonFR/engagement.json";
            fetch(requestURL)
                .then(response => response.json())
                .then(jsonData => {
                    changetextP(jsonData)
                    requestURL = "/fr/jsonFR/formatGeneral.json";
                    fetch(requestURL)
                        .then(response => response.json())
                        .then(jsonData => {
                            formatG(jsonData)
                            requestURL = "/en/jsonEN/general.json";
                            fetch(requestURL)
                                .then(response => response.json())
                                .then(jsonData => {
                                    document.getElementById("presentation").innerHTML = "Engagement";
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
                        })
                })
        })
}
