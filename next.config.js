module.exports = {
  future: {
    webpack5: true,
  },
  async rewrites() {
    return [
      {
        source: '/brief2021',
        destination: '/brief-2021.pdf',
      },
    ];
  },
};
