const mongoose = require('../config/db');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	roles: {
		type: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'roles'
			}
		],
		required: true
	},
}, {
	timestamps: true
});

const User = mongoose.model('users', userSchema);

module.exports = User;