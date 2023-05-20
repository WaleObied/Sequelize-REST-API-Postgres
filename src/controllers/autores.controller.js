import { Autor } from "../models/autor.js"
import { Post } from "../models/post.js"

export const getAutores = async (req, res) => {
    try {
    const autores = await Autor.findAll()
    res.json(autores)
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
}

export const getAutor = async (req, res) => {
    try {
    const {id} = req.params;
    const autor = await Autor.findOne({
        where: {
            id
        }
    })
    if(!autor) return res.status(404).json({
        message: 'Autor not found'
    })

    res.json(autor);
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
}

export const createAutor = async (req, res) => {
    const {nombre, email, imagen} = req.body

    try {
    const newAutor = await Autor.create({
       nombre,
       email,
       imagen
    })
    res.json(newAutor)

    } catch(err) {
        return res.status(500).json({message: err.message});
    }
}

export const updateAutor = async (req, res) => {

    try {
    const {id} = req.params;
    const {nombre, email, imagen} = req.body;

    const autor = await Autor.findByPk(id);
    autor.nombre = nombre;
    autor.email = email;
    autor.imagen = imagen;
    await autor.save();

    res.json(autor);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}


export const deleteAutor = async (req, res) => {
    
    try {
        const {id} = req.params;
        await Autor.destroy({
            where: {
                id
            }
        });
    
        res.send("deleting autor " + id);
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
}

export const getAutorPosts = async (req, res) => {
    const {id} = req.params;
    const posts = await Post.findAll({
        where: {autorId: id}
    })
    res.json(posts);
}