import React, { useState, useEffect } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogContent, setNewBlogContent] = useState("");
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Neural Networks and the Human Brain: A Comparative Study",
      author: "Dr. Sarah Chen",
      date: "March 15, 2024",
      excerpt: "Exploring the parallels between artificial neural networks and biological neural circuits, revealing insights that could revolutionize both neuroscience and AI development.",
      content: "In this groundbreaking study, we examine how artificial neural networks mirror the complex architecture of the human brain. Our research reveals surprising similarities in information processing patterns, suggesting that nature's design principles can inform more efficient and robust AI systems. By analyzing fMRI data alongside deep learning model activations, we've identified key architectural features that enhance both biological and artificial intelligence..."
    },
    {
      id: 2,
      title: "Ethical Considerations in Brain-Inspired AI Development",
      author: "Prof. James Wilson",
      date: "February 28, 2024",
      excerpt: "As we draw closer to creating AI systems that mimic human cognition, we must address the ethical implications of such technology and establish guidelines for responsible innovation.",
      content: "The rapid advancement of brain-inspired AI raises profound ethical questions that demand immediate attention. As our models become increasingly sophisticated in mimicking human thought processes, we face challenges related to consciousness, autonomy, and the potential for unintended consequences. This paper outlines a framework for ethical development that prioritizes transparency, accountability, and human well-being at every stage of the research process..."
    },
    {
      id: 3,
      title: "The Future of Neuroprosthetics: Bridging Biology and Technology",
      author: "Dr. Maria Rodriguez",
      date: "January 10, 2024",
      excerpt: "Advancements in neuroprosthetic technology are creating unprecedented opportunities to restore function and enhance human capabilities through seamless integration of biological and artificial systems.",
      content: "Recent breakthroughs in neuroprosthetic interfaces have demonstrated remarkable success in restoring motor function to individuals with paralysis. Our latest research focuses on bidirectional communication between prosthetic devices and the nervous system, allowing not only for movement control but also for sensory feedback. This closed-loop system represents a significant step toward truly integrated human-machine interfaces that could transform rehabilitation medicine..."
    }
  ]);

  const founders = [
    {
      name: "Alexandra Thompson",
      role: "Founder & CEO",
      bio: "Alexandra is a neuroscience PhD candidate at Stanford University with a background in computational biology. Her research focuses on neural network plasticity and its applications in machine learning. She founded Glial Spark to bridge the gap between neuroscience research and practical AI applications.",
      image: "https://placehold.co/300x300/6366f1/ffffff?text=AT"
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Science Officer",
      bio: "With over 15 years of experience in cognitive neuroscience, Dr. Chen has published extensively on brain-computer interfaces and neural coding. He brings his expertise in experimental design and data analysis to guide Glial Spark's research direction.",
      image: "https://placehold.co/300x300/8b5cf6/ffffff?text=MC"
    },
    {
      name: "Sophia Kim",
      role: "Technology Director",
      bio: "A computer science graduate from MIT, Sophia specializes in deep learning architectures and neural network optimization. She leads the development of Glial Spark's AI platforms and ensures our technological implementations align with neuroscience principles.",
      image: "https://placehold.co/300x300/06b6d4/ffffff?text=SK"
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real application, this would validate credentials against a backend
    if (email && password) {
      setIsLoggedIn(true);
      setCurrentPage("publications");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setNewBlogTitle("");
    setNewBlogContent("");
  };

  const handleSubmitBlog = (e) => {
    e.preventDefault();
    if (newBlogTitle && newBlogContent) {
      const newBlog = {
        id: blogs.length + 1,
        title: newBlogTitle,
        author: "Contributor",
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        excerpt: newBlogContent.substring(0, 150) + "...",
        content: newBlogContent
      };
      setBlogs([newBlog, ...blogs]);
      setNewBlogTitle("");
      setNewBlogContent("");
    }
  };

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <header className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Glial<span className="text-purple-400">Spark</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A student-led initiative on a mission to decode the human brain's secrets 
            to revolutionize AI. We explore the connection between neuroscience and 
            artificial intelligence to inspire innovation and responsible development.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Neuroscience Research</h3>
            <p className="text-gray-300 leading-relaxed">
              Cutting-edge research into brain function, neural networks, and cognitive processes that inform our AI development.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Innovation</h3>
            <p className="text-gray-300 leading-relaxed">
              Developing next-generation artificial intelligence systems inspired by the efficiency and adaptability of the human brain.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Community Building</h3>
            <p className="text-gray-300 leading-relaxed">
              Fostering a global community of students, researchers, and innovators passionate about the intersection of neuroscience and AI.
            </p>
          </div>
        </div>

        <div className="text-center mt-20">
          <button
            onClick={() => setCurrentPage("mission")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
          >
            Learn About Our Mission
          </button>
        </div>
      </div>
    </div>
  );

  const MissionPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setCurrentPage("home")}
            className="flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </button>

          <h1 className="text-5xl font-bold text-white mb-8 text-center">Our Mission</h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
            <p className="text-xl text-gray-300 leading-relaxed">
              At Glial Spark, we believe that the key to creating truly intelligent machines lies in understanding the most sophisticated intelligence system in existence: the human brain. Our mission is to bridge the gap between neuroscience and artificial intelligence, creating a synergistic relationship where discoveries in one field accelerate progress in the other.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img src="https://placehold.co/600x400/6366f1/ffffff?text=Brain+Research" alt="Neuroscience Research" className="rounded-2xl w-full shadow-2xl" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-4">Decoding the Brain</h2>
                <p className="text-gray-300 leading-relaxed">
                  We conduct cutting-edge research into neural networks, cognitive processes, and brain function using advanced imaging techniques and computational modeling. By mapping the intricate connections and signaling patterns within the brain, we uncover fundamental principles of intelligence that can be applied to artificial systems.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <img src="https://placehold.co/600x400/8b5cf6/ffffff?text=AI+Development" alt="AI Development" className="rounded-2xl w-full shadow-2xl" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-4">Revolutionizing AI</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our AI systems are designed to emulate the efficiency, adaptability, and learning capabilities of biological brains. By incorporating principles of neural plasticity, energy efficiency, and parallel processing, we're creating artificial intelligence that learns faster, requires less data, and operates with greater flexibility than traditional approaches.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img src="https://placehold.co/600x400/06b6d4/ffffff?text=Community" alt="Community" className="rounded-2xl w-full shadow-2xl" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-4">Building the Future</h2>
                <p className="text-gray-300 leading-relaxed">
                  We foster a global community of students, researchers, and innovators who share our passion for brain-inspired technology. Through workshops, conferences, and collaborative projects, we're cultivating the next generation of scientists and engineers who will continue pushing the boundaries of what's possible at the intersection of biology and technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FoundersPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setCurrentPage("home")}
            className="flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </button>

          <h1 className="text-5xl font-bold text-white mb-4 text-center">Meet Our Founders</h1>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            The visionary leaders behind Glial Spark, combining expertise in neuroscience, artificial intelligence, and technology innovation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <img src={founder.image} alt={founder.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500" />
                <h3 className="text-2xl font-bold text-white text-center mb-2">{founder.name}</h3>
                <p className="text-purple-400 text-center mb-4 font-medium">{founder.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h2>
            <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Glial Spark was born from a late-night conversation between neuroscience and computer science students at Stanford University. 
              Frustrated by the siloed nature of academic research, they envisioned an organization that would break down barriers between 
              disciplines and create a space where brain science and artificial intelligence could evolve together. What started as a 
              small study group has grown into a global movement, with chapters at universities around the world and partnerships with 
              leading research institutions. Today, we continue to uphold our founding principle: that the most profound innovations occur 
              at the intersection of seemingly disparate fields.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const LoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => setCurrentPage("home")}
            className="flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </button>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Welcome to Glial Spark</h1>
              <p className="text-gray-300">Sign in to access exclusive content and contribute to our research community</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account? Contact your administrator for access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PublicationsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <button
                onClick={() => setCurrentPage("home")}
                className="flex items-center text-purple-400 hover:text-purple-300 mb-4 sm:mb-0 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Home
              </button>
            </div>
            
            {isLoggedIn && (
              <button
                onClick={() => setCurrentPage("write")}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
              >
                Write New Blog
              </button>
            )}
          </div>

          <h1 className="text-5xl font-bold text-white mb-4">Publications</h1>
          <p className="text-xl text-gray-300 mb-12">Latest research, insights, and thought leadership from the Glial Spark community</p>

          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-bold text-white mb-2 md:mb-0">{blog.title}</h2>
                <div className="text-sm text-purple-400">
                  By {blog.author} • {blog.date}
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{blog.excerpt}</p>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300">
                Read more →
              </button>
            </article>
          ))}

          {blogs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No publications yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const WriteBlogPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setCurrentPage("publications")}
              className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Publications
            </button>
            
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300 text-sm transition-colors duration-300"
            >
              Logout
            </button>
          </div>

          <h1 className="text-5xl font-bold text-white mb-8">Write a New Blog</h1>
          
          <form onSubmit={handleSubmitBlog} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                  Blog Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={newBlogTitle}
                  onChange={(e) => setNewBlogTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter a compelling title for your blog"
                  required
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
                  Blog Content
                </label>
                <textarea
                  id="content"
                  value={newBlogContent}
                  onChange={(e) => setNewBlogContent(e.target.value)}
                  rows="12"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Write your blog post here. Share your insights on neuroscience, AI, or the intersection of these fields..."
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Publish Blog
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "mission":
        return <MissionPage />;
      case "founders":
        return <FoundersPage />;
      case "login":
        return <LoginPage />;
      case "publications":
        return <PublicationsPage />;
      case "write":
        return <WriteBlogPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentPage("home")}
                className="text-2xl font-bold text-white"
              >
                Glial<span className="text-purple-400">Spark</span>
              </button>
            </div>

            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => setCurrentPage("home")}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  currentPage === "home" ? "text-purple-400" : "text-gray-300 hover:text-white"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage("mission")}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  currentPage === "mission" ? "text-purple-400" : "text-gray-300 hover:text-white"
                }`}
              >
                Mission
              </button>
              <button
                onClick={() => setCurrentPage("founders")}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  currentPage === "founders" ? "text-purple-400" : "text-gray-300 hover:text-white"
                }`}
              >
                Founders
              </button>
              <button
                onClick={() => setCurrentPage("publications")}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  currentPage === "publications" ? "text-purple-400" : "text-gray-300 hover:text-white"
                }`}
              >
                Publications
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <span className="text-sm text-gray-300 hidden md:block">
                    Welcome back!
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setCurrentPage("login")}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Glial<span className="text-purple-400">Spark</span>
                </h2>
                <p className="text-gray-400">Decoding the brain to revolutionize AI</p>
              </div>
              
              <div className="flex space-x-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Research</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
              <p>&copy; 2024 Glial Spark. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;