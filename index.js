import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Routes
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Middlewares
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('APP IS RUNNING.');
})

const CONNECTION_URL = 'mongodb+srv://SeunOluwa:SeunOluwa0459@cluster0.vikny.mongodb.net/jekalo-assessment?retryWrites=true&w=majority';
const PORT = 5000;

// Connect to mongodb
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
