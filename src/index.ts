import express from 'express';
import bodyParser from "body-parser";
import { spotifyRoutes } from './routes/spotifyroute';

// Initialize the express engine
const app: express.Application = express();

const router = express.Router();
const port = 3000;

app.listen(port, () => {
  // console.info(`Example app listening on port ${port}`)
})


//Set view engine to ejs
app.set("view engine", "ejs"); 

//Tell Express where we keep our index.ejs
app.set("views", __dirname + "/views"); 

//Use body-parser
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use('/spotify', spotifyRoutes);
