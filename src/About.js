import React from 'react';

const AboutMe = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <img src="https://via.placeholder.com/150" alt="Profile picture of Varun Walwatkar" className="rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Varun Walwatkar</h2>
        <p className="text-gray-600 mb-6">Full Stack Developer | Tech Enthusiast</p>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://twitter.com/your_twitter_handle" className="text-gray-800 hover:text-blue-600" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/your_linkedin_profile" className="text-gray-800 hover:text-blue-600" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/your_github_username" className="text-gray-800 hover:text-blue-600" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </div>
        <p className="text-gray-700 mb-6">I'm passionate about coding, exploring new technologies, and building useful applications. With experience in frontend and backend development, I enjoy solving complex problems and collaborating with others to create innovative solutions.</p>
        <p className="text-gray-700">Feel free to connect with me on social media or check out my GitHub profile!</p>
      </div>
    </div>
  );
}

export default AboutMe;
