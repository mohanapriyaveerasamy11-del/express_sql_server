import express from 'express';
import { protect } from '../middleware/protect.js';
import { isAdmin } from '../middleware/admin.js';
import { authSignup, authLogin} from '../Controller/authUserController.js';

const authUserRoute = express.Router();

authUserRoute.post('/authsign', authSignup);
authUserRoute.post('/authlogin', authLogin);
authUserRoute.get('/profile',protect, (req, res) => {
  res.json({ message: 'protected profile',user: req.role})
  })

   authUserRoute.get('/admin', protect, isAdmin, (req, res) => {
    res.json({
      message: 'admin access granted',
      user: req.role
    })
  })
export default authUserRoute