const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// ******* Sign in email validation ********************************
router.get('/v2/sign-in-email', function (req, res) {
  // Set URl
  res.render('v2/sign-in-email', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/sign-in-email', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []

  // Check if user has filled out a email
  if (req.session.data['signin-email'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your email address',
      href: '#signin-email'
    })
  }


  // Check if eother filed not filled out
  if (req.session.data['signin-email'] === '') {
    // Re-show page with error value as true so errors will show
    res.render('v2/sign-in-email', {
      errorSigninEmail: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/sign-in-password')
  }
})


// ******* Sign in password validation ********************************
router.get('/v2/sign-in-password', function (req, res) {
  // Set URl
  res.render('v2/sign-in-password', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/sign-in-password', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []

  // Check if user has filled out a email
  if (req.session.data['signin-password'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your password',
      href: '#signin-password'
    })
  }


  // Check if eother filed not filled out
  if (req.session.data['signin-password'] === '') {
    // Re-show page with error value as true so errors will show
    res.render('v2/sign-in-password', {
      errorSigninPassword: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/ch-verified')
  }
})


// ******* ch-verified javascript ********************************
router.get('/v2/ch-verified', function (req, res) {
  // Set URl
  res.render('v2/ch-verified', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/ch-verified', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['verified'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select yes if you verified your identity with Companies House before',
      href: '#verified'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/ch-verified', {
      errorVerified: true,
      errorList: errors
    })
  } else {
    if (req.session.data['verified'] === 'yes') {
      res.redirect('/v2/sign-in-verified')
    } else {
      // User inputted value so move to next page
      res.redirect('/v2/go-verify')
    }
  }
})


// ******* sign-in-verified ********************************
router.get('/v2/sign-in-verified', function (req, res) {
  // Set URl
  res.render('v2/sign-in-verified', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/sign-in-verified', function (req, res) {
  res.redirect('/v2/verified-email')
})


// ******* verified-email ********************************
router.get('/v2/verified-email', function (req, res) {
  // Set URl
  res.render('v2/verified-email', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/verified-email', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []

  // Check if user has filled out a email
  if (req.session.data['verified-email'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your email address',
      href: '#verified-email'
    })
  }


  // Check if eother filed not filled out
  if (req.session.data['verified-email'] === '') {
    // Re-show page with error value as true so errors will show
    res.render('v2/verified-email', {
      errorVerifiedEmail: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/verified-password')
  }
})


// ******* verified-password ********************************
router.get('/v2/verified-password', function (req, res) {
  // Set URl
  res.render('v2/verified-password', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/verified-password', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []

  // Check if user has filled out a email
  if (req.session.data['verified-password'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your password',
      href: '#verified-password'
    })
  }


  // Check if eother filed not filled out
  if (req.session.data['verified-password'] === '') {
    // Re-show page with error value as true so errors will show
    res.render('v2/verified-password', {
      errorVerifiedPassword: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/verified')
  }
})




module.exports=router;

