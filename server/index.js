const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

//initializing comment routes
app.use("/api/comments", require("./routes/commentRoutes"));

//initializing  post routes
app.use("/api/posts", require("./routes/postRoutes"));

//initializing  user routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
