require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { PORT, SESSION_STRING, CONNECTION_STRING } = process.env;
const app = express();

app.listen(PORT, () => console.log(`server running on ${PORT}`));
