import "dotenv/config";
import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan";
import bodyParser from "body-parser";
import { dynamicRoutes } from "./routes/index.js";

if (!process.env.PORT) {
    console.log(`No port value specified...`)
}

const PORT = parseInt(process.env.PORT as string, 10)

const app = express()

app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(helmet())
app.use(morgan('dev'));

app.use(dynamicRoutes);

app.get('/ping', (req, res) => {
    res.send('pong!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})