const router = require('express').Router()
const { getAllBooks, getBookByIndex, addBook } = require('./book.controller')

router.get('/:id', getBookByIndex)
router.post('/create', addBook)
router.get('/', getAllBooks)

module.exports = router