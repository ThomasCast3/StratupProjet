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
        Confiance.innerHTML = Confiance.innerHTML + '<div class="slide"><img class="comptC" id="Conf'+i+'" src="/img/LogoConfiance/Conf' + i +'."></div>';
    }
    let Partenaire = document.getElementById('Partenaire')
    for (let i = 0; i < site["Francais"]["numbP"]; i++) {
        Partenaire.innerHTML = Partenaire.innerHTML + '<div class="slide"><img class="comptP" id="Part'+i+'" src="/img/Partenaire/Part'+i+'."></div>';
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

 window.onload = function () {
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
     requestURL = "/fr/jsonFR/generalcross.json";
     fetch(requestURL)
         .then(response => response.json())
         .then(jsonData => {
             changetextC(jsonData)
             requestURL = "/fr/jsonFR/formatGeneral.json";
             fetch(requestURL)
                 .then(response => response.json())
                 .then(jsonData => {
                     formatG(jsonData)
                 })
         })
 }