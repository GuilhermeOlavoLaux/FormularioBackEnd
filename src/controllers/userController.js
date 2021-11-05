const Users = require('../model/User');
const { v4: uuid } = require('uuid');

module.exports = {
    async getUsers(request, response) {
        try {
            const usersList = await Users.find();
            return response.status(200).json({ usersList })
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    },

    async postUsers(request, response) {
        const { name, password, eMail, cpf, telephone } = request.body;
        if ( !name || !password || !eMail || !cpf) {
            return response.status(400).json({ error: 'missing params.' })
        }

        const user = new Users({
            _id: uuid(),
            name,
            password,
            eMail,
            cpf,
            telephone
        })
        try {
            await user.save();
            return response.status(201).json({ message: 'user cadastred successfully' })
        } catch (error) {
            return response.status(400).json({ error: error.message })

        }
    },


}