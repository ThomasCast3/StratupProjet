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
  let ShowConfiance = document.getElementById('ShowConfiance')
  for (let i = 0; i < site["Francais"]["numbC"]; i++) {
    ShowConfiance.innerHTML = ShowConfiance.innerHTML + '<div class="slide"><img src="/img/LogoConfiance/Conf' + i +'.png"></div>';
  }
  let ShowPartenaire = document.getElementById('ShowPartenaire')
  for (let i = 0; i < site["Francais"]["numbP"]; i++) {
    ShowPartenaire.innerHTML = ShowPartenaire.innerHTML + '<div class="slide"><img src="/img/Partenaire/Part'+i+'.png"></div>';
  }
  let ConfNumb = document.getElementById('NumbConf')
  let Confiance = document.getElementById('Confiance')
  let i = 0;
  for (i = 0; i < site["Francais"]["numbC"]; i++) {
    Confiance.innerHTML = Confiance.innerHTML + '<input type="file" id="Conf' + i + '" name="Conf' + i + '" >';
  }
  ConfNumb.value = i;
  document.getElementById('ConfB+').addEventListener('click',function(){
    conf = document.createElement("input")
    conf.name = "Conf" + i;
    conf.type = "file";
    conf.id = conf.name;
    Confiance.append(conf);
    i++;
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
  for (j = 0; j < site["Francais"]["numbP"]; j++) {
    Partenaire.innerHTML = Partenaire.innerHTML + '<input type="file" id="Part' + j + '" name="Part' + j + '" >';
  }
  NumbPart.value = j;
  document.getElementById('PartB+').addEventListener('click',function(){
    part = document.createElement("input")
    part.name = "Part" + j;
    part.type = "file";
    part.id = part.name;
    Partenaire.append(part);
    j++;
    NumbPart.value = j;
  })
  document.getElementById('PartB-').addEventListener('click',function(){
    j--;
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
    document.getElementById("ConfB+").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementById("ConfB-").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementById("PartB+").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementById("PartB-").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    document.getElementById("Confirm").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    if (document.getElementById("fin"))
    {
      document.getElementById("fin").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    }
    for (let i = 0; i < site["Francais"]["numbP"]; i++) {
      document.getElementById("Part"+i).style.backgroundColor = "rgb("+R+","+G+","+B+")";
    }
    for (let i = 0; i < site["Francais"]["numbC"]; i++) {
      document.getElementById("Conf"+i).style.backgroundColor = "rgb("+R+","+G+","+B+")";
    }
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
function changetextP(site){
  document.getElementById('stxtTitre').value = site[langage]["SousTitre"];
  document.getElementById('description1').value = site[langage]["description1"];
  document.getElementById('description2').value = site[langage]["description2"];
  document.getElementById('description3').value = site[langage]["description3"];
  document.getElementById('description4').value = site[langage]["description4"];
  document.getElementById('description5').value = site[langage]["description5"];
  document.getElementById('descriptionP1').value = site[langage]["descriptionP1"];
  document.getElementById('descriptionP2').value = site[langage]["descriptionP2"];
  document.getElementById('descriptionP3').value = site[langage]["descriptionP3"];
  document.getElementById('descriptionP4').value = site[langage]["descriptionP4"];
  document.getElementById('descriptionP5').value = site[langage]["descriptionP5"];
  document.getElementById('descriptionP6').value = site[langage]["descriptionP6"];
  document.getElementById('descriptionP7').value = site[langage]["descriptionP7"];
  document.getElementById('descriptionP8').value = site[langage]["descriptionP8"];
  document.getElementById('DescActi').value = site[langage]["Activity"];
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
  document.getElementById("deco").addEventListener("click",function () {
    localStorage.removeItem("valide")
    if (localStorage.getItem("valide") == null) {
      document.location.href = "../../index.html";
    }
  })
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
      if (document.getElementById("txtTitre").name !== "Titre") {
        reditTitre(document.getElementById("1"));
      }
      if (document.getElementById("stxtTitre").name !== "SousTitre") {
        reditSousTitre(document.getElementById("2"));
      }
      if (document.getElementById("DescActi").name !== "Activity") {
        reditActivite(document.getElementById("4"));
      }
      j = 1;
      for (let i = 1; i < 6; i++) {
        if (document.getElementById("description" + i).name !== "description"+i) {
          reditCard(i, "", document.getElementById(j + "C"))
          j++;
        }
      }
      for (let i = 1; i < 9; i++) {
        if (document.getElementById("descriptionP" + i).name !== "descriptionP"+i) {
          reditCard(i, "P", document.getElementById(j + "C"))
          j++;
        }
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
        edit()
      })
} else {
  requestURL = "/en/jsonEN/general.json";
  fetch(requestURL)
      .then(response => response.json())
      .then(jsonData => {
        changetext(jsonData)
      })
  requestURL = "/en/jsonEN/accueil.json";
  fetch(requestURL)
      .then(response => response.json())
      .then(jsonData => {
        changetextP(jsonData)
        edit()
      })
}
function edit() {
  editTitre()
  editSousTitre()
  editActivite()
  for (let i = 1; i < 6; i++) {
    editCard(i,"")
  }
  for (let i = 1; i < 9; i++) {
    editCard(i,"P")
  }
  editPhone()
  editMail()
  editLinkedin()
  editLocal()
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
function editActivite() {
  Activite = document.createElement("p");
  ActiviteOrigine = document.getElementById("DescActi");
  Activite.id = ActiviteOrigine.id;
  Activite.className = ActiviteOrigine.className;
  Activite.innerHTML = ActiviteOrigine.value + '<img id="4" class="edit" src="https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0">';
  ActiviteOrigine.remove();
  document.getElementById("editact").appendChild(Activite);
  document.getElementById("4").addEventListener('click',function () {
    reditActivite(this);
  })
}
function reditActivite(edit) {
  edit.remove();
  ActiviteOrigine = document.createElement("textarea");
  Activite = document.getElementById("DescActi");
  ActiviteOrigine.id = Activite.id;
  ActiviteOrigine.className = Activite.className;
  ActiviteOrigine.name = "Activity";
  ActiviteOrigine.value = Activite.innerHTML;
  Activite.remove();
  document.getElementById("editact").appendChild(ActiviteOrigine);
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  editeur.id = "4";
  document.getElementById("editact").appendChild(editeur);
  editeur.addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    this.remove()
    editActivite();
  })
}
function editCard(numb,type) {
  Descri = document.createElement("p");
  DescriOrigine = document.getElementById("description"+type+numb);
  Descri.id = DescriOrigine.id;
  Descri.className = "description";
  Descri.innerHTML = DescriOrigine.value;
  DescriOrigine.remove();
  if (type === ""){
    document.getElementsByClassName("card2")[numb-1].innerHTML = '<p class="'+Descri.className+'" id="'+Descri.id+'">'+Descri.innerHTML+'</p>' + document.getElementsByClassName("card2")[numb-1].innerHTML;
  }
  else
  {
    document.getElementsByClassName("card2")[numb+4].innerHTML = '<p class="'+Descri.className+'" id="'+Descri.id+'">'+Descri.innerHTML+'</p>' + document.getElementsByClassName("card2")[numb+4].innerHTML;
  }
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  if (type === "") {
    editeur.id = numb+"C";
  }
  else
  {
    editeur.id = "" + (5 + numb)+"C";
  }
  if (type === ""){
    document.getElementsByClassName("card2")[numb-1].appendChild(editeur);
  }
  else
  {
    document.getElementsByClassName("card2")[numb+4].appendChild(editeur);
  }
  if (type === "") {
    document.getElementById(numb+"C").addEventListener('click',function () {
      reditCard(numb,type,this);
    })
  }
  else
  {
    document.getElementById((5 + numb)+"C").addEventListener('click',function () {
      reditCard(numb,type,this);
    })
  }
}
function reditCard(numb,type,edit) {
  if (edit != null)
  {
    edit.remove();
  }
  DescriOrigine = document.createElement("textarea");
  Descri = document.getElementById("description"+type+numb);
  DescriOrigine.id = Descri.id;
  DescriOrigine.className = "descriptionmodif";
  DescriOrigine.value = Descri.innerHTML;
  DescriOrigine.name = Descri.id;
  Descri.remove();
  if (type === ""){
    document.getElementsByClassName("card2")[numb-1].innerHTML = '<textarea class="'+DescriOrigine.className+'" id="'+DescriOrigine.id+'" name="'+DescriOrigine.name+'">'+DescriOrigine.value+'</textarea>' + document.getElementsByClassName("card2")[numb-1].innerHTML;
  }
  else
  {
    document.getElementsByClassName("card2")[numb+4].innerHTML = '<textarea class="'+DescriOrigine.className+'" id="'+DescriOrigine.id+'" name="'+DescriOrigine.name+'">'+DescriOrigine.value+'</textarea>' + document.getElementsByClassName("card2")[numb+4].innerHTML;
  }
  editeur = document.createElement("img");
  editeur.className = "edit";
  editeur.src = "https://s1.qwant.com/thumbr/0x380/b/0/becdf805fd34b4faa5c667fd83a386d47b1dc8459d37fdd89ffe1305138080/img_376363.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_376363.png&q=0&b=1&p=0&a=0"
  if (type === "") {
    editeur.id = numb+"C";
  }
  else
  {
    editeur.id = "" + (5 + numb)+"C";
  }
  if (type === ""){
    document.getElementsByClassName("card2")[numb-1].appendChild(editeur);
  }
  else
  {
    document.getElementsByClassName("card2")[numb+4].appendChild(editeur);
  }
  editeur.addEventListener('click',function () {
    if (document.getElementById("fin") != null)
    {
      document.getElementById("fin").remove()
    }
    editeur.remove();
    editCard(numb,type);
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