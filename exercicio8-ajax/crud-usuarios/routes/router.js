import express from "express"
import crudRouter from "./crudRoute.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(crudRouter);

export default app;