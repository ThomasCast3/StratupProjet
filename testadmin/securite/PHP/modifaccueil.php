<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    move_uploaded_file($_FILES['Backgroundimg']['tmp_name'], '../../img/Backgroundimg.png');
    move_uploaded_file($_FILES['logo']['tmp_name'], '../../img/logo.png');
    $numbP = $_POST['NumbPart'];
    for ($i = 0; $i < $numbP; $i++) {
        move_uploaded_file($_FILES['Part'.$i]['tmp_name'], '../../img/Partenaire/Part'.$i.'.png');
    };
    $numbC = $_POST['NumbConf'];
    for ($i = 0; $i < $numbC; $i++) {
        move_uploaded_file($_FILES['Conf'.$i]['tmp_name'], '../../img/LogoConfiance/Conf'.$i.'.png');
    };
    for ($i = 1; $i <= 5; $i++) {
        move_uploaded_file($_FILES['left'.$i]['tmp_name'], '../../img/left'.$i.'.png');
        move_uploaded_file($_FILES['right'.$i]['tmp_name'], '../../img/right'.$i.'.png');
        move_uploaded_file($_FILES['middle'.$i]['tmp_name'], '../../img/middle'.$i.'.png');
    };
    for ($i = 1; $i <= 8; $i++) {
            move_uploaded_file($_FILES['leftP'.$i]['tmp_name'], '../../img/leftP'.$i.'.png');
            move_uploaded_file($_FILES['rightP'.$i]['tmp_name'], '../../img/rightP'.$i.'.png');
            move_uploaded_file($_FILES['middleP'.$i]['tmp_name'], '../../img/middleP'.$i.'.png');
        };
    function get_data() {
        class stock{
        }
        $datae2=new stock();
        $datae2->SousTitre = $_POST['SousTitre'];
        $datae2->Activity = $_POST['Activity'];
        $datae2->description1 = $_POST['description1'];
        $datae2->description2 = $_POST['description2'];
        $datae2->description3 = $_POST['description3'];
        $datae2->description4 = $_POST['description4'];
        $datae2->description5 = $_POST['description5'];
        $datae2->descriptionP1 = $_POST['descriptionP1'];
        $datae2->descriptionP2 = $_POST['descriptionP2'];
        $datae2->descriptionP3 = $_POST['descriptionP3'];
        $datae2->descriptionP4 = $_POST['descriptionP4'];
        $datae2->descriptionP5 = $_POST['descriptionP5'];
        $datae2->descriptionP6 = $_POST['descriptionP6'];
        $datae2->descriptionP7 = $_POST['descriptionP7'];
        $datae2->descriptionP8 = $_POST['descriptionP8'];
        $datae=new stock();
        if ($_POST['langage'] == "Francais") {
        $datae->Francais=$datae2;
        }
        else
        {
        $datae->Anglais=$datae2;
        }
        return json_encode($datae);
    }
    function get_dataGC() {
        $dataeG2=new stock();
        $dataeG2->Telephone = $_POST['Telephone'];
        $dataeG2->TelephoneURL = $_POST['TelephoneURL'];
        $dataeG2->Mail = $_POST['Mail'];
        $dataeG2->MailURL = $_POST['MailURL'];
        $dataeG2->Linkedin = $_POST['Linkedin'];
        $dataeG2->LinkedinURL = $_POST['LinkedinURL'];
        $dataeG2->Localisation = $_POST['Local'];
        $dataeG2->LocalisationURL = $_POST['LocalURL'];
        $dataeG2->numbP = $_POST['NumbPart'];
        $dataeG2->numbC = $_POST['NumbConf'];
        $dataeG2->red = $_POST['red'];
        $dataeG2->green = $_POST['green'];
        $dataeG2->blue = $_POST['blue'];
        $dataeG=new stock();
        $dataeG->Francais=$dataeG2;
        return json_encode($dataeG);
    }
    function get_dataG() {
        $dataeG2=new stock();
        $dataeG2->Titre = $_POST['Titre'];
        $dataeG=new stock();
        if ($_POST['langage'] == "Francais") {
        $dataeG->Francais=$dataeG2;
        }
        else
        {
        $dataeG->Anglais=$dataeG2;
        }
        return json_encode($dataeG);
        }
    }
    if ($_POST['langage'] == "Francais") {
    $file_name='../../fr/jsonFR/accueil.json';
    }
    else
    {
    $file_name='../../en/jsonEN/accueil.json';
    }
    if(file_put_contents("$file_name", get_data())) {
        if ($_POST['langage'] == "Francais") {
        $file_name='../../fr/jsonFR/general.json';
        }
        else
        {
        $file_name='../../en/jsonEN/general.json';
        }
        if(file_put_contents("$file_name", get_dataG())) {
            $file_name='../../fr/jsonFR/generalcross.json';
            if(file_put_contents("$file_name", get_dataGC())) {
            $redirect_page = '/securite/modifaccueil.html';
            header('Location:'.$redirect_page);
            }
        }
    }                
    else {
        echo 'There is some error';
    }           
?>