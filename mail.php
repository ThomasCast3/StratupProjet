<?php
$envoie = mail('chikendeath3@gmail.com','Contact depuis votre site web', $_POST['message'], 'From: castanier.thomas0703@gmail.com');

if ($envoie)
echo '<p>Votre message a bien été envoyé.</p>';
?>