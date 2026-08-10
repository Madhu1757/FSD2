import express from 'express';

const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('DYNAMIC APP IS WORKING');
});

// User route
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Flight route
app.get('/flights/:from/:to', (req, res) => {
    res.send(`Flight from ${req.params.from} to ${req.params.to}`);
});

// Search route
app.get('/search', (req, res) => {
    res.json({
        category: req.query.category,
        sort: req.query.sort
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});