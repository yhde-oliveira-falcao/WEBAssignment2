var express = require("express");
var app = express();
var path = require("path");

const hbs = require('express-handlebars');

var multer = require("multer"); //For the form submission...
var nodemailer = require("nodemailer");

//var bodyParser = require('body-parser');

var HTTP_PORT = process.env.PORT || 8080;

app.engine('.hbs', hbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

//create storage properties:
const STORAGE = multer.diskStorage({
    destination: "shrouded-bastion-62981/public/photos/",
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));//properties of the name
    }
});

const UPLOAD = multer({ storage: STORAGE});

//email setup
var transporter = nodemailer.createTransport({
    service: '',
    auth: {
        user: '',
        pass: ''
    },
});

function onHttpStart(){
    console.log("Express http server listing on: " + HTTP_PORT);
}

/*var myUser = {
    username: "Yuri",
  };
*/
app.use(express.static('views'));
app.use(express.static('public'));



// setup a 'route' to listen on the default url path
app.use('/images2', express.static('images2'));
app.use('/images2/harbour.mp4', express.static('images2/harbour.mp4'),function(req,res,next){
    next();
});
app.use('/images2/torontocity2.jpg', express.static('images2/torontocity2.jpg'),function(req,res,next){
    next();
});
app.use('css/styles.css', express.static('css/styles.css'),function(req,res,next){
    next();
});
app.use('js/script.js', express.static('js/script.js'),function(req,res,next){
    next();
});
//app.use(express.static("/public/"));


app.get("/home", function (req,res){
    //res.sendFile(path.join(__dirname, "./home.html"));
    res.render("home", { layout: false });
});
app.get("/", function (req,res){
    //res.sendFile(path.join(__dirname, "./home.html"));
    res.render("home", { layout: false });
});

//--------------------
app.get("/index", function (req,res){
    // res.sendFile(path.join(__dirname, "./index.html"));
    res.render('index', {layout: false});
});

//--------------------
app.get("/contact", function (req,res){
    //res.sendFile(path.join(__dirname, "./contact.html"));
    res.render('contact', { layout: false});
});


//for the uploads part handler
app.post("/contact-form", UPLOAD.single("photo"), (req, res)=> {
    const FORM_DATA = req.body;
    const FORM_FILE = req.file;

    const DATA_RECEIVED = 

    "<!DOCTYPE html><html lang='en'> "+
   "<head>" + '<meta charset="UTF-8">' + ' <meta name="viewport" content="width=device-width, initial-scale=1.0"/>' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>' +
        '<title>YUYU-BnB-Home</title>' +
        '<link rel="stylesheet" href="css/styles.css">' +
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">' +
    '<script src="script.js"></script>'+
    '</head>' +
    '<div class="main_container" id="home">	<div class="banner_image" >	<div class="banner_content">		<h1>YUYU BnB<br> <span> <span></h1>	<div class="navbar_items"> <ul> <li><a href="home.html">HOME</a></li>         <li><a href="index.html">ROOMS</a></li>           <li><a href="contact.html">REGISTRATION</a></li>           </ul>        <br><br>            </div>		</div>		</div>		</div> '+
    //This part will become the header of my pages... 
    "<h2>Your submission was successful!</h2> <br/><br/>" + 
    "<p>Your form data was: </p><br/>" + JSON.stringify(FORM_DATA) + "<br/><br/>" +
    "<p>Your file data was: </p><br/>" + JSON.stringify(FORM_FILE)  +
    "<br/><p><h3>This was the image:</h3><br/>" + 
    "<img src='/photos/" + FORM_FILE.filename + "'/>" +
    "<br/><br/> Welcome<strong>" + FORM_DATA.fname + " " + FORM_DATA.lname + "</strong>" +
    " to YUYUBnB!"
    console.log(FORM_DATA);

    var mailOptions = {
        from: 'YuriWeb322@gmail.com',
        to: FORM_DATA.email,
        subject: 'Welcome to YUYUBnB',
        html: '<p> Mr(s). ' + FORM_DATA.fname + ":</p><br/> <p>Welcome!!! :D </p>" +
        "<p>Thank you for joining the best rental service in the world!</p><br>"+
        "<p>Check out more information at our website</p> <br>"+
    "https://shrouded-bastion-62981.herokuapp.com/home.html"    
}

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            console.log("ERROR: " + error);
        } else {
            console.log("SUCCESS: " + info.response);
        }
    });

    res.send(DATA_RECEIVED);
});/*check input name of photo*/

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
