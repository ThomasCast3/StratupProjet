function changetextC(site) {
    document.getElementById('infoAccueil').innerHTML = '<img src="' + site["Francais"]["Backgroundimg"] + '" class="fondaccueil">' + document.getElementById('infoAccueil').innerHTML;
}

requestURL = "/fr/jsonFR/generalcross.json";
fetch(requestURL)
    .then(response => response.json())
    .then(jsonData => {
        document.getElementById("francais").addEventListener("click",function () {
            localStorage.setItem("langue","Francais")
            if (localStorage.getItem("langue") === "Francais") {
                document.location.reload();
            }
        })
        document.getElementById("anglais").addEventListener("click",function () {
            localStorage.setItem("langue","Anglais")
            if (localStorage.getItem("langue") === "Anglais") {
                document.location.reload();
            }
        })
        changetextC(jsonData)
    })

$(document).ready(function() {
        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            responsive: [{
                breakpoint: 768,
                setting: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                setting: {
                    slidesToShow: 3
                }
            }]
        });
    });
    $(document).ready(function() {
        $('.customer-logos2').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            responsive: [{
                breakpoint: 768,
                setting: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                setting: {
                    slidesToShow: 3
                }
            }]
        });
    });