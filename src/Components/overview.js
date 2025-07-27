import React from 'react';

function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#fef3c7] to-[#e0f2fe] px-6">
      {/* Top Section - Logo and Title */}
      <div className="flex items-center gap-4 mb-10">
        {/* <img
          src="https://i.ibb.co/27YcXVKW/fulcurm.png"
          alt="Fulcurm Logo"
          className="h-24 w-24 object-contain rounded-xl shadow-md mix-blend-multiply" 
        /> */}
        {/* <h1 className="text-5xl font-extrabold text-gray-800 font-sans">Fulcurm</h1> */}
      </div>

      {/* Description Section */}
      <div className="text-center max-w-2xl">
        <p className="text-3xl font-bold text-gray-900 leading-snug">
          We Support Individuals <br className="sm:hidden" />
          From Under-Resourced Regions
        </p>
        <p className="text-3xl font-bold text-gray-900 mt-2">To Learn AI</p>
        <p className="mt-6 text-gray-600 tracking-wide text-lg italic">
          — Non-Profit Initiative —
        </p>
      </div>
    </section>
  );
}

export default About;
