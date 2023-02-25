const express = require('express');


const app = express();

// Routes
const mountRoutes = require('./routes/index');

app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true }));





mountRoutes(app);

app.use('*', (req, res, next) => {
	// Create error
	res.status(404).json({ message: 'ROUTE_NOT_FOUND' });
	next();
});

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
	console.log('App running on port ' + PORT);
});

// Handel rejection outside express
process.on('unhandledRejection', (err) => {
	console.log(`UnhandledRejection Error: ${err.name} | ${err.message}`);
	server.close(() => {
		console.log(`Shutting down.....`);
		process.exit(1);
	});
});
