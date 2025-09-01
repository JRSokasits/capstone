const express = require('express');
const path = require('path');
const app = express(); 
const PORT = 3000;

app.use(express.static(path.join(".", "testpublic")));

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
//gets all posts stored in database, send to display page? (2)
// app.get("/posts", (req, res) => {
//  res.json(db);
//});  

//gets post by ID, may not need (3)
//app.get( (req, res) => {
//  let id = req.params.id;
//  let post = db.find((post) => post.id == id);
//  if (!post) {
//    res.json({ Message: "Not Found Any Post Related to Your ID" });
//  } else {
//    res.json(post);
//  }
//});

//gets all posts by author, may not need (4)
//app.get("/posts-author/:author", (req, res) => {
//  let author = req.params.author;
//  let posts = db.find((post) => post.author == author);
//  if (!posts) {
//    res.json({ Message: `No Posts Found Against This Author ${author}` });
//  } else {
//    res.json(posts);
//  }
//});

//shows and serves blog post form (postform.html), send to user page (5)
// app.get("/postform", (req, res) => {
//  res.sendFile("views/postform.html", { root: __dirname });
//});app.get("/postform", (req, res) => {
//  res.sendFile("views/postform.html", { root: __dirname });
//});

//shows and serves update post form (postupdate.html), send to user page (6)
//app.get("/postform", (req, res) => {
//  res.sendFile("views/postform.html", { root: __dirname });
//});

//creates new post with required data, send from user page (7)
//app.post("/newpost", (req, res) => {
//  const newPost = {
//    id: db.length + 1,
//    title: req.body.title,
//    content: req.body.content,
//    category: req.body.category,
//    tags: req.body.tags.split(","),
//  };
//  db.push(newPost);
//  jsonfile.writeFile("./db/db.json", db, (err) => {
//    if (err) {
//      console.error(err);
//      res.json({ message: "Error writing to database" });
//    } else {
//      res.json({
//        message: `Post added successfully! Your Post Id is ${newPost.id}`,
//      });
//    }
//  });
//});

//updates existing post with required data, send from user page (9)
//app.post("/updatepost", (req, res) => {
//  let id = req.body.id;
//  let post = db.find((post) => post.id == id);
//  if (!post) {
//    res.status(404).json({ message: "Not Found Any Post Related to Your ID" });
//  } else {
//    post.title = req.body.title;
//    post.content = req.body.content;
//    post.category = req.body.category;
//    post.tags = req.body.tags.split(",");
//    jsonfile.writeFile("./db/db.json", db, (err) => {
//      if (err) {
//        console.error(err);
//        res.status(500).json({ message: "Error writing to database" });
//      } else {
//        res.json({
//          message: `Post updated successfully! Your Post Id is ${id} `,
//        });
//      }
//    });
//  }
//});

//delete post, remove from array, update database, send from user page (10)
//app.get("/deletepost/:id", (req, res) => {
//  let id = req.params.id;
//  let post = db.find((post) => post.id == id);
//  if (!post) {
//    res.status(404).json({ message: "No Post Related to Your ID Found" });
//  } else {
//    let index = db.indexOf(post);
//    db.splice(index, 1);
//    jsonfile.writeFile("./db/db.json", db, (err) => {
//      if (err) {
//        console.error(err);
//        res.status(500).json({ message: "Error writing to database" });
//      } else {
//        res.json({
//          message: `Post deleted successfully! Your Post Id was ${id} `,
//        });
//      }
//    });
//  }
//});