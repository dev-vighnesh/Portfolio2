const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 10, suffix: "+", label: "Technical Skills Mastered" },
  { value: 1, suffix: "+", label: "Hackathons Participated" },
  { value: 5, suffix: "+", label: "Read-World Projects" },
  { value: 100, suffix: "%", label: "Learning Commitment" },
];

const logoIconsList = [
  { text: "Still learning. Still growing. Still coding." },
  { text: "Code is my canvas; logic is my brush." },
  { text: "Fuelled by caffeine and curiosity." },
  { text: "Every pro was once a beginner who never gave up." },
  { text: "From zero to one—my journey in tech has just begun." },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Java Developer",
    modelPath: "/models/java.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    //review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/ai primer.jpg",
    logoPath: "/images/info.png",
    title: "🧑‍💻 Infosys Springboard",
    //date: "January 2023 - Present",
    responsibilities: [
      "Completed AI Stack courses on Infosys Springboard covering AI, ML, and DL fundamentals.",
      "Gained hands-on experience with generative models, computer vision, and neural networks.",
      "Learned Agile Scrum practices and improved professional communication skills.",
    ],
  },
  {
    //review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/isro copy.png",
    logoPath: "/images/isro3.png",
    title: "🔭 ISRO",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Completed ISRO’s course on AI/ML applications in geospatial data analysis.",
      "Learned techniques for processing and analyzing satellite imagery and remote sensing data.",
      "Applied machine learning models to classify ,predict, and extract patterns from geospatial datasets.",
    ],
  },
  {
    //review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/sih.jpg",
    logoPath: "/images/sihh.png",
    title: "💡 Smart India Hackathon 2024 – Participant",
    date: "March 2019 - May 2020",
    responsibilities: [
    "Participated in a national-level hackathon, proposing tech solutions to real-world problems.",
    "Collaborated with a team on ideation, prototyping, and presentation.",
    "Enhanced skills in problem-solving and teamwork under tight deadlines.",
    ],
  },
  {
    imgPath: "/images/intel.jpg",
    logoPath: "/images/intel.png" ,
    title:   "🤖 Intel®  Unnati" ,
    responsibilities : [ 
      "Completed hands-on sessions on machine learning fundamentals and Intel®-powered AI tools.",
      "Built and trained basic ML models using real-world datasets.",
      "Gained insights into AI applications across industries and Intel’s role in enabling them."
    ],
  },

  {
    imgPath: "/images/wadhwani.jpg",
    logoPath: "/images/wadhwani copy.jpg" ,
    title:   "💼 Wadhwani JobReady Skills" ,
    responsibilities : [
        "Completed modules on workplace readiness, communication, and problem-solving.",
        "Developed soft skills essential for professional environments.",
        "Improved interview, teamwork, and time management capabilities.",
   ], 
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Anonymous",
    mentions: "— Teammate, Academic Project Group",
    review:
      "A dependable and focused teammate who contributed meaningfully to every phase of the project. Always ready to support others and bring clarity to complex tasks.",
    //imgPath: "/images/",
  },
  {
    name: "Anonymous",
    mentions: "— Teammate, SIH 2024 Team",
    review:
      "Working with Vighnesh during Smart India Hackathon 2024 was a great experience. He brought fresh ideas to the table, stayed focused under pressure, and contributed actively to our solution design and presentation.",
    //imgPath: "/images/",
  },
  {
    name: "Anonymous",
    mentions: "— Mentor, Intel® Unnati Program",
    review:
      "Showed strong enthusiasm for learning and a thoughtful approach to problem-solving during the Intel Unnati ML Workshop. Participation and performance were consistently above expectations.",
    //imgPath: "/images/client2.png",
  },
  
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
