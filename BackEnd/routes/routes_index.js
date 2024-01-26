import { Router } from 'express';
import authroute from './Auth.js';

const router = Router(); 

router.use( authroute );



export default router;