import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://zeeshanmustafa:ssJ6y6aiNIoPNgOh@cluster0.3goojnd.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false)
