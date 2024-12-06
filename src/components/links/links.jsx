import React from "react";
import "./links.css";
import GitHubLogo from "./images/github-logo.png";
import LinkedInLogo from "./images/linkedin-logo.png";
import WebsiteLogo from "./images/website-logo.png";

const Links = () => {
  const personalLinks = [
    {
      name: "Connecting Techies 🚀",
      url: "https://whatsapp.com/channel/0029Var3z9f1dAw6z2Fhbn40",
    },
    {
      name: "My LINK TREE",
      url: "https://whatsapp.com/channel/0029Var3z9f1dAw6z2Fhbn40",
    },
  ];

  const googleLinks = [
    { name: "Chat GPT", url: "https://chat.openai.com/" },
    { name: "Bard", url: "https://bard.google.com/?hl=en&pli=1" },
    { name: "Go GPT", url: "https://gptgo.ai/?hl=en" },
    {
      name: "Google Drive",
      url: "https://drive.google.com/drive/my-drive?lfhs=2",
    },
    { name: "Outlook", url: "https://outlook.office.com/mail/" },
    { name: "Google Docs", url: "https://docs.google.com/" },
    { name: "Google Sheets", url: "https://sheets.google.com/" },
    { name: "Google Keep", url: "https://keep.google.com/" },
    { name: "OneDrive", url: "https://onedrive.live.com/" },
    { name: "Google Calendar", url: "https://calendar.google.com/" },
    { name: "Pinterest", url: "https://in.pinterest.com/" },
    { name: "Spotify", url: "https://open.spotify.com/" },
    { name: "Quora", url: "https://www.quora.com/" },
    { name: "Telegram", url: "https://web.telegram.org/k/" },
    { name: "Google Maps", url: "https://www.google.com/maps/" },
    { name: "Flipkart", url: "https://www.flipkart.com/" },
    { name: "Amazon", url: "https://www.amazon.com/" },
    { name: "Myntra", url: "https://www.myntra.com/" },
    { name: "Ajio", url: "https://www.ajio.com/" },
    { name: "PriceBefore", url: "https://www.pricebefore.com/" },
    { name: "Google Translate", url: "https://translate.google.com/" },
    { name: "Chess", url: "https://www.chess.com/" },
    { name: "Figma", url: "https://www.figma.com/" },
    { name: "Canva", url: "https://www.canva.com/" },
    { name: "BookMyShow", url: "https://in.bookmyshow.com/" },
  ];

  const dataLinks = [
    { name: "Digilocker", url: "https://www.digilocker.gov.in/" },
    {
      name: "Data Analyst - Khan Academy",
      url: "https://www.khanacademy.org/kmap/measurement-and-data-g/md220-data-and-statistics",
    },
    {
      name: "Google Cloud Data Engineering",
      url: "https://cloud.google.com/learn/training/data-engineering-and-analytics",
    },
    {
      name: "Top Software Companies 2022",
      url: "https://www.thesoftwarereport.com/the-top-100-software-companies-of-2022/",
    },
    { name: "Stackshare", url: "https://stackshare.io/" },
    {
      name: "Glassdoor",
      url: "https://www.glassdoor.co.in/Job/Home/recentActivity.html",
    },
    { name: "Indeed", url: "https://myjobs.indeed.com/applied" },
    { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
    { name: "DataCamp", url: "https://www.datacamp.com/" },
    { name: "Kaggle", url: "https://www.kaggle.com/" },
    { name: "Statista", url: "https://www.statista.com/" },
    { name: "Tableau Public", url: "https://public.tableau.com/" },
    {
      name: "IBM Data Science",
      url: "https://www.ibm.com/training/data-science",
    },
    { name: "SAP Analytics", url: "https://www.sap.com/training-analytics" },
    {
      name: "AWS Data",
      url: "https://aws.amazon.com/training/data-analytics/",
    },
    {
      name: "Oracle Analytics Cloud",
      url: "https://www.oracle.com/analytics/cloud/",
    },
  ];

  const youtubeLinks = [
    { name: "Home", url: "https://www.youtube.com/" },
    { name: "Edureka", url: "https://www.youtube.com/@edurekaIN" },
    {
      name: "Apna College",
      url: "https://www.youtube.com/@ApnaCollegeOfficial",
    },
    { name: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers" },
    { name: "Network Model", url: "https://www.youtube.com/@TechTermsDG" },
    { name: "Coding Shuttle", url: "https://www.youtube.com/@codingshuttle" },
    { name: "Code with Harry", url: "https://www.youtube.com/@CodeWithHarry" },
    {
      name: "Smarter Every Day",
      url: "https://www.youtube.com/@smartereveryday",
    },
    { name: "Gate Wallah", url: "https://www.youtube.com/@GATEWallahbyPW" },
    { name: "CrashCourse", url: "https://www.youtube.com/user/crashcourse" },
    { name: "MIT OpenCourseWare", url: "https://www.youtube.com/user/MIT" },
    { name: "Khan Academy", url: "https://www.youtube.com/khanacademy" },
    {
      name: "LearnCode.academy",
      url: "https://www.youtube.com/user/learncodeacademy",
    },
    { name: "TED-Ed", url: "https://www.youtube.com/user/TEDEducation" },
  ];

  const webDevLinks = [
    { name: "Uiverse", url: "https://uiverse.io/" },
    { name: "Loaders", url: "https://uiball.com/" },
    { name: "All Tools", url: "https://10015.io/" },
    { name: "Icon Animation", url: "https://useanimations.com/" },
    { name: "Colors", url: "https://coolors.co/palettes/trending" },
    { name: "CSS Gradient", url: "https://cssgradient.io/" },
    { name: "UI Patterns", url: "https://uipatterns.io/" },
    { name: "Webflow", url: "https://webflow.com/" },
    { name: "Dribbble", url: "https://dribbble.com/" },
    { name: "Behance", url: "https://www.behance.net/" },
    { name: "Bootstrap Icons", url: "https://icons.getbootstrap.com/" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
    { name: "Font Awesome", url: "https://fontawesome.com/" },
    { name: "Material Design", url: "https://material.io/" },
    { name: "CodePen", url: "https://codepen.io/" },
    { name: "CodeSandbox", url: "https://codesandbox.io/" },
    { name: "W3Schools", url: "https://www.w3schools.com/" },
  ];

  const collegeGeneralLinks = [
    { name: "GitLab", url: "https://gitlab.com/" },
    { name: "Github", url: "https://github.com/zindagie?tab=repositories" },
    { name: "InfyTQ", url: "https://infytq.onwingspan.com/web/en/page/home" },
    { name: "IlovePDF", url: "https://www.ilovepdf.com/" },
    {
      name: "TCS ION",
      url: "https://learning.tcsionhub.in/iDH/India/LearnerDashboard",
    },
    {
      name: "NSP REG",
      url: "https://scholarships.gov.in/moma2223fresh/newstdRegfrmInstruction",
    },
    { name: "Coursera", url: "https://www.coursera.org/" },
    { name: "Edx", url: "https://www.edx.org/" },
    { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning/" },
    {
      name: "Infosys Springboard",
      url: "https://infyspringboard.onwingspan.com/web/en/page/home",
    },
    { name: "Microsoft Learn", url: "https://learn.microsoft.com/" },
    {
      name: "Google Cloud Skill Boost",
      url: "https://cloud.google.com/training",
    },
    { name: "Salesforce Trailhead", url: "https://trailhead.salesforce.com/" },
    { name: "Khan Academy", url: "https://www.khanacademy.org/" },
    { name: "Udacity", url: "https://www.udacity.com/" },
    { name: "Pluralsight", url: "https://www.pluralsight.com/" },
    { name: "Skillshare", url: "https://www.skillshare.com/" },
    { name: "FutureLearn", url: "https://www.futurelearn.com/" },
    { name: "DataCamp", url: "https://www.datacamp.com/" },
    { name: "HubSpot Academy", url: "https://academy.hubspot.com/" },
    { name: "Alison", url: "https://alison.com/" },
    { name: "Udemy", url: "https://www.udemy.com/" },
    { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/" },
    { name: "Stanford Online", url: "https://online.stanford.edu/" },
    {
      name: "Harvard Online Learning",
      url: "https://online-learning.harvard.edu/",
    },
    { name: "Codecademy", url: "https://www.codecademy.com/" },
    { name: "Kaggle", url: "https://www.kaggle.com/" },
    { name: "AWS Training", url: "https://aws.amazon.com/training/" },
    { name: "IBM Skills Network", url: "https://www.ibm.com/training/" },
    { name: "Oracle Learning", url: "https://education.oracle.com/" },
    { name: "SAP Learning Hub", url: "https://learninghub.sap.com/" },
    { name: "Dataquest", url: "https://www.dataquest.io/" },
    {
      name: "OpenLearn by The Open University",
      url: "https://www.open.edu/openlearn/",
    },
    { name: "YouTube Learning", url: "https://www.youtube.com/learning" },
  ];

  const whenyoustuckin = [
    { name: "Codementor", url: "https://www.codementor.io" },
    { name: "devRant", url: "https://www.devrant.io" },
    { name: "Google", url: "https://www.google.com" },
    { name: "Learn Anything", url: "https://learn-anything.xyz" },
    { name: "Quora", url: "https://www.quora.com" },
    { name: "Stack Overflow", url: "https://stackoverflow.com" },
    { name: "Stack Exchange", url: "https://stackexchange.com/" },
    { name: "Coderanch", url: "https://coderanch.com/" },
  ];

  const newsLinks = [
    { name: "ACM TechNews", url: "http://technews.acm.org" },
    { name: "Stratechery", url: "https://stratechery.com" },
    { name: "AlternativeTo", url: "https://alternativeto.net" },
    { name: "Ars Technica", url: "https://arstechnica.com" },
    { name: "Better Dev Links", url: "https://betterdev.link" },
    {
      name: "Better Programming",
      url: "https://medium.com/better-programming",
    },
    { name: "CNET", url: "https://www.cnet.com/news/" },
    { name: "Daily.Dev", url: "https://daily.dev/" },
    { name: "DevOpsLinks", url: "http://devopslinks.com" },
    { name: "Frontend Focus Newsletter", url: "https://frontendfoc.us" },
    { name: "GSMArena.com", url: "http://www.gsmarena.com" },
    { name: "Hacker News Digest", url: "https://hndigest.com" },
    { name: "Hacker News", url: "https://news.ycombinator.com" },
    { name: "Hacker Newsletter", url: "http://www.hackernewsletter.com" },
    { name: "Hacker Noon", url: "https://hackernoon.com" },
    { name: "High Scalability", url: "http://highscalability.com" },
    { name: "Lobsters", url: "https://lobste.rs" },
    { name: "Product Hunt", url: "https://www.producthunt.com" },
    { name: "Recode", url: "https://www.recode.net" },
    { name: "Reddit.com", url: "https://www.reddit.com/r/programming/" },
    { name: "Slashdot", url: "https://slashdot.org" },
    { name: "StackShare", url: "https://stackshare.io" },
    { name: "TechCrunch", url: "https://techcrunch.com" },
    { name: "The DEV Community", url: "https://dev.to" },
    { name: "The Verge", url: "https://www.theverge.com" },
    { name: "WCCF Tech", url: "https://wccftech.com" },
    { name: "XDA", url: "https://www.xda-developers.com" },
    { name: "Hashnode", url: "https://hashnode.com/" },
    { name: "Rekt", url: "https://rekt.news/" },
    { name: "Hackaday", url: "https://hackaday.com" },
  ];

  const magazinesLinks = [
    {
      name: "MIT Technology Review",
      url: "https://www.technologyreview.com/magazine/",
    },
    { name: "Nautilus", url: "http://nauatil.us" },
    { name: "LWN", url: "https://lwn.net" },
  ];

  const codingPracticeLinks = [
    { name: "Codedex", url: "https://www.codedex.io" },
    { name: "freeCodeCamp", url: "https://www.freecodecamp.com" },
    { name: "Blackbird School", url: "https://blackbird.school" },
    { name: "Glitch", url: "https://glitch.com/" },
    {
      name: "Reddit-dailyprogrammer",
      url: "https://www.reddit.com/r/dailyprogrammer/",
    },
    { name: "Programming by Doing", url: "http://programmingbydoing.com" },
    { name: "CodeAbbey-master programming", url: "http://www.codeabbey.com" },
    { name: "Exercism.io", url: "http://exercism.io" },
    { name: "InterviewBit", url: "https://www.interviewbit.com" },
    {
      name: "Projects-Solutions",
      url: "https://github.com/karan/Projects-Solutions",
    },
    { name: "Lod - Cloud", url: "http://lod-cloud.net" },
    { name: "Cave of programming", url: "https://caveofprogramming.com" },
    { name: "Vim adventures", url: "https://vim-adventures.com/" },
    {
      name: "Learn Vimscript",
      url: "http://learnvimscriptthehardway.stevelosh.com",
    },
    {
      name: "Programming Tasks",
      url: "http://rosettacode.org/wiki/Category:Programming_Tasks",
    },
    { name: "Pramp", url: "https://www.pramp.com" },
    { name: "Paqmind", url: "http://paqmind.com" },
    { name: "Codecademy", url: "https://www.codecademy.com" },
    { name: "Codegym", url: "https://codegym.cc/" },
    { name: "treehouse", url: "https://teamtreehouse.com" },
    { name: "GeeksforGeeks", url: "https://practice.geeksforgeeks.org" },
    { name: "edabit", url: "https://edabit.com/challenges" },
    { name: "Git Branching", url: "https://learngitbranching.js.org" },
    { name: "Oh Shit, Git!?!", url: "https://ohshitgit.com/" },
    { name: "The Odin Project", url: "https://www.theodinproject.com/home" },
    { name: "Udemy", url: "https://www.udemy.com/" },
    { name: "Scaler", url: "https://www.scaler.com/topics/" },
    { name: "SQL Zoo", url: "https://sqlzoo.net/wiki/SQL_Tutorial" },
    { name: "SQLTest.online", url: "https://sqltest.online" },
  ];

  const cryptoCurrencyLinks = [
    {
      name: "Blockchain Basics",
      url: "https://www.sitepen.com/blog/2017/09/21/blockchain-basics/",
    },
    { name: "Blockchain demo", url: "https://blockchaindemo.io/" },
    {
      name: "Build a blockchain in Python",
      url: "https://hackernoon.com/learn-blockchains-by-building-one-117428612f46",
    },
    { name: "Coin demo", url: "https://coindemo.io/" },
    { name: "GitCoin", url: "https://gitcoin.co" },
    {
      name: "Learn About Bitcoin and Lightning Protocol",
      url: "https://chaincode.gitbook.io/seminars/",
    },
    { name: "Learn Me A Bitcoin", url: "https://learnmeabitcoin.com/" },
    { name: "Learn Web3 DAO", url: "https://learnweb3.io/" },
    { name: "Lite Paper", url: "https://litepaper.com/" },
    { name: "Lopp Bitcoin Resources", url: "https://lopp.net/bitcoin.html" },
    {
      name: "Mastering Bitcoin",
      url: "https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/",
    },
    { name: "Mempool", url: "https://mempool.space" },
  ];

  const projectIdeasLinks = [
    {
      name: "freeCodeCamp-React",
      url: "https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d?gi=c786640fbd11",
    },
    { name: "karan-Projects", url: "https://github.com/karan/Projects" },
    {
      name: "Wrong 'big projects' for beginners",
      url: "http://rodiongork.tumblr.com/post/108155476418/wrong-big-projects-for-beginners",
    },
    {
      name: "vicky002-1000-Projects",
      url: "https://github.com/vicky002/1000_Projects",
    },
    { name: "reddit-AppIdeas", url: "https://www.reddit.com/r/AppIdeas/" },
    {
      name: "reddit-Somebody Make This",
      url: "https://www.reddit.com/r/SomebodyMakeThis/",
    },
    {
      name: "florinpop17-app-ideas",
      url: "https://github.com/florinpop17/app-ideas",
    },
  ];

  const codingAdviceLinks = [
    {
      name: "Begin-Competitive Programming",
      url: "https://www.geeksforgeeks.org/how-to-begin-with-competitive-programming/",
    },
    {
      name: "10-ways to be a better developer",
      url: "https://stephenhaunts.files.wordpress.com/2014/04/10-ways-to-be-a-better-developer.png",
    },
    {
      name: "Code Review Best Practices",
      url: "https://www.kevinlondon.com/2015/05/05/code-review-best-practices.html",
    },
    {
      name: "Design Patterns",
      url: "https://sourcemaking.com/design_patterns",
    },
    {
      name: "Game Programming Patterns",
      url: "http://gameprogrammingpatterns.com/",
    },
    {
      name: "How to become a programmer or the art of Googling well",
      url: "https://okepi.wordpress.com/2014/08/21/how-to-become-a-programmer-or-the-art-of-googling-well/",
    },
    {
      name: "How to escape tutorial purgatory as a new developer — or at any time in your career",
      url: "https://medium.freecodecamp.org/how-to-escape-tutorial-purgatory-as-a-new-developer-or-at-any-time-in-your-career-e3a4b2384a40",
    },
    {
      name: "JS Project Guidelines",
      url: "https://github.com/wearehive/project-guidelines",
    },
    { name: "Learn to Code With Me", url: "https://learntocodewith.me" },
    {
      name: "Lessons From A Lifetime Of Being A Programmer",
      url: "http://thecodist.com/article/lessons_from_a_lifetime_of_being_a_programmer",
    },
    {
      name: "MITRE - Top 25 Most Dangerous Software Weaknesses (2022)",
      url: "https://cwe.mitre.org/top25/archive/2022/2022_cwe_top25.html",
    },
    {
      name: "Software Architecture Guide",
      url: "https://martinfowler.com/architecture/",
    },
    {
      name: "Software design pattern",
      url: "https://en.wikipedia.org/wiki/Software_design_pattern",
    },
    {
      name: "Things I Wish Someone Had Told Me When I Was Learning How to Code — Free Code Camp",
      url: "https://medium.freecodecamp.com/things-i-wish-someone-had-told-me-when-i-was-learning-how-to-code-565fc9dcb329?gi=fc6d0a309be",
    },
    { name: "Teach Yourself CS", url: "https://teachyourselfcs.com/" },
    {
      name: "What every computer science major should know",
      url: "http://matt.might.net/articles/what-cs-majors-should-know/",
    },
    {
      name: "Working as a Software Developer",
      url: "https://henrikwarne.com/2012/12/12/working-as-a-software-developer/",
    },
    {
      name: "The Open Web Application Security Project (OWASP)",
      url: "https://www.owasp.org",
    },
  ];

  const codingStyleLinks = [
    { name: "JS Style Guide", url: "https://github.com/airbnb/javascript" },
    { name: "Ruby Style Guide", url: "https://github.com/airbnb/ruby" },
    {
      name: "Ruby coding style guide",
      url: "https://github.com/bbatsov/ruby-style-guide",
    },
    {
      name: "Angular 1 Style Guide",
      url: "https://github.com/johnpapa/angular-styleguide/tree/master/a1",
    },
    {
      name: "CS 106B Coding Style Guide",
      url: "http://stanford.edu/class/archive/cs/cs106b/cs106b.1158/styleguide.shtml",
    },
    {
      name: "Debugging Faqs",
      url: "http://www.umich.edu/~eecs381/generalFAQ/Debugging.html",
    },
    {
      name: "Directory of CS Courses",
      url: "https://github.com/prakhar1989/awesome-courses",
    },
    {
      name: "Directory of Online CS Courses",
      url: "https://github.com/ossu/computer-science",
    },
    {
      name: "Good C programming habits",
      url: "https://www.reddit.com/r/C_Programming/comments/1vuubw/good_c_programming_habits/",
    },
    {
      name: "Google C++ Style Guide",
      url: "https://google.github.io/styleguide/cppguide.html",
    },
    {
      name: "Report Bugs Effectively",
      url: "https://www.chiark.greenend.org.uk/~sgtatham/bugs.html",
    },
    {
      name: "some bad coding habits-avoid",
      url: "https://www.reddit.com/r/learnprogramming/comments/1i4ds4/what_are_some_bad_coding_habits_you_would/",
    },
    {
      name: "PEP8 - Style Guide-Python Code",
      url: "https://www.python.org/dev/peps/pep-0008/",
    },
    { name: "Standard JS Style Guide", url: "https://standardjs.com" },
    {
      name: "The Hitchhiker's Guide to Python",
      url: "https://docs.python-guide.org/writing/style/",
    },
    {
      name: "Google Python Style Guide",
      url: "https://google.github.io/styleguide/pyguide.html",
    },
    {
      name: "Aurelia Style Guide",
      url: "https://github.com/behzad888/Aurelia-styleguide",
    },
    { name: "Source Making", url: "https://sourcemaking.com/" },
    { name: "Refactoring Guru", url: "https://refactoring.guru/" },
    {
      name: "Google Java Style Guide",
      url: "https://google.github.io/styleguide/javaguide.html",
    },
    {
      name: "Rust Coding style",
      url: "https://github.com/rust-dev-tools/fmt-rfcs",
    },
    {
      name: "Google C# Style Guide",
      url: "https://google.github.io/styleguide/csharp-style.html",
    },
    { name: "Uber Go Style Guide", url: "https://github.com/uber-go/guide" },
  ];

  const generalToolsLinks = [
    { name: "CoderPad", url: "https://coderpad.io" },
    { name: "CodePen", url: "https://codepen.io" },
    { name: "Crontab Guru", url: "https://crontab.guru/" },
    { name: "Devicons", url: "http://vorillaz.github.io/devicons/#/main" },
    { name: "Diagrams.net", url: "https://app.diagrams.net/" },
    { name: "FreeFor.Dev", url: "https://free-for.dev/#/" },
    { name: "Hotkey Cheatsheet", url: "https://hotkeycheatsheet.com" },
    { name: "Imgur", url: "https://imgur.com/" },
    { name: "Kody Tools", url: "https://www.kodytools.com/dev-tools" },
    { name: "Pyrexp", url: "https://pythonium.net/regex" },
    { name: "regex101", url: "https://regex101.com" },
    { name: "regexr", url: "https://regexr.com" },
    { name: "Prodia AI Image API", url: "https://prodia.com/" },
    { name: "Wit AI", url: "https://wit.ai" },
    {
      name: "SaaS Design",
      url: "https://www.saasdesign.io/free-figma-templates",
    },
    { name: "Seymour", url: "https://harc.github.io/seymour-live2017" },
    { name: "Code share", url: "https://codeshare.io" },
    { name: "Solid Tools for Developers", url: "https://soliddevtools.com" },
    { name: "OS Query", url: "https://osquery.io" },
    { name: "LaunchPad", url: "https://launchpad.graphql.com" },
    { name: "GraphOnline", url: "https://graphonline.ru/en/" },
    {
      name: "Data Structure Visualization",
      url: "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html",
    },
    { name: "IDE Onlang", url: "https://ide.onelang.io" },
    { name: "JSON Crack", url: "https://jsoncrack.com/" },
    { name: "Pad.new", url: "https://pad.new" },
    { name: "PullRequest", url: "https://www.pullrequest.com/" },
    { name: "Python Visualizer", url: "http://pythontutor.com/visualize.html" },
    { name: "Extends Class", url: "https://extendsclass.com/" },
    { name: "Sourcegraph", url: "https://sourcegraph.com/search" },
    { name: "SVG Path Editor", url: "https://yqnn.github.io/svg-path-editor/" },
    { name: "EmailDrop", url: "https://www.emaildrop.io/" },
    { name: "Repl.it", url: "https://repl.it" },
    { name: "KeyBr (Typing Practice)", url: "https://www.keybr.com/" },
    { name: "Svgator", url: "https://www.svgator.com/" },
    { name: "Webhook.site", url: "https://webhook.site/" },
    { name: "kandi", url: "https://kandi.openweaver.com/" },
    { name: "Svix Play", url: "https://play.svix.com/" },
    { name: "Typeracer", url: "https://play.typeracer.com/" },
    { name: "Typerush", url: "https://www.typerush.com/" },
  ];
  const bashAndShellLinks = [
    {
      name: "Advanced Bash-Scripting Guide",
      url: "https://tldp.org/LDP/abs/html/",
    },
    {
      name: "Bash-Beginners guide",
      url: "https://www.tldp.org/LDP/Bash-Beginners-Guide/html/",
    },
    {
      name: "Bash Programming",
      url: "https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html",
    },
    {
      name: "Bash Reference Manual",
      url: "https://www.gnu.org/software/bash/manual/bashref.html",
    },
    { name: "BashGuide", url: "https://mywiki.wooledge.org/BashGuide" },
    {
      name: "Conquering the Command Line",
      url: "https://www.softcover.io/read/fc6c09de/unix_commands",
    },
    { name: "Airborn OS", url: "https://www.airborn.io" },
    {
      name: "Commandlinefu",
      url: "https://www.commandlinefu.com/commands/browse",
    },
    {
      name: "Pure Bash Bible",
      url: "https://github.com/dylanaraps/pure-bash-bible",
    },
    {
      name: "25 Common Linux Bash Script Examples",
      url: "https://www.hostinger.in/tutorials/bash-script-example",
    },
  ];

  const interviewPreparationLinks = [
    {
      name: "SQL Interview Questions",
      url: "https://www.java67.com/2013/04/10-frequently-asked-sql-query-interview-questions-answers-database.html",
    },
    { name: "Quant Riddles", url: "https://puzzles.nigelcoldwell.co.uk" },
    {
      name: "Working with Recruiters",
      url: "https://andreidobrinski.com/blog/a-developers-guide-to-working-with-recruiters/",
    },
    {
      name: "Algorithm Canvas",
      url: "https://www.hiredintech.com/algorithm-design",
    },
    { name: "Aptitude Q&A", url: "https://www.indiabix.com" },
    { name: "Technical Interview Qs", url: "https://www.techinterview.org" },
    {
      name: "Interview Prep Links",
      url: "https://www.reddit.com/r/cscareerquestions/comments/2lzc4h/big_collection_of_interview_preparation_links/",
    },
    { name: "Big-O Cheatsheet", url: "https://bigocheatsheet.com/#" },
    {
      name: "Big-O Misconceptions",
      url: "https://ssp.impulsetrain.com/big-o.html",
    },
    { name: "Bitwise Tricks", url: "https://gist.github.com/dideler/2365607" },
    { name: "InterviewThis", url: "https://github.com/Twipped/InterviewThis" },
    { name: "CodeProject", url: "https://www.codeproject.com" },
    { name: "Coderbytes", url: "https://coderbyte.com/" },
    { name: "C Puzzles", url: "https://www.gowrikumar.com/c/index.php" },
    {
      name: "Core Java Qs",
      url: "https://www.javatpoint.com/corejava-interview-questions",
    },
    { name: "CS9 Problem Solving", url: "https://web.stanford.edu/class/cs9/" },
    { name: "Delightful Puzzles", url: "https://gurmeet.net/puzzles/" },
    {
      name: "Big-O Runtimes",
      url: "https://stackoverflow.com/questions/11094330/determining-the-big-o-runtimes-of-these-different-loops",
    },
    { name: "FAANGPath Resume", url: "https://faangpath.com/template/" },
    {
      name: "Phone Screen Qs",
      url: "https://sites.google.com/site/steveyegge2/five-essential-phone-screen-questions",
    },
    {
      name: "Freshers Interviews",
      url: "https://placementsindia.blogspot.com",
    },
    { name: "Gainlo", url: "https://www.gainlo.co/#!/" },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org" },
    { name: "Interview Repo", url: "https://github.com/odino/interviews" },
    {
      name: "Resume Tips",
      url: "https://motorsh.wordpress.com/2009/01/13/give-your-resume-a-face-lift-from-lifeclever/",
    },
    {
      name: "Google Interview Warmup",
      url: "https://grow.google/certificates/interview-warmup/",
    },
    {
      name: "Tech Interview Prep",
      url: "https://www.reddit.com/r/cscareerquestions/comments/1jov24/heres_how_to_prepare_for_tech_interviews/",
    },
    {
      name: "Tell Me About Yourself",
      url: "https://www.artofmanliness.com/2016/01/05/tell-me-a-little-about-yourself/",
    },
    {
      name: "Break Into Tech",
      url: "https://haseebq.com/how-to-break-into-tech-job-hunting-and-interviews",
    },
    {
      name: "Interview Guide",
      url: "https://kelukelu.me/interview/index.html",
    },
    {
      name: "IIT Delhi Placement",
      url: "https://placement-iit2013.blogspot.com",
    },
    {
      name: "Internship Guide",
      url: "https://github.com/samwincott/Internship-Guide",
    },
    {
      name: "Jane Street Interview",
      url: "https://blog.janestreet.com/interviewing-at-jane-street/",
    },
    {
      name: "Java Interview Qs",
      url: "https://javahonk.com/category/interview/",
    },
    { name: "Interview Cake", url: "https://www.interviewcake.com/" },
    {
      name: "Ace Job Interview",
      url: "https://www.artofmanliness.com/2012/08/06/how-to-ace-a-job-interview/",
    },
    {
      name: "Job Interview Tips",
      url: "https://lifehacker.com/search?s=job%20interviews/",
    },
    {
      name: "Job Q&A Best Answers",
      url: "https://www.thebalance.com/job-interview-questions-and-answers-2061204",
    },
    { name: "Interview Repo", url: "https://github.com/kimberli/interviews" },
    { name: "LeetCode", url: "https://leetcode.com/" },
    { name: "Learnersbucket", url: "https://learnersbucket.com" },
    {
      name: "Mission-Peace",
      url: "https://github.com/mission-peace/interview/wiki",
    },
    { name: "NeetCode", url: "https://neetcode.io" },
    { name: "Pramp", url: "https://www.pramp.com/ref/gt1" },
    {
      name: "LeetCode Problems",
      url: "https://leetcode.com/problemset/algorithms/",
    },
    {
      name: "Programmer Interview",
      url: "https://www.programmerinterview.com",
    },
    {
      name: "Reddit Puzzles",
      url: "https://www.reddit.com/user/ashish2199/m/puzzles/",
    },
    {
      name: "SQL Interview Qs",
      url: "https://www.jitbit.com/news/181-jitbits-sql-interview-questions/",
    },
    {
      name: "SQL Joins Venn",
      url: "https://stevestedman.com/wp-content/uploads/VennDiagram1.pdf",
    },
    {
      name: "Java Interviews",
      url: "https://github.com/svozniuk/java-interviews",
    },
    { name: "Techie Delight", url: "https://www.techiedelight.com" },
    {
      name: "HR Questions",
      url: "https://www.datsi.fi.upm.es/~frosal/docs/25mdq.html",
    },
    {
      name: "Top 10 Algorithms",
      url: "https://www.programcreek.com/2012/11/top-10-algorithms-for-coding-interview/",
    },
    {
      name: "Linux Commands",
      url: "https://www.geeksforgeeks.org/linux-commands-cheat-sheet/",
    },
    {
      name: "Job Seekers Tips",
      url: "https://www.reddit.com/r/india/comments/1clgdj/unsolicited_advice_for_job_seekers_and_employers/",
    },
    { name: "Data Structures Animations", url: "https://visualgo.net/en" },
    { name: "Hired In Tech", url: "https://www.hiredintech.com/" },
    {
      name: "Interview Questions",
      url: "https://www.reddit.com/r/cscareerquestions/comments/209rkq/what_are_your_goto_questions_for_the_do_you_have/",
    },
    {
      name: "Why You Make Less",
      url: "https://www.reddit.com/r/cscareerquestions/comments/1b8wa3/why_you_make_less_money/",
    },
    {
      name: "Hard Riddles",
      url: "https://www.ocf.berkeley.edu/~wwu/riddles/hard.shtml",
    },
    {
      name: "AI Company Interviews",
      url: "https://blog.usejournal.com/what-i-learned-from-interviewing-at-multiple-ai-companies-and-start-ups-a9620415e4cc#fa32",
    },
    {
      name: "Tech Interview Handbook",
      url: "https://techinterviewhandbook.org/introduction/",
    },
  ];

  const documentariesLinks = [
    {
      name: "Breaking the Code",
      url: "https://ia801908.us.archive.org/27/items/youtube-S23yie-779k/",
    },
    {
      name: "Cracking The Code Interview",
      url: "https://www.youtube.com/watch?v=4NIb9l3imAo",
    },
    {
      name: "Cracking the Coding Interview",
      url: "https://www.youtube.com/watch?v=Eg5-tdAwclo",
    },
    {
      name: "Harvard CS50 - Asymptotic Notation",
      url: "https://www.youtube.com/watch?v=iOq5kSKqeR4",
    },
    {
      name: "Machine Code Instructions",
      url: "https://www.youtube.com/watch?v=Mv2XQgpbTNE",
    },
    {
      name: "Part 2: Inventing the Future",
      url: "https://www.youtube.com/watch?v=0iPiYxjsYKk",
    },
    {
      name: "Part 3: The Paperback Computer",
      url: "https://www.youtube.com/watch?v=d7DKVfOXr54",
    },
    {
      name: "Part 4: The Thinking Machine",
      url: "https://www.youtube.com/watch?v=enWWlx7-t0k",
    },
    {
      name: "Part 5: The World at Your Fingertips",
      url: "https://www.youtube.com/watch?v=fLLXiP7diEo",
    },
    {
      name: "Mechanical Computer (All Parts)",
      url: "https://www.youtube.com/watch?v=s1i-dnAH9Y4",
    },
    {
      name: "Teach Yourself Computer Science",
      url: "https://teachyourselfcs.com",
    },
    { name: "The Code", url: "https://www.youtube.com/watch?v=XMm0HsmOTFI" },
    {
      name: "The Internet's Own Boy",
      url: "https://www.youtube.com/watch?v=9vz06QO3UkQ",
    },
  ];

  const moocsLinks = [
    { name: "Boot.dev", url: "https://www.boot.dev/" },
    { name: "Class Central", url: "https://www.class-central.com" },
    { name: "Classpert", url: "https://classpert.com" },
    {
      name: "Computer Science Resources",
      url: "https://docs.google.com/spreadsheets/d/1BD8BJJUNaX63m2QmySWMGDp71nx4W4MyyiIBlfMoN3Q/htmlview?sle=true#",
    },
    { name: "Coursera.org", url: "https://www.coursera.org" },
    { name: "CS50", url: "https://www.youtube.com/user/cs50tv/videos" },
    { name: "edX", url: "https://www.edx.org" },
    {
      name: "Kadenze-Creative  Programming",
      url: "https://www.kadenze.com/courses?subjects%5B%5D=7",
    },
    {
      name: "MIT OCW Electrical Engineering and Computer Science",
      url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/",
    },
    { name: "MOOC.fi", url: "http://mooc.fi/english.html" },
    { name: "NPTEL", url: "http://nptel.ac.in" },
    {
      name: "awesome-CS-courses",
      url: "https://github.com/prakhar1989/awesome-courses/blob/master/README.md",
    },
    { name: "Pluralsight", url: "https://www.pluralsight.com" },
  ];

  const aiLinks = [
    { name: "aima", url: "http://aima.cs.berkeley.edu" },
    { name: "fast.ai", url: "http://course.fast.ai" },
    { name: "TypeDB", url: "https://vaticle.com" },
    {
      name: "Robots that learn",
      url: "https://openai.com/research/robots-that-learn",
    },
    {
      name: "Unsupervised Sentiment Neuron",
      url: "https://openai.com/research/unsupervised-sentiment-neuron",
    },
    {
      name: "What's the difference between AI- DP and ML?",
      url: "https://blogs.nvidia.com/blog/2016/07/29/whats-difference-artificial-intelligence-machine-learning-deep-learning-ai/",
    },
    { name: "TensorFlow", url: "https://www.tensorflow.org" },
    { name: "Scikit-learn", url: "http://scikit-learn.org" },
    { name: "DeepLearning.ai", url: "https://www.deeplearning.ai" },
    {
      name: "Coding the History of Deep Learning",
      url: "http://blog.floydhub.com/coding-the-history-of-deep-learning/",
    },
    { name: "Serpent AI", url: "https://github.com/SerpentAI/SerpentAI" },
    {
      name: "Blog Floydhub",
      url: "https://blog.floydhub.com/colorizing-b&w-photos-with-neural-networks/",
    },
    { name: "MLCOURSE.AI", url: "https://mlcourse.ai/" },
    { name: "Elements of AI", url: "https://course.elementsofai.com/" },
    {
      name: "Machine Learning Mastery",
      url: "https://machinelearningmastery.com/",
    },
    {
      name: "Machine Learning Crash Course",
      url: "https://developers.google.com/machine-learning/crash-course",
    },
    {
      name: "Machine Learning Tutorial: A Step-by-Step Guide for Beginners",
      url: "https://www.simplilearn.com/tutorials/machine-learning-tutorial",
    },
    { name: "MLU-EXPLAIN", url: "https://mlu-explain.github.io/" },
  ];

  const researchLinks = [
    {
      name: "Advice on Research and Writing",
      url: "http://www.cs.cmu.edu/~mleone/how-to.html",
    },
    {
      name: "PHD MS Articles",
      url: "http://www.cse.iitd.ac.in/~srsarangi/articles.html",
    },
    {
      name: "Seminar and Reports",
      url: "https://www.cse.iitb.ac.in/~ranade/communicationskills.html",
    },
    { name: "Latex Reference", url: "http://latex.knobs-dials.com" },
    {
      name: "Begin Latex in Minutes",
      url: "https://github.com/LewisVo/Begin-Latex-in-minutes",
    },
    { name: "Lshort", url: "https://tobi.oetiker.ch/lshort/lshort.pdf" },
  ];

  const everythingLinks = [
    { name: "AI Tools", url: "https://aicollective.tools" },
    { name: "API Documentation", url: "http://devdocs.io" },
    { name: "Baeldung", url: "https://www.baeldung.com" },
    { name: "BtechBasics", url: "https://btechbasics.in/" },
    { name: "Branition Colors", url: "https://branition.com/colors" },
    { name: "cheat.sh", url: "https://github.com/chubin/cheat.sh" },
    { name: "Developer Roadmaps", url: "https://roadmap.sh/" },
    { name: "DevURLs", url: "https://devurls.com/" },
    { name: "Kaggle", url: "https://www.kaggle.com/" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
    { name: "Rico's Cheatsheets", url: "https://devhints.io" },
    {
      name: "Programming Subreddits",
      url: "https://www.reddit.com/user/ashish2199/m/cs_student_subs/",
    },
    {
      name: "Websites a Programmer Should Visit",
      url: "https://www.quora.com/What-are-the-best-websites-a-programmer-should-visit/answer/Ashish-Padalkar?srid=OH96",
    },
    { name: "gitignore", url: "https://www.gitignore.io/" },
    { name: "Hidden Tools", url: "https://hiddentools.dev/" },
    { name: "Coolors", url: "https://coolors.co/" },
    { name: "Tailwind CSS Page Builder", url: "https://devdojo.com/tails/app" },
    { name: "LottieFiles", url: "https://lottiefiles.com/" },
    { name: "UI Design Daily", url: "https://www.uidesigndaily.com/" },
    { name: "Iconscout", url: "https://iconscout.com/" },
    { name: "Json API App", url: "https://www.jsonapi.co/" },
    {
      name: "Library or Micro Code Solutions",
      url: "https://onelinerhub.com/",
    },
  ];

  const youtubeChannels = [
    {
      name: "C++Now (BoostCon)",
      url: "https://www.youtube.com/channel/UC5e__RG9K3cHrPotPABnrwg",
    },
    {
      name: "code::dive conference",
      url: "https://www.youtube.com/channel/UCU0Rt8VHO5-YNQXwIjkf-1g",
    },
    { name: "Coding Blocks", url: "https://www.youtube.com/user/codingblocks" },
    {
      name: "Computerphile",
      url: "https://www.youtube.com/user/Computerphile/videos",
    },
    {
      name: "ComputerHistory",
      url: "https://www.youtube.com/user/ComputerHistory/videos",
    },
    {
      name: "CppCon",
      url: "https://www.youtube.com/user/CppCon/videos?shelf_id=0&view=0&sort=dd",
    },
    {
      name: "Facebook Developers",
      url: "https://www.youtube.com/user/FacebookDevelopers/videos",
    },
    {
      name: "Google Developers",
      url: "https://www.youtube.com/user/GoogleDevelopers/videos",
    },
    {
      name: "GoogleTechTalks",
      url: "https://www.youtube.com/user/GoogleTechTalks/videos",
    },
    { name: "Gynvael Coldwin", url: "https://www.youtube.com/user/GynvaelEN" },
    {
      name: "HowToBecomeTV",
      url: "https://www.youtube.com/user/HowToBecomeTV/videos",
    },
    { name: "Java", url: "https://www.youtube.com/user/java/videos" },
    {
      name: "JavaOne",
      url: "https://www.youtube.com/channel/UCdDhYMT2USoLdh4SZIsu_1g/videos",
    },
    {
      name: "javidx9",
      url: "https://www.youtube.com/channel/UC-yuWVUplUJZvieEligKBkA/videos",
    },
    {
      name: "Meeting C++ YT Kanalseite",
      url: "https://www.youtube.com/user/MeetingCPP/videos",
    },
    { name: "MIT OpenCourseWare", url: "https://www.youtube.com/user/MIT/" },
    {
      name: "Murtaza's OpenCV Robotics and AI",
      url: "https://www.youtube.com/c/MurtazasWorkshopRoboticsandAI/",
    },
    {
      name: "Netflix UI Engineering",
      url: "https://www.youtube.com/channel/UCGGRRqAjPm6sL3-WGBDnKJA/videos",
    },
    {
      name: "O'Reilly",
      url: "https://www.youtube.com/user/OreillyMedia/videos",
    },
    {
      name: "Placement Grid",
      url: "https://www.youtube.com/user/PlacementGrid/videos",
    },
    {
      name: "Scott Meyers: Past Talks",
      url: "http://www.aristeia.com/presentations.html",
    },
    {
      name: "Siraj Raval",
      url: "https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A",
    },
    {
      name: "ThinMatrix",
      url: "https://www.youtube.com/user/ThinMatrix/videos",
    },
    {
      name: "thoughtbot",
      url: "https://www.youtube.com/user/ThoughtbotVideo/videos",
    },
    {
      name: "Traversy Media",
      url: "https://www.youtube.com/user/TechGuyWeb/videos",
    },
    {
      name: "yegor256",
      url: "https://www.youtube.com/user/technoparkcorp/videos",
    },
    {
      name: "GOTO Conference",
      url: "https://www.youtube.com/user/GotoConferences",
    },
    {
      name: "freeCodeCamp",
      url: "https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ",
    },
    {
      name: "Bo Qian",
      url: "https://www.youtube.com/channel/UCEOGtxYTB6vo6MQ-WQ9W_nQ",
    },
    {
      name: "Geeksforgeeks",
      url: "https://www.youtube.com/channel/UC0RhatS1pyxInC00YKjjBqQ/videos",
    },
    {
      name: "Hacker earth",
      url: "https://www.youtube.com/channel/UCYU6nvKyRYnE5kiG9JXkXpA",
    },
    { name: "Hak5", url: "https://www.youtube.com/user/Hak5Darren" },
    {
      name: "Khan Academy",
      url: "https://www.youtube.com/channel/UC4a-Gbdw7vOaccHmFo40b9g",
    },
    {
      name: "LearnCode.academy",
      url: "https://www.youtube.com/channel/UCVTlvUkGslCV_h-nSAId8Sw",
    },
    {
      name: "Rachit Jain",
      url: "https://www.youtube.com/channel/UC9fDC_eBh9e_bogw87DbGKQ/featured",
    },
    {
      name: "sentdex",
      url: "https://www.youtube.com/channel/UCfzlCWGWYyIQ0aLC5w48gBQ",
    },
    {
      name: "Steve Griffith",
      url: "https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ",
    },
    {
      name: "The Coding Train",
      url: "https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw",
    },
    {
      name: "TheHappieCat",
      url: "https://www.youtube.com/channel/UCBsuOBu-dxj5bx1KMgmar5g",
    },
    {
      name: "Tutorials Point (India) Pvt. Ltd.",
      url: "https://www.youtube.com/channel/UCVLbzhxVTiTLiVKeGV7WEBg",
    },
    {
      name: "Udacity",
      url: "https://www.youtube.com/channel/UCBVCi5JbYmfG3q5MEuoWdOw",
    },
    {
      name: "V. Anton Spraul",
      url: "https://www.youtube.com/channel/UCLEMTlEe5RE04EoULMHWEEQ",
    },
    {
      name: "xdadevelopers",
      url: "https://www.youtube.com/channel/UCk1SpWNzOs4MYmr0uICEntg",
    },
    { name: "KudVenkat", url: "https://www.youtube.com/user/kudvenkat/" },
    {
      name: "The Net Ninja",
      url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg",
    },
    {
      name: "Web Dev Simplified",
      url: "https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw",
    },
    { name: "Take You Forward", url: "https://www.youtube.com/c/takeUforward" },
  ];

  const goodArticlesLinks = [
    {
      name: "Starting with MongoDB",
      url: "https://www.infoq.com/articles/Starting-With-MongoDB/",
    },
    {
      name: "40 Keys Computer Science Concepts",
      url: "http://carlcheo.com/compsci",
    },
    {
      name: "A Gentle Introduction to Graph Theory",
      url: "https://dev.to/vaidehijoshi/a-gentle-introduction-to-graph-theory",
    },
    { name: "Moonscript Language", url: "http://moonscript.org" },
    {
      name: "Developer’s Reading List",
      url: "https://stevewedig.com/2014/02/03/software-developers-reading-list/",
    },
    {
      name: "Code a TCP/IP Stack",
      url: "http://www.saminiir.com/lets-code-tcp-ip-stack-5-tcp-retransmission/",
    },
    {
      name: "Codewords.recurse",
      url: "https://codewords.recurse.com/issues/four/the-language-of-choice",
    },
    {
      name: "Learn Data Structures & Algorithms",
      url: "https://www.freecodecamp.org/news/learn-data-structures-and-algorithms/",
    },
    {
      name: "Dive into Byte Code",
      url: "https://www.wikiwand.com/en/Java_bytecode",
    },
    {
      name: "Junior Developer Expectations",
      url: "http://blog.thefirehoseproject.com/posts/expectations-of-a-junior-developer/",
    },
    {
      name: "Getting Started with MongoDB",
      url: "https://studio3t.com/knowledge-base/articles/mongodb-getting-started/",
    },
    {
      name: "Linux Inside",
      url: "https://0xax.gitbooks.io/linux-insides/content/Booting/linux-bootstrap-1.html",
    },
    {
      name: "List of Algorithms",
      url: "https://www.wikiwand.com/en/List_of_algorithms",
    },
    {
      name: "Database Normalization Guide",
      url: "https://www.databasestar.com/normalization-in-dbms/",
    },
    {
      name: "Accelerating Coding Skills",
      url: "http://blog.thefirehoseproject.com/posts/learn-to-code-and-be-self-reliant/",
    },
    {
      name: "Understanding Unicode",
      url: "https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/",
    },
    {
      name: "Reinventing Retail Technology",
      url: "http://multithreaded.stitchfix.com",
    },
    {
      name: "Programmers on Encodings",
      url: "http://kunststube.net/encoding/",
    },
    {
      name: "Memory and CPU Knowledge",
      url: "https://people.freebsd.org/~lstewart/articles/cpumemory.pdf",
    },
    {
      name: "Improving Focus - Qotoqot",
      url: "https://qotoqot.com/blog/improving-focus/",
    },
    {
      name: "Unix Parallel Tools",
      url: "http://www.pixelbeat.org/docs/unix-parallel-tools.html",
    },
    {
      name: "Learning Vim",
      url: "https://hackernoon.com/learning-vim-what-i-wish-i-knew-b5dca186bef7",
    },
    {
      name: "Write a Kernel",
      url: "http://arjunsreedharan.org/post/82710718100/kernel-101-lets-write-a-kernel",
    },
    {
      name: "JavaScript Design Patterns",
      url: "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
    },
    {
      name: "Working with Webhooks",
      url: "https://requestbin.com/blog/working-with-webhooks/",
    },
    {
      name: "How I Got TensorFlow Certified",
      url: "https://www.mrdbourke.com/how-i-got-tensorflow-developer-certified/",
    },
  ];

  const podcastLinks = [
    { name: "Coding Blocks", url: "http://www.codingblocks.net" },
    { name: "Developer On Fire", url: "http://developeronfire.com/episodes" },
    { name: "Developer Tea", url: "https://spec.fm/podcasts/developer-tea" },
    { name: "Front End Happy Hour", url: "http://frontendhappyhour.com" },
    { name: "Full Stack Radio", url: "http://www.fullstackradio.com" },
    { name: "Groovy Podcast", url: "http://groovypodcast.podbean.com" },
    { name: "IPhreaks", url: "https://devchat.tv/iphreaks" },
    { name: "JavaScript Jabber", url: "https://devchat.tv/js-jabber" },
    {
      name: "Learn To Code With Me Podcast",
      url: "https://learntocodewith.me/podcast/",
    },
    { name: "LispCast", url: "https://lispcast.com/category/podcast/" },
    { name: "MS Dev Show", url: "http://msdevshow.com" },
    {
      name: "React Native Radio",
      url: "https://devchat.tv/react-native-radio",
    },
    { name: "ShopTalk Show", url: "https://shoptalkshow.com/" },
    { name: "Soft Skills Engineering", url: "https://softskills.audio/" },
    {
      name: "Software Engineering Daily",
      url: "https://softwareengineeringdaily.com",
    },
    { name: "Software Engineering Radio", url: "http://www.se-radio.net" },
    { name: "Syntax", url: "https://syntax.fm" },
    { name: "The Bike Shed", url: "http://bikeshed.fm" },
    { name: "The Changelog", url: "https://changelog.com/podcast" },
    { name: "The Cynical Developer", url: "https://cynicaldeveloper.com" },
    {
      name: "The Real Python Podcast",
      url: "https://realpython.com/podcasts/rpp/",
    },
    {
      name: "Blockchain Insider by 11:FS",
      url: "blockchain.global/blockchain-innovation",
    },
    { name: "Unchained", url: "unchainedpodcast.co" },
    { name: "Talk python to me", url: "https://talkpython.fm/" },
    { name: "Python bytes", url: "https://pythonbytes.fm" },
  ];

  const compilerLinks = [
    {
      name: "Possibly the smallest compiler ever",
      url: "https://github.com/thejameskyle/the-super-tiny-compiler",
    },
    { name: "Awesome Compilers", url: "http://aalhour.com/awesome-compilers/" },
    {
      name: "Growing a compiler",
      url: "http://www.cs.dartmouth.edu/~mckeeman/cs48/mxcom/gem/html/GrowingCompiler.html",
    },
    {
      name: "Let’s Build A Simple Interpreter. Part 1.",
      url: "https://ruslanspivak.com/lsbasi-part1/",
    },
    {
      name: "Resources for Amateur Compiler Writers",
      url: "http://c9x.me/compile/bib/",
    },
    {
      name: "Structure and Interpretation of Computer Programs",
      url: "https://sarabander.github.io/sicp/html/index.xhtml",
    },
    {
      name: "Writing My First Compiler",
      url: "https://dev.to/fcpauldiaz/writing-my-first-compiler",
    },
    {
      name: "An Intro to Compilers",
      url: "https://nicoleorchard.com/blog/compilers",
    },
    {
      name: "Write your own compiler",
      url: "http://staff.polito.it/silvano.rivoira/HowToWriteYourOwnCompiler.htm",
    },
    { name: "Crafting Interpreters", url: "http://craftinginterpreters.com/" },
    {
      name: "Writing a C Compiler",
      url: "https://norasandler.com/2017/11/29/Write-a-Compiler.html",
    },
  ];

  const watchCodeLinks = [
    { name: "Education Ecosystem", url: "https://www.education-ecosystem.com" },
    {
      name: "Twitch.tv",
      url: "https://www.twitch.tv/directory/game/Science%20%26%20Technology",
    },
  ];

  const programmerKnowledgeLinks = [
    { name: "Can I Use", url: "https://caniuse.com/" },
    { name: "GitHub", url: "https://github.com" },
    { name: "GitLab", url: "https://about.gitlab.com" },
    {
      name: "Programmer Competency Matrix",
      url: "https://www.sijinjoseph.com/programmer-competency-matrix/",
    },
  ];

  const competitiveProgrammingLinks = [
    {
      name: "Topic Wise Problem For Competitive Programmer",
      url: "https://a2oj.com/categories",
    },
    { name: "Advent of Code", url: "https://adventofcode.com" },
    {
      name: "Archived Problems - Project Euler",
      url: "https://projecteuler.net/archives",
    },
    { name: "Art of Problem Solving", url: "https://artofproblemsolving.com" },
    { name: "AtCoder", url: "https://atcoder.jp/" },
    { name: "CodeChef", url: "https://www.codechef.com" },
    { name: "CodeSignal", url: "https://app.codesignal.com" },
    { name: "CodeEval", url: "https://www.codeeval.dev/" },
    { name: "Codeforces", url: "http://codeforces.com" },
    { name: "Codewars", url: "https://www.codewars.com" },
    { name: "Codility", url: "https://codility.com" },
    { name: "Codingame", url: "https://www.codingame.com/start" },
    { name: "Facebook Hacker Cup", url: "https://www.facebook.com/hackercup/" },
    {
      name: "Google Coding Competitions Archive",
      url: "https://zibada.guru/gcj/",
    },
    { name: "HackerEarth", url: "https://www.hackerearth.com" },
    { name: "HackerRank", url: "https://www.hackerrank.com" },
    { name: "LightOJ", url: "https://lightoj.com" },
    {
      name: "PKU ACM ICPC Practice problems",
      url: "http://poj.org/problemlist",
    },
    { name: "Sphere Online Judge (SPOJ)", url: "http://www.spoj.com" },
    { name: "Topcoder", url: "https://www.topcoder.com" },
    {
      name: "URI Online Judge",
      url: "https://www.urionlinejudge.com.br/judge/en/register",
    },
    { name: "UVa Online Judge", url: "https://uva.onlinejudge.org" },
    { name: "WakaTime", url: "https://wakatime.com" },
    {
      name: "PrepBytes",
      url: "https://mycode.prepbytes.com/competitive-coding/practice",
    },
    { name: "A2OJ Ladders", url: "https://a2oj.com/Ladders.html" },
  ];

  const computerBooksLinks = [
    {
      name: "Become a Programmer, Motherfucker (list of books)",
      url: "http://programming-motherfucker.com/become.html",
    },
    {
      name: "Best books for GATE CSE",
      url: "http://gatecse.in/best-books-for-gatecse/",
    },
    { name: "cses.fi/book.html", url: "https://cses.fi/book.html" },
    {
      name: "GitHub Free Programming Books",
      url: "https://github.com/EbookFoundation/free-programming-books/blob/master/README.md",
    },
    { name: "GitBook", url: "https://www.gitbook.com" },
    {
      name: "Data Science Course by Jake VanderPlas",
      url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
    },
    { name: "Goal Kicker", url: "https://goalkicker.com" },
    { name: "The GraphQL Guide", url: "https://graphql.guide" },
    { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
    { name: "Programming Books", url: "https://www.programmingbooks.dev" },
  ];

  const videoTutorialLinks = [
    {
      name: "Aditya Verma",
      url: "https://www.youtube.com/channel/UC5WO7o71wvxMxEtLRkPhiQQ",
    },
    {
      name: "Codedamn",
      url: "https://www.youtube.com/channel/UCJUmE61LxhbhudzUugHL2wQ/videos",
    },
    { name: "Code School", url: "https://www.codeschool.com" },
    {
      name: "CodingMadeEasy",
      url: "https://www.youtube.com/user/CodingMadeEasy/videos",
    },
    {
      name: "CS1: Higher Computing - Richard Buckland UNSW",
      url: "https://www.youtube.com/playlist?list=PL6B940F08B9773B9F",
    },
    {
      name: "Derek Banas",
      url: "https://www.youtube.com/user/derekbanas/videos",
    },
    {
      name: "Design and Analysis of Algorithms - Stanford",
      url: "http://openclassroom.stanford.edu/MainFolder/CoursePage.php?course=IntroToAlgorithms",
    },
    {
      name: "DevTips",
      url: "https://www.youtube.com/user/DevTipsForDesigners/videos",
    },
    { name: "FreeCourses", url: "https://freecourses.github.io" },
    {
      name: "Kathryn Hodge",
      url: "https://www.youtube.com/channel/UC4DwZ2VXM2KWtzHjVk9M_xg/videos",
    },
    {
      name: "Kunal Kushwaha",
      url: "https://www.youtube.com/watch?v=apGV9Kg7ics",
    },
    {
      name: "MyCodeSchool",
      url: "https://www.youtube.com/user/mycodeschool/videos",
    },
    { name: "Pluralsight", url: "https://www.pluralsight.com" },
    {
      name: "thenewboston",
      url: "https://www.youtube.com/user/thenewboston/videos",
    },
    {
      name: "Tushar Roy",
      url: "https://www.youtube.com/user/tusharroy2525/videos",
    },
    {
      name: "Vim Tutorial Videos - Flarfnoogins",
      url: "http://derekwyatt.org/vim/tutorials/index.html",
    },
    {
      name: "XDA-University",
      url: "https://forum.xda-developers.com/general/xda-university",
    },
    {
      name: "Khan Academy",
      url: "https://www.khanacademy.org/computing/computer-science",
    },
    {
      name: "Functional Programming",
      url: "https://www.youtube.com/watch?v=1PhArSujR_A",
    },
    { name: "Video About Vims", url: "https://vimeo.com/album/2838732" },
    { name: "Mastering Next.js", url: "https://masteringnextjs.com/" },
  ];

  const onlineCompilerLinks = [
    { name: "C9.io", url: "https://c9.io" },
    { name: "Carbon", url: "https://carbon.now.sh/" },
    { name: "Codeframe", url: "https://codeframe.co/" },
    { name: "CodePad", url: "https://codepad.remoteinterview.io" },
    { name: "Coder", url: "https://coder.com" },
    { name: "Codesandbox.io", url: "https://codesandbox.io" },
    { name: "Github Codespaces", url: "https://github.com/codespaces" },
    { name: "Github Gist", url: "https://gist.github.com" },
    { name: "Godbolt.org", url: "https://godbolt.org" },
    { name: "Ideone.com", url: "https://ideone.com" },
    { name: "JSFiddle", url: "https://jsfiddle.net" },
    { name: "JSBin", url: "https://jsbin.com/" },
    { name: "Judge0 IDE", url: "https://ide.judge0.com" },
    { name: "Pastebin.com", url: "https://pastebin.com" },
    { name: "PlayCode", url: "https://playcode.io/" },
    { name: "RunJS", url: "https://runjs.app" },
    { name: "StackBlitz", url: "https://stackblitz.com/" },
    { name: "Wandbox", url: "https://wandbox.org/" },
    { name: "PHPize.online", url: "https://phpize.online/" },
  ];

  const developerBlogs = [
    { name: "Algo-Geeks", url: "http://algo-geeks.blogspot.com" },
    { name: "Amit Merchant", url: "https://www.amitmerchant.com" },
    { name: "Andy Heathershaw", url: "https://www.andyheathershaw.uk" },
    {
      name: "Antonio081014's Algorithms Codes",
      url: "http://code.antonio081014.com",
    },
    {
      name: "Archives — Ask a Manager",
      url: "http://www.askamanager.org/archives",
    },
    {
      name: "Armin Ronacher's Thoughts and Writings",
      url: "http://lucumr.pocoo.org",
    },
    { name: "blog.might.net", url: "http://matt.might.net/articles/" },
    {
      name: "Brendon Gregg - Linux Kernel Dev",
      url: "http://www.brendangregg.com",
    },
    { name: "Clean Coder Blog", url: "http://blog.cleancoder.com" },
    { name: "CodeAhoy", url: "https://codeahoy.com" },
    {
      name: "CoderGears Blog Insights",
      url: "http://www.codergears.com/Blog/",
    },
    { name: "Coding Geek", url: "http://coding-geek.com" },
    { name: "Coding Horror", url: "https://blog.codinghorror.com" },
    { name: "CSE Blog", url: "http://www.cseblog.com" },
    { name: "CSS Tricks", url: "https://css-tricks.com/" },
    { name: "Daedtech.com", url: "https://www.daedtech.com" },
    { name: "Dan Dreams of Coding", url: "https://dandreamsofcoding.com" },
    { name: "Daniel Lemire's Blog", url: "https://lemire.me/blog/" },
    { name: "Eli Bendersky", url: "http://eli.thegreenplace.net" },
    { name: "Geek Land", url: "https://avidullu.wordpress.com" },
    { name: "HackerEarth Blog", url: "http://blog.hackerearth.com" },
    { name: "IT Enthusiast", url: "http://rodiongork.tumblr.com" },
    { name: "Joel on Software", url: "https://www.joelonsoftware.com" },
    { name: "Late Developer", url: "https://latedev.wordpress.com" },
    { name: "Linux Forums", url: "https://www.linux.org/forums" },
    {
      name: "1ucasvb's laboriginal math and physics visualization",
      url: "http://1ucasvb.tumblr.com",
    },
    { name: "Math ∩ Programming", url: "https://jeremykun.com" },
    { name: "My Tech Interviews", url: "http://www.mytechinterviews.com" },
    {
      name: "Paul Graham Essays",
      url: "http://www.paulgraham.com/articles.html",
    },
    { name: "Programming Blog", url: "http://www.yegor256.com" },
    {
      name: "Programming in the 21st Century",
      url: "http://prog21.dadgum.com",
    },
    { name: "rudhakar Rayavaram", url: "http://sudhakar.online" },
    {
      name: "Runhe Tian Coding Practice",
      url: "https://tianrunhe.wordpress.com",
    },
    {
      name: "Small Programming Challenges and Puzzles",
      url: "https://www.nayuki.io/category/programming",
    },
    { name: "stevehanov.ca", url: "http://stevehanov.ca/blog/" },
    { name: "Takipi Blog", url: "http://blog.takipi.com" },
    {
      name: "The Pragmatic Engineer",
      url: "https://blog.pragmaticengineer.com/",
    },
    {
      name: "XDA - Android Developer Forum",
      url: "https://forum.xda-developers.com",
    },
    { name: "The Net Ninja", url: "https://www.thenetninja.co.uk/" },
  ];

  const englishImprovementLinks = [
    {
      name: "Englishclub.com/learn-english",
      url: "https://www.englishclub.com/learn-english.htm",
    },
    {
      name: "Guide to Grammar and Writing",
      url: "http://grammar.ccc.commnet.edu/grammar/",
    },
    {
      name: "Punctuation and Capitalization Rules",
      url: "http://www.grammarbook.com/english_rules.asp",
    },
    {
      name: "Purdue University Online Writing Lab (OWL)",
      url: "https://owl.english.purdue.edu",
    },
    { name: "Quia - English", url: "https://www.quia.com/shared/english/" },
    {
      name: "AntiMoon Immersion Approach",
      url: "http://www.antimoon.com/how/howtolearn.htm",
    },
  ];

  const boredLinks = [
    {
      name: "Barcroft TV",
      url: "https://www.youtube.com/user/barcroftmedia/featured",
    },
    { name: "Big Think", url: "https://www.youtube.com/user/bigthink/videos" },
    {
      name: "ColdFusion",
      url: "https://www.youtube.com/user/coldfustion/videos",
    },
    {
      name: "CrashCourse",
      url: "https://www.youtube.com/user/crashcourse/videos",
    },
    {
      name: "Every Frame a Painting",
      url: "https://www.youtube.com/user/everyframeapainting/videos",
    },
    {
      name: "National Geographic",
      url: "https://www.youtube.com/user/NationalGeographic/videos",
    },
    {
      name: "reddit Programmer Humor",
      url: "https://www.reddit.com/r/ProgrammerHumor/",
    },
    {
      name: "Reddit the front page of the internet",
      url: "https://www.reddit.com",
    },
    {
      name: "Ridddle",
      url: "https://www.youtube.com/user/VineMontanaTV/videos",
    },
    { name: "Regex Crossword", url: "https://regexcrossword.com" },
    { name: "SciShow", url: "https://www.youtube.com/user/scishow/videos" },
    {
      name: "SmarterEveryDay",
      url: "https://www.youtube.com/user/destinws2/videos",
    },
    {
      name: "TED",
      url: "https://www.youtube.com/user/TEDtalksDirector/videos",
    },
    {
      name: "TestTube News",
      url: "https://www.youtube.com/user/TestTubeNetwork/videos",
    },
    {
      name: "How to live for a long time?",
      url: "http://www.bbc.com/future/story/20170601-the-secret-to-a-long-and-healthy-life-eat-less",
    },
    { name: "Vsauce", url: "https://www.youtube.com/user/Vsauce/videos" },
    {
      name: "Ox A cuk",
      url: "http://www.ox.ac.uk/research/research-in-conversation/how-live-happy-life/dr-bronwyn-tarr#",
    },
    {
      name: "lonelyspeck",
      url: "https://www.lonelyspeck.com/the-milky-way-in-los-angeles-light-pollution/",
    },
  ];

  const openSourceLinks = [
    { name: "N-O-D-E", url: "https://n-o-d-e.net/" },
    { name: "Open Hatch", url: "https://openhatch.org" },
    { name: "Source Forge", url: "https://sourceforge.net" },
    { name: "Google Code", url: "https://code.google.com/projecthosting" },
    { name: "Launch Pad", url: "https://launchpad.net" },
    { name: "Google Open Source", url: "https://opensource.google.com" },
    { name: "Red Hat Developer", url: "https://developers.redhat.com" },
    { name: "Open Source", url: "https://opensource.com" },
    {
      name: "Google Summer of Code",
      url: "https://summerofcode.withgoogle.com",
    },
    { name: "Open Source Web Design", url: "http://www.oswd.org" },
    {
      name: "Mozilla Winter of Security",
      url: "https://wiki.mozilla.org/Security/Automation/Winter_Of_Security_2016",
    },
    { name: "Bit Bucket", url: "https://bitbucket.org" },
    { name: "Media Wiki", url: "https://www.mediawiki.org/wiki/MediaWiki" },
    { name: "Code Curiosity", url: "https://codecuriosity.org" },
    { name: "Code Triage", url: "https://www.codetriage.com" },
    { name: "Issue Hub", url: "http://issuehub.io" },
    { name: "Up for Grabs", url: "http://up-for-grabs.net" },
    { name: "First Timers Only", url: "http://www.firsttimersonly.com" },
    { name: "Your First PR", url: "http://yourfirstpr.github.io" },
    {
      name: "Awesome First PR Opportunities",
      url: "https://github.com/mungell/awesome-for-beginners",
    },
    {
      name: "EddieHub Open source community",
      url: "https://github.com/EddieHubCommunity",
    },
    { name: "MLH Fellowship programme", url: "https://fellowship.mlh.io/" },
  ];

  const internshipLinks = [
    { name: "Internshala", url: "https://internshala.com" },
    { name: "Letsintern", url: "https://www.letsintern.com" },
    { name: "PerfectIntern", url: "https://www.perfectintern.com" },
  ];

  const jobLinks = [
    { name: "Wellfound", url: "https://wellfound.com/" },
    { name: "CareerBuilder", url: "https://hiring.careerbuilder.com" },
    { name: "Dice", url: "https://www.dice.com" },
    { name: "Devsnap", url: "https://devsnap.io" },
    { name: "DevITjobs UK", url: "https://devitjobs.uk/" },
    { name: "Glassdoor", url: "https://www.glassdoor.co.in" },
    { name: "IAESTE", url: "http://iaesteunitedstates.org" },
    { name: "Indeed", url: "https://www.indeed.com" },
    { name: "Instahyre", url: "https://www.instahyre.com" },
    { name: "JobsCollider", url: "https://jobscollider.com/remote-jobs" },
    { name: "Mentat", url: "https://thementat.com" },
    { name: "The Muse", url: "https://www.themuse.com" },
    { name: "Paysa", url: "https://www.paysa.com" },
    { name: "SimplyHired", url: "https://www.simplyhired.com" },
    { name: "SwissDev Jobs", url: "https://swissdevjobs.ch" },
    { name: "Undercover Recruiter", url: "https://theundercoverrecruiter.com" },
    { name: "Who is Hiring", url: "https://whoishiring.io" },
    { name: "ZipRecruiter", url: "https://www.ziprecruiter.com" },
    { name: "RemoteML", url: "https://remoteml.com/" },
    { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs" },
    { name: "GermanTech Jobs", url: "https://germantechjobs.de/" },
    { name: "We Work Remotely", url: "https://weworkremotely.com/" },
    { name: "OkJob", url: "https://okjob.io/" },
  ];

  return (
    <div className="A3">
      <div className="links-container">
        <header className="header">Through LINKS</header>
        <section className="section personal">
          <h2 className="section-title">
            <i className="fa-solid fa-arrow-right fa-bounce"></i> Updates!
          </h2>
          <div className="personal-links-container">
            {personalLinks.map((link, index) => (
              <div key={index} className="personal-link-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section google">
          <h2 className="section-title">GOOGLE</h2>
          <div className="link-grid">
            {googleLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section data">
          <h2 className="section-title">DATA</h2>
          <div className="link-grid">
            {dataLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section youtube">
          <h2 className="section-title">YOUTUBE</h2>
          <div className="link-grid">
            {youtubeLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section webdev">
          <h2 className="section-title">WEB DEVELOPMENT</h2>
          <div className="link-grid">
            {webDevLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section college">
          <h2 className="section-title">COLLEGE GENERAL</h2>
          <div className="link-grid">
            {collegeGeneralLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section stuckin">
          <h2 className="section-title">❓ When you get stuck</h2>
          <div className="link-grid">
            {whenyoustuckin.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section news-links">
          <h2 className="section-title">📰 News</h2>
          <div className="link-grid">
            {newsLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section magazines-links">
          <h2 className="section-title">📚 Magazines</h2>
          <div className="link-grid">
            {magazinesLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section coding-practice-links">
          <h2 className="section-title">👶 Coding practice for beginners</h2>
          <div className="link-grid">
            {codingPracticeLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section cryptocurrency-links">
          <h2 className="section-title">💰 CryptoCurrency</h2>
          <div className="link-grid">
            {cryptoCurrencyLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section project-ideas-links">
          <h2 className="section-title">
            💡 For those who want to start a small project but can't find the
            ideas
          </h2>
          <div className="link-grid">
            {projectIdeasLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section coding-advice-links">
          <h2 className="section-title">🗣️ General Coding advice</h2>
          <div className="link-grid">
            {codingAdviceLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section coding-style-links">
          <h2 className="section-title">🎨 Coding Style</h2>
          <div className="link-grid">
            {codingStyleLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section general-tools-links">
          <h2 className="section-title">🛠️ General Tools</h2>
          <div className="link-grid">
            {generalToolsLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section bash-and-shell-scripting-links">
          <h2 className="section-title">🐚 Bash and Shell Scripting</h2>
          <div className="link-grid">
            {bashAndShellLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section interview-prep-links">
          <h2 className="section-title">🎤 Interview Prep</h2>
          <div className="link-grid">
            {interviewPreparationLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section documentaries-links">
          <h2 className="section-title">🎬 Documentaries</h2>
          <div className="link-grid">
            {documentariesLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section moocs-links">
          <h2 className="section-title">🎓 MOOCs for learning something new</h2>
          <div className="link-grid">
            {moocsLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section ai-links">
          <h2 className="section-title">🤖 Learn AI</h2>
          <div className="link-grid">
            {aiLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section research-links">
          <h2 className="section-title">
            📢 Seminar, Research Writing, Talks, etc
          </h2>
          <div className="link-grid">
            {researchLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section everything-in-one">
          <h2 className="section-title">📦 Everything in One Place</h2>
          <div className="link-grid">
            {everythingLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section youtube-channels">
          <h2 className="section-title">📺 YouTube Channels</h2>
          <div className="link-grid">
            {youtubeChannels.map((channel, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {channel.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section good-articles">
          <h2 className="section-title">✍️ Good Articles</h2>
          <div className="link-grid">
            {goodArticlesLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section podcast-links">
          <h2 className="section-title">🎧 Podcasts</h2>
          <div className="link-grid">
            {podcastLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section compiler-resources">
          <h2 className="section-title">
            🔄 Building a Simple Compiler/Interpreter
          </h2>
          <div className="link-grid">
            {compilerLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section watch-others-code">
          <h2 className="section-title">👀 Watch others code</h2>
          <div className="link-grid">
            {watchCodeLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section programmer-knowledge">
          <h2 className="section-title">🧠 What should a programmer know</h2>
          <div className="link-grid">
            {programmerKnowledgeLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section competitive-programming">
          <h2 className="section-title">⚔️ Competitive Programming</h2>
          <div className="link-grid">
            {competitiveProgrammingLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section computer-books">
          <h2 className="section-title">📖 Computer Books</h2>
          <div className="link-grid">
            {computerBooksLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section video-tutorials">
          <h2 className="section-title">🔴 Video Tutorials</h2>
          <div className="link-grid">
            {videoTutorialLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section online-compilers">
          <h2 className="section-title">
            💻 Online Compiler and Sharing Code Snippets
          </h2>
          <div className="link-grid">
            {onlineCompilerLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section developer-blogs">
          <h2 className="section-title">📝 Blogs of Developers</h2>
          <div className="link-grid">
            {developerBlogs.map((blog, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {blog.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section improve-english">
          <h2 className="section-title">🗣️ For Improving Your English</h2>
          <div className="link-grid">
            {englishImprovementLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section when-bored">
          <h2 className="section-title">
            🧘‍♂️ When you get bored from CS related stuff
          </h2>
          <div className="link-grid">
            {boredLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section open-source">
          <h2 className="section-title">🔓 Open-Source Websites</h2>
          <div className="link-grid">
            {openSourceLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section internships">
          <h2 className="section-title">🌱 Internships</h2>
          <div className="link-grid">
            {internshipLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="section jobs">
          <h2 className="section-title">💼 Jobs</h2>
          <div className="link-grid">
            {jobLinks.map((link, index) => (
              <div key={index} className="link-grid-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <footer className="footer arima">
        <p className="footer-text">© 2024 Skill Set Go</p>
        <p className="footer-description">
          This website is made by P. Hari Sai with [Love ❤️ & Efforts 💻]
        </p>
        <div className="social-links">
          <a
            href="https://github.com/harisaigithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__container-img"
              src={GitHubLogo}
              alt="GitHub"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/parasa-hari-sai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__container-img"
              src={LinkedInLogo}
              alt="LinkedIn"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://parasa-harisai-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__container-img"
              src={WebsiteLogo}
              alt="Website"
              width="40"
              height="40"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Links;
