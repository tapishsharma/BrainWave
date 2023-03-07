const express = require("express");
const app = express();
const connectDB = require("./db/mongoose");
const userRouter = require("./routes/users/userRouter");
const diaryRouter = require("./routes/diaryRouter");
// Connect to MongoDB
connectDB();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// home route
app.get("/", (req, res) => {
  res.send("<h2>Server is up and running </h2>");
});

// post request on /api/user
app.use("/api/user", userRouter); // router include /api/user/signup, /api/user/login, /api/user/:id

// post request on /api/diary
app.use("/api/diary", diaryRouter); // router include /api/diary/add, /api/diary/:id, /api/diary/mine/history

app.listen(process.env.PORT || 4000, () => {
  // app listening
  console.log(`Server is up and running on port ${process.env.PORT || 4000}`);
  console.log(`http://localhost:${process.env.PORT || 4000}`);
});
