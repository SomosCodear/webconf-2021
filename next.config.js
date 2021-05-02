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
      {
        source: '/briefs/2021',
        destination: '/brief-2021.pdf',
      },
      {
        source: '/videos/2019',
        destination:
          'https://www.youtube.com/watch?v=h6sbrtMnMzM&list=PL7JGDc7wfszTq9oLtahn3vvohLOsC7JT4',
      },
      {
        source: '/videos/2020',
        destination: 'https://www.youtube.com/hashtag/encuentroswebconf',
      },
    ];
  },
};
