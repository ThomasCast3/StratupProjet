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
        $numbimg = $_POST['Numbimg'];
        $back = "";
        for ($i = 0; $i < $numbimg; $i++) {
            if ($_FILES['photoService'.$i]['type'] !== ""){
                for ($j = strlen($_FILES['photoService'.$i]['type'])-1; $j > 0; $j--) {
                    if ($_FILES['photoService'.$i]['type'][$j] == "/"){
                        $j = 0;
                    }
                    else
                    {
                     $back = $_FILES['photoService'.$i]['type'][$j] . $back;
                    }
                }
                move_uploaded_file($_FILES['photoService'.$i]['tmp_name'], '../../img/LogoConfiance/Serv'.$i.'.'.$back);
                $ServStr = 'Serv'.$i;
                $dataeF2->$ServStr=$back;
            }
            else
            {
                $ServStr = 'Serv'.$i;
                $dataeF2->$ConfStr=$save->Francais->$ServStr;
            }
            $back = "";
        }
        $dataeF=new stock();
        $dataeF->Francais=$dataeF2;
        return json_encode($dataeF);
        }
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
                    $file_name='../../fr/jsonFR/formatService'.$serv.'.json';
                    $file='../../fr/jsonFR/formatService'.$serv.'.json';
                    $file=file_get_contents("$file");
                    $file=json_decode($file);
                    if(file_put_contents("$file_name", fileupload($file))){
                        $file_name='../../fr/jsonFR/formatGeneral.json';
                        $file='../../fr/jsonFR/formatGeneral.json';
                        $file=file_get_contents("$file");
                        $file=json_decode($file);
                        if(file_put_contents("$file_name", fileuploadG($file))){
                            $redirect_page = '/Admin/Service/modifservice'.$serv.'.html';
                            header('Location:'.$redirect_page);
                        }
                    }
                }
            }
        }
    }                
    else {
        echo 'There is some error';  
    }           
?>