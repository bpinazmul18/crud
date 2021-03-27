import express from "express";
import mongodb from "mongodb";

const app = express();
const dbUrl = "mongodb://localhost/crudwithredux";

mongodb.MongoClient.connect(dbUrl, function (err, db) {
  app.get("/api/games", (req, res) => {
    db.collection("games")
      .find({})
      .toArray((err, games) => {
        res.json({ games });
      });
  });

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global:
          "still working on it. Please try again later when implements it.",
      },
    });
  });

  app.listen(8080, () => console.log("server is running oh localhost:8080"));
});
