export default function Background() {
  return (
    <>
      <div className="backgroundWrapper" aria-hidden="true">
        <div className="backgroundMask">
          <div className="background" />
        </div>
        <div className="backgroundBlur" />
      </div>

      <style jsx>{`
        .background,
        .backgroundBlur {
          background: url('images/WebConfPattern.png');
          width: 200%;
          height: 200%;
          background-size: 200px;
          transform: rotate(30deg);
          position: absolute;
          left: -50%;
          top: -50%;
          mix-blend-mode: hard-light;
          animation: move 60s linear infinite;
        }

        .background {
          filter: brightness(1.15) saturate(1.5);
        }

        .backgroundBlur {
          filter: blur(5px);
          mix-blend-mode: hard-light;
        }

        .backgroundWrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          overflow: hidden;
        }

        .backgroundMask {
          position: absolute;
          width: 100%;
          height: 100%;
          mask-image: linear-gradient(135deg, #828282ff 20%, #c4c4c400 70%);
          -webkit-mask-image: linear-gradient(135deg, #828282ff 20%, #c4c4c400 70%);
          mix-blend-mode: hard-light;
        }

        @keyframes move {
          0% {
            opacity: 0;
            transform: rotate(30deg) scale(1) translateX(0%);
          }
          5% {
            opacity: 1;
          }
          99.5% {
            transform: rotate(30deg) scale(2) translateX(-50%);
            opacity: 0;
          }
          100% {
            transform: rotate(30deg) scale(1) translateX(0%);
            opacity: 0;
          }
        }

        @keyframes moveMobile {
          0% {
            opacity: 0;
            transform: rotate(30deg) scale(1) translateX(0%);
          }
          5% {
            opacity: 1;
          }
          100% {
            transform: rotate(30deg) scale(1.5) translateX(-5%);
            opacity: 1;
          }
        }

        @media screen and (max-width: 768px) {
          #background,
          #backgroundBlur {
            animation: moveMobile 20s linear forwards;
            height: 250%;
            background-size: 100px;
          }
        }
      `}</style>
    </>
  );
}