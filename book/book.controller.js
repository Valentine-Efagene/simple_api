const Joi = require('joi')
const bookService = require('./book.service')

function getBookByIndex(req, res) {
  try {
    res.status(200).send(bookService.getBookByIndex(req.params.id))
  } catch (error) {
    res.status(404).send(error.message)
  }
}

function getAllBooks(req, res) {
  res.send(bookService.getAllBooks())
}

function addBook(req, res) {
  // https://joi.dev/api/?v=17.6.0
  const schema = Joi.object({
    name: Joi.string().required(),
    author: Joi.string().required()
  })
  try {
    const { error, value } = schema.validate(req.body)

    if (error) {
      throw error
    }

    bookService.addBook(value)
    res.status(200).send('Done')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = { getAllBooks, getBookByIndex, addBook }