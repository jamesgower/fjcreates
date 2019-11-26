import express, { Response, Request } from "express";

const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  const publicPath = path.join(__dirname, "../dist");

  app.use(express.static(publicPath));

  app.get(
    "*",
    (req: Request, res: Response): void => {
      res.sendFile(path.join(publicPath, "index.html"));
    },
  );
}

app.listen(
  port,
  (): void => {
    console.log("Server is up at port", port);
  },
);
