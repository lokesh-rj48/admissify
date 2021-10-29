const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mysql = require("mysql");
const cors = require("cors");
const md5 = require("md5");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    // cookie: {
    //   expires: 60 * 60 * 24,
    // },
  })
);

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "admissify",
});

app.get("/auth", (req, res) => {
  isLogin = req.session.user;
  if (isLogin) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const user_name = req.body.user_name;
  const password = md5(req.body.password);

  db.query(
    "SELECT * FROM user WHERE user_name = ? AND password = ?",
    [user_name, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        req.session.user = result;
        res.send(result);
      } else {
        console.log("Invalid Email-id or Password");
        res.send({ message: "Invalid Email-id or Password" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
