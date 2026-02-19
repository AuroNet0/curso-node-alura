const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy
require('dotenv').config()

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET
const GITHUB_CALLBACK_URL = process.env.GITHUB_CALLBACK_URL

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
})

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: GITHUB_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
 //   User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(null, profile.id);
 //   });
  }
));

module.exports = passport