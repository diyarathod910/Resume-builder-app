
const User = require("../models/User");

exports.googleSignup = async (req, res) => {

    try {

        const {
            name,
            email,
            image
        } = req.body;

        let user = await User.findOne({ email });

        if (!user) {

            const lastUser =
                await User.findOne()
                    .sort({ customUserId: -1 });

            const newCustomUserId =
                lastUser
                    ? lastUser.customUserId + 1
                    : 1;

            user = await User.create({

                customUserId: newCustomUserId,

                name,

                email,

                image

            });

        }

        res.status(200).json({

            success: true,

            user

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

exports.findOne = async (req, res) => {

    try {

        const id = req.params.id;

        const user =
            await User.findById(id);

        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }

        return res.status(200).json({

            message: "User fetched successfully",

            data: user

        });

    } catch (err) {

        console.log(err);

    }

};
const bcrypt = require("bcryptjs");

exports.emailSignup = async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                success: false,
                message: "User already exists"
            });

        }

        const hashedPassword =
            await bcrypt.hash(password, 10);

        const lastUser = await User.findOne()
            .sort({ customUserId: -1 });

        const newCustomUserId = lastUser
            ? lastUser.customUserId + 1
            : 1;

        const user = await User.create({

            customUserId: newCustomUserId,

            email,

            password: hashedPassword

        });

        res.status(201).json({

            success: true,

            user

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

exports.emailLogin = async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;

        const user =
            await User.findOne({ email });

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found"

            });

        }

        // CHECK PASSWORD

        const isMatch =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!isMatch) {

            return res.status(400).json({

                success: false,

                message: "Wrong password"

            });
        }

        res.status(200).json({

            success: true,

            user

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// DELETE ACCOUNT

exports.deleteAccount = async (req, res) => {

    try {

        const { id } = req.params;

        await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Account deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};




// CHANGE EMAIL + PASSWORD

exports.changeEmailAndPassword = async (req, res) => {

    try {

        const { id } = req.params;

        const { email, password } = req.body;

        const user = await User.findById(id);

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            });

        }



        // UPDATE EMAIL

        user.email = email;



        // UPDATE PASSWORD

        if (password && password.trim() !== "") {

            user.password = password;

        }



        await user.save();



        res.status(200).json({
            success: true,
            message: "Updated successfully",
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
