const userService = require('../services/userService');

async function getAllUsers(req, res) {
	try {
		const users = await userService.getAllUsers();
		res.json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

async function getUser(req, res) {
	try {
		const user = await userService.getUserById(req.params.id);
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		res.json(user);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

async function createUser(req, res) {
	try {
		const newUser = await userService.createUser(req.body);
		res.status(201).json(newUser);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

async function updateUser(req, res) {
	try {
		const updatedUser = await userService.updateUser(req.params.id, req.body);
		res.json(updatedUser);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

async function deleteUser(req, res) {
	try {
		await userService.deleteUser(req.params.id);
		res.json({ message: 'User deleted' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

module.exports = {
	getAllUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser
};
