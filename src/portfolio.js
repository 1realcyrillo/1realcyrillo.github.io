/* Cyril Dwamena Osei Portfolio – built from DeveloperFolio template */

// To change global colors → edit  src/_globalColor.scss

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// ---------------- Splash Screen ----------------
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// ---------------- Greeting Section ----------------
const illustration = { animated: true };

const greeting = {
  username: "Cyril Dwamena Osei",
  title: "Electrical & Computer Engineering Student at Texas Tech University",
  subTitle: emoji(
    "As the world increasingly runs on software, I believe true innovation happens when software and hardware merge seamlessly. With a passion for electronics, embedded systems, and robotics, I’m focused on developing skills at the intersection of firmware, AI/ML, and hardware integration.\n\nAt Texas Tech University, I’ve gained hands-on experience with microcontrollers, PCB design, robotics projects, and system integration. My goal is to contribute to technologies that power autonomous systems, smart devices, and advanced communications.\n\nI’m actively seeking internship opportunities in embedded systems, firmware development, robotics, and communications engineering — connecting innovation with impact."
  ),
  resumeLink: "/static/resume/Cyril_Dwamena_Resume.pdf",
  displayGreeting: true
};


// ---------------- Social Media Links ----------------
const socialMediaLinks = {
  github: "https://github.com/1realcyrillo",
  linkedin: "https://www.linkedin.com/in/cyril-dwamena-osei-b6a2262a1/",
  gmail: "cdwamena@ttu.edu",
  display: true
};

// ---------------- Skills Section ----------------
const skillsSection = {
  title: "What I Do",
  subTitle: "Embedded Systems • Robotics • Firmware • Electronics",
  skills: [
    emoji("⚙️ Microcontrollers: MSP430, Arduino, Raspberry Pi, STM32"),
    emoji("🧰 C, C++, Python, MATLAB, and Verilog for digital logic simulation"),
    emoji("🤖 Design & integration of sensors, H-bridges, and PWM motor control"),
    emoji("🧪 Circuit design & analysis with KiCad, oscilloscopes, and bench tools")
  ],
  softwareSkills: [
    { skillName: "C", fontAwesomeClassname: "fas fa-code" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "MATLAB", fontAwesomeClassname: "fas fa-square-root-alt" },
    { skillName: "Verilog", fontAwesomeClassname: "fas fa-microchip" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "KiCad", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Figma", fontAwesomeClassname: "fab fa-figma" }
  ],
  display: true
};

// ---------------- Education ----------------
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Texas Tech University",
      logo: require("./assets/images/ttu.png"),
      subHeader: "B.S. in Electrical & Computer Engineering",
      duration: "2023 – Present",
      desc: "Focused on Signals, Electronics, Microcontrollers, Embedded Systems, and Communications Engineering.",
      descBullets: [
        "GPA = 3.8",
        "IEEE Region 5 Student Leader",
        "Student Supervisor at IT Help Central"
      ]
    }
  ]
};

// ---------------- Tech Stack Bars ----------------
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Embedded Systems & Microcontrollers", progressPercentage: "90%" },
    { Stack: "Electronics Circuit Design & PCB Layout", progressPercentage: "85%" },
    { Stack: "C++ / Embedded C / Python Programming", progressPercentage: "85%" },
    { Stack: "Sensors, Automation and Control", progressPercentage: "80%" },
    { Stack: "Computational Modelling", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};


// ---------------- Work Experience ----------------
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Student Supervisor (IT Help Central)",
      company: "Texas Tech University",
      companylogo: require("./assets/images/ttu.png"),
      date: "Jan 2025 – Present",
      desc: "Lead a technical support team of student analysts to troubleshoot, document, and resolve software, hardware, and network-related issues across the university campus."
    }
  ]
};

// ---------------- Open Source ----------------
const openSource = { showGithubProfile: "true", display: true };

// ---------------- Big Projects ----------------
const bigProjects = {
  title: "Projects",
  subtitle: "Some of the systems and robots I’ve designed ⚙️",
  projects: [
    {
      image: require("./assets/images/linefollower.png"),
      projectName: "Autonomous Line-Following Robot",
      projectDesc:
        "MSP430-based robot using IR sensors for path detection and PWM control for speed adjustment. Developed a smooth feedback control for line tracking.",
      footerLink: [
        { name: "Code", url: "https://github.com/1realcyrillo/LINE-FOLLOWING-ROBOT" },
        { name: "Demo Video", url: "https://youtube.com/shorts/bAPy7Zf9reE" }
      ]
    },
    {
      image: require("./assets/images/colorsorter.png"),
      projectName: "Automated Color Sorting System",
      projectDesc:
        "Arduino-controlled system using a color sensor and servo motor to sort colored objects (like Skittles) into different bins automatically.",
      footerLink: [
        { name: "Code", url: "https://github.com/cyril-dwamena/color-sorter" },
        { name: "Demo Video", url: "https://youtu.be/cDcGE8OheuI" }
      ]
    },
    {
      image: require("./assets/images/thermostat.png"),
      projectName: "Temperature-Controlled Thermostat",
      projectDesc:
        "Developed a thermostat using arduino with a temperature sensor, servo motor, and RGB LED to indicate thermal states. Implemented threshold-based servo actuation.",
      footerLink: [
        { name: "Code", url: "https://github.com/1realcyrillo/Temperature-controlled-thermostat" }
      ]
    },
    {
      image: require("./assets/images/network.png"),
      projectName: "Network Performance Monitoring System",
      projectDesc:
        "Built a Python-based real-time data pipeline that tracks network latency and visualizes performance metrics. Integrated with CSV logging and live dashboard.",
      footerLink: [
        { name: "Demo Video", url: "https://youtu.be/dSrBphTWt3Y" }
      ]
    }
  ],
  display: true
};

// ---------------- Achievements ----------------
// ---------------- Achievements & Honors ----------------
const achievementSection = {
  title: "Achievements & Honors 🏆",
  subtitle:
    "Recognitions and distinctions that highlight my academic excellence and involvement at Texas Tech University.",

  display: true,
  achievementsCards: [
    {
      title: "Dean’s List (x3)",
      subtitle: "Texas Tech University",
      description:
        "Recognized three times for outstanding academic excellence (GPA ≥ 3.5) in the Edward E. Whitacre Jr. College of Engineering.",
      image: require("./assets/images/deanslist.png"), // optional, add later
      imageAlt: "Dean's List badge",
      footerLink: []
    },
    {
      title: "President’s List",
      subtitle: "Texas Tech University (Spring 2024)",
      description:
        "Earned President’s List distinction for achieving a perfect 4.0 GPA in the Spring 2024 semester.",
      image: require("./assets/images/presidentslist.png"), // optional, add later
      imageAlt: "President's List badge",
      footerLink: []
    },
    {
      title: "ECE Departmental Scholarship Award",
      subtitle: "Department of Electrical & Computer Engineering, TTU",
      description:
        "Awarded by the ECE department for exceptional academic performance, leadership, and contribution to engineering activities.",
      image: require("./assets/images/eceaward.png"), // optional, add later
      imageAlt: "ECE Award image",
      footerLink: []
    },
    {
      title: "IEEE Region 5 cordinator",
      subtitle: "Institute of Electrical and Electronics Engineers (TTU Chapter)",
      description:
        "Active member of IEEE, engaging in robotics, embedded systems, and technical innovation events at Texas Tech.",
      image: require("./assets/images/ieeelogo.png"), // optional, add later
      imageAlt: "IEEE logo",
      footerLink: [
        {
          name: "IEEE at TTU",
          url: "https://ttuieee.org/ttu-ieee-officers/"
        }
      ]
    }
  ]
};


// ---------------- Blogs / Talks / Podcasts ----------------
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const resumeSection = { display: false };

// ---------------- Contact ----------------
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
  "Great engineering is where logic meets imagination — and that’s where I live every day.",
  number: "(806) 544-5937",
  email_address: "cdwamena@ttu.edu"
};

// ---------------- Twitter / Hireable ----------------
const twitterDetails = { userName: "", display: false };
const isHireable = true;

// ---------------- Exports ----------------
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
