function changetext(site){
  document.getElementById('txtTitre').value = site[langage]["Titre"];
}
function changetextcross(site){
  document.getElementById('Telephone').value = site["Francais"]["Telephone"];
  document.getElementById('TelephoneURL').value = site["Francais"]["TelephoneURL"];
  document.getElementById('Mail').value = site["Francais"]["Mail"];
  document.getElementById('MailURL').value = site["Francais"]["MailURL"];
  document.getElementById('Linkedin').value = site["Francais"]["Linkedin"];
  document.getElementById('LinkedinURL').value = site["Francais"]["LinkedinURL"];
  document.getElementById('Local').value = site["Francais"]["Localisation"];
  document.getElementById('LocalURL').value = site["Francais"]["LocalisationURL"];
  document.getElementById('Background').value = site["Francais"]["Backgroundimg"];
  function restart(Type){
    if (Type == "Conf"){
      for(let r = 0;r < site["Francais"]["Confiance"].length;r++){
        document.getElementById('Conf'+ r).value = site["Francais"]["Confiance"][r]["Image"];
      }
    }
    if (Type == "Part"){
      for(let r = 0;r < site["Francais"]["Partenaire"].length;r++){
        document.getElementById('Part'+ r).value = site["Francais"]["Partenaire"][r]["Image"];
      }
    }
  }
  let ConfNumb = document.getElementById('NumbConf')
  let Confiance = document.getElementById('Confiance')
  let i = 0;
  for (i = 0; i < site["Francais"]["Confiance"].length; i++) {
    Confiance.innerHTML = Confiance.innerHTML + '<textarea id="Conf' + i + '" name="Conf' + i + '" ></textarea>';
  }
  restart("Conf");
  ConfNumb.value = i;
  document.getElementById('ConfB+').addEventListener('click',function(){
    Confiance.innerHTML = Confiance.innerHTML + '<textarea id="Conf' + i + '" name="Conf' + i + '" ></textarea>';
    i++;
    restart("Conf");
    ConfNumb.value = i;
  })
  document.getElementById('ConfB-').addEventListener('click',function(){
    i--;
    document.getElementById('Conf'+i).remove();
    ConfNumb.value = i;
  })
  let NumbPart = document.getElementById('NumbPart')
  let Partenaire = document.getElementById('Partenaire');
  let j = 0;
  for (j = 0; j < site["Francais"]["Partenaire"].length; j++) {
    Partenaire.innerHTML = Partenaire.innerHTML + '<textarea id="Part' + j + '" name="Part' + j + '" ></textarea>';
    document.getElementById('Part'+ j).value = site["Francais"]["Partenaire"][j]["Image"];
  }
  restart("Part");
  NumbPart.value = j;
  document.getElementById('PartB+').addEventListener('click',function(){
    Partenaire.innerHTML = Partenaire.innerHTML + '<textarea id="Part' + j + '" name="Part' + j + '" ></textarea>';
    j++;
    restart("Part");
    NumbPart.value = j;
  })
  document.getElementById('PartB-').addEventListener('click',function(){
    j--;
    document.getElementById('Part'+j).remove();
    NumbPart.value = j;
  })
}
function changetextPC(site){
  document.getElementById('imgProduit').value = site["Francais"]["imgProduit"];
}
function changetextP(site){
  document.getElementById('stxtTitre').value = site[langage]["SousTitre"];
  document.getElementById('txtProduit').value = site[langage]["txtProduit"];
  document.getElementById('lienProduit').value = site[langage]["lienProduit"];
  edit();
}

if (localStorage.getItem("valide") !== "$2a$10$ce.wKWbjl3Y8buc9A6MbBOI4lIS81s8MeK.95FzkocF6i/c5/bLgC"){
  document.location.href = "../../index.html";
}

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
      if (document.getElementById("Background").name !== "Backgroundimg") {
        reditFond(document.getElementById("3"));
      }
      if (document.getElementById("imgProduit").name !== "imgProduit") {
        reditImg(document.getElementById("Img"));
      }
      if (document.getElementById("txtProduit").name !== "txtProduit") {
        reditTxt(document.getElementById("Txt"));
      }
      if (document.getElementById("lienProduit").name !== "lienProduit") {
        reditLien(document.getElementById("Lien"));
      }
      if (document.getElementById("Part0").name !== "Part0") {
        reditPartenaire()
      }
      if (document.getElementById("Conf0").name !== "Conf0") {
        reditConfiance()
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

var requestURL = "/fr/jsonFR/generalcross.json";
fetch(requestURL)
    .then(response => response.json())
    .then(jsonData => {
      changetextcross(jsonData)
    })

requestURL = "/fr/jsonFR/Venturicross.json";
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
  requestURL = "/fr/jsonFR/Venturi.json";
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
        changetext(jsonData)
      })
  requestURL = "/en/jsonEN/Venturi.json";
  fetch(requestURL)
      .then(response => response.json())
      .then(jsonData => {
        changetextP(jsonData)
      })
}

function edit() {
  editTitre()
  editSousTitre()
  editFond()
  editPartenaire()
  editConfiance()
  editPhone()
  editMail()
  editLinkedin()
  editLocal()
  editImg()
  editTxt()
  editLien()
}
function editTitre() {
  Titre = document.createElement("p");
  Origine = document.getElementById("txtTitre");
  Titre.id = Origine.id;
  Titre.className = Origine.className;
  Titre.innerHTML = Origine.value + '<img id="1" class="edit" src="https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0">';
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
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
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
  SousTitre = document.createElement("p");
  SousOrigine = document.getElementById("stxtTitre");
  SousTitre.id = SousOrigine.id;
  SousTitre.className = SousOrigine.className;
  SousTitre.innerHTML = SousOrigine.value + '<img id="2" class="edit" src="https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0">';
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
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
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
function editFond() {
  Fond = document.createElement("img");
  FondOrigine = document.getElementById("Background");
  Fond.id = FondOrigine.id;
  Fond.src = FondOrigine.value;
  Fond.className = "fondaccueil";
  FondOrigine.remove();
  document.getElementById("infoAccueil").appendChild(Fond);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  editeur.id = "3";
  document.getElementById("infoAccueil").append(editeur)
  document.getElementById("3").addEventListener('click',function () {
    reditFond(this);
  })
}
function reditFond(edit) {
  edit.remove()
  FondOrigine = document.createElement("textarea");
  Fond = document.getElementById("Background");
  FondOrigine.id = Fond.id;
  FondOrigine.name = "Backgroundimg";
  FondOrigine.value = Fond.src;
  Fond.remove();
  document.getElementById("infoAccueil").appendChild(FondOrigine);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  editeur.id = "3";
  document.getElementById("infoAccueil").appendChild(editeur);
  editeur.addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editFond();
  })
}
function editImg() {
  Img = document.createElement("img");
  ImgOrigine = document.getElementById("imgProduit");
  Img.id = ImgOrigine.id;
  Img.src = ImgOrigine.value;
  Img.className = "imgBrochur";
  ImgOrigine.remove();
  document.getElementById("editImg").appendChild(Img);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  editeur.id = "Img";
  document.getElementById("editImg").append(editeur)
  document.getElementById("Img").addEventListener('click',function () {
    reditImg(this);
  })
}
function reditImg(edit) {
  edit.remove()
  ImgOrigine = document.createElement("textarea");
  Img = document.getElementById("imgProduit");
  ImgOrigine.id = Img.id;
  ImgOrigine.name = ImgOrigine.id;
  ImgOrigine.value = Img.src;
  Img.remove();
  document.getElementById("editImg").appendChild(ImgOrigine);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  editeur.id = "Img";
  document.getElementById("editImg").appendChild(editeur);
  editeur.addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editImg();
  })
}
function editTxt() {
  Txt = document.createElement("p");
  TxtOrigine = document.getElementById("txtProduit");
  Txt.id = TxtOrigine.id;
  Txt.innerHTML = TxtOrigine.value;
  Txt.className = "texteBroch";
  TxtOrigine.remove();
  document.getElementsByClassName("carrerimg")[0].append(Txt);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  editeur.id = "Txt";
  document.getElementsByClassName("carrerimg")[0].append(editeur)
  document.getElementById("Txt").addEventListener('click',function () {
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
  document.getElementsByClassName("carrerimg")[0].append(TxtOrigine);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  editeur.id = "Txt";
  document.getElementsByClassName("carrerimg")[0].appendChild(editeur);
  editeur.addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editTxt();
  })
}
function editLien() {
  Lien = document.createElement("a");
  LienOrigine = document.getElementById("lienProduit");
  Lien.id = LienOrigine.id;
  Lien.innerHTML = "Afficher la brochure";
  Lien.href = LienOrigine.value;
  Lien.className = "DL";
  Lien.target = LienOrigine.target;
  LienOrigine.remove();
  button = document.createElement("button");
  button.className = "btnPDF";
  button.type = "button";
  button.appendChild(Lien);
  document.getElementsByClassName("carrerimg")[0].appendChild(button);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  editeur.id = "Lien";
  document.getElementsByClassName("carrerimg")[0].appendChild(editeur)
  document.getElementById("Lien").addEventListener('click',function () {
    reditLien(this);
  })
}
function reditLien(edit) {
  edit.remove()
  LienOrigine = document.createElement("textarea");
  Lien = document.getElementById("lienProduit");
  LienOrigine.id = Lien.id;
  LienOrigine.name = LienOrigine.id;
  LienOrigine.target = Lien.target;
  LienOrigine.value = Lien.href;
  Lien.parentElement.remove();
  document.getElementsByClassName("carrerimg")[0].appendChild(LienOrigine);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  editeur.id = "Lien";
  document.getElementsByClassName("carrerimg")[0].appendChild(editeur);
  editeur.addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editLien();
  })
}
function editPartenaire() {
  for (let i = 0; i < document.getElementById("NumbPart").value; i++) {
    PartOrigine = document.getElementById("Part"+i)
    Part = document.createElement("img")
    Part.id = PartOrigine.id;
    Part.src = PartOrigine.value;
    PartOrigine.remove();
    Div = document.createElement("div")
    Div.className = "slide"
    Div.append(Part);
    document.getElementById("Partenaire").append(Div);
  }
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  editeur.id = "Part";
  document.getElementById("PartB+").className = "hide";
  document.getElementById("PartB-").className = "hide";
  document.getElementById("PartChange").append(editeur)
  editeur.addEventListener('click',function () {
    this.remove()
    reditPartenaire();
  })
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
function reditPartenaire() {
  for (let i = 0; i < document.getElementById("NumbPart").value; i++) {
    Part = document.getElementById("Part"+i)
    PartOrigine = document.createElement("textarea")
    PartOrigine.id = Part.id;
    PartOrigine.name = PartOrigine.id;
    PartOrigine.value = Part.src;
    document.getElementById("Partenaire").append(PartOrigine);
  }
  document.getElementsByClassName("customer-logos2")[0].children[0].remove();
  document.getElementById("Partenaire").className ="customer-logos2 "
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  editeur.id = "Part";
  document.getElementById("PartB+").className = "";
  document.getElementById("PartB-").className = "";
  document.getElementById("PartChange").append(editeur)
  editeur.addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editPartenaire();
  })
}
function editConfiance() {
  for (let i = 0; i < document.getElementById("NumbConf").value; i++) {
    ConfOrigine = document.getElementById("Conf"+i)
    Conf = document.createElement("img")
    Conf.id = ConfOrigine.id;
    Conf.src = ConfOrigine.value;
    ConfOrigine.remove();
    Div = document.createElement("div")
    Div.className = "slide"
    Div.append(Conf);
    document.getElementById("Confiance").append(Div);
  }
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  editeur.id = "Conf";
  document.getElementById("ConfB+").className = "hide";
  document.getElementById("ConfB-").className = "hide";
  document.getElementById("ConfChange").append(editeur)
  editeur.addEventListener('click',function () {
    this.remove()
    reditConfiance()
  })
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
}
function reditConfiance() {
  for (let i = 0; i < document.getElementById("NumbConf").value; i++) {
    Conf = document.getElementById("Conf"+i)
    ConfOrigine = document.createElement("textarea")
    ConfOrigine.id = Conf.id;
    ConfOrigine.name = ConfOrigine.id;
    ConfOrigine.value = Conf.src;
    document.getElementById("Confiance").append(ConfOrigine);
  }
  if (document.getElementsByClassName("slick-list draggable").length > 1) {
    document.getElementsByClassName("slick-list draggable")[1].remove();
  }
  else
  {
    document.getElementsByClassName("slick-list draggable")[0].remove();
  }
  document.getElementById("Confiance").className ="customer-logos slider"
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  editeur.id = "Conf";
  document.getElementById("ConfB+").className = "";
  document.getElementById("ConfB-").className = "";
  document.getElementById("ConfChange").append(editeur)
  editeur.addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editConfiance();
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
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
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
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
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
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
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
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
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
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
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
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
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
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
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
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
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