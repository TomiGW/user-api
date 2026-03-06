import express from "express";
import userRoutes from "./routes/userRoutes";
import configRoutes from "./routes/configRoutes";

const app = express();

app.use(express.json());

app.use("/api", configRoutes);
app.use("/api", userRoutes);

export default app;