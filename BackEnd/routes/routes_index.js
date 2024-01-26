import { Router } from 'express';
import authroute from './Auth';

const router = Router(); 

router.use( authroute );



export default router;