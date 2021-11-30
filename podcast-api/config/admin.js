module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '953b4d0f658598f0b436693153d19ff5'),
  },
});
