import Consultation from '../models/Consultation.js';

// @desc    Create a new consultation lead
// @route   POST /api/consultations
// @access  Public
export const createConsultation = async (req, res) => {
  try {
    const { name, phone, email, service, message, pageVersion } = req.body;

    if (!name || !phone || !email || !service) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields (Name, Phone, Email, Service)',
      });
    }

    // Save to Database
    const consultation = await Consultation.create({
      name,
      phone,
      email,
      service,
      message: message || '',
      pageVersion: pageVersion || 'index8',
    });

    // Optionally forward to SheetMonkey if configured in environment
    if (process.env.SHEETMONKEY_URL) {
      try {
        // Map keys to match the original HTML form field names: Name, Phone, Email, Service, Message
        const sheetMonkeyData = {
          Name: name,
          Phone: phone,
          Email: email,
          Service: service,
          Message: message || '',
          pageVersion: pageVersion || 'index8',
        };

        // Fire-and-forget submission to SheetMonkey
        fetch(process.env.SHEETMONKEY_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sheetMonkeyData),
        }).catch((err) => console.error('Failed to sync to SheetMonkey:', err));
      } catch (err) {
        console.error('SheetMonkey forward error:', err);
      }
    }

    return res.status(201).json({
      success: true,
      data: consultation,
      message: 'Consultation request submitted successfully!',
    });
  } catch (error) {
    console.error('Error creating consultation:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error, please try again later.',
    });
  }
};

// @desc    Get all consultation leads
// @route   GET /api/consultations
// @access  Public (Can be protected with middleware)
export const getConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: consultations.length,
      data: consultations,
    });
  } catch (error) {
    console.error('Error fetching consultations:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error, failed to retrieve leads.',
    });
  }
};
