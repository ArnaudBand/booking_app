import express from 'express';
import { createHotel, deleteHotel, getHotel, getHotels, updatedHotel } from '../controllers/hotel.js';


const router = express.Router();

// Create
router.post('/', createHotel);

// Update

router.put('/:id', updatedHotel);

// DELETE

router.delete('/:id', deleteHotel);

// GET

router.get('/:id', getHotel);

// GET ALL

router.get('/', getHotels);

export default router;