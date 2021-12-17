const User = require('../users/users-model')

function checkValidBody(req, res, next) {
    console.log("MIDDLEWARE: check username and password are there")
    if (req.body.username === undefined || req.body.password === undefined){
        next({ status: 422, message: "username and password required"})
    }
    else{
        next()
    }
    //response body should include a string exactly as follows: "username and password required".

}

async function checkUsernameFree(req, res, next) {
    console.log("MIDDLEWARE: check username free")
    next()
    //response body should include a string exactly as follows: "username taken".


    // const { username } = req.body
    // console.log("checking:", username)
    // console.log("reconstruct:", { username })
    // try {
    //   const usernameThere = await User.findBy({ username })
  
    //   console.log("usernameThere:", usernameThere)
  
    //   if(usernameThere.length !== 0){
    //     return next({ status: 422, message: "Username taken"})
    //   }
    //   else{
    //     next()
    //   }
  
  
    // } catch (error) {
    //   next(error)
    // }
  }
  
  async function checkUsernameExists(req, res, next) {
    console.log("MIDDLEWARE: check username exists")
    next()
    // const {username} = req.body
  
    // try {
    //   const [userFromDb] = await User.findBy({username})
    //   console.log(userFromDb)
    //   if (!userFromDb) {
    //     return next({ message: 'Invalid credentials', status: 401 })
    //   }
    //   else{
    //     req.loggedUser = userFromDb
    //     next()
    //   }
  
    // } catch (error) {
    //   console.error(error)
    //   next(error)
    // }
  
  }
  
  function checkPasswordLength(req, res, next) {
    console.log("MIDDLEWARE: check pwd length")
    next()
    // const pwd = req.body.password
    // console.log(pwd)
  
    // if (pwd === undefined || pwd.length <= 3){
    //   res.status(422).json({message: "Password must be longer than 3 chars"})
    // }
    // else{
    //   next()
    // }
  }
  
  module.exports = {
    checkUsernameFree,
    checkUsernameExists,
    checkPasswordLength,
    checkValidBody
  }