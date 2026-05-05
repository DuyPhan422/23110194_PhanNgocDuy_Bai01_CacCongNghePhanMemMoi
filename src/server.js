import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from './config/configdb';

require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;

const startServer = async () => {
    const isConnected = await connectDB();
    if (!isConnected) {
        console.error('Server not started because MongoDB connection failed.');
        return;
    }

    app.listen(port, () => {
        console.log("Backend Nodejs is runing on the port : " + port)
    })
};

startServer();