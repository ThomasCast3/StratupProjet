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
        $file_name='../fr/jsonFR/accueil.json';
        $datae2=new stock();
        $datae2->Titre = $_POST['Titre'];
        $datae2->SousTitre = $_POST['SousTitre'];
        $datae2->Activity = $_POST['Activity'];
        $datae2->Telephone = $_POST['Telephone'];
        $datae2->TelephoneURL = $_POST['TelephoneURL'];
        $datae2->Mail = $_POST['Mail'];
        $datae2->MailURL = $_POST['MailURL'];
        $datae2->Linkedin = $_POST['Linkedin'];
        $datae2->LinkedinURL = $_POST['LinkedinURL'];
        $datae2->Localisation = $_POST['Local'];
        $datae2->LocalisationURL = $_POST['LocalURL'];
        $datae2->Backgroundimg = $_POST['Backgroundimg'];
        $datae2->description1 = $_POST['description1'];
        $datae2->description2 = $_POST['description2'];
        $datae2->description3 = $_POST['description3'];
        $datae2->description4 = $_POST['description4'];
        $datae2->left1 = $_POST['left1'];
        $datae2->left2 = $_POST['left2'];
        $datae2->left3 = $_POST['left3'];
        $datae2->left4 = $_POST['left4'];
        $datae2->right1 = $_POST['right1'];
        $datae2->right2 = $_POST['right2'];
        $datae2->right3 = $_POST['right3'];
        $datae2->right4 = $_POST['right4'];
        $datae2->middle1 = $_POST['middle1'];
        $datae2->middle2 = $_POST['middle2'];
        $datae2->middle3 = $_POST['middle3'];
        $datae2->middle4 = $_POST['middle4'];
        $numbP = $_POST['NumbPart'];
        for ($i = 0; $i < $numbP; $i++) {
            $datae3 = new stock();
            $datae3->Image = $_POST['Part'.$i];
            $dataeP[$i] = $datae3;
        };
        $numbC = $_POST['NumbConf'];
        for ($i = 0; $i < $numbC; $i++) {
            $datae4 = new stock();
            $datae4->Image = $_POST['Conf'.$i];
            $dataeC[$i] = $datae4;
        };
        $datae2->Partenaire = $dataeP;
        $datae2->Confiance = $dataeC;
        $datae=new stock();
        $datae->Francais=$datae2;
        return json_encode($datae);
        }
    }
    
    $file_name='../fr/jsonFR/accueil.json';
        
    if(file_put_contents("$file_name", get_data())) {
        echo 'success';
        $redirect_page = '/fr/accueil.html';
        header('Location:'  .$redirect_page);
    }                
    else {
        echo 'There is some error';  
        $redirect_page = 'modif accueil.html';
        header('Location:'  .$redirect_page);             
    }           
?>