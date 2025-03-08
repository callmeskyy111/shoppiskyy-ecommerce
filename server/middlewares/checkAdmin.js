//Middleware to check whether user is ADMIn or not.

async function checkAdmin(req, res, next) {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Not authorized as an 'ADMIN' 🔴",
    });
  }
}

export default checkAdmin;
