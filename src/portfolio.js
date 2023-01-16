/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Raj Mehta",
  title: "Hi all, I'm Raj",
  subTitle: 
    "Coder/Designer, hobbyist innovator, currently studying at Northeastern University. Data Science & Business Intelligence enthusiast giving try to unique ideas 😎",
  resumeLink:
    "https://drive.google.com/file/d/1kj3a7Qh4Oa0-a47N73glxj0-UPCCYLx-/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Raj-Mehta2012",
  linkedin: "https://www.linkedin.com/in/raj-kamlesh-mehta/",
  gmail: "rajmehta1220@gmail.com",
  gitlab: "https://gitlab.com/Raj-Mehta2012",
  facebook: "https://www.facebook.com/rajmehta2012",
  medium: "https://medium.com/@rajmehta2012",
  stackoverflow: "https://stackoverflow.com/users/21003739/raj-mehta",
  instagram: "https://www.instagram.com/raj.m/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DATA SCIENCE ENTHUSIAST WHO WANTS TO EXPLORE EVERY TECH",
  skills: [
      "⚡ Develop and Integrate machine Learning algorithms on real datasets",
      "⚡ Data driven applications development and develop my own datasets",
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
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
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeasternLogo.png"),
      subHeader: "Master of Science in Information Systems",
      duration: "September 2022 - May 2024",
      desc: "Persued Data Science, Machine Leaning, Application Engineering, Data Visualization.",
      descBullets: [
        "Created my own dataset for age and facial recognition",
        "Developed a full-stack realtime stock management portfolio application."
      ]
    },
    {
      schoolName: "University of Notre Dame",
      logo: require("./assets/images/notreDameLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Febrauary 2021 - December 2021",
      desc: "Ranked top 5% in the program. Took courses about Software Engineering, Web Security, Operating Systems, Business Tech",
      descBullets: [
              "Published a research paper on security algorithm of unmanned ariel vehicles",
              "TA and RA for Graduate course"]
    },
    {
      schoolName: "St. Xavier's College",
      logo: require("./assets/images/xaviersLogo.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "June 2018 - March 2022",
      desc: "Ranked top 3% in the program. Took courses about Data Structures, Programming paradigms, Database Management, Advanced Jave, APIs, Machine Learning and Data Science",
      descBullets: [
              "Stood at first positions for several hackathons",
              "Qualified for Student Exchange Programme in USA"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Science and Processing",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "35%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
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
      role: "Quality assurance and Automation Engineer",
      company: "DE Shaw & Co.",
      companylogo: require("./assets/images/shawLogo.png"),
      date: "January 2022 – September 2022",
      desc: "Technologies Used: Java, JavaScript, Python, Cypress.io, Linux, Slack",
      descBullets: [
        "Translated new enhancements into test scenarios and identified areas of regression in collaboration with the project stakeholders, increasing overall readiness by 10%",
        "Proposed and implemented an automatic bug monitoring system to perceive potential problems in advance within the development cycle ending in 20% fewer defects stated through past due-level QA reviews",
        "Managed defect logging and categorization, as well as writing and execution of automation scripts used for monitoring jobs, resulting in 5% increase in defect pin-pointing"
      ]
    },
    {
      role: "Java Testing and Research Engineeer",
      company: "Dronology ~ NASA and NSF Fuded",
      companylogo: require("./assets/images/dronologyLogo.png"),
      date: "May 2021 – December 2021",
      desc: "Technologies Used: Java (Algorithms Testing), Python (Machine Learning Image Processing), ROS, MQTT Framework, Linux",
      descBullets: [
        "Framework for UAVs: Assured the dependability of communication with drones and devices which were designed to subscribe and publish responses using the MQTT architecture, drastically improving response time from 10ms to 2ms",
        "Algorithm and Testing: Performed safety testing by flooding the network with mutated flight plans for the UAVs to ensure proper functioning of the safety algorithm, ensuing 1500 test case checks per second",
        "Publications: Published papers to the International Journal on Software Engineering, October 2022 (JSS) and the International Conference on Communications, December 2021 (ICCPS)"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Jhoola",
      companylogo: require("./assets/images/jhoolaLogo.jpeg"),
      date: "August 2020 – December 2020",
      desc: "Technologies Used: Flutter, Google Firebase, Java, HTML, CSS, JavaScript, Airtables",
      descBullets: [
        "Developed a Flutter application which creates and manages the schedules, tracks performance for the end users, cutting down paperwork by 30%",
        "Invented a Java algorithm that builds and updates resume with help of multiple API calls, making the average await time from 10ms to 4ms",
        "Worked with the project manager to refine the algorithm, resulting 23% increase in efficiency",
        "Performed as scrum manager for the team consisting 7 software developers and hosted meetings on daily basis"
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE"
  ),

  talks: [
    {
      title: "Age Detection and Amazon Review Classifier",
      subtitle: "Data Science Engineering Methods and Tools - December 2022",
      slides_url: "https://docs.google.com/presentation/d/1Va4M8vM98YnhMwOR5Cl8pXxjkfF-Sl-Y/edit?usp=sharing&ouid=115560912031984261804&rtpof=true&sd=true",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (857) 364-9394",
  email_address: "rajmehta1220@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
