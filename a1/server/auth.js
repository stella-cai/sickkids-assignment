import passport from "passport";
import LocalStrategy from "passport-local";

passport.use('login', new LocalStrategy(
    function(email, password, done) {
        if (false) {
            return done(null, false);
        }
        console.log('email :>> ', email);
        return done(null, {email: email}, { message: 'Logged in successfully.' });
    //   User.findOne({ username: username }, function (err, user) {
    //     if (err) { return done(err); }
    //     if (!user) { return done(null, false); }
    //     if (!user.verifyPassword(password)) { return done(null, false); }
    //     return done(null, user);
    //   });
    }
  ));