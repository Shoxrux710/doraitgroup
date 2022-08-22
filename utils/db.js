const mongoose = require('mongoose')
const Login = require('../models/Login')
const bcrypt = require('bcrypt')
const config = require('config')

module.exports = async() => {

    try {
        await mongoose.connect(config.get('mongoUrl'), {replicaSet: "myReplicaSet"})

        const admin = await Login.findOne()

        if (!admin){
            const passwordHashed = await bcrypt.hash('123456', 12)

            const user = new Login({
                name: 'Narzullayev Shavkat',
                login: 'dora_team',
                email: 'Shavkatnazrulloh@gmail.com',
                password: passwordHashed,
                role: 'super-admin'
            })

            await user.save()
        }

        const db = mongoose.connection

        db.on('open', () => console.log('mongodbga online ulandik'))
        db.on('error', (err) => console.log('qayerdadir xatolik bor', err))

    } catch (err) {
        console.log(err);
    }
}