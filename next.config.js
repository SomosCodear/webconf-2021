module.exports = {
  async redirects() {
    return [
      {
        source: '/cfp',
        destination: '/',
        permanent: false,
      },
      {
        source: '/videos/2019',
        destination:
          'https://www.youtube.com/watch?v=h6sbrtMnMzM&list=PL7JGDc7wfszTq9oLtahn3vvohLOsC7JT4',
        permanent: false,
      },
      {
        source: '/videos/2020',
        destination: 'https://www.youtube.com/hashtag/encuentroswebconf',
        permanent: false,
      },
      {
        source: '/brief2021',
        destination: '/brief-2021.pdf',
        permanent: false,
      },
      {
        source: '/briefs/2021',
        destination: '/brief-2021.pdf',
        permanent: false,
      },
      {
        source: '/auspicianos',
        destination: 'https://forms.gle/d8d447ajQEvp2dR9A',
        permanent: false,
      },
    ];
  },
};
