const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

const profile = {
  education: {
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    year: '2nd Year Student (2023-2024)',
    university: 'University of Southern Philippines Foundation (USPF)'
  },
  skills: [
    'Proficiency in front-end web technologies: HTML, CSS, JavaScript',
    'Experience with responsive web design and cross-browser compatibility',
    'Basic understanding of version control systems, such as Git',
    'Strong teamwork and communication skills through collaborative project work'
  ],
  experience: [
    'Utilized version control with Git to manage and track changes to the project, enhancing collaboration and workflow efficiency.',
    'Demonstrated strong problem-solving skills to troubleshoot and resolve technical issues, ensuring seamless website functionality across different browsers and devices.',
    'Collaborated with a team of developers to design and implement a responsive website for a university event, utilizing HTML, CSS, and JavaScript.'
  ],
  awards: [
    'Dean\'s List, USPF',
    '3rd place in CCS Hackathon'
  ],
  personalInfo: {
    name: 'SHAN JOSEF JAMIL N. MOLIVA',
    address: 'cebu city, philippines.',
    phoneNumber: '09132341',
    email: 'Smoliva@uspf.edu.ph',
    birthdate: 'December 13, 2000',
    sex: 'Male'
  },

};

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.json(profile);
});

app.listen(port, () => { console.log(`server running on port ${port}!`)})