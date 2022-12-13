import { Router } from "express";
import { imgController } from './img';

const router = Router();

const imgController = new imgController();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

router.get('/image/get/:id', imgController.get);
router.post('/pessoa/create', imgController.create);
router.delete('/image/delete/:id', imgController.delete);

export default router;
/*
* Passar todas funções de imagens para endpoints
- image/upload
- image/get/:id
- image/delete/:id
*/