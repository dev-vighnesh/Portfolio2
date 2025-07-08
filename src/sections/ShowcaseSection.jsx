import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/public/images/smd.jpg" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Social Media Dashboard
              </h2>
              <p className="text-white-50 md:text-xl">
               Developed a responsive and interactive web application using HTML, CSS, and JavaScript, focusing on user experience and modern design principles.              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/han.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Hangman Game: Engineering Edition </h2>
              <p>Created an interactive Hangman game with an engineering theme using HTML, CSS, and JavaScript, incorporating subject-specific terms to make learning fun and engaging for students.</p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/senti.jpg" alt="YC Directory App" />
              </div>
              <h2>The Sentimental analysis Using Word2Vec and FNN</h2>
              <p>Implemented sentiment analysis using Word2Vec embeddings and a Feedforward Neural Network (FNN) to classify text data based on emotional tone, achieving meaningful insights from natural language inputs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
