import PostMessage from '../models/postMessage.js'

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
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPostMessage = new PostMessage(
      { title, message, selectedFile, creator, tags }
    )

    await newPostMessage.save();
    res.status(201).json(newPostMessage );
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
