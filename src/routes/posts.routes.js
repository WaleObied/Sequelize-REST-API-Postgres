import { Router } from "express";
import { createPost, deletePost, getPost, getPosts, updatePost } from "../controllers/posts.controller.js";

const router = Router();

router.get('/api/posts', getPosts);

router.get('/api/posts/:id', getPost);

router.post('/api/posts', createPost);

router.put('/api/posts/:id', updatePost);

router.delete('/api/posts/:id', deletePost);


export default router;