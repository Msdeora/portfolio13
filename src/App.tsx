import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, Download, Code, Palette, Zap, Users, MapPin, Clock, CheckCircle, Award, GraduationCap, Briefcase, Heart, Camera, Music, BookOpen, MessageSquare, Star, Eye, EyeOff, Globe, Calendar, User, Target, Coffee, Lightbulb } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isOnline, setIsOnline] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const typingTexts = [
    "AI & ML Enthusiast",
    "Full Stack Developer", 
    "Problem Solver",
    "Tech Explorer"
  ];

  // Cursor animation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Typing animation
  useEffect(() => {
    if (isLoading) return;
    
    const currentFullText = typingTexts[textIndex];
    
    if (charIndex < currentFullText.length) {
      const timer = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCharIndex(0);
        setCurrentText('');
        setTextIndex((textIndex + 1) % typingTexts.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [charIndex, textIndex, isLoading]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Python', level: 85, color: 'from-yellow-400 to-yellow-600', icon: '🐍' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-300 to-yellow-500', icon: '⚡' },
    { name: 'HTML/CSS', level: 90, color: 'from-orange-400 to-red-500', icon: '🎨' },
    { name: 'Machine Learning', level: 75, color: 'from-purple-400 to-purple-600', icon: '🤖' },
    { name: 'Git', level: 70, color: 'from-gray-400 to-gray-600', icon: '📚' },
    { name: 'VS Code', level: 85, color: 'from-blue-400 to-blue-600', icon: '💻' },
  ];

  const projects = [
    {
      title: 'Live Face Swap',
      description: 'Real-time face swap web app built with Streamlit and computer vision.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Streamlit', 'OpenCV'],
      github: 'https://github.com/Msdeora/PythonTasks-with-Streamlit-webapps/blob/main/LiveFaceSwap.py'
    },
    {
      title: 'WhatsApp Message Automation with PyWhatKit',
      description: 'Automated WhatsApp messaging system using Python and pywhatkit library for sending messages programmatically.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Jupyter Notebook', 'PyWhatKit', 'WhatsApp API'],
      github: 'https://github.com/Msdeora/PythonTasks/blob/main/Whatsappmessagepyehatkit.ipynb'
    },
    {
      title: 'Twilio Call System',
      description: 'Python-based phone call automation system using Twilio API for making automated phone calls.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Jupyter Notebook', 'Twilio API', 'Phone Calls'],
      github: 'https://github.com/Msdeora/PythonTasks/blob/main/Calltwilio.ipynb'
    },
    {
      title: 'Twilio SMS Messaging',
      description: 'Automated SMS messaging system built with Python and Twilio for sending text messages programmatically.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Jupyter Notebook', 'Twilio API', 'SMS'],
      github: 'https://github.com/Msdeora/PythonTasks/blob/main/Messagetwilio.ipynb'
    },
    {
      title: 'Gmail Automation with Python',
      description: 'Python script for automating Gmail operations including sending emails and managing email functionality.',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Jupyter Notebook', 'Gmail API', 'Email Automation'],
      github: 'https://github.com/Msdeora/PythonTasks/blob/main/Gmail%20using%20python.ipynb'
    },
    {
      title: 'Anonymous Gmail with Masked Email',
      description: 'Advanced Gmail automation system using masked/anonymous email addresses for privacy-focused communication.',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Jupyter Notebook', 'Gmail API', 'Privacy Tools'],
      github: 'https://github.com/Msdeora/PythonTasks/blob/main/Gmail%20using%20masked%20email%28anonymus%29.ipynb'
    },
    {
      title: 'Google Search Automation',
      description: 'Python-based Google search automation tool for performing automated web searches and data extraction.',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Jupyter Notebook', 'Web Automation', 'Search API'],
      github: 'https://github.com/Msdeora/PythonTasks/blob/main/Google%20Seacrh%20using%20python.ipynb'
    },
    {
      title: 'Instagram Post Automation',
      description: 'Automated Instagram posting system using Python for managing and scheduling social media content.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Jupyter Notebook', 'Instagram API', 'Social Media'],
      github: 'https://github.com/Msdeora/PythonTasks/blob/main/Instapost.ipynb'
    },
    {
      title: 'Web Scraping Project',
      description: 'Comprehensive web scraping solution using Python for extracting data from websites and online sources.',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Jupyter Notebook', 'BeautifulSoup', 'Web Scraping'],
      github: 'https://github.com/Msdeora/PythonTasks/blob/main/web%20scrapping.ipynb'
    },
    {
      title: 'System RAM Monitoring',
      description: 'Python tool for monitoring and reading system RAM usage and performance metrics.',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Jupyter Notebook', 'System Monitoring', 'RAM Analysis'],
      github: 'https://github.com/Msdeora/PythonTasks/blob/main/Read%20the%20ram.ipynb'
    },
    {
      title: 'Advanced Twilio Call System',
      description: 'Enhanced phone call automation with fake number support using Twilio API and Python.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Jupyter Notebook', 'Twilio API', 'Caller ID'],
      github: 'https://github.com/Msdeora/PythonTasks/blob/main/Callbytwilio%28Byfakenumber%29.ipynb'
    },
    {
      title: 'Finger Detection with OpenCV',
      description: 'Real-time finger detection using OpenCV and Python, leveraging contour analysis and hand landmarks.',
      image: 'https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Jupyter Notebook', 'OpenCV', 'Computer Vision'],
      github: 'https://github.com/Msdeora/PythonTasks'
    },
    {
      title: 'Menu-Based Linux Command Runner',
      description: 'Interactive Python application featuring Linux command execution, real-time weather data, and QR code generation with a user-friendly menu interface.',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Linux Commands', 'Weather API', 'QR Code Generation', 'Menu Interface'],
      github: 'https://github.com/Msdeora/PythonTasks'
    }
  ];

  const certificates = [
    {
      title: 'Sigma DSA with Java',
      issuer: 'Maheshwar Certificate',
      year: '2024',
      description: 'Data Structures and Algorithms certification with Java programming',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
      downloadUrl: '/certificates/Maheshwar Certificate (Sigma)(DSA withJava).pdf'
    },
    {
      title: 'Leadership Qualities Workshop',
      issuer: 'Professional Development',
      year: '2024',
      description: 'Workshop on developing leadership skills and team management',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      downloadUrl: '/certificates/Workshop_Certificate(Leader qualities).pdf'
    },
    {
      title: 'Machine Learning Training',
      issuer: 'Tech Institute',
      year: '2024',
      description: 'Comprehensive training in machine learning algorithms and applications',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      downloadUrl: '/certificates/Training - Certificate(Machine Learning).pdf'
    },
    {
      title: 'Microsoft Power BI Dashboard',
      issuer: 'Microsoft',
      year: '2024',
      description: 'Creating interactive dashboards and data visualization using Power BI',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      downloadUrl: '/certificates/Workshop_Certificate(Dashboards using Microsoft Power BI).pdf'
    },
    {
      title: 'Cloud with AI Workshop',
      issuer: 'Workshop Organizer',
      year: '2024',
      description: 'Full day workshop on Cloud with AI technologies.',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=400',
      downloadUrl: '/certificates/Full Day workshop on Cloud with AI.pdf'
    }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-8 animate-bounce">
            <div className="text-8xl mb-4">🙏</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              नमस्कार
            </div>
          </div>
          <div className="text-lg text-gray-600 mb-4">Welcome to Maheshwar's Portfolio</div>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{ 
          left: cursorPosition.x - 12, 
          top: cursorPosition.y - 12,
          transform: 'scale(1)'
        }}
      />

      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-200/20 to-yellow-200/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-orange-100 z-40 border-b border-orange-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-4xl font-bold">
              🧑‍💻
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "about-video", "education", "skills", "projects", "certificates", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 px-4 py-2 rounded-full ${
                    activeSection === item
                      ? 'text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {item === 'about-video' ? 'TMAY' : item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-orange-100 border-t border-orange-200">
            <div className="px-4 py-2 space-y-2">
              {["home", "about", "about-video", "education", "skills", "projects", "certificates", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 px-4 capitalize text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  {item === 'about-video' ? 'TMAY' : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center relative z-10">
            <div className="mb-8">
              <div className="w-56 h-56 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 p-2 animate-pulse">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl relative">
                  <img 
                    src="/IMG-20240828-WA0021.jpeg" 
                    alt="Maheshwar Singh Deora"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-orange-500/20 to-transparent"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              नमस्ते, I'm{' '}
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Maheshwar Singh Deora
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-gray-700 mb-4 h-12 flex items-center justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-semibold">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              To get more experience and knowledge of using different technologies and practice them.
              Passionate about AI, ML, and creating innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </button>
              <a 
                href="#" 
                download="Maheshwar_Singh_Deora_Resume.pdf"
                className="px-8 py-4 border-2 border-orange-300 text-orange-700 rounded-full font-semibold hover:border-orange-500 hover:text-orange-800 hover:bg-orange-50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Msdeora" className="text-gray-600 hover:text-orange-600 transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-orange-50">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/maheshwar-singh-deora-9a9136340/" className="text-gray-600 hover:text-orange-600 transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-orange-50">
                <Linkedin size={28} />
              </a>
              <a href="mailto:maheshwarsinghdeora@gmail.com" className="text-gray-600 hover:text-orange-600 transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-orange-50">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate AI & ML student with strong fundamentals in Python and problem-solving
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/dancer.png"
                alt="Indian classical dancer"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-2xl shadow-xl">
                🚀
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-100">
                <div className="flex items-center mb-4">
                  <Target className="text-orange-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Objective</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  A passionate AI & ML student with strong fundamentals in Python and problem-solving, 
                  seeking to build impactful tech solutions that can make a difference in people's lives.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-100">
                <div className="flex items-center mb-4">
                  <Heart className="text-red-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['🎵 Music', '📸 Photography', '💻 Coding', '📚 Reading', '🎨 Design', '🧘 Meditation'].map((interest, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">8.0</div>
                  <div className="text-gray-600 text-sm">Current CGPA</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-red-100 to-yellow-100 rounded-xl border border-red-200">
                  <div className="text-3xl font-bold text-red-600 mb-2">2026</div>
                  <div className="text-gray-600 text-sm">Graduation Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tell Me About Yourself Section */}
      <section id="about-video" className="py-20 bg-white/60 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Tell Me About Yourself</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">A short introduction video about me, my journey, and my passion for technology.</p>
          </div>
          <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-lg mx-auto flex justify-center">
            <video
              src="/VID-20250607-WA0003.mp4"
              controls
              className="w-full h-64 md:h-96 rounded-xl bg-black"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey and achievements
            </p>
          </div>

          <div className="space-y-8">
            {/* Current Education */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-orange-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full text-white">
                  <GraduationCap size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">B.Tech in AI & ML</h3>
                  <p className="text-lg text-orange-600 font-semibold mb-2">JIET Jodhpur</p>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span className="flex items-center"><Calendar className="mr-2" size={16} />2022 - 2026</span>
                    <span className="flex items-center"><Star className="mr-2" size={16} />CGPA: 8.0</span>
                  </div>
                  <p className="text-gray-700 mt-3">Currently pursuing Bachelor's in Artificial Intelligence and Machine Learning with focus on practical applications and research.</p>
                </div>
              </div>
            </div>

            {/* 12th Grade */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-orange-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-gradient-to-r from-red-400 to-yellow-500 rounded-full text-white">
                  <BookOpen size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">12th Grade (Senior Secondary)</h3>
                  <p className="text-lg text-red-600 font-semibold mb-2">Vivekanand Sr. Sec. Public School, BJS Colony Jodhpur</p>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span className="flex items-center"><Calendar className="mr-2" size={16} />2021</span>
                    <span className="flex items-center"><Star className="mr-2" size={16} />90.20%</span>
                    <span className="flex items-center"><Award className="mr-2" size={16} />CBSE Board</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 10th Grade */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-orange-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white">
                  <BookOpen size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">10th Grade (Secondary)</h3>
                  <p className="text-lg text-yellow-600 font-semibold mb-2">Central Academy Jodhpur Cantt</p>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span className="flex items-center"><Calendar className="mr-2" size={16} />2018</span>
                    <span className="flex items-center"><Star className="mr-2" size={16} />80.20%</span>
                    <span className="flex items-center"><Award className="mr-2" size={16} />CBSE Board</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Code className="mr-3 text-orange-500" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-700 flex items-center">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-gray-500 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out transform origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Lightbulb className="mr-3 text-orange-500" />
                Soft Skills & Tools
              </h3>
              <div className="space-y-6">
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                      <Users className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Leadership</h4>
                      <p className="text-gray-600">Team management and project coordination skills</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-100 to-yellow-100 rounded-lg">
                      <Palette className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Design Tools</h4>
                      <p className="text-gray-600">Figma, Canva for UI/UX design and graphics</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg">
                      <Zap className="text-yellow-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Problem Solving</h4>
                      <p className="text-gray-600">Analytical thinking and innovative solution development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-red-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={() => {
                const container = document.getElementById('projects-container');
                if (container) {
                  container.scrollBy({ left: -400, behavior: 'smooth' });
                }
              }}
              className="absolute left-[-2.5rem] top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-orange-200 hover:bg-orange-50 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => {
                const container = document.getElementById('projects-container');
                if (container) {
                  container.scrollBy({ left: 400, behavior: 'smooth' });
                }
              }}
              className="absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-orange-200 hover:bg-orange-50 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Projects Container */}
            <div 
              id="projects-container"
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-orange-200 transform hover:-translate-y-2 flex-shrink-0" style={{ minWidth: '350px', maxWidth: '400px' }}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors font-medium hover:scale-105 transform transition-transform duration-200"
                      >
                        <Github size={18} />
                        <span>View Code on GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-orange-300 opacity-50 cursor-pointer hover:opacity-100 transition-opacity duration-300"
                  onClick={() => {
                    const container = document.getElementById('projects-container');
                    if (container) {
                      container.scrollTo({ left: index * 400, behavior: 'smooth' });
                    }
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Certificates & Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional certifications and learning milestones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-orange-200 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {cert.year}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-orange-600 font-semibold text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  
                  <div className="mt-4 flex justify-center">
                    <a
                      href={cert.downloadUrl}
                      download
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
                    >
                      <Download size={16} className="mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-2xl border border-orange-200">
              <Award className="mx-auto text-orange-500 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Continuous Learning</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Always eager to learn new technologies and improve my skills. Currently exploring advanced AI/ML concepts and cloud technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to collaborate? Let's discuss opportunities and projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {/* Availability Status */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className={`w-4 h-4 rounded-full mr-3 ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                  <h3 className="font-semibold text-gray-900">Availability Status</h3>
                  <button 
                    onClick={() => setIsOnline(!isOnline)}
                    className="ml-auto p-1 rounded-full hover:bg-orange-100 transition-colors"
                  >
                    {isOnline ? <Eye size={20} className="text-green-500" /> : <EyeOff size={20} className="text-gray-400" />}
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Online Status:</span>
                    <span className={`font-semibold ${isOnline ? 'text-green-600' : 'text-gray-500'}`}>
                      {isOnline ? 'Available' : 'Offline'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Work Location:</span>
                    <span className="font-semibold text-orange-600">All India</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-semibold text-blue-600">Within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full">
                    <Mail className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">maheshwarsinghdeora@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-red-100 to-yellow-100 rounded-full">
                    <Phone className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 8619482042</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full">
                    <MessageSquare className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+91 7597590166</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Social</h3>
                    <p className="text-gray-600">Connect on LinkedIn & GitHub</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-orange-200">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white/70 backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white/70 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white/70 backdrop-blur-sm"
                    placeholder="Project discussion, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none bg-white/70 backdrop-blur-sm"
                    placeholder="Tell me about your project or how we can collaborate..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
                >
                  Send Message 🚀
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4" style={{background: 'linear-gradient(to right, #fb923c, #f43f5e)', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent', paddingTop: '0.25em'}}>
              महेश्वर सिंह देवड़ा
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              Building the future with AI & ML, one innovation at a time. 🚀
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/Msdeora" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-gray-800">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/maheshwar-singh-deora-9a9136340/" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-gray-800">
                <Linkedin size={28} />
              </a>
              <a href="mailto:maheshwarsinghdeora@gmail.com" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-gray-800">
                <Mail size={28} />
              </a>
              <a href="tel:+918619482042" className="text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-gray-800">
                <Phone size={28} />
              </a>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 Maheshwar Singh Deora. Made with ❤️ in India. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                "सरस्वती माँ की कृपा से ज्ञान की प्राप्ति हो" 🙏
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;