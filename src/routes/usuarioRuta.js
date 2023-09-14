import express  from 'express';

const router = express.Router();


import { 
    getUsuario,
    saveUsuario,
    updateUsuario,
    deleteUsuario,
    listUsuario
} from '../controllers/usuarioController.js';

router.get('/listUsuario', listUsuario);
router.get('/getUsuario/:id', getUsuario );
router.put('/updateUsuario/:id', updateUsuario);
router.post('/saveUsuario', saveUsuario);
router.delete('/deleteUsuario/:id', deleteUsuario);


export default router;