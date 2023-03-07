const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const isAuth = require("../middlewares/isAuth");
const Diary = require("../models/diary");
const diaryRouter = express.Router();

// add diary route
diaryRouter.post(
  "/add",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    // check for diary errors
    if (req.body.length === 0) {
      res.status(400).send("No diary data");
    } else {
      // create new diary
      const diary = new Diary({
        user: req.user._id,
        diaryDate: Date.now(),
        description: req.body.description,
      });
      // save diary
      const createdDiary = await diary.save();
      res.status(201).send({
        message: "Diary created",
        diary: createdDiary,
      });
    }
  })
);

//get diary route by id
diaryRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    // get diary by id
    const diary = await Diary.findById(req.params.id);
    // check if diary exists
    if (!diary) {
      res.status(404).send("Diary not found");
    } else {
      res.status(200).send(diary);
    }
  })
);

// get all diaries of a user
diaryRouter.get(
  "/mine/history",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    // get all diaries of a user
    const diaries = await Diary.find({
      user: req.user._id,
    });
    // check if diaries exist
    if (!diaries) {
      res.status(404).send("No diaries found");
    } else {
      res.status(200).send(diaries);
    }
  })
);

module.exports = diaryRouter;
