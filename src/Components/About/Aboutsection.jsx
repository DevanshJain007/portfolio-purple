import React from 'react';

const Aboutsection = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center px-8">
      <div className="text-left max-w-3xl">
        <h3 className="text-7xl font-bold uppercase mb-6">I'm a Software Engineer.</h3>
        <p className="text-3xl leading-snug uppercase text-gray-700">
          Currently, I'm a Software Engineer at ..........
        </p>
      </div>

      <div className="mt-12 max-w-3xl text-left">
        <p className="text-2xl text-gray-600 leading-relaxed">
          A self-taught UI/UX designer, <br />
          "Full-stack MERN developer by day, bug exorcist by night. Turning caffeine into code and errors into 'features' since forever!"
          <br />
          Also, I talk to APIs more than humans—at least they respond consistently. 😎🔥
          <br />
          Building sleek UIs, wrestling with databases, and crafting seamless digital experiences that merge logic with creativity.
          Breaking things just to fix them better—because that’s the dev life!
        </p>
      </div>
    </div>
  );
};

export default Aboutsection;
