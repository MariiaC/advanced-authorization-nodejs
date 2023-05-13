require('dotenv').config();
const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');


// створюємо екземпляр додатку
const app = express();

const PORT = process.env.PORT;

const startApp = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server runs on PORT ${PORT}`)
        })
    } catch (e) {
        console.log(e)
        
    }
};
