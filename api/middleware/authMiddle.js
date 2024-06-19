const jwt = require('jsonwebtoken');

 const authenticate = (req, res, next) => {

    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.startsWith('Bearer ') ? authHeader.replace('Bearer ', '') : authHeader;
    console.log('Extracted Token:', token);

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next()
   
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
}


 const authorize= (roles) => (req, res, next) => {

    console.log(roles)

    console.log('req stored role', req.user.role)
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
} 


module.exports={authenticate, authorize }
