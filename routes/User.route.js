import {Router} from 'express'
import { createUser, deleteUser, fetchUsers, showUser, updateUser } from '../Controllers/User.controller.js';
const router  =Router();

router.post('/',createUser)
router.put('/:id',updateUser)
router.get('/',fetchUsers)
router.get('/:id',showUser)
router.delete('/:id',deleteUser)



export default router;