const User = require("../models/User");

exports.deleteUser = async (req, res) => {
  try {
    const { employeeId } = req.body;
    await Course.findByIdAndDelete(employeeId)

    return res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
};
