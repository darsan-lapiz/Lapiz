import React from 'react';

function Vision() {
  return (
    <section id="vision" className="min-h-screen bg-white py-20 px-6">
      {/* Vision Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-800 font-poppins mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 font-poppins">
          Computer Intelligence is the only invention mankind will ever need to build.
        </p>
        <p className="mt-4 text-lg text-gray-700 font-poppins">
          Shouldn’t everyone get a fair chance to understand, use, and create it? Even those who are underprivileged and from underserved regions.
        </p>
      </div>

      {/* What We Do Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        <div className="max-w-lg text-left">
          <h3 className="text-2xl font-bold text-gray-800 font-inter mb-4">What We Do?</h3>
          <p className="text-gray-700 font-inter text-base mb-4">
            Fulcurm pivots potential from under-resourced regions in the right direction toward learning and shaping the future of artificial intelligence.
          </p>
          <p className="text-gray-700 font-inter text-base">
            We support individuals through global mentorship, free learning resources, and by bridging the gap between rural communities and the frontiers of AI.
          </p>
        </div>

        <img
          src="https://i.ibb.co/kggCvc4k/Untitled-design-1.png"
          alt="Vision Illustration"
          className="w-full max-w-lg h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}

export default Vision;
