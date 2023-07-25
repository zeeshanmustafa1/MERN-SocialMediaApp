import PostMessage from '../models/postMessage.js'
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const allPosts = await PostMessage.find();

    res.status(200).json(allPosts)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createPost = async (req, res) => {
  try {
    const {title, message, selectedFile, creator, tags} = req.body;
    const newPostMessage = new PostMessage(
      {title, message, selectedFile, creator, tags}
    )

    await newPostMessage.save();
    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
}

export const updatePost = async (req, res) => {
  const {id} = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, {...post, _id: id}, {new: true});
  res.json(updatedPost);
}

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully." });
}
