const exp = require("express");
const app = exp();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "home.html"));
});

app.post("/user_login", function (req, res){
    //var username = req.body.username;
    //var password = req.body.password;
    res.redirect("/admin_dashboard");
    //res.send("Post: Login Username: " + username + " Password: " + password)
})

app.get("/user_login", function (req, res){
    var username = req.query.username;
    var password = req.query.password;git
    res.send("Username: " + username + " Password: " + password);
})

//  localhost:3000/login
app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "login.html"));
})

//  localhost:3000/product/14578
app.get("/product/:id", function(req, res){
    var product_id = req.params.id;
    res.send("Product ID: " + product_id);
})


app.post("/login", function(req, res){

})

//  localhost:3000/login
/*app.route("/login")
    .get(function(req, res){

    })

    .post(function(req, res){

    })
*/
app.get("/admin_dashboard", function (req, res){
    //res.send("Text Msgs")
    var obj = {username: "Halal", email: "Bumbum@gmail.com"};
    res.json(obj);
});

app.use("/about_us", function (req, res){
    res.send("About Us Page");
});

var port = process. env.PORT || 3000;
app.listen(port);
