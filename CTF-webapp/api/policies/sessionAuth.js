/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  if (req.session.authenticated) {
    return next();
    //return ok();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  //return res.forbidden('You are not permitted to perform this action.');
  else {
  	// var requireLoginError = [{name:'requireLogin',message:'You must be logged in to continue'}]
  	var requireLoginError = ['You must be logged in to continue']

    req.session.flash={
  		err:requireLoginError
  	}
  	res.redirect('/session/login');
  	return;
  }

  
};
