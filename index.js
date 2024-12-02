const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(cors());

app.get('/news', (req, res)=>{
    fs.readFile(path.join(__dirname, 'newsData.json'),'utf8',(err, data)=> {
        if(err) {
            return res.status(500).json({ message: 'No se encontro ninguna noticia' });
        }
        res.json(JSON.parse(data));
    });
});

// Start the server
app.listen(PORT, ()=> {
    console.log(`The server is running on http://localhost:${PORT}`);
});