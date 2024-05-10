const withAuth = (req, res, next) => {
  next();
  };
  
  module.exports = withAuth;