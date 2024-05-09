const mongoose = require('../config/db');

const roleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	permissions: {
		type: Array,
		required: true
	},
}, {
	timestamps: true
});

const Role = mongoose.model('roles', roleSchema);

module.exports = Role;