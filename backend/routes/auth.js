const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')


router.post('/register', async (req, res) => {
try {
const { name, email, password, role } = req.body
const existing = await User.findOne({ email })
if (existing) return res.status(400).json({ message: 'Email exists' })
const passwordHash = await bcrypt.hash(password, 10)
const user = new User({ name, email, passwordHash, role })
await user.save()
res.json({ success: true })
} catch (err) {
res.status(500).json({ message: err.message })
}
})


router.post('/login', async (req, res) => {
try {
const { email, password } = req.body
const user = await User.findOne({ email })
if (!user) return res.status(400).json({ message: 'Invalid credentials' })
const ok = await bcrypt.compare(password, user.passwordHash)
if (!ok) return res.status(400).json({ message: 'Invalid credentials' })
const token = jwt.sign({ id: user._id, role: user.role, name: user.name }, process.env.JWT_SECRET || 'changeme', { expiresIn: '7d' })
res.json({ success: true, token, user: { id: user._id, name: user.name, role: user.role } })
} catch (err) {
res.status(500).json({ message: err.message })
}
})


module.exports = router