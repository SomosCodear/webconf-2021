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
      {
        source: '/stream/1',
        destination: 'https://streamyard.com/mz38af6vmm',
        permanent: false,
      },
      {
        source: '/stream/2',
        destination: 'https://streamyard.com/743p3tkzh8',
        permanent: false,
      },
      {
        source: '/stream/3',
        destination: 'https://streamyard.com/wqzdwd2y9u',
        permanent: false,
      },
      {
        source: '/stream/4',
        destination: 'https://streamyard.com/m5r8bp5bgq',
        permanent: false,
      },
      {
        source: '/stream/5',
        destination: 'https://streamyard.com/k4ufeevsre',
        permanent: false,
      },
      {
        source: '/rombian',
        destination: 'https://rombian-city.experiments.codear.org/',
        permanent: false,
      },
    ];
  },
};
