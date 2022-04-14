import 'dotenv/config'
import express from "express";
import routes from "./routes.js";

const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use('/v1', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

