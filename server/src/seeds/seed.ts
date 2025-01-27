import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import pythonQuestions from "./pythonQuestions.json" assert { type: "json" };

db.once("open", async () => {
  try {
    await cleanDB("Question", "questions");

    await Question.insertMany(pythonQuestions);

    console.log("Questions seeded!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
});
