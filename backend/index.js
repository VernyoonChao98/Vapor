import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { routes } from "./routes/index.js";
import { MONGO_URI } from "./config/keys.js";

const app = express();

app.use(cors());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.use(routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
