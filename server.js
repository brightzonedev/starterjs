import express from 'express';
import path from 'path';
import opn from 'opn';

const port = 3030;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port, err => {
   if (err) {
       console.error(err);
   } else {
     opn('http://localhost:' + port);
    }
});


