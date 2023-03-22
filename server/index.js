import express from "express";
import cors from "cors";
import { db } from "./connect.js";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.end("hi from backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM BOOKS";
  db.query(q, (err, rows) => {
    if (err) throw res.json(err);
    return res.send(rows);
  });
});

app.post("/books", (req, res) => {
  const { title, desc, cover } = req.body;
  const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
  const values = [title, desc, cover];
  db.query(q, [values], (err, rows) => {
    if (err) return res.json(err);
    return res.json(rows);
  });
});

app.delete("/books", (req, res) => {
  const { id } = req.body;
  const q = "delete from books where id = ?";
  db.query(q, [id], (err, rows) => {
    if (err) return res.json(err);
    return res.json(rows);
  });
});

app.patch("/books", (req, res) => {
  const { id, title, desc, cover } = req.body;
  const q = "UPDATE books SET `title` = ?, `desc` = ?, `cover` = ? WHERE id = ?";
  db.query(q, [title, desc, cover, id], (err, rows) => {
    if (err) return res.json(err);
    return res.json(rows);
  });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
