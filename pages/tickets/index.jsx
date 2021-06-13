/* eslint-disable max-len */

import { useRef, useState } from 'react';
import styled from 'styled-components';

const Ticket = styled.article`
  width: 20em;
  height: 38em;
  border: 3px solid #657cbd;
  border-top-left-radius: 2em;
  border-top-right-radius: 10em;
  background: linear-gradient(180deg, #07193b 0%, #34174b 100%);
  display: grid;
  place-items: center;
  transform-style: preserve-3d;
  transform: rotate3d(0, 0, 0, 45deg);
  filter: brightness(1) hue-rotate(0) drop-shadow(0px 0px 10px #657cbd);
  font-family: Roboto, sans-serif;
  transition: all 100ms;
  animation: 10s animate infinite alternate;

  @keyframes animate {
    100% {
      transform: rotateY(15.04deg) rotateX(14.7deg);
      filter: brightness(1) hue-rotate(0) drop-shadow(0px 0px 200px #657cbd);
    }
  }
`;

const TicketBorder = styled.div`
  width: 19em;
  height: 37em;
  border-top-left-radius: 1.5em;
  border-top-right-radius: 10em;
  background: linear-gradient(180deg, #42d4c3 0%, #f242f5 100%);
  display: grid;
  place-items: center;
  filter: drop-shadow(0px 0px 2px #42d4c3);
`;

const TicketContent = styled.div`
  width: 99.5%;
  height: 99.5%;
  border-top-left-radius: 1.5em;
  border-top-right-radius: 10em;
  background: linear-gradient(180deg, #07193b 0%, #34174b 100%);
  padding: 1rem;
  box-sizing: border-box;
  display: grid;
  align-content: space-between;
  grid-template-rows: auto 80% auto auto;
`;

const Container = styled.main`
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
  background: #000;
  font-size: 150%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    pointer-events: none;
    font-size: 95%;
  }
`;

const WebConfLogo = () => (
  <svg height="30" viewBox="0 0 369 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M45.117 99.5848L0 59.669L12.1559 0L40.7924 25.3637L21.5066 58.734L45.117 99.5848ZM98.1822 59.669L53.0652 99.5848L76.6172 58.734L57.3314 25.3637L85.9679 0L98.1822 59.669ZM264.788 54.7986C267.637 51.949 269.13 47.7426 269.401 42.3148V42.0434H259.496C259.36 45.3001 258.817 47.6069 257.867 48.8281C256.917 50.0493 255.153 50.7278 252.575 50.7278C249.861 50.7278 248.097 49.778 247.012 48.0139C245.926 46.1142 245.384 42.8576 245.384 38.1083V29.0169C245.519 24.8104 246.062 21.8252 247.148 20.0611C248.233 18.2971 250.133 17.3473 252.711 17.3473C255.289 17.3473 257.053 17.8901 258.003 19.247C259.089 20.6039 259.496 22.9107 259.631 26.303H269.401C268.994 20.8753 267.502 16.6688 264.788 13.6836C262.074 10.834 258.139 9.34138 252.847 9.34138C247.555 9.34138 243.348 11.2411 240.363 14.7691C237.378 18.4328 235.885 23.4535 235.885 30.1024V38.244C235.885 44.893 237.378 50.0493 240.227 53.5774C243.077 57.2411 247.283 59.0051 252.711 59.0051C257.867 59.0051 261.938 57.6482 264.788 54.7986ZM160.168 10.2912L155.555 40.5508L149.991 10.2912H141.85L136.15 40.5508L131.673 10.2912H122.038L130.587 58.4623H140.357L145.92 30.1024L151.484 58.4623H161.254L169.802 10.2912H160.168ZM183.507 42.4505H196.127V34.5803H183.507V27.6599H198.434V19.9254H174.145V58.4623H198.434V50.7278H183.507V42.4505ZM203.899 58.3266V19.9254H216.926C221.404 19.9254 224.796 20.8753 227.239 22.6393C229.681 24.4033 230.767 27.1172 230.767 30.5095C230.767 32.4092 230.36 34.1732 229.41 35.6658C228.596 37.1585 227.239 38.244 225.61 38.9225C227.374 39.4653 228.867 40.4151 229.817 41.9077C230.767 43.4004 231.309 45.1644 231.309 47.3355C231.309 51.1349 230.224 53.9844 227.917 55.7484C225.746 57.5124 222.354 58.3266 217.876 58.3266H203.899ZM213.262 35.9372H217.74C220.183 35.9372 221.54 34.5803 221.54 32.0021C221.54 30.5095 221.268 29.424 220.59 28.7455C219.911 28.067 218.961 27.7956 217.74 27.7956H213.262V35.9372ZM213.262 42.4505V50.7278H218.012C219.368 50.7278 220.318 50.3207 220.997 49.6422C221.675 48.9638 222.082 48.0139 222.082 46.657C222.082 43.8074 220.997 42.4505 218.69 42.3148H213.262V42.4505ZM304.681 39.8723C304.681 43.6717 304.003 46.9284 302.782 49.7779C301.561 52.6275 299.661 54.9343 297.354 56.4269C295.047 58.0552 292.333 58.7337 289.348 58.7337C286.363 58.7337 283.649 57.9195 281.342 56.4269C279.035 54.9343 277.136 52.6275 275.779 49.7779C274.422 46.9284 273.879 43.536 273.879 39.7366V38.244C273.879 34.4446 274.558 31.0523 275.779 28.2027C277 25.3532 278.9 23.0464 281.207 21.5538C283.513 19.9254 286.227 19.247 289.212 19.247C293.555 19.247 297.218 20.8753 300.068 23.9962C302.917 27.2529 304.41 31.4594 304.681 36.8871V39.8723ZM295.319 38.3797C295.319 34.716 294.776 32.0021 293.69 29.9667C292.605 28.067 291.112 26.9815 289.212 26.9815C287.177 26.9815 285.684 27.9313 284.599 29.9667C283.513 31.8664 283.106 34.716 283.106 38.3797V39.8723C283.106 43.5361 283.649 46.3856 284.735 48.2853C285.82 50.185 287.313 51.2706 289.212 51.2706C291.112 51.2706 292.605 50.3207 293.69 48.2853C294.776 46.2499 295.319 43.536 295.319 40.008V38.3797ZM330.056 58.4623H339.419V19.9254H330.056V43.8074L319.201 19.9254H309.838V58.4623H319.201V34.5803L330.056 58.4623ZM367.643 43.4004H354.888V58.3266H345.525V19.9254H369V27.6599H354.888V35.6658H367.643V43.4004ZM129.387 67.5153V87.9715H139.83V85.8912H131.759V67.5153H129.387ZM163.275 67.4598L157.644 87.9715H160.085L161.527 82.5489H168.683L170.112 87.9715H172.553L166.964 67.4598H163.275ZM168.129 80.4686H162.082L165.119 69.0547L168.129 80.4686ZM195.434 69.5956H200.801V67.5153H187.723V69.5956H193.076V87.9715H195.434V69.5956ZM221.617 67.4598L215.986 87.9715H218.427L219.87 82.5489H227.026L228.454 87.9715H230.895L225.306 67.4598H221.617ZM226.471 80.4686H220.424L223.462 69.0547L226.471 80.4686ZM267.673 67.5153H263.595L258.561 86.016L253.554 67.5153H249.477V87.9715H251.724V69.6649L256.897 87.9715H260.281L265.426 69.6788V87.9715H267.673V67.5153ZM285.986 87.9715V84.4489C286.069 84.2455 286.309 83.945 286.707 83.5474C287.114 83.1406 287.613 82.6829 288.205 82.1744C288.796 81.6659 289.411 81.1481 290.049 80.6211C290.687 80.0849 291.279 79.5902 291.824 79.1372C292.472 78.6009 293.1 78.0462 293.711 77.473C294.33 76.8905 294.839 76.2756 295.236 75.6284C295.634 74.9812 295.832 74.2924 295.832 73.562C295.832 72.6559 295.615 71.9302 295.181 71.3847C294.746 70.8392 294.067 70.5664 293.142 70.5664C292.014 70.5664 291.233 70.927 290.798 71.6482C290.364 72.3693 290.146 73.317 290.146 74.4912H285.847C285.847 72.2538 286.48 70.4832 287.747 69.1796C289.014 67.8667 290.835 67.2102 293.211 67.2102C294.746 67.2102 296.027 67.4922 297.053 68.0562C298.088 68.6202 298.865 69.3876 299.383 70.3584C299.901 71.3199 300.159 72.4017 300.159 73.6036C300.159 74.4265 300.002 75.1939 299.688 75.9058C299.374 76.6085 298.971 77.2603 298.481 77.8613C297.991 78.453 297.464 78.9985 296.9 79.4978C296.336 79.9878 295.805 80.4316 295.305 80.8292C294.039 81.8277 293.026 82.6506 292.268 83.2978C291.519 83.945 291.085 84.4073 290.965 84.6846H300.035V87.9715H285.986ZM316.96 88.3043C315.656 88.3043 314.546 88.0223 313.631 87.4584C312.725 86.8944 311.99 86.1224 311.426 85.1423C310.862 84.1623 310.446 83.0435 310.178 81.7861C309.919 80.5194 309.789 79.188 309.789 77.7919C309.789 76.3958 309.919 75.0645 310.178 73.7978C310.446 72.5219 310.862 71.3893 311.426 70.4C311.99 69.4107 312.725 68.634 313.631 68.0701C314.546 67.4968 315.656 67.2102 316.96 67.2102C318.263 67.2102 319.368 67.4968 320.274 68.0701C321.189 68.634 321.929 69.4107 322.493 70.4C323.066 71.3893 323.482 72.5219 323.741 73.7978C324 75.0645 324.13 76.3958 324.13 77.7919C324.13 79.188 324 80.5194 323.741 81.7861C323.482 83.0435 323.066 84.1623 322.493 85.1423C321.929 86.1224 321.189 86.8944 320.274 87.4584C319.368 88.0223 318.263 88.3043 316.96 88.3043ZM316.96 84.962C317.884 84.962 318.587 84.4119 319.068 83.3116C319.548 82.2114 319.789 80.3715 319.789 77.7919C319.789 75.2124 319.548 73.3725 319.068 72.2722C318.587 71.1628 317.884 70.608 316.96 70.608C316.035 70.608 315.332 71.1628 314.852 72.2722C314.371 73.3725 314.13 75.2124 314.13 77.7919C314.13 80.3808 314.371 82.2253 314.852 83.3255C315.332 84.4165 316.035 84.962 316.96 84.962ZM333.524 87.9715V84.4489C333.607 84.2455 333.847 83.945 334.245 83.5474C334.652 83.1406 335.151 82.6829 335.743 82.1744C336.334 81.6659 336.949 81.1481 337.587 80.6211C338.225 80.0849 338.817 79.5902 339.362 79.1372C340.01 78.6009 340.638 78.0462 341.248 77.473C341.868 76.8905 342.376 76.2756 342.774 75.6284C343.172 74.9812 343.37 74.2924 343.37 73.562C343.37 72.6559 343.153 71.9302 342.719 71.3847C342.284 70.8392 341.604 70.5664 340.68 70.5664C339.552 70.5664 338.771 70.927 338.336 71.6482C337.902 72.3693 337.684 73.317 337.684 74.4912H333.385C333.385 72.2538 334.018 70.4832 335.285 69.1796C336.552 67.8667 338.373 67.2102 340.749 67.2102C342.284 67.2102 343.565 67.4922 344.591 68.0562C345.626 68.6202 346.403 69.3876 346.921 70.3584C347.438 71.3199 347.697 72.4017 347.697 73.6036C347.697 74.4265 347.54 75.1939 347.226 75.9058C346.911 76.6085 346.509 77.2603 346.019 77.8613C345.529 78.453 345.002 78.9985 344.438 79.4978C343.874 79.9878 343.343 80.4316 342.843 80.8292C341.577 81.8277 340.564 82.6506 339.806 83.2978C339.057 83.945 338.623 84.4073 338.502 84.6846H347.573V87.9715H333.524ZM366.051 67.4876V87.9715H361.779V71.5095C361.659 71.6019 361.4 71.7221 361.003 71.8701C360.614 72.0087 360.147 72.1428 359.602 72.2722C359.056 72.4017 358.492 72.4895 357.91 72.5357V69.1518C358.492 69.0871 359.056 68.9623 359.602 68.7774C360.157 68.5924 360.637 68.3844 361.044 68.1533C361.451 67.9221 361.719 67.7002 361.849 67.4876H366.051ZM49.0911 25.0131L53.0067 31.7339L69.1951 59.7859L49.1495 94.5003L29.0456 59.7859L49.0911 25.0131Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="184.5"
        y1="0"
        x2="184.5"
        y2="99.5848"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#42D5C3" />
        <stop offset="1" stopColor="#D5429A" />
      </linearGradient>
    </defs>
  </svg>
);

const CodearLogo = () => (
  <svg
    style={{ marginLeft: '1rem' }}
    height="20"
    viewBox="0 0 150 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M67.1548 30.212C67.0363 32.7916 66.3114 34.7431 64.9801 36.0664C63.6488 37.3898 61.7645 38.0535 59.3271 38.0574C56.7673 38.0574 54.8059 37.216 53.443 35.5331C52.0802 33.8503 51.4007 31.4504 51.4046 28.3336V24.5234C51.4046 21.4185 52.1078 19.0245 53.5141 17.3417C54.9205 15.6588 56.8779 14.8174 59.3864 14.8174C61.8514 14.8174 63.7239 15.5067 65.0038 16.8854C66.2837 18.2641 67.0106 20.2393 67.1844 22.811H62.604C62.5605 21.2308 62.3136 20.1306 61.8633 19.5104C61.4129 18.9179 60.5893 18.6038 59.3864 18.6038C58.8779 18.5582 58.3668 18.6535 57.9089 18.8793C57.4511 19.1051 57.0643 19.4526 56.791 19.8837C56.2932 20.7429 56.0147 22.1532 55.9851 24.1205V28.3928C55.9851 30.6406 56.2359 32.1832 56.7376 33.0207C57.013 33.447 57.4001 33.7895 57.8567 34.011C58.3132 34.2325 58.8219 34.3245 59.3271 34.2769C60.5122 34.2769 61.3537 33.9866 61.8099 33.3999C62.2662 32.8133 62.521 31.7526 62.5862 30.2238L67.1548 30.212Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M83.693 29.0623C83.7273 30.6689 83.4203 32.2644 82.7923 33.7435C82.2596 35.0152 81.3706 36.1058 80.2325 36.8841C79.11 37.6295 77.7874 38.016 76.4401 37.9922C75.0987 38.012 73.7813 37.6347 72.6537 36.9078C71.5051 36.1333 70.6056 35.0424 70.0642 33.7672C69.4236 32.2829 69.1084 30.6787 69.1398 29.0623V28.3631C69.1043 26.7367 69.4133 25.1212 70.0465 23.6227C70.5821 22.3493 71.4754 21.2584 72.6182 20.4821C73.7511 19.7361 75.0839 19.3517 76.4401 19.38C77.404 19.3536 78.3616 19.5426 79.2431 19.9331C80.1247 20.3237 80.9081 20.906 81.5361 21.6376C82.8634 23.1427 83.5844 25.1534 83.6989 27.6698L83.693 29.0623ZM79.2963 28.3335C79.3716 26.9782 79.1132 25.6251 78.5437 24.393C78.3576 23.9842 78.0578 23.6376 77.6801 23.3945C77.3023 23.1514 76.8626 23.0222 76.4135 23.0222C75.9643 23.0222 75.5246 23.1514 75.1469 23.3945C74.7691 23.6376 74.4693 23.9842 74.2832 24.393C73.7327 25.6306 73.4829 26.9809 73.5544 28.3335V29.0446C73.4771 30.4089 73.7398 31.771 74.3188 33.0088C74.5083 33.4125 74.8079 33.7546 75.1832 33.9957C75.5585 34.2368 75.9941 34.3671 76.4401 34.3716C76.8826 34.3646 77.3136 34.2301 77.6815 33.9841C78.0494 33.7382 78.3385 33.3913 78.5141 32.9851C79.0742 31.7769 79.3363 30.452 79.2785 29.1216L79.2963 28.3335Z"
      fill="url(#paint1_linear)"
    />
    <path
      d="M86.5491 37.7492V15.1314H92.534C95.1728 15.1314 97.2764 15.9689 98.8447 17.6438C100.415 19.3267 101.215 21.6199 101.245 24.5412V28.2091C101.245 31.1758 100.454 33.5085 98.8743 35.2072C97.2942 36.9058 95.1491 37.7532 92.4391 37.7492H86.5491ZM91.1177 18.9415V33.9569H92.4865C94.0094 33.9569 95.076 33.5539 95.6982 32.7718C96.3204 31.9896 96.6463 30.5852 96.6759 28.6239V24.6656C96.6759 22.5561 96.3856 21.0806 95.793 20.2451C95.2005 19.4096 94.199 18.9771 92.7828 18.9356L91.1177 18.9415Z"
      fill="url(#paint2_linear)"
    />
    <path
      d="M114.429 30.2297H108.503V34.1228H115.549V37.7492H104.136V19.6466H115.549V23.3145H108.527V26.5795H114.453L114.429 30.2297Z"
      fill="url(#paint3_linear)"
    />
    <path
      d="M128.769 33.1155H122.541L121.326 37.7492H116.497L123.566 15.1373H127.744L134.854 37.7492H129.978L128.769 33.1155ZM123.531 29.3112H127.755L125.622 21.2525L123.531 29.3112Z"
      fill="url(#paint4_linear)"
    />
    <path
      d="M142.558 31.5155H140.993V37.7492H136.579V19.6466H143.132C145.135 19.6466 146.688 20.1207 147.79 21.0628C148.351 21.5657 148.79 22.1887 149.077 22.8854C149.363 23.5821 149.488 24.3344 149.443 25.0863C149.481 26.1709 149.261 27.249 148.803 28.2328C148.327 29.1178 147.59 29.8355 146.694 30.2889L150 37.5596V37.7492H145.26L142.558 31.5155ZM140.993 27.8654H143.055C144.383 27.8654 145.046 27.1049 145.046 25.584C145.046 24.0789 144.412 23.3264 143.15 23.3145H140.993V27.8654Z"
      fill="url(#paint5_linear)"
    />
    <path
      d="M14.9563 50.3791L37.9647 30.011L31.8477 0L17.4326 12.7588L27.1247 29.5682L14.9563 50.3791Z"
      fill="url(#paint6_linear)"
    />
    <path
      d="M14.3331 12.7587L12.0208 8.74088L0 29.5682L11.906 50.1823L12.0208 50.3791L12.1684 50.1003L24.0252 29.5682L14.3331 12.7587Z"
      fill="url(#paint7_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="59.2945"
        y1="14.8174"
        x2="59.2945"
        y2="38.0574"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#42D5C3" />
        <stop offset="1" stopColor="#D5429A" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="76.418"
        y1="19.3775"
        x2="76.418"
        y2="37.9932"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#42D5C3" />
        <stop offset="1" stopColor="#D5429A" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="93.8968"
        y1="15.1314"
        x2="93.8968"
        y2="37.7493"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#42D5C3" />
        <stop offset="1" stopColor="#D5429A" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="109.843"
        y1="19.6466"
        x2="109.843"
        y2="37.7492"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#42D5C3" />
        <stop offset="1" stopColor="#D5429A" />
      </linearGradient>
      <linearGradient
        id="paint4_linear"
        x1="125.676"
        y1="15.1373"
        x2="125.676"
        y2="37.7492"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#42D5C3" />
        <stop offset="1" stopColor="#D5429A" />
      </linearGradient>
      <linearGradient
        id="paint5_linear"
        x1="143.289"
        y1="19.6466"
        x2="143.289"
        y2="37.7492"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#42D5C3" />
        <stop offset="1" stopColor="#D5429A" />
      </linearGradient>
      <linearGradient
        id="paint6_linear"
        x1="26.4605"
        y1="0"
        x2="26.4605"
        y2="50.3791"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#42D5C3" />
        <stop offset="1" stopColor="#D5429A" />
      </linearGradient>
      <linearGradient
        id="paint7_linear"
        x1="12.0126"
        y1="8.74088"
        x2="12.0126"
        y2="50.3791"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#42D5C3" />
        <stop offset="1" stopColor="#D5429A" />
      </linearGradient>
    </defs>
  </svg>
);

const TicketHeader = styled.div`
  display: flex;
  align-items: center;
`;

const TicketLinePattern = styled.img`
  height: 30em;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -7em;
  margin-top: -14em;
`;

const TicketNumberLabel = styled.label`
  background: #42d4c3;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  padding: 0.5em;
  display: inline-block;
  width: 5.5em;
  text-align: center;
  position: relative;
  font-size: 0.75em;

  &:after {
    position: absolute;
    left: 2px;
    top: 2px;
    width: 6.5em;
    height: 100%;
    border: 1px solid #42d4c3;
    content: ' ';
  }
`;

const TicketFromLabel = styled.label`
  background: #d4429a;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  padding: 0.5em;
  display: inline-block;
  width: 2.75em;
  text-align: center;
  position: relative;
  font-size: 0.75em;

  &:after {
    position: absolute;
    left: 2px;
    top: 2px;
    width: 3.5em;
    height: 100%;
    border: 1px solid #d4429a;
    content: ' ';
  }
`;

const TicketNumber = styled.label`
  width: 4em;
  height: 1.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  background: #fff;
  color: #1f1f1f;
`;

const TicketFrom = styled.label`
  width: fit-content;
  max-width: 12em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5rem;
  align-items: flex-start;
  font-size: 0.75em;
  background: #000;
  color: #fff;
  font-variant: small-caps;
`;

const TicketUsername = styled.div`
  opacity: 0.5;
`;

const TicketDataContainer = styled.div`
  z-index: 1;
  margin-bottom: 0.25em;
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

const TicketQR = styled.img`
  position: absolute;
  right: 1em;
  bottom: 1.15em;
  width: 4.5em;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 3.5em;
    bottom: 1.5em;
  }
`;

// transform: rotateY(-32.04deg) rotateX(-23.7deg);
const TicketPage = () => {
  const ticketRef = useRef();
  const [originalAnimation, setOriginalAnimation] = useState('');
  const move = (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    const brightnessFactor = Math.max(1, Math.abs(xAxis) / 15);
    window.requestAnimationFrame(() => {
      if (ticketRef.current.style.animation !== 'unset') {
        setOriginalAnimation(ticketRef.current.style.animation);
        ticketRef.current.style.animation = 'unset';
      }
      ticketRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      ticketRef.current.style.filter = `brightness(${brightnessFactor}) hue-rotate(${
        xAxis + yAxis
      }deg) drop-shadow(0px 0px 200px #657cbd)`;
    });
  };

  const animate = () => {
    ticketRef.current.style.animation = originalAnimation;
  };

  return (
    <Container onMouseMove={move} onMouseOut={animate}>
      <Ticket ref={ticketRef}>
        <TicketBorder>
          <TicketContent>
            <TicketHeader>
              <WebConfLogo />
              <CodearLogo />
            </TicketHeader>
            <div />
            <TicketLinePattern src="/images/ticket-background.png" />
            <TicketDataContainer>
              <TicketNumberLabel>Número: _</TicketNumberLabel>
              <TicketNumber>012345</TicketNumber>
              <TicketQR src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example&margin=10" />
            </TicketDataContainer>
            <TicketDataContainer>
              <TicketFromLabel>De: _</TicketFromLabel>
              <TicketFrom>
                Joel A. Villarreal Bertoldi
                <TicketUsername>@joelalejandro</TicketUsername>
              </TicketFrom>
            </TicketDataContainer>
          </TicketContent>
        </TicketBorder>
      </Ticket>
    </Container>
  );
};

export default TicketPage;
