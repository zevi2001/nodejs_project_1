import express, { response } from "express";
import router from "./login.routes.js";
import morgan from "morgan";

const app = express();
const port = 3001;
app.use(express.json());
app.use(morgan("dev"));
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


app.use("/api", router);
app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});