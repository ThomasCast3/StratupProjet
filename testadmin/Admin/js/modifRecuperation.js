let numbP;
let numbC;
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
function changetext(site){
  document.getElementById('txtTitre').value = deleteslash(site[langage]["Titre"]);
}
function changetextcross(site){
  document.getElementById('Telephone').value = deleteslash(site["Francais"]["Telephone"]);
  document.getElementById('TelephoneURL').value = deleteslash(site["Francais"]["TelephoneURL"]);
  document.getElementById('Mail').value = deleteslash(site["Francais"]["Mail"]);
  document.getElementById('MailURL').value = deleteslash(site["Francais"]["MailURL"]);
  document.getElementById('Linkedin').value = deleteslash(site["Francais"]["Linkedin"]);
  document.getElementById('LinkedinURL').value = deleteslash(site["Francais"]["LinkedinURL"]);
  document.getElementById('Local').value = deleteslash(site["Francais"]["Localisation"]);
  document.getElementById('LocalURL').value = deleteslash(site["Francais"]["LocalisationURL"]);
  let ShowConfiance = document.getElementById('ShowConfiance')
  for (let i = 0; i < site["Francais"]["numbC"]; i++) {
    ShowConfiance.innerHTML = ShowConfiance.innerHTML + '<div class="slide"><img id="Confimg' + i + '" src="/img/LogoConfiance/Conf' + i +'."></div>';
  }
  let ShowPartenaire = document.getElementById('ShowPartenaire')
  for (let i = 0; i < site["Francais"]["numbP"]; i++) {
    ShowPartenaire.innerHTML = ShowPartenaire.innerHTML + '<div class="slide"><img id="Partimg' + i + '" src="/img/Partenaire/Part'+i+'."></div>';
  }
  let ConfNumb = document.getElementById('NumbConf')
  let Confiance = document.getElementById('Confiance')
  numbC = site["Francais"]["numbC"];
  let i = 0;
  for (i = 0; i < numbC; i++) {
    Confiance.innerHTML = Confiance.innerHTML + '<input type="file" accept="image/*" id="Conf' + i + '" name="Conf' + i + '" >';
  }
  ConfNumb.value = i;
  document.getElementById('ConfB+').addEventListener('click',function(){
    Confiance.innerHTML = Confiance.innerHTML + '<input type="file" accept="image/*" id="Conf' + i + '" name="Conf' + i + '" >';
    i++;
    numbC++;
    ConfNumb.value = i;
  })
  document.getElementById('ConfB-').addEventListener('click',function(){
    i--;
    numbC--;
    document.getElementById('Conf'+i).remove();
    ConfNumb.value = i;
  })
  let NumbPart = document.getElementById('NumbPart')
  let Partenaire = document.getElementById('Partenaire');
  numbP = site["Francais"]["numbP"];
  let j = 0;
  for (j = 0; j < numbP; j++) {
    Partenaire.innerHTML = Partenaire.innerHTML + '<input type="file" accept="image/*" id="Part' + j + '" name="Part' + j + '" >';
  }
  NumbPart.value = j;
  document.getElementById('PartB+').addEventListener('click',function(){
    Partenaire.innerHTML = Partenaire.innerHTML + '<input type="file" accept="image/*" id="Part' + j + '" name="Part' + j + '" >';
    j++;
    numbP++;
    NumbPart.value = j;
  })
  document.getElementById('PartB-').addEventListener('click',function(){
    j--;
    numbP--;
    document.getElementById('Part'+j).remove();
    NumbPart.value = j;
  })
  document.getElementById("red").value = site["Francais"]["red"];
  document.getElementById("green").value = site["Francais"]["green"];
  document.getElementById("blue").value = site["Francais"]["blue"];
  window.onmousemove = function () {
    R = document.getElementById("red").value;
    G = document.getElementById("green").value;
    B = document.getElementById("blue").value;
    document.getElementById("redt").innerHTML = "R:"+R;
    document.getElementById("greent").innerHTML = "G:"+G;
    document.getElementById("bluet").innerHTML = "B:"+B;
    document.getElementsByClassName("carrerimg")[0].style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementsByClassName("coordonne")[0].style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementsByClassName("navbar")[0].style.boxShadow = "rgb("+R+","+G+","+B+" / 62%) 0 5px 20px";
    document.getElementsByClassName("logoedit")[0].style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementsByClassName("page")[0].style.backgroundColor = "rgb("+R+","+G+","+B+")";
    for (let k = 0; k < document.getElementsByClassName("sphère").length; k++) {
      document.getElementsByClassName("sphère")[k].style.backgroundColor = "rgb("+R+","+G+","+B+")";
    }
    for (let k = 0; k < document.getElementsByClassName("barre").length; k++) {
      document.getElementsByClassName("barre")[k].style.backgroundColor = "rgb("+R+","+G+","+B+")";
    }
    document.getElementById("infoAccueil").style.backgroundImage = "linear-gradient( rgb("+R+","+G+","+B+"), rgba(0,0,0,0))";
    document.getElementById("Background").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementById("imgedit").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementById("pdf").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementById("ConfB+").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementById("ConfB-").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementById("PartB+").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementById("PartB-").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementById("Confirm").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    if (document.getElementById("fin"))
    {
      document.getElementById("fin").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    }
    for (let i = 0; i < numbP; i++) {
      document.getElementById("Part"+i).style.backgroundColor = "rgb("+R+","+G+","+B+")";
    }
    for (let i = 0; i < numbC; i++) {
      document.getElementById("Conf"+i).style.backgroundColor = "rgb("+R+","+G+","+B+")";
    }
  }
}
function changetextP(site){
  document.getElementById('stxtTitre').value = deleteslash(site[langage]["SousTitre"]);
  document.getElementById('txtProduit').value = deleteslash(site[langage]["txtProduit"]);
  edit();
}
function formatG(site){
  document.getElementsByClassName('logo')[0].src = document.getElementsByClassName('logo')[0].src + site["Francais"]["Logo"];
  document.getElementsByClassName('fondaccueil')[0].src = document.getElementsByClassName('fondaccueil')[0].src + site["Francais"]["Backgroundimg"];
  let ConfNumb = document.getElementById('NumbConf')
  for (let i = 0; i < ConfNumb.value; i++) {
    document.getElementById("Confimg"+i).src = document.getElementById("Confimg"+i).src + site["Francais"]["Conf"+i];
  }
  let PartNumb = document.getElementById('NumbPart')
  for (let i = 0; i < PartNumb.value; i++) {
    document.getElementById("Partimg"+i).src = document.getElementById("Partimg"+i).src + site["Francais"]["Part"+i];
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
function format(site){
  document.getElementById("imgProduit").src = document.getElementById("imgProduit").src + site['Francais']['Produit'];
}
function highlight(){
  for (let i = 0; i < document.getElementById("NumbPart").value; i++) {
    document.getElementById("Part"+i).addEventListener("mouseover", function () {
      document.getElementById("Partimg"+i).style.boxShadow = "0px 20px blue";
    })
    document.getElementById("Part"+i).addEventListener("mouseout", function () {
      document.getElementById("Partimg"+i).style.boxShadow = "";
    })
  }
  for (let i = 0; i < document.getElementById("NumbConf").value; i++) {
    document.getElementById("Conf"+i).addEventListener("mouseover", function () {
      document.getElementById("Confimg"+i).style.boxShadow = "0px 20px blue";
    })
    document.getElementById("Conf"+i).addEventListener("mouseout", function () {
      document.getElementById("Confimg"+i).style.boxShadow = "";
    })
  }
}
function Securite(site){
  string = "";
  part = "";
  for (let i = 0; i < site['Francais']['MotDePasse'].length; i++) {
    if (site['Francais']['MotDePasse'].charAt(i) != ":") {
      part += site['Francais']['MotDePasse'].charAt(i);
    } else {
      string += String.fromCharCode(part);
      part = "";
    }
  }
  if (localStorage.getItem("valide") !== string){
    document.location.href = "../../index.html";
  }
}
var requestURL = "/Admin/Securite/mdp.json";
fetch(requestURL)
    .then(response => response.json())
    .then(jsonData => {
      Securite(jsonData)
    })

let langage;

if (localStorage.getItem("langue") !== null){
  langage = localStorage.getItem("langue");
} else {
  langage = "Francais";
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
  document.getElementById('langage').value = langage;
  document.getElementById("Confirm").addEventListener('click', function (e) {
    if (document.getElementById("fin") == null) {
      if (document.getElementById("txtTitre").name == null) {
        reditTitre(document.getElementById("1"));
      }
      if (document.getElementById("stxtTitre").name == null) {
        reditSousTitre(document.getElementById("2"));
      }
      if (document.getElementById("txtProduit").name !== "txtProduit") {
        reditTxt(document.getElementById("Txt"));
      }
      if (document.getElementById("Telephone").name !== "Telephone") {
        reditPhone(document.getElementById("Phone"));
      }
      if (document.getElementById("Mail").name !== "Mail") {
        reditMail(document.getElementById("EMail"));
      }
      if (document.getElementById("Linkedin").name !== "Linkedin") {
        reditLinkedin(document.getElementById("ELinkedin"));
      }
      if (document.getElementById("Local").name !== "Local") {
        reditLocal(document.getElementById("ELocal"));
      }
      button = document.createElement("button")
      button.innerHTML = "Confirmer les changements";
      button.id = "fin";
      document.getElementById("LocalConfirm").append(button);
    }
  })
}

if (langage === "Francais") {
  var requestURL = "/fr/jsonFR/generalcross.json";
  fetch(requestURL)
      .then(response => response.json())
      .then(jsonData => {
        changetextcross(jsonData)
        requestURL = "/fr/jsonFR/formatGeneral.json";
        fetch(requestURL)
            .then(response => response.json())
            .then(jsonData => {
              formatG(jsonData)
              requestURL = "/fr/jsonFR/formatRecuperation.json";
              fetch(requestURL)
                  .then(response => response.json())
                  .then(jsonData => {
                    format(jsonData)
                    requestURL = "/fr/jsonFR/general.json";
                    fetch(requestURL)
                        .then(response => response.json())
                        .then(jsonData => {
                          changetext(jsonData)
                          requestURL = "/fr/jsonFR/Recuperation.json";
                          fetch(requestURL)
                              .then(response => response.json())
                              .then(jsonData => {
                                changetextP(jsonData)
                              })
                        })
                  })
            })
      })
} else {
  var requestURL = "/fr/jsonFR/generalcross.json";
  fetch(requestURL)
      .then(response => response.json())
      .then(jsonData => {
        changetextcross(jsonData)
        requestURL = "/fr/jsonFR/formatGeneral.json";
        fetch(requestURL)
            .then(response => response.json())
            .then(jsonData => {
              formatG(jsonData)
              requestURL = "/fr/jsonFR/formatRecuperation.json";
              fetch(requestURL)
                  .then(response => response.json())
                  .then(jsonData => {
                    format(jsonData)
                    requestURL = "/en/jsonEN/general.json";
                    fetch(requestURL)
                        .then(response => response.json())
                        .then(jsonData => {
                          changetext(jsonData)
                          requestURL = "/en/jsonEN/Recuperation.json";
                          fetch(requestURL)
                              .then(response => response.json())
                              .then(jsonData => {
                                changetextP(jsonData)
                              })
                        })
                  })
            })
      })
}

function edit() {
  highlight()
  editTitre()
  editSousTitre()
  editPhone()
  editMail()
  editLinkedin()
  editLocal()
  editTxt()
}
function editTitre() {
  Titre = document.createElement("h1");
  Origine = document.getElementById("txtTitre");
  Titre.id = Origine.id;
  Titre.className = Origine.className;
  Titre.innerHTML = Origine.value + '<img id="1" class="edit" src="/img/edit.png">';
  Origine.remove();
  document.getElementById("txtAccueil").appendChild(Titre);
  document.getElementById("1").addEventListener('click',function () {
    reditTitre(this);
  })
}
function reditTitre(edit) {
  edit.remove();
  Origine = document.createElement("textarea");
  Titre = document.getElementById("txtTitre");
  Origine.id = Titre.id;
  Origine.className = Titre.className;
  Origine.name = "Titre";
  Origine.value = Titre.innerHTML;
  Titre.remove();
  document.getElementById("txtAccueil").appendChild(Origine);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "/img/edit.png"
  editeur.id = "1";
  document.getElementById("txtAccueil").appendChild(editeur);
  editeur.addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editTitre();
  })
}
function editSousTitre() {
  SousTitre = document.createElement("h2");
  SousOrigine = document.getElementById("stxtTitre");
  SousTitre.id = SousOrigine.id;
  SousTitre.className = SousOrigine.className;
  SousTitre.innerHTML = SousOrigine.value + '<img id="2" class="edit" src="/img/edit.png">';
  SousOrigine.remove();
  document.getElementById("soustxtAccueil").appendChild(SousTitre);
  document.getElementById("2").addEventListener('click',function () {
    reditSousTitre(this);
  })
}
function reditSousTitre(edit) {
  edit.remove();
  SousOrigine = document.createElement("textarea");
  SousTitre = document.getElementById("stxtTitre");
  SousOrigine.id = SousTitre.id;
  SousOrigine.className = SousTitre.className;
  SousOrigine.name = "SousTitre";
  SousOrigine.value = SousTitre.innerText;
  SousTitre.remove();
  document.getElementById("soustxtAccueil").appendChild(SousOrigine);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "/img/edit.png"
  editeur.id = "2";
  document.getElementById("soustxtAccueil").appendChild(editeur);
  editeur.addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editSousTitre();
  })
}
function editTxt() {
  Txt = document.createElement("p");
  TxtOrigine = document.getElementById("txtProduit");
  Txt.id = TxtOrigine.id;
  Txt.innerHTML = TxtOrigine.value;
  Txt.className = "texteBroch";
  TxtOrigine.remove();
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "/img/edit.png"
  editeur.id = "Txt";
  document.getElementById("carreimg").innerHTML = '<img id="'+editeur.id+'" src="'+editeur.src+'" class="'+editeur.className+'">' + document.getElementById("carreimg").innerHTML;
  document.getElementById("carreimg").innerHTML = '<p id="' + Txt.id + '" class="' + Txt.className + '">' + Txt.innerHTML + '</p>' + document.getElementById("carreimg").innerHTML;
  document.getElementById("Txt").addEventListener('click', function () {
    reditTxt(this);
  })
}
function reditTxt(edit) {
  edit.remove()
  TxtOrigine = document.createElement("textarea");
  Txt = document.getElementById("txtProduit");
  TxtOrigine.id = Txt.id;
  TxtOrigine.name = TxtOrigine.id;
  TxtOrigine.value = Txt.innerHTML;
  Txt.remove();
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "/img/edit.png"
  editeur.id = "Txt";
  document.getElementById("carreimg").innerHTML = '<img id="'+editeur.id+'" class="'+editeur.className+'" src="'+editeur.src+'">' + document.getElementById("carreimg").innerHTML;
  editeur.remove();
  document.getElementById("carreimg").innerHTML = '<textarea id="'+TxtOrigine.id+'" name="'+TxtOrigine.name+'">'+TxtOrigine.value+'</textarea>' + document.getElementById("carreimg").innerHTML
  document.getElementById(editeur.id).addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editTxt();
  })
}
function editPhone() {
  Phone = document.createElement("a");
  PhoneOrigine = document.getElementById("Telephone");
  PhoneURL = document.getElementById("TelephoneURL");
  Phone.id = PhoneOrigine.id;
  Phone.className = "footerp";
  Phone.innerHTML = PhoneOrigine.value;
  Phone.href = PhoneURL.value;
  PhoneOrigine.remove();
  PhoneURL.remove();
  document.getElementsByClassName("foter")[0].appendChild(Phone);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "/img/edit.png"
  editeur.id = "Phone";
  document.getElementsByClassName("foter")[0].appendChild(editeur);
  document.getElementById("Phone").addEventListener('click',function () {
    reditPhone(this);
  })
}
function reditPhone(edit) {
  if (edit != null){
    edit.remove()
  }
  PhoneOrigine = document.createElement("textarea");
  PhoneURL = document.createElement("textarea");
  Phone = document.getElementById("Telephone");
  PhoneOrigine.id = Phone.id;
  PhoneURL.id = Phone.id + "URL";
  PhoneOrigine.name = PhoneOrigine.id;
  PhoneURL.name = PhoneURL.id;
  PhoneOrigine.value = Phone.innerHTML;
  PhoneURL.value = Phone.href;
  Phone.remove();
  document.getElementsByClassName("foter")[0].appendChild(PhoneOrigine);
  document.getElementsByClassName("foter")[0].appendChild(PhoneURL);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "/img/edit.png"
  editeur.id = "Phone";
  document.getElementsByClassName("foter")[0].appendChild(editeur);
  document.getElementById("Phone").addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editPhone(this);
  })
}
function editMail() {
  Mail = document.createElement("a");
  MailOrigine = document.getElementById("Mail");
  MailURL = document.getElementById("MailURL");
  Mail.id = MailOrigine.id;
  Mail.className = "footerp";
  Mail.innerHTML = MailOrigine.value;
  Mail.href = MailURL.value;
  MailOrigine.remove();
  MailURL.remove();
  document.getElementsByClassName("foter")[1].appendChild(Mail);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "/img/edit.png"
  editeur.id = "EMail";
  document.getElementsByClassName("foter")[1].appendChild(editeur);
  document.getElementById("EMail").addEventListener('click',function () {
    reditMail(this);
  })
}
function reditMail(edit) {
  if (edit != null){
    edit.remove()
  }
  MailOrigine = document.createElement("textarea");
  MailURL = document.createElement("textarea");
  Mail = document.getElementById("Mail");
  MailOrigine.id = Mail.id;
  MailURL.id = Mail.id + "URL";
  MailOrigine.name = MailOrigine.id;
  MailURL.name = MailURL.id;
  MailOrigine.value = Mail.innerHTML;
  MailURL.value = Mail.href;
  Mail.remove();
  document.getElementsByClassName("foter")[1].appendChild(MailOrigine);
  document.getElementsByClassName("foter")[1].appendChild(MailURL);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "/img/edit.png"
  editeur.id = "EMail";
  document.getElementsByClassName("foter")[1].appendChild(editeur);
  document.getElementById("EMail").addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editMail();
  })
}
function editLinkedin() {
  Linkedin = document.createElement("a");
  LinkedinOrigine = document.getElementById("Linkedin");
  LinkedinURL = document.getElementById("LinkedinURL");
  Linkedin.id = LinkedinOrigine.id;
  Linkedin.className = "footerp";
  Linkedin.innerHTML = LinkedinOrigine.value;
  Linkedin.href = LinkedinURL.value;
  LinkedinOrigine.remove();
  LinkedinURL.remove();
  document.getElementsByClassName("foter")[2].appendChild(Linkedin);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "/img/edit.png"
  editeur.id = "ELinkedin";
  document.getElementsByClassName("foter")[2].appendChild(editeur);
  document.getElementById("ELinkedin").addEventListener('click',function () {
    reditLinkedin(this);
  })
}
function reditLinkedin(edit) {
  if (edit != null){
    edit.remove()
  }
  LinkedinOrigine = document.createElement("textarea");
  LinkedinURL = document.createElement("textarea");
  Linkedin = document.getElementById("Linkedin");
  LinkedinOrigine.id = Linkedin.id;
  LinkedinURL.id = Linkedin.id + "URL";
  LinkedinOrigine.name = LinkedinOrigine.id;
  LinkedinURL.name = LinkedinURL.id;
  LinkedinOrigine.value = Linkedin.innerHTML;
  LinkedinURL.value = Linkedin.href;
  Linkedin.remove();
  document.getElementsByClassName("foter")[2].appendChild(LinkedinOrigine);
  document.getElementsByClassName("foter")[2].appendChild(LinkedinURL);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "/img/edit.png"
  editeur.id = "ELinkedin";
  document.getElementsByClassName("foter")[2].appendChild(editeur);
  document.getElementById("ELinkedin").addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editLinkedin();
  })
}
function editLocal() {
  Local = document.createElement("a");
  LocalOrigine = document.getElementById("Local");
  LocalURL = document.getElementById("LocalURL");
  Local.id = LocalOrigine.id;
  Local.className = "footerp";
  Local.innerHTML = LocalOrigine.value;
  Local.href = LocalURL.value;
  LocalOrigine.remove();
  LocalURL.remove();
  document.getElementsByClassName("foter")[3].appendChild(Local);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "/img/edit.png"
  editeur.id = "ELocal";
  document.getElementsByClassName("foter")[3].appendChild(editeur);
  document.getElementById("ELocal").addEventListener('click',function () {
    reditLocal(this);
  })
}
function reditLocal(edit) {
  if (edit != null){
    edit.remove()
  }
  LocalOrigine = document.createElement("textarea");
  LocalURL = document.createElement("textarea");
  Local = document.getElementById("Local");
  LocalOrigine.id = Local.id;
  LocalURL.id = Local.id + "URL";
  LocalOrigine.name = LocalOrigine.id;
  LocalURL.name = LocalURL.id;
  LocalOrigine.value = Local.innerHTML;
  LocalURL.value = Local.href;
  Local.remove();
  document.getElementsByClassName("foter")[3].appendChild(LocalOrigine);
  document.getElementsByClassName("foter")[3].appendChild(LocalURL);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "/img/edit.png"
  editeur.id = "ELocal";
  document.getElementsByClassName("foter")[3].appendChild(editeur);
  document.getElementById("ELocal").addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editLocal();
  })
}