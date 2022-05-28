const express = require('express')
const app = express();
const cors = require("cors");
require("./db/config");
require("dotenv").config();
const Data = require("./db/Data");
const Data1 = require('./db/Data1');

app.use(express.json());
app.use(cors());

app.get('/',(req,resp)=>{
    resp.send('backend is working fine')
    console.log('fine');
})

app.post("/add-data", async (req, resp) => {
    let data = new Data(req.body);
    let result = await data.save();
    resp.send(result);
  });

app.get("/datas", async (req, resp) => {
    let blogs = await Data.find();
    if (blogs.length > 0) {
      resp.send(blogs);
    } else {
      resp.send({ result: "No result Found" });
    }
  });

  app.post("/add-data1", async (req, resp) => {
    let data = new Data1(req.body);
    let result = await data.save();
    resp.send(result);
  });

  app.get("/datas1", async (req, resp) => {
    let blogs = await Data1.find();
    if (blogs.length > 0) {
      resp.send(blogs);
    } else {
      resp.send({ result: "No result Found" });
    }
  });

  app.get("/datas1/:id", async (req, resp) => {
    const result = await Data1.findOne({id : req.params.id});
    if (result) {
      resp.send(result);
      console.log(result)
    } else {
      resp.send({ result: "No result Found" });
    }
  });


  app.get("/datas/:temples", async (req, resp) => {
    const result = await Data.findOne({temples : req.params.temples});
    if (result) {
      resp.send(result);
      console.log(result)
    } else {
      resp.send({ result: "No result Found" });
    }
  });

app.listen( process.env.PORT || 5000, () => {
    console.log("SERVER RUNNING");
  });
  