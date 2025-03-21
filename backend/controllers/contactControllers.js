const Achievers = require('../models/Achievers');
const CallToAction = require('../models/CallToAction');
const Contact = require('../models/Contact');
const Plans=require('../models/Plans');
// @desc    Create new contact form submission
// @route   POST /api/contact
// @access  Public
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    // Validate input
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email, and phone number' 
      });
    }
    
    // Create new contact entry
    const newContact = new Contact({
      name,
      email,
      phone
    });
    
    // Save to database
    await newContact.save();
    
    res.status(201).json({
      success: true,
      message: 'Your information has been submitted successfully'
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    
    // Check for validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
exports.createCallToAction = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    // Validate input
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email, and phone number' 
      });
    }
    
    // Create new contact entry
    const newContact = new CallToAction({
      name,
      email,
      phone
    });
    
    // Save to database
    await newContact.save();
    
    res.status(201).json({
      success: true,
      message: 'Your information has been submitted successfully'
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    
    // Check for validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
exports.createAchiever = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    // Validate input
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email, and phone number' 
      });
    }
    
    // Create new contact entry
    const newContact = new Achievers({
      name,
      email,
      phone
    });
    
    // Save to database
    await newContact.save();
    
    res.status(201).json({
      success: true,
      message: 'Your information has been submitted successfully'
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    
    // Check for validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
exports.createPlan = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    // Validate input
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email, and phone number' 
      });
    }
    
    // Create new contact entry
    const newContact = new Plans({
      name,
      email,
      phone
    });
    
    // Save to database
    await newContact.save();
    
    res.status(201).json({
      success: true,
      message: 'Your information has been submitted successfully'
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    
    // Check for validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
exports.createYoutube = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    // Validate input
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email, and phone number' 
      });
    }
    
    // Create new contact entry
    const newContact = new Plans({
      name,
      email,
      phone
    });
    
    // Save to database
    await newContact.save();
    
    res.status(201).json({
      success: true,
      message: 'Your information has been submitted successfully'
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    
    // Check for validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};