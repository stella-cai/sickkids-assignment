import express from 'express';
import bodyParser from 'body-parser';
import { createHash } from 'crypto';

const app = express();
const port = 8000;
var jsonParser = bodyParser.json()

// in practice, we would use a library like passport to handle authentication
const login = async (req, res) => {
    const email = req.body.email.value;
    const password = req.body.password.value;
    if (password != '1q2w3e') {
      res.status(400).send({message: 'You have entered an incorrect email or password.'});
      return;
    }

    const accessToken = createHash('sha256').update(email + password).digest('hex');
    res.send({email: email, accessToken: accessToken});
};


app.get('/', (req, res) => {
  res.send('This is the root route.');
})

app.post('/login', jsonParser, login);

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
});
