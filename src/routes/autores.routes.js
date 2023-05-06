import { Router } from "express";
import { createAutor, deleteAutor, getAutor, getAutores, getAutorPosts, updateAutor } from "../controllers/autores.controller.js";

const router = Router();


router.get('/api/autores', getAutores);

router.get('/api/autores/:id', getAutor);

router.post('/api/autores', createAutor);

router.put('/api/autores/:id', updateAutor);

router.delete('/api/autores/:id', deleteAutor);

router.get('/api/autores/:id/posts', getAutorPosts);



export default router;