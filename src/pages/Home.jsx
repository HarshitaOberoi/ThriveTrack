import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Bot, ArrowRight, Target, Brain } from "lucide-react";
import { useLoading } from "../context/LoadingProvider";
import manimage from '../assets/man-4365597_1280.png';
import'../../src/index.css'

const Home = () => {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();
  const containerRef = useRef(null);

  const handleStartInterview = () => {
    startLoading();
    navigate("/login");
    stopLoading();
  };

  useEffect(() => {
    const tl = gsap.timeline();
    const container = containerRef.current;

    // Elements for animation
    const hero = container.querySelector(".hero-section");
    const heading = container.querySelector(".main-heading");
    const tagline = container.querySelector(".tagline");
    const button = container.querySelector(".cta-button");
    const features = container.querySelectorAll(".feature-card");

    // Main animation sequence
    tl.fromTo(
      hero,
      { opacity: 0, x: -100 },
      { duration: 1, opacity: 1, x: 0, ease: "power3.out" }
    )
      .fromTo(
        heading,
        { opacity: 0, x: -50 },
        { duration: 0.8, opacity: 1, x: 0, ease: "back.out(1.7)" },
        "-=0.5"
      )
      .fromTo(
        tagline,
        { opacity: 0, x: -30 },
        { duration: 0.8, opacity: 1, x: 0, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        button,
        { opacity: 0, scale: 0.8 },
        { duration: 0.5, opacity: 1, scale: 1, ease: "elastic.out(1, 0.7)" },
        "-=0.2"
      )
      .fromTo(
        features,
        { opacity: 0, x: 100 },
        { duration: 0.6, opacity: 1, x: 0, stagger: 0.2, ease: "power2.out" },
        "-=0.3"
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-y-hidden bg-[rgb(255,180,51)] text-black"
    >
      {/* Hero Section */}
      <div className="hero-section container mx-auto px-6 pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4 lg:pr-12">
            <h1 className="main-heading text-6xl mb-8 md:mb-14 md:text-7xl  font-bold bg-clip-text text-transparent bg-[#FBF8EF]">
            ThriveTrack            </h1>
            <p className="tagline text-xl md:text-2xl md:mb-14 font-Lato text-[#FBF8EF]">
              Master your interview skills with our AI-powered preparation
              platform. Get real-time feedback and comprehensive analysis to
              land your dream job.
            </p>
            <button
              onClick={handleStartInterview}
              className="cta-button group rounded-4xl relative inline-flex items-center px-8 py-4 text-lg font-bold text-black bg-[#80CBC4] hover:bg-[#B4EBE6] transition-all duration-300"
            >
              <span className="mr-2">Start Interview</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <img src={manimage} alt="Description" class="w-64 h-auto mb-1 fixed left-80 bottom-3  opacity-65 object-cover " />

          </div>

          <div className="space-y-20">
            <div className="feature-card bg-[#B4EBE6] p-6 rounded-xl  backdrop-blur-sm border transform hover:scale-105 transition-transform">
              <div className="flex gap-3">
                <Bot className="w-6 h-6 text-[#1B4D3E] mb-4" />
                <h3 className="text-xl font-bold mb-2">AI-Powered Analysis</h3>
              </div>
              <p className="text-gray-600 font-Lato">
                Get detailed feedback on your interview performance with
                advanced AI analysis.
              </p>
            </div>
            <div className="feature-card bg-[#B4EBE6] p-6 rounded-xl  backdrop-blur-sm border  transform hover:scale-105 transition-transform">
              <div className="flex gap-3">
                <Target className="w-6 h-6 text-[#F0A04B] mb-4" />
                <h3 className="text-xl font-bold mb-2">Real-time Feedback</h3>
              </div>
              <p className="text-gray-600 font-Lato">
                Receive instant feedback on your responses and areas for
                improvement.
              </p>
            </div>
            <div className="feature-card  bg-[#B4EBE6] p-6 rounded-xl  backdrop-blur-sm border border-gray-700 transform hover:scale-105 transition-transform">
              <div className="flex gap-3">
                <Brain className="w-6 h-6 text-[#FBF8EF] mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Personalized Practice
                </h3>
              </div>
              <p className="text-gray-600 font-Lato">
                Practice with questions tailored to your industry and experience
                level.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#B4EBE6] border-t absolute bottom-0 left-0 w-full">
        <div className="container mx-auto px-6 py-4">
          <p className="text-gray-600 text-center font-Lato text-sm">
            © 2025 ThriveTrack. Created by Harshita Oberoi
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
