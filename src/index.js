const app = require('express')();

app.get('/', (req, res) =>
    res.send('Hello node!')
);

app.get('/json', (req, res) =>
    res.json({message: 'Docker is noice'})
);


const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));