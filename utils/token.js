import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_TOKEN = process.env.JWT_TOKEN;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

export const createToken = (payload) => {
  return jwt.sign(payload, JWT_TOKEN, { expiresIn: JWT_EXPIRES_IN });
}

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_TOKEN);
  } catch (err) {
    throw new Error('Invalid token');
  }
}
