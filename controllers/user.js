const User = require("../modules/user");
exports.getLogin = (req, res) => {
  User.find()
    .then((data) => {
      return res.render("login", {
        allUser: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postUser = (req, res) => {
  let user = new User({
    name: req.body.userName,
    age: req.body.age,
  });
  user.save();
};
exports.getProfile = (req, res) => {
  let user = req.params.userName;
  console.log(user);
};
