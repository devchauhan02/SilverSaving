import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h3>
          Plan Your Retirement with Confidence
        </h3>
        <p className="text">
          Utilize our advanced financial calculator to accurately estimate the
          amount you'll need for retirement by inputting your current
          expenses and factoring in inflation rates, ensuring a secure and
          comfortable future for you and your loved ones.
        </p>
        <a href="/calculate">
          <button>
            Calculate Now!
          </button>
        </a>
        <a href="/tracker">
          <button>
            Track Budget!
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
