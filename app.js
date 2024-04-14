//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "A lake or an easy weekend is what God wants to decorate it with. Always the author, nor the time of life. Let it be a course of action. Viverra lived in this place. Do not use a microwave oven or a dishwasher. Until the basketball players are not members or members of the arc. Mattis the employee was targeted by the students. The mountains will give birth to a great push, and a ridiculous mouse will be born in the ultricia of life. I'm trying to find a way to get rid of the poison bed. The author of the life of Ultrices advocates football as a bed of alcohol to drink. Odio euismod lacinia at quis risus sed vulputate odio ut The course of the real estate agent was aimed at the students.";
const aboutContent = "Just over a year ago,we became so fasinated by the idea of discovering the world through someone's else eyes.What if we could see the Taj Mahal or maybe the Grand Canyon.While there are so many ways to discover events and places,we realized there is no better way to share someone's experience through live journals by someone who experienced the same.We are a everyday Journal that publish journal,reseach work,share user experience,college projects by our users."
const contactContent = "Our contacts: Phone Number - 6295747638 , Email - arghyabanerjee46@gmail.com , Office address - 13A Chinmoy Chattapadhyay sarani,swiss park kolkata-700033 ";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


let posts = [];


app.get("/" , function(req, res){
   res.render("home" , {
    startingContent: homeStartingContent,
    posts: posts    

   });
  
});


app.get("/about", function(req, res){
 res.render("about" , {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  
  const post ={
    title: req.body.postTitle,
    content: req.body.postBody
  };
   
  posts.push(post);

  res.redirect("/");

});


app.get("/posts/:postName" , function(req, res){
    const requestedTitle = _.lowerCase(req.params.postName);

    posts.forEach(function(post){
     const storedTitle = _.lowerCase(post.title);

if (storedTitle === requestedTitle){
  res.render("post", {
    title: post.title,
    content: post.content
  });
} 
 });

});






app.listen(5000, function() {
  console.log("Server started on port 3000");
});
