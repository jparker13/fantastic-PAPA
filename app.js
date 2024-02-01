const express = require('express')
const app = express()
const port = process.env.PORT || 5500;
//set the view engine to ejs
let path = require('path');
app.set('view engine', 'ejs'); 
app.set('views' , path.join(__dirname, 'views'));

//use res.render to load up an ejs view file

let myTypeServer = "I hope i did this right :)";

app.get('/', function (req, res) {
    res.render('index', {
        myTypeClient: myTypeServer
    });
}); 

//app.listen(3000)

app.listen(port, () => {
    console.log(`MIKE app listening on port ${port}`)
})