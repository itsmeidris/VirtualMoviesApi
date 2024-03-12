const express = require('express');
const app = express();

app.use(express.json());

const movieRouter = require('./Routes/movieRouter');
app.use('/movies' ,movieRouter);

const PORT = 7878;
app.listen(PORT ,() =>{
    console.log(`Server is listening on port ${PORT} :`);
});