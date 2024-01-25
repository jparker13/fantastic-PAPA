const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', function (req, res) {
    res.send('Hello World from Express \n My name is Janna Parker and I cannot find a fully free ennagram test...\n I have answered atleast 100 questions and they all tried to make me pay before i could see my results \n SO... here are my own answers...\n I will alwasy do my part in the group and then some\n I will call you out for not doing your group work.')
})

//app.listen(3000)

app.listen(port, () => {
    console.log(`MIKE app listening on port ${port}`)
})