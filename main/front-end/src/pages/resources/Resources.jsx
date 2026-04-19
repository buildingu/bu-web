/* TODO:
// 1. Add hashtags for each program
2. Add a contact section for each program
3. Add a review system for each program (no textarea, but a set of pre-done questions that users can answer to review programs) */

import { Layout } from "../components/layout/Layout.jsx";
import React, { useState, useEffect, useRef } from "react";
import s from "./styles.module.css";

/* object to store the display details of each icon.
   label = the title shown to users on hover */
const ICON_DEFS = {
  remote: {
    label: "Remote / Online available",
    color: "#7F77DD",
    svg: "💻",
  },
  paid: {
    label: "Paid program / scholarship available",
    color: "#1D9E75",
    svg: "💰",
  },
  coop: {
    label: "Co-op / work placement included",
    color: "#BA7517",
    svg: "💼",
  },
  flag_ca: {
    label: "Located in Canada",
    color: "#E24B4A",
    svg: "🇨🇦",
  },
  flag_us: {
    label: "Located in the United States",
    color: "#185FA5",
    svg: "🇺🇸",
  },
  cert: {
    label: "Certification / credential awarded",
    color: "#534AB7",
    svg: "📜",
  },
  flag_intl: {
    label: "International / global program",
    color: "#0A8A8A",
    svg: "🌍",
  },
};

/* object to store the details of each program.
   each entry contains a unique id, program name, icon keys, and text content */
const PAGES_DATA = {
  education: [
    {
      id: "edu-1",
      title: "BUSINESS AVIATION",
      icons: ["flag_ca", "cert"],
      content: `Do you dream of flying your own airplanes? If so you will probably think this aviation program is pretty fly. Come learn about business and aviation at Keyano College. Kill two birds with one stone by educating yourself on the inner workings of the aviation business while obtaining your private and commercial pilot's license (compliant with Canada Transport standards) at the same time! During the two-year aviation program, you will collaborate with McMurray Aviation for flight training so that you are ready for takeoff when you receive your diploma!

Cost: Canadian Students: $44,137.66 CAD/year
Location: Fort McMurray, Alberta Canada
Program Length: 2-year aviation program with intake in both the fall and winter semesters!
Admission Requirements: Req: Applicants must have a high school diploma, be 21 years and older, be proficient in English, and must take a Transport Canada medical exam.
Link: https://wpstaging.building-u.com/programs/business-aviation-program/`,
    },
    {
      id: "edu-2",
      title: "ACCOMMODATED LEARNING COMMUNITY INTEGRATION CO-OP PROGRAM",
      icons: ["flag_ca", "coop", "cert"],
      content: `Designed especially for students with learning challenges, this community integration program prepares students for entry-level work by building their independence and confidence. Offered by Georgian college, this community integration program strives to enhance each student's knowledge and skills through seminars, workshops, and field placements, while also encouraging and allowing them to follow their interests. Learning facilitators at this community integration program provide accommodation and modify the coursework to suit each student's strengths. Tutoring and support sessions are also provided during this community integration program to ensure that the coursework best suits each individual's learning level. Furthermore, carefully selected field placements during this community integration program helps enhance vocational skills and offers a hands-on experience on what a working environment feels like! Some past students in this community integration program have even been offered paid positions directly by their field placement employers. Graduates of this community integration program can apply for other entry-level jobs with their new qualification, or even apply to other college programs for further education!

Cost: Domestic $2000/semester; International $9000/semester
Location: Barrie, Orillia, or Owen Sound (ONTARIO)
Program Length: 2 year community integration program
Admission Requirements: Req: OSSD/OSSC or at least 19 years; demonstrate academic needs that require accommodation or curriculum modification; demonstrate level of independence; completed Advocate Reference Form
Link: https://wpstaging.building-u.com/programs/community-integration-through-coop-education/`,
    },
    {
      id: "edu-3",
      title: "AVIATION OPERATIONS, TECHNOLOGY, AND SAFETY PROGRAMS",
      icons: ["flag_ca", "coop", "paid", "cert"],
      content: `Have you always wondered how airplanes work? Do you dream of someday working in the aviation industry? Then Seneca College's aviation programs could be perfect for you! The aviation programs offered include operations, technology, and safety. In the aviation operations program (diploma), students spend 2 years learning about the exciting tasks that happen on the ground during a flight. The safety program (advanced diploma) runs over a course of 3 years in which students learn about essential safety techniques and leadership skills. The technology program (bachelor's degree) allows students to spend 4 years learning how to successfully operate an aircraft and gain work experience. Along with learning all about aircrafts, students in these aviation programs are given the opportunity to gain hands-on work experience if they choose to complete a co-op work term. International and Canadian students may apply for both the safety and operations programs (around $5000/year for domestic students and $18,000/year for international students), but only Canadian students are eligible for the technology program (around $21,000/year). Seneca College also provides millions of dollars of financial aid and awards around 2600 awards and scholarships per year. Many graduated students of these aviation programs go on to become pilots, dispatchers, flying instructors, ground operators, and more! So, if you're ready for your journey to becoming a part of the aviation industry to take off the runway, make sure to check out these exciting aviation programs today!

Cost: Canadian Students: $5,000/year CAD
Location: Scarborough, ON, Canada
Program Length: 2-4 years depending on program
Admission Requirements: Req:
Link: https://wpstaging.building-u.com/programs/aviation-operations-technology-and-safety-programs/`,
    },
    {
      id: "edu-4",
      title: "AGRICULTURE (TECHGRONOMY: PRECISION AGRICULTURE)",
      icons: ["flag_ca", "cert"],
      content: `Combine agronomy, and technology to get techgronomy! Blending the essential work of farming with the high tech world of Data Analytics and New Technologies, the Precision Agriculture Techgronomy Diploma at Olds College may be the perfect program fit for you! You're probably not alone if you're thinking, "what even is agronomy?" So let's get that out of the way: agronomy is agriculture machinery/purpose built network management. Sort of, down-to-earth high tech… get hands-on learning experience in this agriculture program by installing and troubleshooting agricultural equipment, and learn about how techgronomy fits in economics, environmental, and social principles. You get to: learn about and analyze the interdependence of agricultural ecosystems, analyze the design and function of agricultural equipment within agricultural contexts to impact agronomics, and make recommendations around sustainable cropping decisions to stakeholders. Plus learn in an immersive environment – students who participate in this unique agriculture program get to work and live on the Olds College Smart Farm ecosystem. In addition, you will work with industry professionals on the business side where you will interact with stakeholders, and get some insights into investments, and financial planning. This agriculture program is your chance to build and apply scientific knowledge and field experience (literally!!). Maybe an interesting option to consider? If so, apply now!

Cost: $7,180 / Books & Supplies: $1,500 (CAD)
Location: Olds, Alberta Canada
Program Length: 2 years (Diploma program)
Admission Requirements: Req: Applicants to this agriculture program must earn certain minimum grades in English, Math, and Sciences.
Link: https://wpstaging.building-u.com/programs/precision-agriculture-techgronomy-diploma/`,
    },
    {
      id: "edu-5",
      title: "FLIGHT SCHOOLS HQ",
      icons: ["flag_us", "remote"],
      content: `Flight Schools HQ is a dedicated platform that helps individuals, like you, find the best flight schools near you. The platform is important because choosing the right flight school is pivotal in becoming a pilot. This platform is special because it provides aspiring pilots with a comprehensive list of flight schools, making it easier to find the most suitable school for your needs in a location that suits you. Additionally, Flight Schools HQ makes you aware of scholarship opportunities that can cover various expenses associated with flight schools including tuition, room, board, and meals. This complete database is essential for aspiring pilots as it contains pilot salaries based on location and experience, as well as key financial information which makes becoming a pilot and affording the career associated with becoming a pilot, easier to navigate for aspiring pilots like you. This platform is an essential tool for finding, comparing, and applying to flight school programs, so check it out to find a flight school from the comfort of your laptop, tablet, or phone screen at your leisure. They even invite your questions! The application dates vary between flight schools and so do their associated costs; so stay informed and use the information on Flight Schools HQ to learn your options for acquiring the skills and training to become the pilot that you have always dreamed of being, now!

Cost: Varies by school
Location: This is a virtual database of United States flight schools that can be used from anywhere.
Program Length: This is a comprehensive database of US Flight schools. Program length can vary depending on the school and program.
Admission Requirements: Req: Varies by school.
Link: https://wpstaging.building-u.com/programs/flight-schools-hq/`,
    },
    {
      id: "edu-6",
      title: "MAX THE MUTT ANIMATION PROGRAM",
      icons: ["flag_ca", "cert"],
      content: `Very small, well respected, digital media school in downtown Toronto — Ranked no. 1 in N.America and No.3 worldwide for concept art. Intensive diploma programs in Animation, Concept Art, and Sequential Art (ie comics and graphic novels in addition to children's book illustration). Students range in age from 17-50+ from Canada and abroad. All Instructors are working professionals. High degree of personal attention – class size limited to 15 and often smaller. Focus on Introduction to industry standards and representatives. Graduates have gone on to work for Warner Bros, Shadow Machine, Ubisoft, and Guru among others… Click the link and take a tour!

Cost: $12,500/yr (Canadian)
Location: Toronto, Ontario, Canada
Program Length: Diploma (4 years)
Admission Requirements: Req: Portfolio and application.
Link: https://wpstaging.building-u.com/programs/max-the-mutt-animation-program/`,
    },
    {
      id: "edu-7",
      title: "BIORESOURCE SCIENCE AND ENGINEERING",
      icons: ["flag_us", "coop", "paid"],
      content: `Are you passionate about the world's natural resources but also enjoy mathematics and applying it to real world concepts? Well if that is the case why not seek a degree in Bioresource Science and Engineering at the University of Washington where you can combine your abilities in mathematics and chemistry to your passion for bioresources. This program is a five year chemical science program that can be combined with chemical engineering, enabling you to pursue both the environment and the importance of biomass resources alongside the theories of engineering. Through pursuing this degree you would be able to gain the opportunity to learn the fundamentals of both science and engineering to be able to access a career in any chemical or manufacturing engineering jobs. There is a requirement of a minimum 3 month internship though many students often do 6-12 month internships… that are PAID at a rate of $2500-$4000/month so you will definitely have work experience when you graduate! Your interests in the environment can be further pursued through the latter years of this program where you will be taught chemical analysis of biomass, use of natural non-wood products, thermal conversion of biomass to fuels and chemicals, readily preparing you for any aspect of the engineering sector and in particular the chemical engineering sector.

Cost: Home student tuition: $12,076 USD
Location: University of Washington, Seattle, Washington
Program Length: 4-5 years
Admission Requirements: Req: Standard university admissions.
Link: https://wpstaging.building-u.com/programs/bioresource-science-and-engineering/`,
    },
    {
      id: "edu-8",
      title: "APPAREL AND TEXTILE DESIGN",
      icons: ["flag_ca", "cert"],
      content: `This apparel construction program offered by the College of the North Atlantic is one of a kind!! Explore textile, surface, and garment design in this apparel construction program using various contemporary and traditional media and techniques. These include hand-sewing, garment construction using machine sewing, and fabric construction through knit, weave, and felt, all based on YOUR personal style! Students also gain experiential knowledge in this apparel construction program, through fine craft and design fairs, wholesale trade shows, gallery exhibitions, and fashion shows. But wait, there's more! This apparel construction program also covers important entrepreneurial skills through grant application and proposal writing workshops, marketing and promotional events, and work reviews. And everything included in this apparel construction program is at an incredibly reasonable cost!! Once you've successfully completed this apparel construction program, you will have the foundation to launch your career in the textile and apparel industry, as an independent artist or as part of any number of its business correlatives!

Cost: Contact institution for current tuition rates.
Location: St. John's, Newfoundland
Program Length: 2 years
Admission Requirements: Req: High school graduates or mature students meeting the following requirements are encouraged to apply to this apparel construction program!
Link: https://wpstaging.building-u.com/programs/textile-and-apparel-design/`,
    },
    {
      id: "edu-9",
      title: "BLOCKCHAIN MASTERS/CERTIFICATION/AND MOOC PROGRAMS",
      icons: ["flag_intl", "remote", "paid", "cert"],
      content: `The internet. Something that I'm sure many of us wouldn't be able to function without. From school to money, we are slowly converting ourselves to becoming increasingly dependent on the digital world. While interest in blockchain has exploded in recent years, educational institutions have been hesitant to develop academic programs that address the need for teaching students about the field in its entirety, including both technological and financial elements. The benefits of technology are being discovered by an expanding number of firms in finance, banking, computing, supply chain, etc. and this blockchain program aims to close a significant gap between supply of academic knowledge in the fields of cryptocurrency and blockchain technology and the high demand for it. Leading academics and industry professionals from all around the world will instruct you in this blockchain program. In fact, you'll be a part of the world's largest blockchain student community in this program with more than 900 students registered since 2014. Find employment opportunities as a developer, consultant, regulator, business analyst, financial analyst, and even become a startup entrepreneur. Scholarships are even available as well! There is a program to suit every level of interest: a Free 12 week MOOC with no previous knowledge required to get your feet wet, 3 options for Academic Certifications (each 18 weeks to complete), and the 3 semester Master's Program (with P/T and F/T and online and in-person options!). It's a node-brainer! Checkout the blockchain program option that can work for you, today!

Cost: Masters costs €12,960 (approx. $15,500.00 USD)
Location: Virtual or Cyprus
Program Length: 2 Masters Programs (online or in-person – F/T or P/T): 3 semesters or 1 yr (F/T)
Admission Requirements: Req: The free MOOC and Self Paced Academic Certification programs do not seem to have pre-requisites for admission. Enrolment for the Master's program(s) seems to be a fairly open application process (100% acceptance rate) involving past academic information, an interview, and the ability to stay in the program by passing the courses.
Link: https://wpstaging.building-u.com/programs/blockchain-program/`,
    },
    {
      id: "edu-10",
      title: "APPLIED FINE ARTS: PRINT MEDIA BFA",
      icons: ["flag_ca", "cert"],
      content: `Looking for a career path for Applied Fine Arts or to use that combination Fine Arts/Art History degree you already have? Consider looking into Concordia's Applied Fine Arts Print Media Masters program! Rave reviews from students on the academic professionalism and quality of personal support from the faculty of this Montreal based applied fine arts program. Gain knowledge and experience that can help you grow both as an artist and as a research scholar. This university is equipped with a variety of studios (8 different labs listed!) from Lithography studios and Yellow Exposure room to Letterpress Studio and Darkroom facilities, you're sure to find what you need. Understand the variety of ways and areas you can integrate your applied fine arts expertise through working with other artists! You can also get connected with different kinds and layers of applied fine arts professional and academic career opportunities in and around Montreal!

Cost: Approximately $18,600 CAN total for this Applied Fine Arts program (minimum 60 credits).
Location: Montreal, QC
Program Length: 3-4 yrs to earn a Masters Degree in this Applied Fine Arts program
Admission Requirements: Req: BFA or BA in Studio Art alone or in combination with Art History.
Link: https://wpstaging.building-u.com/programs/applied-fine-arts-print-media-bfa/`,
    },
    {
      id: "edu-11",
      title: "BREWMASTER & BREWERY OPERATIONS MANAGEMENT PROGRAM",
      icons: ["flag_ca", "cert"],
      content: `Calling all amateur brewers! Olds College offers a two year beer brewmaster program that will equip you with all the science and business skills to create and market your own unique beer. During your two years with this operations and management brewmaster program, you will make connections with big names in the brewery industry, learn business strategies from professionals to help build your brand, and take marketing courses to help effectively brand and sell your beer, all while formulating your beer's unique flavor! This brewmaster program will even give you the opportunity to compete in a school-wide beer tasting competition, and sell your beer in a retail outlet attached to the college! All in all, this brewmaster program seems like a pretty reasonable price to pay for a potential business opportunity and worth a look for any beer connoisseur!

Cost: This brewmaster program costs about $7,800 CAD/year
Location: Olds, Alberta
Program Length: 2 years
Admission Requirements: Req: To apply to this brewmaster program you must be 18 years or older with required assessments and grades for English, math and science, and portfolio.
Link: https://wpstaging.building-u.com/programs/brewmaster-and-brewery-operations-management-program/`,
    },
    {
      id: "edu-12",
      title: "APPRENTICESHIP CERTIFICATION FOR TRADES",
      icons: ["flag_ca", "paid", "cert"],
      content: `Do you enjoy working with your hands? Do you fancy the idea of going straight to work out of high school and learning on the job? Then a trade apprenticeship certification program is a great alternative to the university route and might be right for you! Start the apprenticeship certification process by completing a combination of on-site work and in-school course modules, and then move to officially begin your journey as an apprentice — getting paid while you earn a certificate of qualification for your trade of choice. For many trades, the certificate of qualification requires writing and passing an exam, but don't worry, it's an exam you will have the time and experience to be well prepared for! And Red Seal Trades (which actually account for about 80% of all trades) allow you to train and work across Canada! Once you pass, your apprenticeship officially ends, and you now move to being a certified Journeyperson. With improved and verified skills, you not only have an increased pay scale, but also more flexibility to choose or create your work situation – not to mention the unique opportunity to pay it forward and be the guiding force behind someone else's apprenticeship certification expedition!

Cost: Apprenticeship certification programs are wage positions (paid by trade sponsors). Loans and grants for tools and housing and course-work study periods are also available.
Location: Canada
Program Length: 4 to 5 years — split up into a combination of work and school studies. Includes an 8 to 12 weeks/year to do coursework — at a college or trade association hall.
Admission Requirements: Req: Apprenticeship certification candidates must be at least 16 years old and have met certain course criteria. The majority of apprenticeship certification programs require a grade 12 math credit, and some may even require grade 12 science credits. Candidates must also have a sponsor. Check out free provincial and national conferences at Skills Competencies Canada to learn more about trades out there, what they offer, and how to connect with sponsors to begin apprenticeship certification!
Link: https://wpstaging.building-u.com/programs/apprenticeship-certification-for-trades/`,
    },
    {
      id: "edu-13",
      title: "COMEDY PERFORMANCE & SKETCH WRITING",
      icons: ["flag_ca", "cert"],
      content: `"Don't take life too seriously. You will never get out of it alive." – Elbert Hubbard. If you are someone who loves to make people laugh out loud and want to share your joy of comedy with the world, consider enrolling for the Humber College Comedy Diploma. In this diploma program, you will learn stand-up, improvisation, scriptwriting, sketch comedy and other aspects of the craft in 4 semesters. The diploma program features many mainstage class shows, weekly Humber student shows at Yuk Yuk's Comedy Club and an organized end-of-year showcase for students. Applicants to this diploma program must possess an Ontario Secondary School Diploma (OSSD) and be proficient in English. You must include a theatrical monologue, a standup routine, or a comic writing sample as part of the application to the diploma program. The tuition for two semesters of this diploma program is around $6,500 for domestic students and around $16,500 for international students. If that sounds like too much, Financial Need Bursaries are available if you qualify. In addition, you will have a strong alumni network to support you through reunion shows, business opportunities and continued coaching. If you are seriously considering pursuing comedy in the future, this diploma is a great opportunity to not only learn new techniques and grow your talent, but also get into touch with experienced alumni and grow your network.

Cost: The 2022-2023 fee for two semesters varies; see institution website.
Location: Humber College… Toronto, ON Canada
Program Length: 4 semesters
Admission Requirements: Req: Ontario Secondary School Diploma (OSSD) and English proficiency; theatrical monologue, standup routine, or comic writing sample required.
Link: https://wpstaging.building-u.com/programs/humber-college-comedy-diploma/`,
    },
    {
      id: "edu-14",
      title: "WATERLOO ARCHITECTURAL STUDIES (BAS) CO-OP PROGRAM",
      icons: ["flag_ca", "coop", "paid", "cert"],
      content: `The Bachelor of Architectural Studies at the University of Waterloo offers a cutting-edge education, combining design creativity with hands-on experience through paid co-op placements lasting up to four months each! Students work with top architecture firms, design studios, and government agencies across North America and beyond, earning up to $10,000 per term while contributing to real-world projects in areas like sustainable design, urban planning, and digital innovation. While tuition costs vary (and can range into $58,738.00 CAD/year), generous distributions of financial aid, professional designation accreditation and co-op program placements/earnings make this program an accessible path to a global, career-ready architectural education — designed to shape the future of the built environment!

Cost: Tuition can range up to $58,738.00 CAD/year; generous financial aid available. Co-op students can earn up to $10,000/term.
Location: University of Waterloo, Ontario, Canada
Program Length: 4 year Bachelor's Degree
Admission Requirements: Req: See institution website for current requirements.
Link: https://wpstaging.building-u.com/programs/waterloo-bachelor-of-architectural-studies/`,
    },
    {
      id: "edu-15",
      title: "COMPUTER GAME DESIGN (BS)",
      icons: ["flag_us", "cert"],
      content: `Have you thought about pursuing computer game design? Dakota State University in South Dakota offers a Computer Game Design program (BS) that leaves students prepared for many careers. Game design requires strict attention to detail, in addition to creativity, and of course passion. In this program students will learn to cultivate these essential skills in order to be able to design, develop, and work in the game design industry. To earn this degree at Dakota State University, accepted applicants must be enrolled in the game design program for all 4 years. This game design program gives future game designers hands-on experience and strongly encourages teamwork to build communication and problem-solving skills. Students enrolled in this game design program will learn about specific tools and processes like programming languages, 3D modeling, and 2D graphics, as well as the fundamentals of game mechanics, narrative, aesthetics, and technology needed to be an efficient game designer. The admissions requirements for this game design program accommodate students from a range of backgrounds; whether you're homeschooled or a non-traditional graduate, Dakota State University will do its best to fit you in! In addition to the academic and career opportunity to learn about game design and industry practices, this game design program offers numerous options for financial aid and scholarships ranging from undergraduate to even transfer schools.

Cost: SD, IA, NE, WY, CO, MT, ND residents: $17.1k; see institution website for other rates.
Location: Madison, South Dakota
Program Length: 4 years
Admission Requirements: Req: The general admissions requirements depend on your category (high school graduate, non-high school graduate, homeschooled, non-traditional, etc.). Most categories require an ACT score greater than 18, an SAT score greater than 950, a GPA above 2.6 on a 4-point scale, and completed courses in English, advanced math, laboratory science, social science, and fine arts.
Link: https://wpstaging.building-u.com/programs/computer-game-design-dakota-state/`,
    },
    {
      id: "edu-16",
      title: "ARCHITECTURE PROGRAM – COMMUNITY AND INDIGENOUS FOCUS",
      icons: ["flag_ca", "coop", "cert"],
      content: `Are you a student who wants to pursue an architecture program? Well, check out Laurentian University, which opened the McEwen School of Architecture in 2013 – Canada's first new architectural curriculum in over 45 years! This university has invested in modern and innovative architectural buildings to combine multi-cultural perspectives to teach students about integrating sustainable materials into sensitive, functional, and beautiful architectural design. In addition, this sustainability focused architecture program has the latest technology to help students be updated and they even offer students co-op opportunities to enhance their studies and prepare them for the market. With instructors from English, French, Metis, and Anishinabek traditions, this university, located in an area surrounded by natural beauty, offers a unique multicultural approach to sustainable building and living. Students in this program will also get a chance to work with indigenous Elders and Knowledge Keepers (specifically First Nations and Metis) and even have an opportunity to earn a bilingual degree. As part of the admissions process, students need to create a portfolio that demonstrates their creativity and skills, including a statement of their interest and references. The McEwan school offers both a Bachelors and a Masters program… so if you think architecture might be in your future and have your sights set on serving traditional live and work needs in sustainable spaces, then be sure to include this new School of Architecture in your search.

Cost: $11,805 yearly for domestic student
Location: Laurentian University, Sudbury, ON, Canada
Program Length: 4 year Bachelor's… Masters program offered as well
Admission Requirements: Req: Portfolio, statement of interest, and references required. Check institution website for current academic requirements by location.
Link: https://wpstaging.building-u.com/programs/laurentian-university-architecture-program/`,
    },
    {
      id: "edu-17",
      title: "ETH STUDENT SUMMER RESEARCH FELLOWSHIP",
      icons: ["flag_intl", "paid"],
      content: `Are you a current bachelor's or master's student in CS or a CS-related field interested in exploring a research fellowship over the summer before completing the last year of your degree? Then the ETH Zurich Summer Research Fellowship is perfect for your interests. It's a 2 month fully funded fellowship; from housing to living costs, they've got you covered. They'll even take care of the travel and visa expenses! The coolest part? It's not just for locals — students worldwide are welcome! Picture yourself studying abroad at one of the top universities globally, all for free. Research topics may be suggested for you or you may propose your own! Whether you're into coding, algorithms, or the latest tech trends, this program is perfectly tailored to your interests. The application process is easy, just check out the program structure as well as the campus life details on their website and apply through the portal provided. The only borderline requirement they have is a solid foundation in English and the process of passing an interview.

Cost: Fully funded (housing, living costs, travel, and visa expenses covered — FREE!)
Location: ETH Zurich, Switzerland
Program Length: 2 months over the summer
Admission Requirements: Req: Current bachelor's or master's student in CS or a CS-related field; solid foundation in English; interview process.
Link: https://wpstaging.building-u.com/programs/eth-student-summer-research-fellowship/`,
    },
    {
      id: "edu-18",
      title: "ARCHITECTURE — ENTERTAINMENT DESIGN (BFA)",
      icons: ["flag_us", "coop", "cert"],
      content: `The Taj Mahal was built to tell the story of an emperor's love for his wife, the Statue of Liberty was built to tell the story of a friendship between the French and Americans, the Hagia Sophia was built to tell the story of religion and politics. Now, it is time for you to create your own story via architecture and entertainment design. Via the four year long entertainment design BFA in Florida's Ringling College, you will be given the opportunity to study art and architecture in a truly fantastic context, and most importantly, to translate stories into experiences. Whether you are an incoming freshman or transfer student, putting together your extensive yet flexible visual portfolio is the only major requirement of the entertainment design program, in addition to filling out the common apps and being a high school graduate. If you are worried about the cost of the entertainment design program, make sure to look into the multiple and flexible financial aid offered by Ringling College. Plus, professional internships are also integrated into EVERY student's experience! So, look no further to advance your education while telling a story and creating visually lush environments from your own imagination that everyone can experience with awe and delight!

Cost: Contact institution; financial aid available.
Location: Sarasota, Florida
Program Length: 4 year BFA (Bachelor of Fine Arts)
Admission Requirements: Req: In addition to having a high school diploma and submitting the Common App, you just need a visual portfolio to apply to this BFA program. Even the portfolio has loose requirements, so you can be as creative as you want!
Link: https://wpstaging.building-u.com/programs/entertainment-design-bfa/`,
    },
    {
      id: "edu-19",
      title: "CYBER THREAT INTELLIGENCE & DEFENSE BACHELORS",
      icons: ["flag_us", "coop", "cert"],
      content: `With the increase of online businesses and networks there have been an increase in theft and viruses and need for security both to prevent or limit hacking and to reduce the damage it can cause. Because of this, many university programs across the world offer students the tools, skills, and understanding to combat attacks against computer systems and networks looking to protect personal data or company information. Johnson and Wales University, an institution historically associated with a great culinary program, now expands its nationally recognized programming to include a bachelor's degree in Cyber Threat Intelligence and Defence. This cybersecurity program offers students the opportunity to enter a growing field of information security analysts from a slightly different angle that goes beyond security working to prevent attacks. This program looks to give students the awareness and skills to ensure businesses do not lose valuable data in the event that they ARE attacked. Some of the courses that students take include computer forensics, wireless networking, information security with cryptography and more. Students in the cybersecurity program will have the opportunity to participate in in-class labs and annual conferences. Through their partnership with the Washington Centre, this cybersecurity program provides students with continuous mentorship and internship options beyond the classroom, with well-established professionals and major companies like Johnson and Johnson and others. Students have the opportunity to choose from two campuses, Providence, Rhode Island or Charlotte, North Carolina. If you're interested in learning more about the program and about the benefits of becoming a JWU student, make sure you sign up for one of their open houses.

Cost: Per academic year, the cost is approximately $39,800.
Location: JWU Providence, JWU Charlotte, and online
Program Length: 4 years
Admission Requirements: Req: See institution website.
Link: https://wpstaging.building-u.com/programs/cyber-threat-intelligence-and-defense-bs/`,
    },
    {
      id: "edu-20",
      title: "ARCHITECTURE OF THEMED ENVIRONMENTS (MSc)",
      icons: ["flag_us", "cert"],
      content: `Have you ever been to Disney World, Sea World, or Universal Studios? What about any other themed resort? Notice how each themed resort has a certain touch to it that attracts many different groups of people? If you are interested in learning more about Themed Resorts, and already have some design background and real life or project experience, then this themed architecture program may appeal to you! The University of Florida, College of Design, Construction, and Planning has a themed architecture program called Master of Science Themed Resort Integration that is dedicated to teaching students the different components that make up themed resorts. Being a part of this themed architecture program would teach you about technology, design, and construction practices that will develop future leaders in the industry. Located at UF's CityLab-Orlando, it is even home to your favourite theme parks! This themed architecture program is a subsection of the larger architecture degree program at the University of Florida. Through this program, students will be able to learn the ins and outs of the industry, and start building their future careers. Themed environment careers include design managers, landscape architect, lighting design, and many more. You can also get a graduate certificate either independently or alongside this master's program!

Cost: Tuition costs range from $10,640 USD to $30,950 USD depending on where you are from and your living situation. Apply for financial aid on the institution website.
Location: University of Florida (UF's CityLab-Orlando)
Program Length: 16 months
Admission Requirements: Req: Beyond an undergraduate degree and a set minimum GPA and GRE scores, this themed architecture program requires three letters of recommendation, a letter of intent, and a portfolio of your creative work. There are 2 intakes/application periods annually: one to start in the fall and one to start in the spring.
Link: https://wpstaging.building-u.com/programs/msc-in-architecture-studies-of-themed-environments/`,
    },
    {
      id: "edu-21",
      title: "CYBERSECURITY TRAINING (ROGERS CATALYST)",
      icons: ["flag_ca", "remote", "paid", "cert"],
      content: `Want to build a career in cybersecurity or IT for FREE? Look no further! The Rogers Cybersecurity Catalyst is an accelerated cybersecurity training program offered through Ryerson University in partnership with SANS Institute. Upon completion of this cybersecurity training program, learners will earn 2 different certifications (GSEC and GCIH) that are recognized worldwide! This cybersecurity training program also includes interview and job readiness sessions with employment specialists to help launch your career in cybersecurity! Apply to one of three streams offered in this cybersecurity training program – RBC Women, RBC New Careers, and Rogers New Canadians. Diversity in experiences are valued in this cybersecurity training program, so if you are a tech-lover who is willing to tackle new challenges, this cybersecurity training program is for you! All you need is a laptop that meets the required specs, and an internet connection! No technological expertise required!

Cost: FREE! (…almost). You just pay a $500 registration fee.
Location: Online study + in-class training in Brampton, Ontario
Program Length: 6 month intensive cybersecurity training program
Admission Requirements: Req: Any 18 year old with a high school diploma who is a Canadian citizen or has been living in Canada for 3 years is eligible for this cybersecurity training program.
Link: https://wpstaging.building-u.com/programs/rogers-cybersecure-catalyst/`,
    },
    {
      id: "edu-22",
      title:
        "BACHELOR OF ARCTIC AND SUBARCTIC INTERDISCIPLINARY STUDIES (BASIS)",
      icons: ["flag_ca", "cert"],
      content: `Do you want to live and learn on the homelands of Innu and Inuit in Labrador? Are you looking for a degree that combines classroom-based learning with on-the-land and experiential opportunities? Then the Bachelor of Arctic and Subarctic Interdisciplinary Studies (BASIS) program is for you! This innovative undergraduate program, housed within the School of Arctic and Subarctic Studies, offers two distinct pathways: the BASIS General Degree and the BASIS Honours Degree.

Cost: All Memorial University undergraduate programs follow the same tuition model — see institution website.
Location: Labrador campus of Memorial University of Newfoundland
Program Length: 3 to 3.5 years
Admission Requirements: Req: See institution website for current admissions requirements.
Link: https://wpstaging.building-u.com/programs/bachelor-of-arctic-and-subarctic-interdiscip-linary-studies/`,
    },
    {
      id: "edu-23",
      title: "MULTIMEDIA DESIGN AND DEVELOPMENT",
      icons: ["flag_ca", "coop", "cert"],
      content: `Are you interested in how interactive digital media is designed? Then Humber's Multimedia Design and Development diploma program may be for you! This multimedia design program gives students the chance to dive into the world of multimedia design. Some of the skills you'll learn in this multimedia design course include: web design, mobile interface design, experience design, motion graphics, 2D animation, web coding, streaming, user testing, video and sound editing, user interface prototyping, digital storytelling, and interactive design. What makes Humber's Multimedia Design and Development course special is its hands-on approach. Learn more about this in one of their upcoming live, or previously recorded, information sessions. Students learn all the fundamental creative and technical skills they need to succeed in the world of multimedia design. Not only will you sharpen and develop your design skills, but you'll also have the opportunity to build your communication and collaboration skills. You'll have access to tons of live labs and in addition will be able to practice your multimedia design skills in real life through work placements! Still in doubt about what you can do? Check out the archive of various student success stories and start considering the multi-faceted possibilities of pursuing multimedia design in the beautiful city of Toronto!

Cost: Domestic: $3,705.14
Location: Humber College in Toronto, Ontario
Program Length: 8 semesters
Admission Requirements: Req: Must possess one of the following: Ontario Secondary School Diploma or equivalent.
Link: https://wpstaging.building-u.com/programs/multimedia-design-and-development/`,
    },
    {
      id: "edu-24",
      title: "ART & CODING: INTERACTION DESIGN",
      icons: ["flag_ca", "coop", "cert"],
      content: `Unique 4 year program preparing students for a career in interaction design (aka how people engage with technology). Interaction designers are creative problem solvers committed to developing better content and applications that can improve the way businesses project what they offer, and the way users experience it. Sheridan's hands-on real world projects approach allows students to cultivate big-picture thinking along with a diverse set of multidisciplinary skills and to feel comfortably equipped to work across boundaries, create their own jobs, launch their own businesses, or take the lead in new industries that don't even exist yet. Mandatory 14-week job placement between years 3 and 4 and 1-to-1 support both in and outside of class to prepare for it. Mentorship nights are scheduled regularly for project clarification, brainstorming, or general questions. Portfolio review and UX sessions feature representatives from top tier companies (i.e. Facebook) where some students go on to do internships. Definitely worth a look!

Cost: Tuition is $9,250 CAD (Canadian students) / $20,950 CAD (Int'l students)
Location: Toronto, Ontario
Program Length: 4 years
Admission Requirements: Req: High school graduate plus one senior-level Visual Arts credit (at the M or Open level) and four other grade 12 subjects at the U or M level… Or 2 semesters of postsecondary education that includes required courses.
Link: https://wpstaging.building-u.com/programs/interaction-design/`,
    },
    {
      id: "edu-25",
      title: "MASTER OF DIGITAL MEDIA",
      icons: ["flag_ca", "cert"],
      content: `Does the idea of telling stories, creating art, or even really cool projects online excite you? Then you should check out the Master of Digital Media program offered by the Center for Digital Media which is a collaboration between Simon Fraser University, University of British Columbia, Emily Carr University of Art and Design, and British Columbia Institute of Technology. As a participant of this digital media program, you can pursue this program at any one of the universities that are part of the collaboration. What would you get to do as a student in this program, you ask? You get to build video game interfaces, create digital circuses, and even be part of cool teams. When you graduate, you become an alumni of all four institutions! While in the program, you can get involved within their special digital media programs such as Teen MDM, where you get an immersive volunteer experience helping teens understand digital media. For students whose first language is not English, there is also the Pre-MDM program which prepares students with the English skills they need for the MDM program. Best of all, you get to work with people who think the same things are cool and fun so you'll never be bored. If learning through collaborative and creative high tech projects inspires and excites you, then what are you waiting for?

Cost: Tuition ranges from $12,500 CAD – $21,211 CAD
Location: The Center for Digital Media (four university locations and affiliations: UBC, Emily Carr, Simon Fraser, British Columbia Institute of Technology)
Program Length: 16 months
Admission Requirements: Req: Students are admitted through the Simon Fraser University admissions process. There is a portfolio component which can include exhibited art, designs, film, computer software code, engineering designs, or other products or deliverables from previous work. They also ask for a short Intro video, a letter of intent, and a short formal essay.
Link: https://wpstaging.building-u.com/programs/master-of-digital-media/`,
    },
    {
      id: "edu-26",
      title: "ART STUDENTS LEAGUE OF NEW YORK",
      icons: ["flag_us", "remote", "cert"],
      content: `If you love art and you enjoy making it, then the Art Students League of New York offers you the opportunity to explore those interests turning them into something tangible. Whether you are a beginner or an experienced artist, the Art Students League of New York has a program for you. With these art programs, you get to explore your interests in a way that's truly your own — free from the dogma, politics or burdensome curriculum of a more traditional post-secondary art school. In these art programs, you get to learn from some of the best in the world of art like Ai Weiwei, Dana Parlier, Anthony Antonios, and Chris Racioppi. Classes include Painting from life and Digital Media Portraiture, Art for Animation, Assemblage, Collage, Painting, Drawing, Mixed Media, and many more. Students can select classes according to an artist/instructor they're influenced by, a style of art or medium they prefer, or even just by a convenient time of day or day of the week. These art programs are for anyone on an artistic journey since students follow their own path to develop artistically in a diverse community of artists whilst learning on their own pace. For these art programs, you do not need any prerequisites nor do you need to pay any application fees, but each course has a specific price. There are ongoing online classes available now!

Cost: Costs vary depending on whether you are looking to take individual classes, or enrol in a more dedicated certificate program.
Location: NYC (virtual classes available as well!)
Program Length: Varies for each program — ranging from individual classes to 2 year and 4 year certificate programs.
Admission Requirements: Req: All the admissions requirements are in the separate links for each program or class. Aspiring artists, the certificate program, exhibition outreach, international students, model to monument, professional development, seeds of the league.
Link: https://wpstaging.building-u.com/programs/art-program-newyork/`,
    },
    {
      id: "edu-27",
      title: "DISASTER AND EMERGENCY MANAGEMENT",
      icons: ["flag_ca", "remote", "paid", "cert"],
      content: `If you want to launch your career in one of the fastest growing fields in North America and you are passionate about disaster handling, take a look at this emergency management program offered by NAIT. With a distance-delivered structure, this emergency management program is offered completely online, giving you the opportunity to study in your own time. A number of scholarships are also available to help students enrolled in this emergency management program. Theoretical knowledge and practical training are combined in this emergency management program, with 19 academic courses and a 15 week project that allows you to apply your knowledge to a real-world crisis. The academic courses offered during this emergency management program include human behaviour in disasters, effective communication, disaster mitigation, environmental disasters, managing responses and recovery, and much more! With a high rate of graduate employment, this emergency management program gives its students great preparation and opportunity for employment in public, private, non-profit, or industry sectors. The techniques and tools acquired during this emergency management program allow you to manage various areas, including business continuity, crisis management, community resilience and more!! AND this emergency management program allows you to apply for additional credentialing through the Disaster Recovery Institute and the International Association of Emergency Managers!

Cost: Domestic $7,000/year; International tuition fees $20,000/year
Location: Online
Program Length: 2 years (Diploma)
Admission Requirements: Req: Proof of English Language Proficiency and completion of Grade 12 English OR EMGT 1120/1130 courses required for this emergency management program.
Link: https://wpstaging.building-u.com/programs/disaster-and-emergency-management/`,
    },
    {
      id: "edu-28",
      title: "ARTIFICIAL INTELLIGENCE MANAGEMENT PROGRAM",
      icons: ["flag_ca", "remote", "cert"],
      content: `From self-driving cars to facial recognition and smart assistants, artificial intelligence has helped drive our world to new heights by allowing for faster decisions and safer operations. If you see yourself as the next leading voice of AI, look no further than this AI management program in the Business Information Technology Management diploma. The AI management program allows high school graduates to further their education and earn a diploma via a two-year full-length program. Focusing on areas such as computer vision, and AI ethics, the AI management program will allow participants to enter the workforce as qualified, and well-rounded candidates. If you have completed 2 years of English Language studies, and one year in mathematics, you are the perfect candidate for the AI management program! Although the price of $12,000 for domestic and $40,000 for international tuition might sound pricey, that IS the tuition for the whole program (not per year!), plus the benefits of hands-on experience including the chance to build an online business in the Cloud Business Development course and mentorship from professors are sure to be advantages when it comes to careers.

Cost: $12,000 CAD for Canadian student (entire program cost — NOT per year)
Location: Burnaby, British Columbia (online option available)
Program Length: Two years (full-time AI management diploma program)
Admission Requirements: Req: 2 years of English + 1 year of math.
Link: https://wpstaging.building-u.com/programs/artificial-intelligence-management-program/`,
    },
    {
      id: "edu-29",
      title: "DRAMA MFA — ACT/DIRECT/DESIGN/MANAGEMENT/DRAMATURGY",
      icons: ["flag_us", "cert"],
      content: `Do you perceive yourself as a player on the world stage? Or perhaps you wish to set the stage itself! If so, you have probably heard of and even considered applying to the masters program at the world renowned Yale Drama school and setting yourself up to live out your future artistic dreams. From Acting to directing to sound designing, The Yale Drama school has it all for skills-honing thespians. And now, even beyond the fact that it's Yale, it's actually free to attend… for all! Yes!!! Thanks to a $150 million endowment from David Geffen, all students can now attend the David Geffen School of Drama at Yale University for free. If you are wondering about the requirements, check out the needed documents for each specific area of study in the drama school. If you are ready to commit the next three years of your life to your passion, then throw out your fears and intimidation and consider applying to the David Geffen School of Drama. At the end of the day, the power to shape your future is in your hands.

Cost: FREE (thanks to a $150 million endowment from David Geffen)
Location: New Haven, Connecticut
Program Length: Masters program — Three years
Admission Requirements: See link for more details on how to apply to this drama school depending on what you're interested in.
Link: https://wpstaging.building-u.com/programs/drama-mfa-yale/`,
    },
    {
      id: "edu-30",
      title: "ASTROBIOLOGY BSc.",
      icons: ["flag_us", "coop", "paid", "cert"],
      content: `Many have pondered the question, does life exist on other planets? If you want the opportunity to research this topic and countless other questions like it, this space degree, Bachelor's Degree in Astrobiology from Florida Tech, can be your first step! It is the first-ever space degree in Astrobiology in the United States. This space degree features small class sizes and internationally recognized faculty. With about 1/3 of the student body coming from more than 100 different countries, Florida Tech is ranked first by US News and World Report for student diversity! To complete this space degree you will need to complete 6 different physics and space courses. Many of the students that graduate from this space degree go on to pursue master's and doctoral programs at prestigious universities like Yale, Caltech, and Johns Hopkins. As a part of this space degree, you can intern at places like NASA and The American Institute of Physics. You can also join one of Florida Tech's research groups and work on developing high-tech cameras and many other projects with this space degree. Although this space degree costs $38,200, there is financial aid available should you need it! Reach for the stars and apply today!

Cost: $38,200 (financial aid available)
Location: Melbourne, Florida
Program Length: 4 years
Admission Requirements: Req: High school transcripts, optional SAT/ACT scores, four years of math and science (including physics and chemistry).
Link: https://wpstaging.building-u.com/programs/astrobiology-bsc/`,
    },
  ],
  opportunities: [
    {
      id: "opp-placeholder",
      title: "PLACEHOLDER",
      icons: [],
      content: "Obtain data from backend.",
    },
  ],
  challenges: [
    {
      id: "challenge-placeholder",
      title: "PLACEHOLDER",
      icons: [],
      content: "Obtain data from backend.",
    },
  ],
};

/* renders a star icon as an SVG element */
const StarIcon = ({
  filled /* whether the star is filled gold (true) or gray (false) */,
  size = 20 /* star size in pixels; defaults to 20 if not provided */,
  onClick,
  onMouseEnter /* fires when the mouse pointer moves over the star */,
  onMouseLeave /* fires when the mouse pointer leaves the star */,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20" /* coordinate system for the SVG canvas */
    style={{
      cursor: "pointer" /* signals to the user that the star is clickable */,
      display: "inline-block",
      verticalAlign: "middle",
    }}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {/* star shape drawn using polygon coordinates for each vertex */}
    <polygon
      points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7"
      fill={filled ? "#EF9F27" : "#D3D1C7"}
    />
  </svg>
);

/* renders a row of 5 stars filled up to the given rating value */
const renderStars = (rating, size = 20) =>
  [1, 2, 3, 4, 5].map((n) => (
    <StarIcon key={n} filled={n <= rating} size={size} />
  ));

/* renders a single icon chip — shown in the sidebar (small) or detail panel (full size) */
const IconChip = ({ iconKey, small = false }) => {
  /* look up the label, color, and SVG for this icon key */
  const def = ICON_DEFS[iconKey];

  /* tracks whether the mouse is currently hovering over this icon */
  const [hovered, setHovered] = useState(false);

  /* render nothing if the iconKey does not exist in ICON_DEFS */
  if (!def) return null;

  /* small variant: icon emoji only, used in the sidebar list */
  if (small) {
    return (
      <span
        className={s.iconChipSmall}
        style={{ color: def.color }}
        title={def.label}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {def.svg}
        {hovered && <span className={s.iconTooltip}>{def.label}</span>}
      </span>
    );
  }

  /* full-size variant: icon emoji only, used in the detail panel */
  return (
    <span
      className={s.iconChip}
      style={{
        color: def.color,
        background: `${def.color}18` /* ~10% opacity background using hex alpha */,
        border: `1px solid ${def.color}44` /* ~27% opacity border using hex alpha */,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {def.svg}
      {hovered && <span className={s.iconTooltip}>{def.label}</span>}
    </span>
  );
};

/* main page component */
const Resources = () => {
  /* tracks the currently active page; defaults to the landing page */
  const [activePage, setActivePage] = useState("what");

  /* tracks which sub-tab is selected on the landing page; defaults to "intro" */
  const [landingTab, setLandingTab] = useState("intro");

  /* controls whether the sidebar is expanded to fullscreen */
  const [sidebarFullscreen, setSidebarFullscreen] = useState(false);

  /* stores the ID of the program currently in fullscreen mode, or null if none */
  const [fullscreenProgram, setFullscreenProgram] = useState(null);

  /* tracks which navbar style is active: "resources" or "general" */
  const [navType, setNavType] = useState("resources");

  /* stores the current text entered in the search input */
  const [searchQuery, setSearchQuery] = useState("");

  /* stores the ID of the program whose review form is currently open, or null if none */
  const [reviewingId, setReviewingId] = useState(null);

  /* controls visibility of the favorites modal */
  const [showFavsModal, setShowFavsModal] = useState(false);

  /* ref used to scroll the detail panel back to the top */
  const detailTopRef = useRef(null);

  /* tracks which programs are favorited, keyed by program ID */
  const [favorites, setFavorites] = useState({});

  /* stores all submitted reviews, keyed by program ID */
  const [reviews, setReviews] = useState({});

  /* holds the in-progress state of a review being typed by the user */
  const [reviewDraft, setReviewDraft] = useState({
    author: "",
    rating: 0 /* number of stars selected */,
    text: "",
    hovered: 0 /* number of stars currently highlighted on hover */,
  });

  /* tracks which program is open on each page; defaults to the first program per page */
  const [activeProgram, setActiveProgram] = useState({
    education: "edu-1",
    opportunities: "opp-placeholder",
    challenges: "challenge-placeholder",
  });

  /* toggles the favorited state for a given program ID */
  const toggleFavorite = (id) =>
    setFavorites((prev) => {
      /* spread prev into a new object to avoid mutating state directly */
      const updated = { ...prev };
      updated[id] = !updated[id];
      return updated;
    });

  /* counts the total number of favorited programs */
  const favCount = Object.values(favorites).filter(Boolean).length;

  const openProgram = (pageId, programId) => {
    /* update the active program for the given page only, leaving other pages unchanged */
    setActiveProgram((prev) => ({ ...prev, [pageId]: programId }));

    /* close any open review form */
    setReviewingId(null);

    /* reset the review draft fields */
    setReviewDraft({ author: "", rating: 0, text: "", hovered: 0 });

    /* scroll the detail panel to the top after a short delay to allow the DOM to update */
    setTimeout(
      () =>
        /* optional chaining prevents a crash if the ref is null when the timeout fires */
        detailTopRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
      50,
    );
  };

  /* toggles fullscreen mode for a given program ID;
     clicking the same program again closes fullscreen */
  const toggleFullscreen = (id) => {
    setFullscreenProgram((prev) => (prev === id ? null : id));
  };

  /* navigates to a different page section */
  const goToPage = (page) => {
    setActivePage(page);
  };

  /* handles review submission for a given program ID */
  const submitReview = (progId) => {
    /* block submission if no star rating has been selected */
    if (!reviewDraft.rating) return;

    const entry = {
      author:
        reviewDraft.author.trim() ||
        "Anonymous" /* fall back to "Anonymous" if name is blank */,
      rating: reviewDraft.rating,
      text: reviewDraft.text.trim(),
      /* format the date in Canadian style (e.g. Apr 6, 2026) */
      date: new Date().toLocaleDateString("en-CA", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    setReviews((prev) => ({
      ...prev /* preserve all existing reviews for other programs */,

      /* prepend the new review so the most recent one appears at the top */
      [progId]: [entry, ...(prev[progId] || [])],
    }));

    /* reset the draft and close the review form */
    setReviewDraft({ author: "", rating: 0, text: "", hovered: 0 });
    setReviewingId(null);
  };

  /* removes a specific review from a program's review list */
  const deleteReview = (progId, index) => {
    setReviews((prev) => {
      /* copy the existing reviews array for this program */
      const updated = [...(prev[progId] || [])];

      /* remove the review at the given index */
      updated.splice(index, 1);

      return { ...prev, [progId]: updated };
    });
  };

  /* calculates and returns the average star rating for a program, or null if no reviews exist */
  const avgRating = (progId) => {
    const list = reviews[progId];

    /* return null if the program has no reviews */
    if (!list?.length) return null;

    /* sum all ratings and divide by the count, formatted to 1 decimal place */
    return (list.reduce((a, r) => a + r.rating, 0) / list.length).toFixed(1);
  };

  /* returns the list of programs for a page, filtered by the current search query */
  const filteredPrograms = (pageId) => {
    const programs = PAGES_DATA[pageId] || [];

    /* return all programs unfiltered if the search box is empty */
    if (!searchQuery.trim()) return programs;

    const q = searchQuery.toLowerCase();

    /* keep only programs whose title or content contains the search query */
    return programs.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q),
    );
  };

  /* renders the row of icon chips displayed in the program detail panel */
  const renderIconBar = (icons = []) => {
    return (
      <div className={s.iconBar}>
        {icons.map((key) => (
          /* key={key} helps React efficiently track and update list items */
          <IconChip key={key} iconKey={key} />
        ))}
      </div>
    );
  };

  const renderReviews = (prog) => {
    /* retrieve existing reviews for this program, defaulting to an empty array */
    const progReviews = reviews[prog.id] || [];

    const avg = avgRating(prog.id);

    /* whether the review form is currently open for this program */
    const isWriting = reviewingId === prog.id;

    /* maps a numeric star rating (1–5) to a descriptive label */
    const ratingLabels = ["", "Poor", "Fair", "Good", "Very good", "Excellent"];

    return (
      <div className={s.reviewsSection}>
        <div className={s.reviewsHeaderRow}>
          <h4 className={s.reviewsHeading}>Reviews</h4>

          {/* display the average rating row only if at least one review exists */}
          {avg !== null && (
            <div className={s.reviewAvgRow}>
              {/* round the average to the nearest integer and render that many filled stars */}
              {renderStars(Math.round(parseFloat(avg)), 18)}

              {/* display the numeric average and total review count */}
              <span className={s.reviewAvgText}>
                {avg} / 5 ({progReviews.length})
              </span>
            </div>
          )}

          {/* show the "Write a review" button only when the form is not already open */}
          {!isWriting && (
            <button
              className={s.writeReviewBtn}
              onClick={() => {
                setReviewingId(prog.id);
                setReviewDraft({ author: "", rating: 0, text: "", hovered: 0 });
              }}
            >
              + Write a review
            </button>
          )}
        </div>

        {/* render the review input form when the user has opened it */}
        {isWriting && (
          <div className={s.reviewFormBox}>
            <span className={s.reviewFormLabel}>Your rating</span>
            <div
              style={{
                display: "flex",
                gap: "6px",
                marginBottom: "0.75rem",
                alignItems: "center",
              }}
            >
              {/* render 5 interactive star buttons for the user to select a rating */}
              {[1, 2, 3, 4, 5].map((n) => (
                <StarIcon
                  key={n}
                  size={26}
                  /* fill stars up to whichever is greater: the hovered position or the saved rating */
                  filled={n <= (reviewDraft.hovered || reviewDraft.rating)}
                  /* save the clicked star count as the selected rating */
                  onClick={() => setReviewDraft((d) => ({ ...d, rating: n }))}
                  /* highlight stars up to the hovered position for visual feedback */
                  onMouseEnter={() =>
                    setReviewDraft((d) => ({ ...d, hovered: n }))
                  }
                  /* clear the hover highlight when the mouse leaves */
                  onMouseLeave={() =>
                    setReviewDraft((d) => ({ ...d, hovered: 0 }))
                  }
                />
              ))}

              {/* show a text label for the currently selected rating (e.g. "Good") */}
              {reviewDraft.rating > 0 && (
                <span className={s.reviewRatingLabel}>
                  {ratingLabels[reviewDraft.rating]}
                </span>
              )}
            </div>

            <input
              type="text"
              placeholder="Your name (optional)"
              value={reviewDraft.author}
              /* update the author field as the user types */
              onChange={(e) =>
                setReviewDraft((d) => ({ ...d, author: e.target.value }))
              }
              className={s.reviewInput}
            />
            <textarea
              placeholder="Share your experience with this program…"
              value={reviewDraft.text}
              /* update the text field as the user types */
              onChange={(e) =>
                setReviewDraft((d) => ({ ...d, text: e.target.value }))
              }
              rows={4}
              className={s.reviewTextarea}
            />

            <div className={s.reviewFormActions}>
              <button
                className={s.reviewSubmitBtn}
                onClick={() => submitReview(prog.id)}
                /* disable submission until the user has selected a star rating */
                disabled={!reviewDraft.rating}
                /* visually reflect the enabled/disabled state */
                style={{
                  background: reviewDraft.rating ? "#7F77DD" : "#e5e7eb",
                  color: reviewDraft.rating ? "#fff" : "#aaa",
                  cursor: reviewDraft.rating ? "pointer" : "not-allowed",
                }}
              >
                Submit
              </button>

              <button
                className={s.reviewCancelBtn}
                /* close the review form without saving */
                onClick={() => setReviewingId(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* show an empty-state message when there are no reviews and the form is closed */}
        {progReviews.length === 0 && !isWriting && (
          <p className={s.emptyReviews}>No reviews yet. Be the first!</p>
        )}

        {/* render each submitted review */}
        {progReviews.map((r, i) => (
          <div key={i} className={s.reviewItem}>
            <div className={s.reviewItemHeader}>
              <span className={s.reviewAuthor}>{r.author}</span>
              <span style={{ display: "flex", gap: "2px" }}>
                {renderStars(r.rating, 15)}
              </span>
              <span className={s.reviewDate}>{r.date}</span>

              <button
                className={s.deleteReviewBtn}
                onClick={() => deleteReview(prog.id, i)}
                title="Delete this review"
              >
                ×
              </button>
            </div>

            {/* render the review body only if the user provided text */}
            {r.text && <p className={s.reviewText}>{r.text}</p>}
          </div>
        ))}
      </div>
    );
  };

  /* renders the detail panel for the currently selected program on a given page */
  const renderPrograms = (pageId) => {
    /* find the program object matching the active program ID for this page */
    const prog = (PAGES_DATA[pageId] || []).find(
      (p) => p.id === activeProgram[pageId],
    );

    /* show a fallback message if no matching program is found */
    if (!prog)
      return (
        <div className={s.emptyState}>
          Select a program from the sidebar to view details.
        </div>
      );

    const isFavorited = favorites[prog.id];

    const isFullscreen = fullscreenProgram === prog.id;

    return (
      <div
        className={`${s.programDetails} ${isFullscreen ? s.fullscreenActive : ""}`}
      >
        {/* invisible anchor element used as the scroll target for "Back to top" */}
        <div ref={detailTopRef} style={{ position: "absolute", top: 0 }} />

        <div className={s.detailsHeader}>
          <button
            className={s.favButton}
            onClick={() => toggleFavorite(prog.id)}
            aria-label="Toggle favourite"
          >
            <img
              src={
                /* switch the icon image based on whether the program is favorited */
                isFavorited
                  ? "/assets/icons/btn_add-to-fav-ok.png"
                  : "/assets/icons/btn_add-to-fav.png"
              }
              alt="Favourite"
              className={s.favIcon}
            />
          </button>

          <button
            className={s.fullscreenButton}
            onClick={() => toggleFullscreen(prog.id)}
            title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? "✕" : "⛶"}
          </button>
        </div>

        <h3 className={s.progTitle}>{prog.title}</h3>

        {renderIconBar(prog.icons)}

        <div className={s.progContent}>
          {/* split the content string on newlines and wrap each line in a paragraph */}
          {prog.content.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <button
          className={s.backToTopBtn}
          onClick={() =>
            /* optional chaining prevents a crash if the ref has become null */
            detailTopRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          title="Back to top"
        >
          ↑ Back to top
        </button>

        {renderReviews(prog)}
      </div>
    );
  };

  /* builds the list of favorited program entries shown in the favorites modal */
  const favoriteListItems = Object.keys(favorites)
    /* keep only IDs that are currently marked as favorited */
    .filter((k) => favorites[k])
    .map((id) => {
      let title =
        "Saved Program"; /* fallback title if the program is not found */

      /* search every page's program list for the matching ID */
      Object.values(PAGES_DATA).forEach((page) => {
        /* .find() stops iterating as soon as a match is found */
        const found = page.find((p) => p.id === id);
        if (found) title = found.title;
      });

      return (
        <div key={id} className={s.favItem}>
          <span>{title}</span>
          {/* clicking "Remove" toggles the program out of favorites */}
          <button onClick={() => toggleFavorite(id)}>Remove</button>
        </div>
      );
    });

  /* defines the tabs shown on the landing page */
  const landingTabs = [
    { id: "intro", label: "Intro" },
    { id: "education", label: "Education Programs" },
    { id: "opps", label: "Skill-Building Opportunities" },
    { id: "contests", label: "Contests & Challenges" },
  ];

  /* maps each landing tab ID to its title, body content, and optional navigation target */
  const landingBoxContent = {
    intro: {
      title: null /* no title shown for the intro tab */,
      body: (
        <>
          Resources are a bit like chocolate.
          <br />
          <br />
          In theory, the more the better. Put into practice, though, sometimes
          more can get in the way and doesn't feel like 'better'.
          <br />
          <br />
          We research and investigate each resource we select and feature —
          independently, unsolicited, and based on criteria that reflects
          extraordinary value and opportunity.
          <br />
          <br />
          Because whether it's chocolate, or something else that purports to
          enrich your life, we feel that you should be clear on the ingredients.
        </>
      ),
    },
    education: {
      title: "Educational Programs",
      body: "We collect ones that you might not know about, have understandable cost information, and help you meet people who can help you grow.",
      page: "education",
    },
    opps: {
      title: "Skill-Building Opportunities",
      body: "We find experiences that stand alone based on outcomes and provide you with skills you might not find in a traditional classroom.",
      page: "opportunities",
    },
    contests: {
      title: "Funding & Contests",
      body: "We highlight audio/video competitions, problem-solving contests, and creative projects that allow you to showcase great skill-sets.",
      page: "challenges",
    },
  };

  /* holds the content object for the currently selected landing tab */
  const currentBox = landingBoxContent[landingTab];

  return (
    <Layout>
      <main className={s.container}>
        <div
          className={s.characterWrapper}
          style={{
            /* position the lizard and logo on the left for the landing page, right for all others */
            left: activePage === "what" ? "25px" : "auto",
            right: activePage !== "what" ? "25px" : "auto",
          }}
        >
          <img
            src="/assets/homepage/resources-logo.png"
            className={s.resourcesLogoSmall}
          />
          <img
            src="/assets/homepage/lizard.png"
            className={s.lizardImgDynamic}
          />
        </div>

        {/* pink trapezoid background shape shown only on the landing page */}
        {activePage === "what" && <div className={s.pinkTrapezoid} />}

        {/* apply orange styling to the navbar when the general nav is active */}
        <nav
          className={`${s.navbar} ${navType === "general" ? s.orangeNavbar : ""}`}
        >
          <img src="/assets/homepage/logo_white.png" className={s.logo} />

          <ul className={s.menu}>
            {/* render different nav links depending on which navbar type is active */}
            {navType === "resources" ? (
              /* resources-specific navigation links */
              <>
                <li onClick={() => goToPage("what")}>
                  <a>What are Resources?</a>
                </li>
                <li onClick={() => goToPage("education")}>
                  <a>Education Programs</a>
                </li>
                <li onClick={() => goToPage("opportunities")}>
                  <a>Skill-Building Opportunities</a>
                </li>
                <li onClick={() => goToPage("challenges")}>
                  <a>Contests & Challenges</a>
                </li>
                <li>
                  <button
                    onClick={() => setShowFavsModal(true)}
                    className={s.favsNavBtn}
                  >
                    {/* show the count of favorited programs next to the label */}
                    My Favorites{" "}
                    {favCount >= 0 && (
                      <span className={s.favBadge}>{favCount}</span>
                    )}{" "}
                    ⭐
                  </button>
                </li>
              </>
            ) : (
              /* general site navigation links */
              <>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </>
            )}
          </ul>

          {/* toggles between the resources navbar and the general navbar */}
          <button
            className={s.navToggleBtn}
            onClick={() =>
              setNavType(navType === "resources" ? "general" : "resources")
            }
          >
            {navType === "resources" ? "Main Navbar" : "Resources Navbar"}
          </button>
        </nav>

        {/* landing page content — rendered only when the user is on the "what" page */}
        {activePage === "what" && (
          <section className={s.landingPage}>
            <div className={s.tabContainer}>
              {landingTabs.map(({ id, label }) => (
                <button
                  key={id}
                  /* apply the active tab style when this tab is selected */
                  className={`${s.tab} ${landingTab === id ? s.activeTab : ""}`}
                  onClick={() => setLandingTab(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className={s.infoBoxContainer}>
              <img
                src="/assets/homepage/chocolate1.png"
                className={s.chocolateImg}
              />

              <div className={s.orangeBox}>
                {/* render the box title only if the current tab has one */}
                {currentBox.title && (
                  <p>
                    <b>{currentBox.title}</b>
                  </p>
                )}
                {currentBox.body}

                {/* render the navigation button only if the tab links to a page */}
                {currentBox.page && (
                  <button
                    className={s.takeMeBtn}
                    onClick={() => goToPage(currentBox.page)}
                  >
                    Take me to this page →
                  </button>
                )}
              </div>
            </div>
          </section>
        )}

        {/* main content area — rendered for all pages except the landing page */}
        {activePage !== "what" && (
          <section
            /* hide the sidebar when a program is in fullscreen mode */
            className={`${s.content} ${fullscreenProgram ? s.sidebarHidden : ""}`}
          >
            <div
              /* expand the sidebar to cover the content area when sidebarFullscreen is true */
              className={`${s.sidebar} ${sidebarFullscreen ? s.fullscreenView : ""}`}
            >
              <button
                className={s.sidebarFullscreenBtn}
                /* toggle the sidebar fullscreen state */
                onClick={() => setSidebarFullscreen((p) => !p)}
                title={
                  sidebarFullscreen
                    ? "Exit sidebar fullscreen"
                    : "Expand sidebar"
                }
              >
                ⛶
              </button>

              <div className={s.searchWrapper}>
                <span className={s.searchIcon}>🔍</span>
                <input
                  type="text"
                  className={s.searchInput}
                  placeholder="Search programs…"
                  value={searchQuery}
                  /* update the search query as the user types */
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {/* show the clear button only when there is text in the search box */}
                {searchQuery && (
                  <button
                    className={s.searchClear}
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* show a "no results" message if no programs match the search query */}
              {filteredPrograms(activePage).length === 0 ? (
                <p className={s.noResults}>No programs match "{searchQuery}"</p>
              ) : (
                /* render a sidebar button for each matching program */
                filteredPrograms(activePage).map((prog) => (
                  <button
                    key={prog.id}
                    /* highlight the button for the currently selected program */
                    className={`${s.programItem} ${activeProgram[activePage] === prog.id ? s.active : ""}`}
                    onClick={() => openProgram(activePage, prog.id)}
                  >
                    <span className={s.progItemText}>{prog.title}</span>

                    {/* render icon chips in the sidebar only if the program has icons */}
                    {prog.icons.length > 0 && (
                      <span className={s.sidebarIconRow}>
                        {/* render a small icon chip for each icon key */}
                        {prog.icons.map((key) => (
                          <IconChip key={key} iconKey={key} small />
                        ))}
                      </span>
                    )}

                    {/* show the average star rating inline if the program has been reviewed */}
                    {avgRating(prog.id) !== null && (
                      <span className={s.miniRating}>
                        ★ {avgRating(prog.id)}
                      </span>
                    )}
                  </button>
                ))
              )}

              <div className={s.sidebarLegend} />
            </div>

            <div
              /* apply a pink background for the education and challenges pages */
              className={`${s.mainContent} ${activePage === "education" || activePage === "challenges" ? s.pinkPage : ""}`}
            >
              {renderPrograms(activePage)}
            </div>
          </section>
        )}

        {/* favorites modal — rendered only when the user opens it */}
        {showFavsModal && (
          <div className={s.modalOverlay}>
            <div className={s.modalContent}>
              <button
                className={s.closeFavorites}
                onClick={() => setShowFavsModal(false)}
              >
                ×
              </button>

              <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>
                My Favorites ⭐
              </h3>

              {/* show the list of favorited programs, or an empty-state message */}
              {favoriteListItems.length > 0 ? (
                favoriteListItems
              ) : (
                <p>No favorites saved yet!</p>
              )}
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default Resources;
