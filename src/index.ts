import express from 'express';

const app = express();

// Status check
app.get('/api/status', async (req, res) => {
    res.json({
        status: "OK"
    });
});

app.listen(8000, () => {
    console.log("Now listening on post 8000");
});