import express from 'express';
import { createConsultation, getConsultations } from '../controllers/consultationController.js';

const router = express.Router();

router.route('/')
  .post(createConsultation)
  .get(getConsultations);

export default router;
