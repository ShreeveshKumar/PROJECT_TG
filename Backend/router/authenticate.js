const Admin= require("../UserSchema");



const Authenticate = async (req, res, next) => {
    try {
        const password = req.body.password;
        const id = req.body.id;

        if (!id || !password) {
            res.status(400).json({ Notfilled: true });
        }

        const User = await Admin.findOne({ id });

        if (User) {
            console.log("User found");

            const pass = await Admin.findOne({ password });

            if (pass) {
                console.log("Password matched");
                res.status(200).json({ Authenticated: true });
                next();
            } else {
                res.status(400).json({ Authenticated: false });
            }
        } else {
            res.status(400).json({ Authenticate: false });
        }
  } catch (err) {
    console.log(err);
  }
};

module.exports = Authenticate;
