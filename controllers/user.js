import User from '../models/user.js';

export const createUser = async (req, res) => {
    const { first_name, last_name, username, date_of_birth } = req.body;

    try {
        const user = await User.create({ first_name, last_name, username, date_of_birth });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
