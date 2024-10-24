const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Static files (CSS, images, etc.)
app.use(express.static('public'));

// Route for the home page
app.get('/', (req, res) => {
    res.render('index');
});

// Route for the login page
app.get('/login', (req, res) => {
    res.render('login');
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Dummy login validation
    if (username === 'admin' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.send('Invalid credentials');
    }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
