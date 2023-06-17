import express from 'express'
import cors from 'cors'

import auth from './routes/auth';
import shop from './routes/shop';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: "*"
}));

// Status check
app.get('/api/status', async (req, res) => {
    res.json({
        status: "OK"
    });
});

// Auth routes
app.use('/api/auth', auth);
app.use('/api/shop', shop);

app.listen(8000, () => {
    console.log("Now listening on post 8000");
});