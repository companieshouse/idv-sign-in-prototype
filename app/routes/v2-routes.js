const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// ******* Sign in validation ********************************
router.get('/v2/sign-in', function (req, res) {
  // Set URl
  res.render('v2/sign-in', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/sign-in', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []
  var emailHasError = false
  var passwordHasError = false

  // Check if user has filled out a email
  if (req.session.data['emailAddress'] === '') {
    // No value so add error to array
    emailHasError = true
    errors.push({
      text: 'Enter your email address',
      href: '#emailAddress'
    })
  }

  // Check if user has filled out a password
  if (req.session.data['password'] === '') {
    // No value so add error to array
    passwordHasError = true
    errors.push({
      text: 'Enter your password',
      href: '#password'
    })
  }

  // Check if eother filed not filled out
  if (emailHasError || passwordHasError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/sign-in', {
      errorEmail: emailHasError,
      errorPassword: passwordHasError,
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
  // Create empty array and set error variables to false
  var errors = []
  var emailHasError = false
  var passwordHasError = false

  // Check if user has filled out a email
  if (req.session.data['emailAddressVerified'] === '') {
    // No value so add error to array
    emailHasError = true
    errors.push({
      text: 'Enter the email address of your verified account',
      href: '#emailAddressVerified'
    })
  }

  // Check if user has filled out a password
  if (req.session.data['passwordVerified'] === '') {
    // No value so add error to array
    passwordHasError = true
    errors.push({
      text: 'Enter the password of your verified account',
      href: '#passwordVerified'
    })
  }

  // Check if other filed not filled out
  if (emailHasError || passwordHasError) {
    res.render('v2/sign-in-verified', {
      errorEmailVerified: emailHasError,
      errorPasswordVerified: passwordHasError,
      errorList: errors
    })
  } else if (req.session.data['passwordVerified'] === 'password'){
    res.redirect('/v2/verified')
  } else {
    res.redirect('/v2/not-verified')
  }
})




module.exports=router;

