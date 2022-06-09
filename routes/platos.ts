import { Router } from 'express';
import { createPlato, deletePlato, getPlato, getPlatos, updatePlato } from '../controllers/platos';


const router = Router();




router.get('/', getPlatos);
router.get('/:id', getPlato);
router.post('/', createPlato);
router.put('/:id', updatePlato);
router.delete('/:id', deletePlato);



export default router;