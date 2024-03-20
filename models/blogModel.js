const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    verifiedUser: {
      type: Boolean,
      require: false,
      default: true,
    },
    postedBy: {
      type: String,
      default: "Anonymous",
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
