import express from 'express';
import mongoose from 'mongoose';
import { questions } from './routes/questions.js';
import { MONGO_URI } from './config/keys.js';

const app = express();

app.use(express.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true } )
  .then(() => console.log('mogoDB connected'))
    .catch(err => console.log(err))

app.get('/firstwordsentviainternet', (req, res) => res.send('lo'));

app.use('/api/questions', questions);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is alive'));

