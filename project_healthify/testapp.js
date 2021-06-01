const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Search box button disabled
// app.post("/", (req, res) =>{                         
//   var locat = req.body.gymloc;
//   console.log(locat);
//   res.write("OK...");
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});