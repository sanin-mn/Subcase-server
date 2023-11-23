// import user model
const users = require('../Models/userSchema')

// register
exports.register = async (req, res) => {
    console.log("Inside register function");
    const { username, email, password } = req.body
    console.log(`Username :${username}, Email :${email}, Password :${password}`);
    try {
        // check already existing user
        const existingUser = await users.findOne({ email })

        if (existingUser) {
            res.status(406).json("User already exist... Please login!!!")
        } else {
            // register user
            const newUser = new users({
                username, email, password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(`Error!!! Transaction failed : ${err}`)
    }
}

