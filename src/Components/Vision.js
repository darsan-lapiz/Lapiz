import TestimonialSlider from "./testimonial";

function Vision() {
  return (
    <section
      id="vision"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent mb-8">
            Our Vision
          </h2>

          <div className="space-y-6">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
              Computer Intelligence is the only invention mankind will ever need
              to build.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto my-8"></div>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
              Shouldn't everyone get a fair chance to understand, use, and
              create it? Even those who are underprivileged and from underserved
              regions.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          <div className="flex-1 max-w-2xl">
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-8 relative">
                What We Do?
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-black to-gray-600 rounded-full"></div>
              </h3>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fulcrum pivots potential from under-resourced regions in the
                  right direction toward learning and shaping the future of
                  artificial intelligence.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We support individuals through global mentorship, free
                  learning resources, and by bridging the gap between rural
                  communities and the frontiers of AI.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "🌍", text: "Global Mentorship" },
                  { icon: "📚", text: "Free Resources" },
                  { icon: "🤝", text: "Community Bridge" },
                  { icon: "🚀", text: "AI Innovation" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <TestimonialSlider />
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-600"></div>
            </div>
            <span className="text-gray-600 font-medium">
              Building the Future Together
            </span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-600"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
