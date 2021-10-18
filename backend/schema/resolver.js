const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../routes/middleware");
const saltRounds = 10;
const User = require("./userSchema");

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    process.env.TOKEN_SECRET
  );
}
// graphql and mongo are working together
const resolvers = {
  Query: {},
  Mutation: {
    RegisterUser: async (parent, args, context, info) => {
      const { name, password, email } = args.post;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("Email already has a Registered Account");
      }
      if (!existingUser) {
        const hash = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, hash);
        try {
          const user = new User({
            name: name,
            email: email,
            password: hashedPassword,
          }).save();
          return user;
        } catch (err) {
          console.log(err);
        }
      }
    },
    LoginUser: async (parent, args, context, info) => {
      const { password, email } = args;
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        throw new Error("Wrong crendetials");
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    


  },
};

module.exports = resolvers;
