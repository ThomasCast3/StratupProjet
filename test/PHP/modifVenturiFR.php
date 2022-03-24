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
        $file_name='Venturi.json';
        $datae2=new stock();
        $datae2->imgProduit = $_POST['imgProduit'];
        $datae2->txtProduit = $_POST['txtProduit'];
        $datae2->lienProduit = $_POST['lienProduit'];
        $datae2->SousTitre = $_POST['SousTitre'];
        $datae=new stock();
        $datae->Francais=$datae2;
        return json_encode($datae);
    }
    function get_dataG() {
        $file_name='/test/fr/jsonFR/general.json';
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
    
    $file_name='Tours.json';
        
    if(file_put_contents("$file_name", get_data())) {
        $file_name='/test/fr/jsonFR/general.json';
        if(file_put_contents("$file_name", get_dataG())) {
            echo 'success';
            $redirect_page = 'VenturiFR.html';
            header('Location:'  .$redirect_page);
        }
    }                
    else {
        echo 'There is some error';  
        $redirect_page = 'modifVenturiFR.html';
        header('Location:'  .$redirect_page);             
    }           
?>