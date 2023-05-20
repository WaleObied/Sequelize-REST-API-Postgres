import { Autor } from "../models/autor.js";
import { Post } from "../models/post.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll()
        res.json(posts);
    } catch(err) {
    return res.status(500).json({message: err.message});
    }
}

export const getPost = async (req, res) => {
    try {
        const {id} = req.params;
        const post = await Post.findOne({
            where: {
                id
            },
            include: {
                model: Autor,
                attributes: ['nombre', 'email', 'imagen']
            }
        })
        if(!post) return res.status(404).json({
            message: 'Post not found'
        });

        res.json(post);
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
}

export const createPost = async (req, res) => {
    try {
    const {titulo, descripcion, categoria, autorId} = req.body;
    const newPost = await Post.create({
        titulo,
        descripcion,
        categoria,
        autorId
    })
    res.json(newPost);
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
}

export const updatePost = async (req, res) => {
    try {
    const {id} = req.params;
    const {titulo, descripcion, categoria, autorId} = req.body;

    const post = await Post.findByPk(id);
    post.titulo = titulo;
    post.descripcion = descripcion;
    post.categoria = categoria
    post.autorId = autorId;
    await post.save();

    res.json(post);
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
}


export const deletePost = async (req, res) => {
    try {
    const {id} = req.params;
    await Post.destroy({
        where: {
            id
        }
    });

    res.send("deleting post " + id);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}