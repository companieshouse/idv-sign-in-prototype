const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// ******* Sign in validation ********************************
router.get('/v1/sign-in', function (req, res) {
  // Set URl
  res.render('v1/sign-in', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/sign-in', function (req, res) {
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
    res.render('v1/sign-in', {
      errorEmail: emailHasError,
      errorPassword: passwordHasError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/ch-verified')
  }
})


// ******* ch-verified javascript ********************************
router.get('/v1/ch-verified', function (req, res) {
  // Set URl
  res.render('v1/ch-verified', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/ch-verified', function (req, res) {
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
    res.render('v1/ch-verified', {
      errorVerified: true,
      errorList: errors
    })
  } else {
    if (req.session.data['verified'] === 'yes') {
      res.redirect('/v1/personal-code')
    } 
  }
})


// ******* other-verified javascript ********************************
router.get('/v1/other-verified', function (req, res) {
  // Set URl
  res.render('v1/other-verified', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/other-verified', function (req, res) {
  res.redirect('/v1/address-confirm')
})


// ******* address-confirm javascript ********************************
router.get('/v1/address-confirm', function (req, res) {
  // Set URl
  res.render('v1/address-confirm', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/address-confirm', function (req, res) {
  res.redirect('/v1/show-code')
})


// ******* address-manual javascript ********************************
router.get('/v1/address-manual', function (req, res) {
  // Set URl
  res.render('v1/address-manual', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/address-manual', function (req, res) {
  res.redirect('/v1/address-confirm')
})



// ******* personal-code javascript ********************************
router.get('/v1/personal-code', function (req, res) {
  // Set URl
  res.render('v1/personal-code', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/personal-code', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];

  // Check if user has filled out a email
  if (req.session.data['personal-code'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your Companies House personal code',
      href: '#personal-code'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/personal-code', {
      errorPersonal: true,
      errorList: errors
    })
  } else {
      res.redirect('/v1/name')
  }
})


// ******* name javascript ********************************
router.get('/v1/name', function (req, res) {
  // Set URl
  res.render('v1/name', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/name', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];

  // Check if user has filled out a email
  if (req.session.data['surname'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your surname',
      href: '#surname'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/name', {
      errorName: true,
      errorList: errors
    })
  } else {
      res.redirect('/v1/dob')
  }
})


// ******* illness-start-date javascript ********************************
router.get('/v1/dob', function (req, res) {
  // Set URl
  res.render('v1/dob', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/dob', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []
  var dayHasError = false
  var monthHasError = false
  var yearHasError = false

  // Check if user has filled out a day
  if (req.session.data['Dob-day'] === '') {
    // No value so add error to array
    dayHasError = true
    errors.push({
      text: 'The date must include a day',
      href: '#dob-day'
    })
  }

  // Check if user has filled out a month
  if (req.session.data['Dob-month'] === '') {
    // No value so add error to array
    monthHasError = true
    errors.push({
      text: 'The date must include a month',
      href: '#dob-month'
    })
  }

  // Check if user has filled out a year
  if (req.session.data['Dob-year'] === '') {
    // No value so add error to array
    yearHasError = true
    errors.push({
      text: 'The date must include a year',
      href: '#dob-year'
    })
  }

  // Check if ether filed not filled out
  if (dayHasError || monthHasError || yearHasError) {
    // Re-show page with error value as true so errors will show
    res.render('v1/dob', {
      errorDobDay: dayHasError,
      errorDobMonth: monthHasError,
      errorDobYear: yearHasError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v1/account-found')
  }
})


// ******* account-found javascript ********************************
router.get('/v1/account-found', function (req, res) {
  // Set URl
  res.render('v1/account-found', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/account-found', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['emailAccess'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select yes if you verified your identity with Companies House before',
      href: '#emailAccess'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/account-found', {
      errorEmailAccess: true,
      errorList: errors
    })
  } else {
    if (req.session.data['emailAccess'] === 'yes') {
      res.redirect('/v1/access-code')
    }
  }
})


// ******* access-code javascript ********************************
router.get('/v1/access-code', function (req, res) {
  // Set URl
  res.render('v1/access-code', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/access-code', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];

  // Check if user has filled out a email
  if (req.session.data['access-code'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your access code',
      href: '#access-code'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/access-code', {
      errorAccessCode: true,
      errorList: errors
    })
  } else {
      res.redirect('/v1/verified')
  }
})




module.exports=router;

