const express = require('express');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const usersRouter = require('./routes/userRoutes');
app.use('/users', usersRouter);


//app.post('/login', async (req, res) => {
//	try {
//		const { email, password } = req.body;
//		// Check if the user exists
//		const user = await User.findOne({ email });
//		if (!user) {
//			return res.status(401).json({ error: 'Invalid email or password' });
//		}
//		// Validate the password
//		const isPasswordValid = await user.comparePassword(password);
//		if (!isPasswordValid) {
//			return res.status(401).json({ error: 'Invalid email or password' });
//		}
//		// Generate a JWT token
//		const token = jwt.sign({ userId: user._id }, 'secretKey');
//
//		res.status(200).json({ token });
//	} catch (error) {
//		console.error('Error logging in:', error);
//		res.status(500).json({ error: 'An error occurred while logging in' });
//	}
//});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});