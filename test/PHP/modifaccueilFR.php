<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Servithen</title>
    <link rel="shortcut icon" href="/img/Logo.png" type="image/x-icon">
    <link rel="stylesheet" href="accueil.css">
</head>    
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    function get_data() {
        class stock{
        }
        $file_name='/fr/jsonFR//fr/jsonFR/accueil.json';
        $datae2=new stock();
        $datae2->SousTitre = $_POST['SousTitre'];
        $datae2->Activity = $_POST['Activity'];
        $datae2->description1 = $_POST['description1'];
        $datae2->description2 = $_POST['description2'];
        $datae2->description3 = $_POST['description3'];
        $datae2->description4 = $_POST['description4'];
        $datae2->description5 = $_POST['description5'];
        $datae2->left1 = $_POST['left1'];
        $datae2->left2 = $_POST['left2'];
        $datae2->left3 = $_POST['left3'];
        $datae2->left4 = $_POST['left4'];
        $datae2->left5 = $_POST['left5'];
        $datae2->right1 = $_POST['right1'];
        $datae2->right2 = $_POST['right2'];
        $datae2->right3 = $_POST['right3'];
        $datae2->right4 = $_POST['right4'];
        $datae2->right5 = $_POST['right5'];
        $datae2->middle1 = $_POST['middle1'];
        $datae2->middle2 = $_POST['middle2'];
        $datae2->middle3 = $_POST['middle3'];
        $datae2->middle4 = $_POST['middle4'];
        $datae2->middle5 = $_POST['middle5'];
        $datae2->descriptionP1 = $_POST['descriptionP1'];
        $datae2->descriptionP2 = $_POST['descriptionP2'];
        $datae2->descriptionP3 = $_POST['descriptionP3'];
        $datae2->descriptionP4 = $_POST['descriptionP4'];
        $datae2->descriptionP5 = $_POST['descriptionP5'];
        $datae2->descriptionP6 = $_POST['descriptionP6'];
        $datae2->descriptionP7 = $_POST['descriptionP7'];
        $datae2->descriptionP8 = $_POST['descriptionP8'];
        $datae2->left1 = $_POST['leftP1'];
        $datae2->left2 = $_POST['leftP2'];
        $datae2->left3 = $_POST['leftP3'];
        $datae2->left4 = $_POST['leftP4'];
        $datae2->left5 = $_POST['leftP5'];
        $datae2->left6 = $_POST['leftP6'];
        $datae2->left7 = $_POST['leftP7'];
        $datae2->left8 = $_POST['leftP8'];
        $datae2->rightP1 = $_POST['rightP1'];
        $datae2->rightP2 = $_POST['rightP2'];
        $datae2->rightP3 = $_POST['rightP3'];
        $datae2->rightP4 = $_POST['rightP4'];
        $datae2->rightP5 = $_POST['rightP5'];
        $datae2->rightP6 = $_POST['rightP6'];
        $datae2->rightP7 = $_POST['rightP7'];
        $datae2->rightP8 = $_POST['rightP8'];
        $datae2->middleP1 = $_POST['middleP1'];
        $datae2->middleP2 = $_POST['middleP2'];
        $datae2->middleP3 = $_POST['middleP3'];
        $datae2->middleP4 = $_POST['middleP4'];
        $datae2->middleP5 = $_POST['middleP5'];
        $datae2->middleP6 = $_POST['middleP6'];
        $datae2->middleP7 = $_POST['middleP7'];
        $datae2->middleP8 = $_POST['middleP8'];
        $datae=new stock();
        $datae->Francais=$datae2;
        return json_encode($datae);
    }
    function get_dataG() {
        $file_name='/fr/jsonFR/general.json';
        $dataeG2=new stock();
        $dataeG2->Titre = $_POST['Titre'];
        $dataeG2->Telephone = $_POST['Telephone'];
        $dataeG2->TelephoneURL = $_POST['TelephoneURL'];
        $dataeG2->Mail = $_POST['Mail'];
        $dataeG2->MailURL = $_POST['MailURL'];
        $dataeG2->Linkedin = $_POST['Linkedin'];
        $dataeG2->LinkedinURL = $_POST['LinkedinURL'];
        $dataeG2->Localisation = $_POST['Local'];
        $dataeG2->LocalisationURL = $_POST['LocalURL'];
        $dataeG2->Backgroundimg = $_POST['Backgroundimg'];
        $numbP = $_POST['NumbPart'];
        for ($i = 0; $i < $numbP; $i++) {
            $dataeG3 = new stock();
            $dataeG3->Image = $_POST['Part'.$i];
            $dataeGP[$i] = $dataeG3;
        };
        $numbC = $_POST['NumbConf'];
        for ($i = 0; $i < $numbC; $i++) {
            $dataeG4 = new stock();
            $dataeG4->Image = $_POST['Conf'.$i];
            $dataeGC[$i] = $dataeG4;
        };
        $dataeG2->Partenaire = $dataeGP;
        $dataeG2->Confiance = $dataeGC;
        $dataeG=new stock();
        $dataeG->Francais=$dataeG2;
        return json_encode($dataeG);
        }
    }
    $file_name = "accueil.json";
    if(file_put_contents("$file_name", get_data())) {
        $file_name = "general.json";
        if(file_put_contents("$file_name", get_dataG())) {
            echo 'success';
            /*$redirect_page = '/fr/modifaccueilFR.html';
            header('Location:'  .$redirect_page);*/
        }
    }                
    else {
        echo 'There is some error';  
        /*$redirect_page = '/fr/modifaccueilFR.html';
        header('Location:'  .$redirect_page);*/          
    }           
?>