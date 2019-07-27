const express = require('express')
const stripe = require('stripe')('sk_test_6fcuR0Yuy1IqFzotfi5AH7W100hVl0GzkV')
const bodyParser = require('body-parser')
const exphbs= require('express-handlebars')
const cors = require('cors')

const app = express();

//cors

//Set up proxy and CORS to avoid CORS errors
app.set('trust proxy', true)
const corsOptions = {
  origin:'http://localhost:3000', //the port my react app is running on.
  credentials: true,
};
app.use(cors(corsOptions));

//bodyParser
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))

app.use(require("body-parser").text());

//set static folder
app.use(express.static(`${__dirname}/public`))

const port = process.env.PORT || 5000

app.post("/charge", async (req, res) => {
  console.log('hit charge', req.body)
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    console.log(err)
    res.status(500).end();
  }
});

app.listen(port, ()=>{
  console.log('server started on port ' + port)
})
