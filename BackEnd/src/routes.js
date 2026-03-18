import express from 'express';
const routes = express.Router();

routes.get('/', (req,res) => {
    return res.json({ mensage: "API do mural de avisos online!"});
});

export default routes;