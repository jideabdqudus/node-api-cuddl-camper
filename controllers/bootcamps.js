// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) =>{
  res.status(200).json({success: true, data: { id: '1', bootcamp: 'Bootcamp' }})
}

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamp = (req, res, next) =>{
  const { id }  = req.params
  res.status(200).json({success: true, data: { id: '1', bootcamp: `Get bootcamp ${id}` }})
}

// @desc    Create a bootcamp
// @route   POST /api/v1/bootcamps
// @access  Public
exports.createBootcamp = (req, res, next) =>{
  res.status(200).json({success: true, data: { id: '1', bootcamp: 'Brad' }})
}

// @desc    EDIT bootcamp
// @route   PUT /api/v1/bootcamps
// @access  Public
exports.updateBootcamp = (req, res, next) =>{
  const { id }  = req.params
  res.status(200).json({success: true, data: { id: '1', bootcamp: `Update bootcamp ${id}` }})
}

// @desc    Delete all bootcamps
// @route   DELETE /api/v1/bootcamps
// @access  Public
exports.deleteBootcamp = (req, res, next) =>{
  const { id }  = req.params
  res.status(200).json({success: true, data: { id: '1', bootcamp: `Delete bootcamp ${id}` }})
}