import express  from "express";
import db from "./utils/database.js";
import router from "./routes/index.js";
import "./models/index.js";
import errorHandler from "./utils/errorHandler.js";


const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json());

app.use(router);

app.get ('/', (req, res) => {
    res.send ('OK');
});

app.use(errorHandler)


app.listen(PORT, async () => {
    await db.sync();
    console.log("DB connected")
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
