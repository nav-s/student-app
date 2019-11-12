import express from 'express';
import { urlencoded, json } from 'body-parser';
import { url } from './config/mongo.config';
import { connect } from 'mongoose';
import studentRouter from './app/routes/student.routes'

const router = express.Router()

// Attaching Promise Library to Mongoose Promise
Promise = global.Promise;


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(json())


connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Code Assignment for Student CRUD"});
})
app.use('/student',studentRouter)

// listen for requests
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000");
});