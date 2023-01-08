import express from 'express';
import {
  updatedUser, deleteUser, getUser, getUsers
} from '../controllers/user.js'

const router = express.Router();
// Update

router.put('/:id', updatedUser);

// DELETE

router.delete('/:id', deleteUser);

// GET

router.get('/:id', getUser);

// GET ALL

router.get('/', getUsers);

export default router;