// Import packages
const express = require("express");
const home = require("./routes/home");
const wellkown = require("./routes/wellkown")
const auth = require("./routes/auth")

// Middlewares
const app = express();
app.use(express.json());

app.use("/.well-known", wellkown);
app.use("/auth", auth);
// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
