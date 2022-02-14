module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c01365abcf6ba3fad652f880a0e24a2c'),
  },
});
