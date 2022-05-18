<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    function fileuploadG($save){
        $dataeF2=new stock();
        $back = "";
        if ($_FILES['Backgroundimg']['type'] !== ""){
            for ($i = strlen($_FILES['Backgroundimg']['type'])-1; $i > 0; $i--) {
                if ($_FILES['Backgroundimg']['type'][$i] == "/"){
                    $i = 0;
                }
                else
                {
                 $back = $_FILES['Backgroundimg']['type'][$i] . $back;
                }
            }
            $dataeF2->Backgroundimg=$back;
        }
        else
        {
            $dataeF2->Backgroundimg=$save->Francais->Backgroundimg;
        }
        move_uploaded_file($_FILES['Backgroundimg']['tmp_name'], '../../img/Backgroundimg.'.$back);
        $back = "";
        if ($_FILES['logo']['type'] !== ""){
            for ($i = strlen($_FILES['logo']['type'])-1; $i > 0; $i--) {
                if ($_FILES['logo']['type'][$i] == "/"){
                    $i = 0;
                }
                else
                {
                 $back = $_FILES['logo']['type'][$i] . $back;
                }
            }
            $dataeF2->Logo=$back;
        }
        else
        {
            $dataeF2->Logo=$save->Francais->Logo;
        }
        move_uploaded_file($_FILES['logo']['tmp_name'], '../../img/logo.'.$back);
        $numbP = $_POST['NumbPart'];
        for ($i = 0; $i < $numbP; $i++) {
            if ($_FILES['Part'.$i]['type'] !== ""){
                for ($j = strlen($_FILES['Part'.$i]['type'])-1; $j > 0; $j--) {
                    if ($_FILES['Part'.$i]['type'][$j] == "/"){
                        $j = 0;
                    }
                    else
                    {
                     $back = $_FILES['Part'.$i]['type'][$j] . $back;
                    }
                }
                move_uploaded_file($_FILES['Part'.$i]['tmp_name'], '../../img/partenaire/Part'.$i.'.'.$back);
                $PartStr = 'Part'.$i;
                $dataeF2->$PartStr=$back;
            }
            else
            {
                $PartStr = 'Part'.$i;
                $dataeF2->$PartStr=$save->Francais->$PartStr;
            }
            $back = "";
        };
        $numbC = $_POST['NumbConf'];
        for ($i = 0; $i < $numbC; $i++) {
            if ($_FILES['Conf'.$i]['type'] !== ""){
                for ($j = strlen($_FILES['Conf'.$i]['type'])-1; $j > 0; $j--) {
                    if ($_FILES['Conf'.$i]['type'][$j] == "/"){
                        $j = 0;
                    }
                    else
                    {
                     $back = $_FILES['Conf'.$i]['type'][$j] . $back;
                    }
                }
                move_uploaded_file($_FILES['Conf'.$i]['tmp_name'], '../../img/LogoConfiance/Conf'.$i.'.'.$back);
                $ConfStr = 'Conf'.$i;
                $dataeF2->$ConfStr=$back;
            }
            else
            {
                $ConfStr = 'Conf'.$i;
                $dataeF2->$ConfStr=$save->Francais->$ConfStr;
            }
            $back = "";
        };
        $dataeF=new stock();
        $dataeF->Francais=$dataeF2;
        return json_encode($dataeF);
        }
    function fileupload($save){
        $dataeF2=new stock();
        $back = "";
        if ($_FILES['imgProduit']['type'] !== ""){
            for ($i = strlen($_FILES['imgProduit']['type'])-1; $i > 0; $i--) {
                if ($_FILES['imgProduit']['type'][$i] == "/"){
                    $i = 0;
                }
                else
                {
                 $back = $_FILES['imgProduit']['type'][$i] . $back;
                }
            }
            move_uploaded_file($_FILES['imgProduit']['tmp_name'], '../../img/Electro.'.$back);
            $dataeF2->Produit=$back;
        }
        else{
            $dataeF2->Produit=$save->Francais->Produit;
        }
        $dataeF=new stock();
        $dataeF->Francais=$dataeF2;
        return json_encode($dataeF);
        }
    function get_data() {
        class stock{
        }
        $datae2=new stock();
        $datae2->txtProduit = $_POST['txtProduit'];
        $datae2->SousTitre = $_POST['SousTitre'];
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
    $file_name='../../fr/jsonFR/Electro.json';
    }
    else
    {
    $file_name='../../en/jsonEN/Electro.json';
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
                $file_name='../../fr/jsonFR/formatElectro.json';
                $file='../../fr/jsonFR/formatElectro.json';
                $file=file_get_contents("$file");
                $file=json_decode($file);
                if(file_put_contents("$file_name", fileupload($file))){
                    $file_name='../../fr/jsonFR/formatGeneral.json';
                    $file='../../fr/jsonFR/formatGeneral.json';
                    $file=file_get_contents("$file");
                    $file=json_decode($file);
                    if(file_put_contents("$file_name", fileuploadG($file))){
                        $redirect_page = '/Admin/Produit/modifElectro.html';
                        header('Location:'.$redirect_page);
                    }
                }
            }
        }
    }                
    else {
        echo 'There is some error';              
    }           
?>