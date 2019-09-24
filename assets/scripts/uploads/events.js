'use strict'

const api = require('./api')
const ui = require('./ui')

const onCreateUpload = function (event) {
  // prevent default page reload
  event.preventDefault()

  $('.display').html('<img src="https://www.drupal.org/files/issues/throbber_12.gif">')
  // Get data from the form
  const data = new FormData(event.target)
  // console.log(event.target)
  console.log(...data)
  api.upload(data)
    .then(ui.onUploadSuccess)
    .catch(console.error)
}

// listen for events
const addHandlers = function () {
  $('form').on('submit', onCreateUpload)
}

module.exports = {
  addHandlers
}
