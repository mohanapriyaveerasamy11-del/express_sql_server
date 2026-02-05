

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    res.status(401).json({ message: 'Admin access only' })
  }
  next()
}
