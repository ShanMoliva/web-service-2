const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

const data = {
  education: {
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    degree2: 'Bachelor of Science in Information Technology (BSIT2)',
    year: '2nd Year Student (2023-2024)',
    university: 'University of Southern Philippines Foundation (USPF)'
  },
  skills: [
    'Proficiency in front-end web technologies: HTML, CSS, JavaScript',
    'Experience with responsive web design and cross-browser compatibility',
    'Basic understanding of version control systems, such as Git',
    'Strong teamwork and communication skills through collaborative project work'
  ],
  experience: {
    job1: 'Front End Developer / something.com',
    description1: 'Highly skilled',
    job2: 'Mobile Developer / something.com',
    description2: 'Highly skilled',
    job3: 'Web Developer / something.com',
    description3: 'Highly skilled'
  },
  awards: [
    'Dean\'s List, USPF',
    '3rd place in CCS Hackathon'
  ],
  personalInfo: {
    name: 'SHAN JOSEF JAMIL N. MOLIVA',
    address: 'cebu city, america.',
    phoneNumber: '09132341',
    email: 'Smoliva@uspf.edu.ph',
    birthdate: 'December 13, 2000',
    sex: 'Male'
  },

};

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.json(data);
});

app.listen(port, () => { console.log(`server running on port ${port}!`)})