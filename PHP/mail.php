<?php
if(!empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['email']) && !empty($_POST['phone']) && !empty($_POST['message']) && !empty($_POST['societe'])){
$nom = htmlspecialchars($_POST['nom']);
$prenom = htmlspecialchars($_POST['prenom']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);
$phone = htmlspecialchars($_POST['phone']);
$societe = htmlspecialchars($_POST['societe']);

if(filter_var($email, FILTER_VALIDATE_EMAIL)){

}else {
    echo 'email non valide';
}

}else{
    header('location: ../form.html');
    die();
}


?>