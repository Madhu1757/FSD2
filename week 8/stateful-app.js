const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000
    }
}));

function authMiddleware(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

app.get('/login', (req, res) => {
    if (req.session.user) {
        return res.redirect('/dashboard');
    }
    res.render('login', { error: null });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '123') {
        req.session.user = username;
        res.cookie('lastVisit', new Date().toLocaleString());
        res.redirect('/dashboard');
    } else {
        res.render('login', { error: 'Invalid username or password' });
    }
});

app.get('/dashboard', authMiddleware, (req, res) => {
    const lastVisit = req.cookies.lastVisit || 'First visit';
    res.render('dashboard', {
        user: req.session.user,
        lastVisit: lastVisit
    });
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}/login`);
});