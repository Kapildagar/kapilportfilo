// ResumeDownloadButton.jsx
import resume from "../assets/resume.pdf"

const Resumepage = () => {
  const resumePath =resume ;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl  mb-6 text-white">Download My Resume</h1>
      
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resumepage;
//className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"