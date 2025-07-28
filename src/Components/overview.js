function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-center lg:items-start space-y-8">
            <div className="relative group">
              <div className="w-32 h-32 bg-gradient-to-br from-black to-gray-700 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl font-bold text-white">F</span>
              </div>

              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gray-400 rounded-full opacity-40"></div>
            </div>

            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent mb-4">
                Fulcrum
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto lg:mx-0"></div>
            </div>
          </div>

          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-black">
                We Support Individuals From{" "}
                <span className="relative">
                  Under-Resourced Regions
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full"></div>
                </span>
              </h2>

              <h3 className="text-4xl lg:text-5xl font-bold text-gray-700">
                To Learn AI
              </h3>
            </div>

            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-8 py-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">
                Non-Profit Initiative
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to democratize AI education by providing
                world-class mentorship and resources to talented individuals who
                lack access to traditional learning opportunities. We believe
                that innovation knows no boundaries.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { number: "50+", label: "Countries Reached" },
                { number: "2K+", label: "Students Helped" },
                { number: "100%", label: "Free Access" },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:bg-white/80 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-black mb-1">
                    {metric.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🌍",
              title: "Global Reach",
              description:
                "Connecting learners worldwide with expert mentors and cutting-edge AI education.",
            },
            {
              icon: "🤝",
              title: "Equal Access",
              description:
                "Breaking down barriers to ensure everyone has the opportunity to learn and grow.",
            },
            {
              icon: "🚀",
              title: "Innovation",
              description:
                "Fostering the next generation of AI innovators and thought leaders.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
