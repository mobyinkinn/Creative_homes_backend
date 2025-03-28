import e from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = e();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    origin: true,
  })
);

app.use(e.json({ limit: "16kb" }));
app.use(e.urlencoded({ extended: true, limit: "16kb" }));
app.use(e.static("public"));
app.use(cookieParser());

//routes import
// import adminRouter from "./routes/admin.route.js";
import propertyRouter from "./routes/property.route.js";
import agentRouter from "./routes/agent.route.js";
import contactRouter from "./routes/contact.route.js";
import newsRouter from "./routes/news.route.js";
import teamRouter from "./routes/team.route.js";

//routes declaration
// app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/property", propertyRouter);
app.use("/api/v1/agent", agentRouter);
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/news", newsRouter);
app.use("/api/v1/team", teamRouter);

export default app;
