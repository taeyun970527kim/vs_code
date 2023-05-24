const express = require('express');
const app = express();
const port = 3000;
c
// Embedded JavaScript templates
app.set('view engine', 'ejs');
app.listen(port, ()=>{
console.log('hi start');
});

app.get('/', (req, res) => {
    let data = { nm: 'Nick', age: 20};
    res.render('index', data);
});
