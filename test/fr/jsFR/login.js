var password;
//Le mot de passe
var pass1 = "1234";
password = prompt('Entre le mot de passe');
if (password == pass1)
//message de validation
    alert("mot de passe bon");
//redirection si c'est pas bon
else if (password != pass1) {
    alert("mot de passe pas bon");
    document.location.href = 'http://google.com';

}