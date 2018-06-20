const express = require('express')
const app = express()

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/about.html', (req, res) => {
    setTimeout(() => {
        res.sendFile(__dirname + '/about.html');
    }, 2000);
})

app.listen(8000, () => console.log('Example app listening on port 3000!'))