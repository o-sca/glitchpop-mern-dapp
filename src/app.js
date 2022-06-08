require('dotenv').config();
const path = require('path');

const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');

const { mainPageRouter } = require('./routes/main.js');
const { apiRouter } = require('./routes/api.js');

const root = path.join(__dirname, '..', 'public');

exports.App = async () => {
    const app = express();

    try {
        mongoose.https://github.com/o-scarzhu/dApp.git

        app.use(cors());
        app.use(morgan('combined'));
        app.use(express.json());
        app.use(express.static(root));
        app.use(session({
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: true
            }),
        );
        
        app.set('view engine', 'ejs');
        app.set('views', root);
        
        app.use('/', mainPageRouter());
        app.use('/api/', apiRouter());
        
        return app;
    } catch(e) {
        console.error(e)
        return;
    }
};