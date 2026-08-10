import express from 'express';

const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to our API',
        status: 'Active',
        timestamp: new Date()
    });
});

// Students route
app.get('/students', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Raghav',
            course: 'Artificial Intelligence'
        },
        {
            id: 2,
            name: 'Adeel',
            course: 'IT'
        },
        {
            id: 3,
            name: 'Devansh',
            course: 'ECE'
        }
    ]);
});

// Product route
app.get('/product/:id', (req, res) => {
    res.json({
        requestedId: req.params.id,
        category: 'Electronics',
        inStock: true,
        tags: ['gadget', 'new-arrival']
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});