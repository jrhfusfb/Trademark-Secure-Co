import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone number'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please add an email address'],
      lowercase: true,
      trim: true,
    },
    service: {
      type: String,
      required: [true, 'Please select a service'],
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
    pageVersion: {
      type: String,
      default: 'index8',
      enum: ['index7', 'index8'],
    },
  },
  {
    timestamps: true,
  }
);

const Consultation = mongoose.model('Consultation', consultationSchema);

export default Consultation;
