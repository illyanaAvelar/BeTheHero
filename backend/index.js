const express = require('express')

const app = express();

app.get('/', (resquest, response) => {
    return response.json({
        evento: "Evento",
        aluno: "Lili<3",
    });
});

app.listen(3333);

