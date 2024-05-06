// Authentication middleware
const authenticateUser = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];

		// Verify the token
		const decodedToken = jwt.verify(token, 'secretKey');

		// Attach the user ID to the request object
		req.userId = decodedToken.userId;

		next();
	} catch (error) {
		console.error('Error authenticating user:', error);
		res.status(401).json({ error: 'Unauthorized' });
	}
};
// Apply authentication middleware to protected routes
app.get('/protected', authenticateUser, (req, res) => {
	// Handle protected route logic here
});