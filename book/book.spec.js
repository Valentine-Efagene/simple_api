const { spec, mock } = require('pactum')

//const MOCK_PORT = process.env.MOCK_PORT || 4000
const MAIN_PORT = process.env.PORT || 5000
const PORT = MAIN_PORT

// Add behaviours for mock server
/*mock.addInteraction({
  request: {
    method: 'GET',
    path: '/books/0'
  },
  response: {
    status: 200,
    body: {
      name: 'The Hobbit',
      author: 'J R. R. Tolkien 👱‍♂️'
    }
  }
})


// Start mock server
mock.start(MOCK_PORT)

it('should turn The Hobbit, with status code 200', async () => {
  await spec()
  .get(`http://localhost:${PORT}/books/0`)
  .expectStatus(200)
    .expectJson({
      name: 'The Hobbit',
      author: 'J R. R. Tolkien 👱‍♂️'
    })
  })
  */

it('should turn The Silmarilion, with status code 200', async () => {
  await spec()
    .get(`http://localhost:${PORT}/books/2`)
    .expectStatus(200)
    .expectJson({
      name: 'The Hobbit',
      author: 'J R. R. Tolkien 👱‍♂️'
    })
})