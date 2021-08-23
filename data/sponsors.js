import animaFiniLogo from '~/public/logos/AnimaFini.svg';
import daleGeekLogo from '~/public/logos/DaleGeek.svg';
import jetBrainsLogo from '~/public/logos/JetBrains.svg';
import digitalOceanLogo from '~/public/logos/DigitalOcean.svg';
import doctaDevsLogo from '~/public/logos/DoctaDevs.svg';
import artsSecLogo from '~/public/logos/ArtsSec.png';
import coderioLogo from '~/public/logos/Coderio.svg';
import eryxLogo from '~/public/logos/Eryx.svg';
import cognizantLogo from '~/public/logos/Cognizant.png';
import pwcLogo from '~/public/logos/PwC.svg';
import majorKeyLogo from '~/public/logos/MajorKey.png';
import naranjaXLogo from '~/public/logos/NaranjaX.png';

const SPONSORS = {
  jakarta: [
    {
      id: 'digitalocean',
      name: 'DigitalOcean',
      description:
        'Una plataforma de cómputos escalable, con extensibilidad para almacenamiento, seguridad y monitoreo.',
      logo: digitalOceanLogo,
      width: 600,
      height: 100,
      url: 'https://digitalocean.com',
      links: [
        {
          provider: 'facebook',
          handle: 'DigitalOceanCloudHosting',
        },
        {
          provider: 'twitter',
          handle: 'digitalocean',
        },
        {
          provider: 'instagram',
          handle: 'thedigitalocean',
        },
        {
          provider: 'linkedin',
          handle: 'digitalocean',
        },
      ],
    },
    {
      id: 'majorkey',
      name: 'MajorKey',
      description: '',
      logo: majorKeyLogo,
      width: 600,
      height: 240,
      url: 'https://majorkeytech.com',
      links: [
        {
          provider: 'twitter',
          handle: 'majorkeycareers',
        },
        {
          provider: 'instagram',
          handle: 'majorkeycareers',
        },
        {
          provider: 'linkedin',
          handle: 'majorkeytechcareers',
        },
      ],
    },
  ],
  gold: [
    {
      id: 'animafini',
      name: 'ANIMA/FINI',
      logo: animaFiniLogo,
      width: 310,
      height: 126,
      resizeOnMobile: true,
      scaleFactor: 0.75,
      links: [
        {
          provider: 'twitter',
          handle: 'animafini',
        },
        {
          provider: 'instagram',
          handle: 'animafini',
        },
        {
          provider: 'linkedin',
          handle: 'animafini',
        },
      ],
    },
    {
      id: 'dalegeek',
      name: 'Dale Geek',
      logo: daleGeekLogo,
      width: 250,
      height: 127,
      resizeOnMobile: true,
      scaleFactor: 0.75,
      links: [
        {
          provider: 'twitter',
          handle: 'dalegeekdale',
        },
        {
          provider: 'instagram',
          handle: 'dalegeekdale',
        },
      ],
    },
    {
      id: 'jetbrains',
      name: 'JetBrains',
      logo: jetBrainsLogo,
      width: 170,
      height: 170,
      resizeOnMobile: true,
      scaleFactor: 1.45,
      url: 'https://jetbrains.com',
      links: [
        {
          provider: 'facebook',
          handle: 'JetBrains',
        },
        {
          provider: 'twitter',
          handle: 'jetbrains',
        },
        {
          provider: 'linkedin',
          handle: 'jetbrains',
        },
      ],
    },
    {
      id: 'pwc',
      name: 'PwC Argentina',
      logo: pwcLogo,
      width: 150,
      height: 150,
      url: 'https://www.pwc.com.ar',
      resizeOnMobile: true,
      scaleFactor: 1.25,
      links: [
        {
          provider: 'facebook',
          handle: 'PwCArgentina',
        },
        {
          provider: 'twitter',
          handle: 'PwC_Argentina',
        },
        {
          provider: 'instagram',
          handle: 'pwcargentina',
        },
        {
          provider: 'linkedin',
          handle: 'pwc-argentina',
        },
      ],
    },
    {
      id: 'naranjax',
      name: 'Naranja X',
      logo: naranjaXLogo,
      width: 300,
      height: 83,
      url: 'https://naranjax.com',
      resizeOnMobile: true,
      scaleFactor: 1.25,
      links: [
        {
          provider: 'twitter',
          handle: 'naranjax',
        },
        {
          provider: 'instagram',
          handle: 'naranjax',
        },
        {
          provider: 'linkedin',
          handle: 'naranjax',
        },
      ],
    },
    {
      id: 'doctadevs',
      name: 'DoctaDevs',
      logo: doctaDevsLogo,
      url: 'https://doctadevs.com',
      width: 240,
      height: 60,
      resizeOnMobile: true,
      scaleFactor: 0.5,
      links: [
        {
          provider: 'twitter',
          handle: 'doctadevs',
        },
        {
          provider: 'instagram',
          handle: 'doctadevs_',
        },
        {
          provider: 'linkedin',
          handle: 'doctadevs',
        },
      ],
    },
  ],
  silver: [
    {
      id: 'cognizant',
      name: 'Cognizant Softvision',
      logo: cognizantLogo,
      url: 'https://cognizant.com',
      width: 240,
      height: 78,
      resizeOnMobile: true,
      scaleFactor: 0.65,
      links: [
        {
          provider: 'facebook',
          handle: 'Cognizant',
        },
        {
          provider: 'twitter',
          handle: 'cognizant',
        },
        {
          provider: 'instagram',
          handle: 'cognizant',
        },
        {
          provider: 'linkedin',
          handle: 'cognizant',
        },
      ],
    },
  ],
  bronze: [
    {
      id: 'artssec',
      name: 'ARTSSEC',
      logo: artsSecLogo,
      url: 'https://artssec.com',
      width: 171,
      height: 36,
      resizeOnMobile: true,
      scaleFactor: 0.5,
      links: [],
    },
    {
      id: 'coderio',
      name: 'Coderio',
      logo: coderioLogo,
      url: 'https://coderio.co',
      width: 240,
      height: 60,
      resizeOnMobile: true,
      scaleFactor: 0.5,
      links: [],
    },
    {
      id: 'eryx',
      name: 'Eryx',
      logo: eryxLogo,
      url: 'https://eryx.co',
      width: 120,
      height: 44,
      resizeOnMobile: true,
      scaleFactor: 0.5,
      links: [],
    },
  ],
};

export const SPONSOR_CATEGORIES = Object.keys(SPONSORS);

export default SPONSORS;
