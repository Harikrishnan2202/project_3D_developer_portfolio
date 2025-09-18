import React from "react";

const Resume = () => {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-purple-600">
        My Resume
      </h2>

      <div className="flex flex-col items-center space-y-8">
        {/* Resume Preview */}
        <iframe
          src="/HARIKRISHNAN_S_Resume.pdf"
          width="100%"
          height="700px"
          className="rounded-xl shadow-2xl border border-gray-300"
          title="HariKrishnan Resume"
        ></iframe>

        {/* Download Button */}
        <a
          href="/HARIKRISHNAN_S_Resume.pdf"
          download
          className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-purple-700 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
