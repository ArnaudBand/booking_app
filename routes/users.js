import express from 'express';
import {
  updatedUser, deleteUser, getUser, getUsers
} from '../controllers/user.js'
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   res.send("Hello, You are logged in")
// })

// router.get("/checkUser/:id", verifyUser , (req, res, next) => {
//   res.send("Hello, You are logged in and you can delete your account")
// })

// router.get("/checkAdmin/:id", verifyAdmin , (req, res, next) => {
//   res.send("Hello, You are logged in and you can delete all accounts")
// })

// Update

router.put('/:id', verifyUser, updatedUser);

// DELETE

router.delete('/:id', verifyUser, deleteUser);

// GET

router.get('/:id', verifyUser, getUser);

// GET ALL

router.get('/', verifyAdmin, getUsers);

export default router;