import express from 'express';
import autoresRoutes from './routes/autores.routes.js';
import postsRoutes from './routes/posts.routes.js';

const app = express();

//middlewares
app.use(express.json());

app.use(autoresRoutes);
app.use(postsRoutes);

export default app;