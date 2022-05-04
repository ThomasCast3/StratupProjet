<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    move_uploaded_file($_FILES['Backgroundimg']['tmp_name'], '../../img/Backgroundimg.png');
    echo($_POST['Numbimg']);
    echo($_POST['serv']);
    $serv = $_POST['serv'];
    $numbimg = $_POST['Numbimg'];
    for ($i = 0; $i < $numbimg; $i++) {
        move_uploaded_file($_FILES[$_POST['photoService'.$serv.":".$i]]['tmp_name'], '../../img/Serv'.$serv.":".$i.'.png');
    };
    $numbP = $_POST['NumbPart'];
    for ($i = 0; $i < $numbP; $i++) {
        move_uploaded_file($_FILES['Part'.$i]['tmp_name'], '../../img/Partenaire/Part'.$i.'.png');
    };
    $numbC = $_POST['NumbConf'];
    for ($i = 0; $i < $numbC; $i++) {
        move_uploaded_file($_FILES['Conf'.$i]['tmp_name'], '../../img/LogoConfiance/Conf'.$i.'.png');
    };
    function get_data() {
        class stock{
        }
        $serv = $_POST['serv'];
        $datae2=new stock();
        $datae2->SousTitre = $_POST['SousTitre'];
        $datae2->text1 = $_POST['text1'];
        $datae2->text2 = $_POST['text2'];
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
    function get_dataC() {
            $datae2=new stock();
            $datae2->numbimg = $_POST['Numbimg'];
            $datae=new stock();
            $datae->Francais=$datae2;
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
    $serv = $_POST['serv'];
    $file_name = "../../fr/jsonFR/service".$serv.".json";
    if(file_put_contents("$file_name", get_data())) {
        $file_name = "../../fr/jsonFR/service".$serv."cross.json";
        if(file_put_contents("$file_name", get_dataC())) {
            $file_name = "../../fr/jsonFR/general.json";
            if(file_put_contents("$file_name", get_dataG())) {
                $file_name = "../../fr/jsonFR/generalcross.json";
                if(file_put_contents("$file_name", get_dataGC())) {
                /*$redirect_page = '/securite/modifservice'.$serv.'.html';
                header('Location:'.$redirect_page);*/
                }
            }
        }
    }                
    else {
        echo 'There is some error';  
    }           
?>