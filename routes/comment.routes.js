import {Router} from 'express'
import { createComment, deleteComment, fetchComments, showComments, updateComment } from '../Controllers/Comment.controller.js';
const router  =Router();

router.post('/',createComment)
router.put('/:id',updateComment)
router.get('/',fetchComments)
router.get('/:id',showComments)
router.delete('/:id',deleteComment)



export default router;