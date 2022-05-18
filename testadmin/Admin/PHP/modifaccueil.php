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
        for ($i = 1; $i <= 5; $i++) {
            if ($_FILES['middle'.$i]['type'] !== ""){
                for ($j = strlen($_FILES['middle'.$i]['type'])-1; $j > 0; $j--) {
                    if ($_FILES['middle'.$i]['type'][$j] == "/"){
                        $j = 0;
                    }
                    else
                    {
                     $back = $_FILES['middle'.$i]['type'][$j] . $back;
                    }
                }
                move_uploaded_file($_FILES['middle'.$i]['tmp_name'], '../../img/middle'.$i.'.'.$back);
                $middleStr = 'middle'.$i;
                $dataeF2->$middleStr=$back;
            }
            else
            {
                $middleStr = 'middle'.$i;
                $dataeF2->$middleStr=$save->Francais->$middleStr;
            }
            $back = "";
        };
        for ($i = 1; $i <= 8; $i++) {
            if ($_FILES['middleP'.$i]['type'] !== ""){
                for ($j = strlen($_FILES['middlepP'.$i]['type'])-1; $j > 0; $j--) {
                    if ($_FILES['middlepP'.$i]['type'][$j] == "/"){
                        $j = 0;
                    }
                    else
                    {
                     $back = $_FILES['middleP'.$i]['type'][$j] . $back;
                    }
                }
                move_uploaded_file($_FILES['middleP'.$i]['tmp_name'], '../../img/middleP'.$i.'.'.$back);
                $middlePStr = 'middleP'.$i;
                $dataeF2->$middlePStr=$back;
            }
            else
            {
                $middlePStr = 'middleP'.$i;
                $dataeF2->$middlePStr=$save->Francais->$middlePStr;
            }
            $back = "";
        };
        $dataeF=new stock();
        $dataeF->Francais=$dataeF2;
        return json_encode($dataeF);
        }
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
    function get_mdp() {
        $dataeG2=new stock();
        $dataeG2->MotDePasse = $_POST['MotPasse'];
        $dataeG=new stock();
        $dataeG->Francais=$dataeG2;
        ?>
        <script>string = "";
        part = "";
        phpvalue = <?php echo (json_encode($_POST['MotPasse'])) ?>;
        for (let i = 0; i < phpvalue.length; i++) {
          if (phpvalue.charAt(i) != ":") {
            part += phpvalue.charAt(i);
          } else {
            string += String.fromCharCode(part);
            part = "";
          }
        }
        localStorage.setItem("valide",string);
        </script>
        <?php
        return json_encode($dataeG);
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
                $file_name='../Securite/mdp.json';
                if(file_put_contents("$file_name", get_mdp())) {
                    $file_name='../../fr/jsonFR/formataccueil.json';
                    $file='../../fr/jsonFR/formataccueil.json';
                    $file=file_get_contents("$file");
                    $file=json_decode($file);
                    if(file_put_contents("$file_name", fileupload($file))){
                        $file_name='../../fr/jsonFR/formatGeneral.json';
                        $file='../../fr/jsonFR/formatGeneral.json';
                        $file=file_get_contents("$file");
                        $file=json_decode($file);
                        if(file_put_contents("$file_name", fileuploadG($file))){
                        ?>
                        <script>
                        document.location.href = "../modifaccueil.html";
                        </script>
                        <?php
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