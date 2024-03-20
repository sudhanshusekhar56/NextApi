const express = require("express");
const router = express.Router();
const Blog = require("./models/blogModel");

//get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

//add blogs
router.post("/", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({ blog });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

//delete blog
router.delete("/:id", async (req, res) => {
  const blog_id = req.params.id;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(blog_id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found." });
    }
    res
      .status(200)
      .json({ message: "Blog deleted successfully.", deletedBlog });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ message: "Error deleting blog.", error: error.message });
  }
});

//update blog
router.patch("/:id", async (req, res) => {
  const blog_id = req.params.id;
  const updateFields = req.body; // Fields to be updated

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      blog_id,
      updateFields,
      { new: true } // Return the updated document
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    res
      .status(200)
      .json({ message: "Blog updated successfully.", updatedBlog });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error." });
  }
});

module.exports = router;
