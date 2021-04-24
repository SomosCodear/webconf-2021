const { Button } = require('~/components/common/Button');

const Home = () => (
  <main
    style={{
      background: '#272D5B linear-gradient(135deg, #272D5B 20%, #4E0528)',
      height: '100%',
      width: '100%',
      display: 'grid',
      placeItems: 'center',
    }}
  >
    <div
      style={{
        background: '#fff',
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        width: '500px',
        height: '500px',
      }}
    >
      <img src="/images/desktop-logo.svg" alt="WebConf LATAM 2021" />
    </div>
    <Button
      onClick={() => {
        window.location = '/cfp';
      }}
    >
      Postulá tu charla
    </Button>
  </main>
);

export default Home;
