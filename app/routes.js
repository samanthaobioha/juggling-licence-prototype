const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.post('/juggling-trick', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let canjuggle = req.session.data['how-many-balls']

  if (canjuggle === 'None - I cannot juggle') {
    res.redirect('/cant-juggle')
  } else {
    res.redirect('/juggling-trick')
  }
})
module.exports = router
