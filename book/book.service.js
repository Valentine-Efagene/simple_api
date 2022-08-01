const books = require('./book.mock')

function getBookByIndex(index) {
  try {
    return books[index]
  } catch (error) {
    throw Error(error)
  }
}

function getAllBooks() {
  return books
}

function addBook(data) {
  books.push(data)
}

module.exports = { getAllBooks, getBookByIndex, addBook }