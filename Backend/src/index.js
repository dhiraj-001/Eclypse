import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

// Removed database connection as per user request
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on ${process.env.PORT || 3000}`);
});


