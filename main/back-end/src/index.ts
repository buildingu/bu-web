/**
 * Building-U API (back-end)
 * 
 * Author: David Bishop
 * Contributors David Bishop
 * 
 * Description:
 * ...
 */

import express from "express";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import morgan from "morgan";

import initSrr from "./ssr";

import errorHandler from "@middleware/errorHandler";

import authRouter from "@authFeat/routes/authRoute";
import blogRouter from "@blogFeat/routes/blogRoute";
import partnerRouter from "@partnerFeat/routes/partnerRoute";
import resourcesRouter from "@resourcesFeat/routes/resourcesRoute";
import shopRouter from "@shopFeat/routes/shopRoute";

const { PROTOCOL, HOST, PORT: ENV_PORT } = process.env,
  PORT = Number(ENV_PORT) || 4000;

async function setupServer() {
  const app = express(),
    baseUrl = "/api";

  app.disable("x-powered-by");

  // *Parser Middleware*
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser()); 

  // *Security Middleware*
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true
    })
  );
  app.use(helmet()); // Sets various HTTP headers that can help defend against common web hacks.
  app.use(hpp()); // Protects against HTTP Parameter Pollution attacks.
  // Rate-limiting; used to limit repeated requests.
  app.use(
    rateLimit({
      windowMs: 60 * 60 * 1000, // 60 minutes.
      max: 55, // limits each IP to 55 requests per windowMs.
      handler: (_: express.Request, res: express.Response) => 
        res.status(429).json({
          status: 429,
          ERROR: "Too many requests made from this IP, please try again after an hour."
        })
    })
  );

  app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

  
  // *Routers*
  app.use(`${baseUrl}/auth`, authRouter);
  app.use(`${baseUrl}/blog`, blogRouter);
  app.use(`${baseUrl}/partner`, partnerRouter);
  app.use(`${baseUrl}/resources`, resourcesRouter);
  app.use(`${baseUrl}/shop`, shopRouter);

  await initSrr(app); // Server side rendering middleware for React front-end.

  app.get(`${baseUrl}/`, async (_, res) => {
    res.json({ message: "Building-U api online!" });
  });

  // *Error Handling Middleware*
  app.use(errorHandler);

  return app;
}

setupServer().then((app) =>
  app.listen(PORT, HOST!, () =>
    console.log(
      `Server is running on ${PROTOCOL}${HOST}:${PORT}; Ctrl-C to terminate...`
    )
  )
);
