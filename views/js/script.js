var index10 = [
    { sub: "Blue Couch Room", caption: "Price per night: 569.00   Rating: 4.6/5", url: "images2/apartament1.jpg" },
    { sub: "Yellow Couch Room", caption: "Price per night: 569.00   Rating: 4.6/5", url: "images2/apartament2.jpg" },
    { sub: "Zebra Master Bedroom", caption: "Price per night: 569.00   Rating: 4.6/5", url: "images2/apartament3.jpg" },
];
var index2 = [
    { sub: "Rexaled Bedroom", caption: "Price per night: 569.00   Rating: 4.6/5", url: "images2/apartament4.jpg" },
    { sub: "Master Loft", caption: "Price per night: 569.00   Rating: 4.6/5", url: "images2/apartament5.jpg" },
    { sub: "Single Musician Room", caption: "Price per night: 569.00   Rating: 4.6/5", url: "images2/apartament6.jpg" },
];

window.onload = function() {

    var imageContainer3 = document.querySelector("#index1");
    var myImageStr3 = "";
    for (var i = 0; i < index10.length; i++) {
        myImageStr3 += '<div class="diff_services_item">' + "<img src='" + index10[i].url + "' />" + '<h3 class="sub_title">' +
            index10[i].sub + "</h3>" + "<p>" + index10[i].caption + "</p>" +

            "</div>";
    }
    imageContainer3.innerHTML += myImageStr3; // add the new image

    var imageContainer = document.querySelector("#index2");
    var myImageStr = "";
    for (var i = 0; i < index2.length; i++) {
        myImageStr += '<div class="diff_services_item">' + "<img src='" + index2[i].url + "' />" + '<h3 class="sub_title">' +
            index2[i].sub + "</h3>" + "<p>" + index2[i].caption + "</p>" +

            /*"<form" +
            +'action= ' + '"https://formspree.io/xjveongd"' +
            +"method=" + '"POST"' +
            +">" +
            "<label>" +
            "Your email: " +
            '<input type="text" name="_replyto" size="12"> ' +
            "</label><br>" +
            "<label>" +
            "Contact owner: " +
            '<input type="text" name="_replyto" size="12"> ' +
            "</label>" +
            '<button type="submit">Offer</button>' +
            "</form>" +*/ "</div>";
    }
    imageContainer.innerHTML += myImageStr;
    // add the new image
};

//Passwords Script:
var password = document.getElementById("password")
  , confirmPassword = document.getElementById("confirmPassword");

function validatePassword(){
  if(password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords Don't Match");
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;