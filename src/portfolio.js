/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohmmad Arham",
  title: "Hi all, I'm Arham",
  subTitle: emoji(
    "A passionate Full-Stack Developer 🚀 who turns ideas into pixel-perfect, scalable products—crafting responsive web apps with React / Next.js, cross-platform mobile experiences with React-Native & Flutter, and robust backends powered by Node, Flask, Convex and cloud-native stacks on GCP & Docker."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1ABmp7w6iHd_iguyWMlPxxfYFHDLpODcH", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/red-panda3",
  linkedin: "https://www.linkedin.com/in/mohammad-arham-reza-166429284/",
  gmail: "arrrhamreza@gmail.com",
  gitlab: "https://gitlab.com/BlueMoon67",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS "
    ),
      emoji(
      "⚡ Seamlessly integrate predictive models into React / Node apps for smart search, fraud detection, and personalized UX "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "React-Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"       // custom SVG or any placeholder
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Institute Of Technology Patna",
      logo: require("./assets/images/image.png"),
      subHeader: "B.Tech in Electronics and Communication",
      duration: "September 2023 - April 2027",
      desc: "CGPA -7.38",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Ai Helper",
      companylogo: require("./assets/images/clay.png"),
      date: "June 2025 – Present",
      desc: "Built an AI-powered study companion ",
      href:'https://github.com/red-panda3/stdpartner',
descBullets: [
  "Converts PDFs into vectorised knowledge bases and supports real-time Q&A using Retrieval-Augmented Generation (RAG) with 94 % accuracy.",
  "Auto-creates MCQs and visual mind maps, enabling one-click export to Anki or PNG for seamless exam prep."
]
    },
    {
      role: "Front-End Developer",
      company: "Transformer",
      companylogo: require("./assets/images/WhatsApp Image 2025-08-24 at 14.31.12.jpeg"),
      href:'https://www.kaggle.com/code/arhamrezadd/transaloter2/edit',
      date: "May 2025 – june 2025",
      desc: "End-to-end English ↔ Hindi translator",
         descBullets: [
"Implemented tokenizers, embeddings, attention mechanism and beam-search decoding in pure PyTorch—no pre-built libraries.",
  "Achieved 28 BLEU on the test set"
]
    },
    {
      role: "Software Engineer Intern",
      company: "Yolo",
      companylogo: require("./assets/images/WhatsApp Image 2025-08-24 at 14.38.16.jpeg"),
      href:'https://github.com/BlueMoon67/ZOOM_CLONE/tree/main',
      date: "Jan 2024 – March 2024",
      desc: "Full-stack video-conferencing platform",
      descBullets: [
"share screens, and chat in real time with sub-50 ms latency for 100+ HD streams",
  "Integrated calendar picker, instant room links,"
]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Open Source",
  subtitle: "Organizations whose codebases I have meaningfully enhanced through open-source contributions and collaborative feature delivery",
  projects: [
    {
      image: require("./assets/images/assosie.png"),
      projectName: "Pictopy",
      projectDesc: "Smart tagging of photos based on detected objects, faces, and their recognition",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/AOSSIE-Org/PictoPy"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sugar.png"),
      projectName: "musicblocks",
      projectDesc: "Music Blocks is an interactive Web Application — the interaction is done via basic mouse events like click, right click, click and drag, etc. and keyboard events like hotkey press.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/sugarlabs/musicblocks"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "700+ question on LeetCode",
      subtitle:
        "Solve over 700+ question on leetcode along with 1700+ rating",
      image: require("./assets/images/leetcode.webp"),
      imageAlt: "LeetCode Logo",
      footerLink: [
        {
          name: "Profile",
          url: "https://leetcode.com/u/arham121/"
        },
      ]
    },
    {
      title: "McKinsey Forward Program",
      subtitle:
        "10-week digital-learning badge in data-driven storytelling & stakeholder communication.",
      image: require("./assets/images/Mckinsey-logo.webp"),
      imageAlt: "McKinsey Forward Program",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/b34fc901-1a26-4222-b8df-5bf426ef6cbf"
        }
      ]
    },

    {
      title: "Frontend Web App Developer",
      subtitle: "Completed Certifcation from Hackerrank",
      image: require("./assets/images/hacker.webp"),
      imageAlt: "Hacker Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/cedf101049f5"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
