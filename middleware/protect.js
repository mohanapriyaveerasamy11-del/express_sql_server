import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
export const protect = async(req, res, next) => {
  const authHeader = req.header.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  const token = authHeader.split(' ')[1]
  //bearer token--->header.payload.signature
  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN)
    req.user = decoded //.user
    next()
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' })
  }
}
