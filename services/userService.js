const User = require('../models/user');

async function getAllUsers() {
	return await User.find();
}

async function getUserById(id) {
	return await User.findById(id);
}

async function createUser(userData) {
	const user = new User(userData);
	return await user.save();
}

async function updateUser(id, newData) {
	const user = await User.findById(id);
	if (!user) {
		throw new Error('User not found');
	}
	if (newData.name != null) {
		user.name = newData.name;
	}
	if (newData.email != null) {
		user.email = newData.email;
	}
	return await user.save();
}

async function deleteUser(id) {
	const user = await User.findById(id);
	if (!user) {
		throw new Error('User not found');
	}
	await user.remove();
}

module.exports = {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser
};