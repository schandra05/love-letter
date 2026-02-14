import React, { useState } from "react";

export default function RomanticLetter() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Dancing+Script:wght@600&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .container {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #f6c1c1, #f4d7b8);
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
          font-family: 'Cormorant Garamond', serif;
        }

        /* FLOATING HEARTS & SUNFLOWERS */
        .float {
          position: absolute;
          font-size: 22px;
          animation: float 8s infinite ease-in-out;
          opacity: 0.8;
        }

        @keyframes float {
          0% { transform: translateY(0px) }
          50% { transform: translateY(-40px) }
          100% { transform: translateY(0px) }
        }

        /* ENVELOPE */
        .envelope-wrapper {
          position: relative;
          width: 380px;
          height: 250px;
          cursor: pointer;
          animation: wiggle 2s infinite;
        }

        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-1deg); }
          100% { transform: rotate(0deg); }
        }

        .envelope {
          width: 100%;
          height: 100%;
          background: #e89cab;
          border-radius: 12px;
          position: relative;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .flap {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 190px solid transparent;
          border-right: 190px solid transparent;
          border-top: 130px solid #d67c8f;
          transform-origin: top;
          transition: transform 1s ease;
        }

        .flap.open {
          transform: rotateX(180deg);
        }

        .seal {
          position: absolute;
          bottom: 70px;
          left: 50%;
          transform: translateX(-50%);
          background: #c62828;
          color: white;
          padding: 15px;
          border-radius: 50%;
          font-size: 14px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        /* LETTER */
        .letter {
          width: 420px;
          max-width: 90%;
          background: #fffaf3;
          padding: 50px;
          border-radius: 12px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.25);
          text-align: center;
          animation: fadeIn 1.5s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .letter h1 {
          font-family: 'Dancing Script', cursive;
          color: #d86f86;
          margin-bottom: 30px;
        }

        .letter p {
          line-height: 2;
          font-size: 1.2rem;
          color: #5a4a42;
        }

        .signature {
          margin-top: 40px;
          font-family: 'Dancing Script', cursive;
          color: #d86f86;
          font-size: 1.4rem;
        }
      `}</style>

      {/* 15 Hearts */}
      {[...Array(15)].map((_, i) => (
        <div
          key={"heart" + i}
          className="float"
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: i + "s",
          }}
        >
          ❤️
        </div>
      ))}

      {/* 15 Sunflowers */}
      {[...Array(15)].map((_, i) => (
        <div
          key={"flower" + i}
          className="float"
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: i + 1 + "s",
          }}
        >
          🌻
        </div>
      ))}

      {/* SHOW ENVELOPE FIRST */}
      {!opened && (
        <div className="envelope-wrapper" onClick={() => setOpened(true)}>
          <div className="envelope">
            <div className="flap"></div>
            <div className="seal">To My Love</div>
          </div>
        </div>
      )}

      {/* SHOW LETTER AFTER CLICK */}
      {opened && (
        <div className="letter">
          <h1>My Dearest Bubbaa,</h1>
          <p>
            You are special to me Today, Tomorrow and every second till eternity.
            I will always choose you no matter what. I want to Love you loud,
            and want Loved by you loud.
            <br /><br />
            Anyone can hurt me in this entire world, but not you My Love.
            I'll make sure to Love you and treasure you always my Bubbaa.
            <br /><br />
            You ask me why do I call you "Bubba", cuz I wanted a name that only
            I have authority to call you and there is only one letter difference
            between "BubbA and BubbY".
          </p>

          <div className="signature">
            Your Loving Pandi ❤️
          </div>
        </div>
      )}
    </div>
  );
}
