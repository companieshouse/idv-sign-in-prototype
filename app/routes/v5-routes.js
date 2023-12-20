const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// ******* Sign in email validation ********************************
router.get('/v5/sign-in-email', function (req, res) {
  // Set URl
  res.render('v5/sign-in-email', {
    currentUrl: req.originalUrl
  })
})

router.post('/v5/sign-in-email', function (req, res) {
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
    res.render('v5/sign-in-email', {
      errorSigninEmail: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v5/sign-in-password')
  }
})


// ******* Sign in password validation ********************************
router.get('/v5/sign-in-password', function (req, res) {
  // Set URl
  res.render('v5/sign-in-password', {
    currentUrl: req.originalUrl
  })
})

router.post('/v5/sign-in-password', function (req, res) {
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
    res.render('v5/sign-in-password', {
      errorSigninPassword: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v5/ch-verified')
  }
})


// ******* ch-verified javascript ********************************
router.get('/v5/ch-verified', function (req, res) {
  // Set URl
  res.render('v5/ch-verified', {
    currentUrl: req.originalUrl
  })
})

router.post('/v5/ch-verified', function (req, res) {
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
    res.render('v5/ch-verified', {
      errorVerified: true,
      errorList: errors
    })
  } else {
    if (req.session.data['verified'] === 'yes') {
      res.redirect('/v5/how-verify')
    }
  }
})


// ******* how-verify javascript ********************************
router.get('/v5/how-verify', function (req, res) {
  // Set URl
  res.render('v5/how-verify', {
    currentUrl: req.originalUrl
  })
})

router.post('/v5/how-verify', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['how-did-you-verify'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select how you verified with Companies House',
      href: '#how-did-you-verify'
    })

    // Re-show page with error value as true so errors will show
    res.render('v5/how-verify', {
      errorHowVerify: true,
      errorList: errors
    })
  } else {
    if (req.session.data['how-did-you-verify'] === 'onelogin') {
      res.redirect('/v5/sign-in-verified')
    }
    else {
      res.redirect('/v5/uvid')
    }
  }
})

// ******* how-verify javascript ********************************
router.get('/v5/dob', function (req, res) {
  // Set URl
  res.render('v5/dob', {
    currentUrl: req.originalUrl
  })
})

router.post('/v5/dob', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var dayHasError = false
    var monthHasError = false
    var yearHasError = false

    var dobError = false
  

      // Check if user has filled out a day
    if (req.session.data['Dob-day-one'] === '') {
      // No value so add error to array
      dayHasError = true
      dobError = true
      errors.push({
        text: 'The date must include a day',
        href: '#Dob-day-one'
      })
    }

    // Check if user has filled out a month
    if (req.session.data['Dob-month-one'] === '') {
      // No value so add error to array
      monthHasError = true
      dobError = true
      errors.push({
        text: 'The date must include a month',
        href: '#Dob-day-one'
      })
    }

  // Check if user has filled out a year
  if (req.session.data['Dob-year-one'] === '') {
    // No value so add error to array
    yearHasError = true
    dobError = true
    errors.push({
      text: 'The date must include a year',
      href: '#Dob-day-one'
    })
  }

  // Check if eother filed not filled out
  if (dobError) {
    // Re-show page with error value as true so errors will show
    res.render('v5/dob', {
      errorDobDayOne: dayHasError,
      errorDobMonthOne: monthHasError,
      errorDobYearOne: yearHasError,
      errorDob: dobError,
      errorList: errors
    })
  } else {
    if (req.session.data['uvid'] === 'xxxx') {
      res.redirect('/v5/acsp-not-verified')
    }
    else {
      res.redirect('/v5/acsp-verified')
    }
  }
})


// ******* uvid validation ********************************
router.get('/v5/uvid', function (req, res) {
  // Set URl
  res.render('v5/uvid', {
    currentUrl: req.originalUrl
  })
})

router.post('/v5/uvid', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []

  // Check if user has filled out a email
  if (req.session.data['uvid'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your Companies House personal code',
      href: '#uvid'
    })
  }


  // Check if eother filed not filled out
  if (req.session.data['uvid'] === '') {
    // Re-show page with error value as true so errors will show
    res.render('v5/uvid', {
      errorUvid: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v5/dob')
  }
})


// ******* sign-in-verified ********************************
router.get('/v5/sign-in-verified', function (req, res) {
  // Set URl
  res.render('v5/sign-in-verified', {
    currentUrl: req.originalUrl
  })
})

router.post('/v5/sign-in-verified', function (req, res) {
  res.redirect('/v5/verify-create-or-sign-in')
})


// ******* verified-email ********************************
router.get('/v5/verified-email', function (req, res) {
  // Set URl
  res.render('v5/verified-email', {
    currentUrl: req.originalUrl
  })
})

router.post('/v5/verified-email', function (req, res) {
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
    res.render('v5/verified-email', {
      errorVerifiedEmail: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v5/verified-password')
  }
})


// ******* verified-password ********************************
router.get('/v5/verified-password', function (req, res) {
  // Set URl
  res.render('v5/verified-password', {
    currentUrl: req.originalUrl
  })
})

router.post('/v5/verified-password', function (req, res) {
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
    res.render('v5/verified-password', {
      errorVerifiedPassword: true,
      errorList: errors
    })
  } else {
    if (req.session.data['verified-password'] == 'password' ) {
      res.redirect('/v5/verified')
    } else {
      // User inputted value so move to next page
      res.redirect('/v5/not-verified')
    }
  }
})




module.exports=router;

