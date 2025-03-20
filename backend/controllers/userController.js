const User = require('../models/User');

// @desc    Register user for resource access
// @route   POST /api/users/resource-access
// @access  Public
exports.registerForResource = async (req, res) => {
  try {
    const { name, email, phone, resourceAccessed } = req.body;
    
    // Validate input
    if (!name || !email || !phone || !resourceAccessed) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields' 
      });
    }
    
    // Check if resourceAccessed is valid
    const validResources = ['Notes', 'Reference Books', 'NCERT Solutions'];
    if (!validResources.includes(resourceAccessed)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid resource selected'
      });
    }
    
    // Check if user with this email already exists
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      // Update existing user with new resource access
      existingUser.resourceAccessed = resourceAccessed;
      existingUser.name = name;
      existingUser.phone = phone;
      await existingUser.save();
      
      return res.status(200).json({
        success: true,
        message: 'Your information has been updated successfully',
        redirectUrl: 'https://www.aerieacademy.com/courses/630951'
      });
    }
    
    // Create new user
    const user = new User({
      name,
      email,
      phone,
      resourceAccessed
    });
    
    // Save user to database
    await user.save();
    
    res.status(201).json({
      success: true,
      message: 'Thank you for registering! You can now access the resource.',
      redirectUrl: 'https://www.aerieacademy.com/courses/630951'
    });
  } catch (error) {
    console.error('User registration error:', error);
    
    // Check for validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    
    // Check for duplicate key error (email already exists)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'An account with this email already exists'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get all users (admin use)
// @route   GET /api/users
// @access  Private (should be restricted)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};