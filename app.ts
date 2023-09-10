import express, { Application } from "express";
import router from "./products/products.routes.ts";
import morgan from "morgan";

const app: Application = express();
const port: number = 3000;

app.use(express.json());
app.use(morgan("dev"));
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
