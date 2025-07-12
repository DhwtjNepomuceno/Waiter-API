const express = require('express');
const server = express();

const upload = require('./uploads/images');

const { v4: uuid } = require('uuid');
const id = uuid();

const routes = require('./routes');

server.use(express.json());
server.use(routes);
server.post('/upload', upload.single('file'), (req, res) => {
    res.status(200).json({
        message: "Arquivo enviado com sucesso!",
        file: req.file,
    });
});

server.use((_req, res) =>
    res.status(404).json({ erro: "Rota não encontrada." })
);

server.listen(3003, () => console.log("Server is running! 🔥🔥🔥"));
