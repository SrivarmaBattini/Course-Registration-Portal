const curriculumData = {
    // SCHOOL OF COMPUTING DATA
    CSE: {
        semesters: 8,
        courses: {
            1: { names: ['Engineering Physics', 'Engineering Mathematics I', 'Basic Electrical Engineering', 'Programming for Problem Solving'], credits: [4, 4, 3, 4] },
            2: { names: ['Engineering Chemistry', 'Engineering Mathematics II', 'Basic Civil & Mechanical Engg.', 'Object Oriented Programming'], credits: [4, 4, 3, 4] },
            3: { names: ['Data Structures & Algorithms', 'Digital Electronics', 'Database Management Systems', 'Software Engineering'], credits: [4, 4, 4, 3] },
            4: { names: ['Operating Systems', 'Computer Networks', 'Design & Analysis of Algorithms', 'Theory of Computation'], credits: [4, 4, 4, 3] },
            5: { names: ['Compiler Design', 'Web Technologies', 'Machine Learning', 'Elective I'], credits: [4, 3, 4, 3] },
            6: { names: ['Distributed Systems', 'Cryptography & Network Security', 'Cloud Computing', 'Elective II'], credits: [4, 4, 4, 3] },
            7: { names: ['Big Data Analytics', 'Internet of Things (IoT)', 'Elective III', 'Project Phase I'], credits: [4, 4, 3, 3] },
            8: { names: ['Final Project / Internship'], credits: [15] }
        }
    },
    AI: {
        semesters: 8,
        courses: {
            1: { names: ['Linear Algebra & Calculus', 'Python for AI', 'Digital Logic Design', 'Intro to AI'], credits: [4, 4, 3, 4] },
            2: { names: ['Data Structures for AI', 'Probability & Statistics', 'Computer Architecture', 'Object Oriented Programming'], credits: [4, 4, 3, 4] },
            3: { names: ['Foundations of Machine Learning', 'Database Systems', 'Operating Systems', 'Software Engineering'], credits: [4, 4, 4, 3] },
            4: { names: ['Deep Learning', 'Natural Language Processing', 'Design & Analysis of Algorithms', 'Computer Networks'], credits: [4, 4, 4, 3] },
            5: { names: ['Computer Vision', 'Reinforcement Learning', 'Big Data Technologies', 'Elective I'], credits: [4, 4, 4, 3] },
            6: { names: ['Explainable AI (XAI)', 'AI Ethics & Governance', 'Cloud Computing for AI', 'Elective II'], credits: [3, 3, 4, 3] },
            7: { names: ['Robotics & Automation', 'AI in Healthcare', 'Elective III', 'Project Phase I'], credits: [4, 4, 3, 3] },
            8: { names: ['Final Project / Internship'], credits: [15] }
        }
    },
    AIDS: {
        semesters: 8,
        courses: {
            1: { names: ['Calculus & Linear Algebra', 'Python Programming', 'Digital Fundamentals', 'Intro to Data Science'], credits: [4, 4, 3, 4] },
            2: { names: ['Data Structures & Algorithms', 'Probability & Statistics', 'Database Management', 'Object Oriented Programming'], credits: [4, 4, 4, 4] },
            3: { names: ['Foundations of Machine Learning', 'Data Warehousing', 'Operating Systems', 'Software Engineering Principles'], credits: [4, 4, 4, 3] },
            4: { names: ['Deep Learning Architectures', 'Big Data Analytics', 'Data Visualization Techniques', 'Computer Networks'], credits: [4, 4, 3, 3] },
            5: { names: ['Natural Language Processing', 'Data Mining', 'Cloud Computing Platforms', 'Elective I'], credits: [4, 4, 4, 3] },
            6: { names: ['Predictive Analytics', 'AI Ethics', 'Streaming Data Processing', 'Elective II'], credits: [4, 3, 4, 3] },
            7: { names: ['Business Intelligence', 'Time Series Analysis', 'Elective III', 'Project Phase I'], credits: [4, 4, 3, 3] },
            8: { names: ['Final Project / Internship'], credits: [15] }
        }
    },
    CS: {
        semesters: 8,
        courses: {
            1: { names: ['Intro to Cybersecurity', 'Engineering Mathematics I', 'Digital Principles', 'Problem Solving using C'], credits: [4, 4, 3, 4] },
            2: { names: ['Data Structures', 'Engineering Mathematics II', 'Network Essentials', 'Object Oriented Programming in Java'], credits: [4, 4, 3, 4] },
            3: { names: ['Computer Networks', 'Database Security', 'Operating Systems Security', 'Ethical Hacking'], credits: [4, 4, 4, 3] },
            4: { names: ['Cryptography Fundamentals', 'Web Application Security', 'Cyber Laws & Ethics', 'Secure Software Design'], credits: [4, 4, 3, 3] },
            5: { names: ['Malware Analysis', 'Digital Forensics', 'Cloud Security', 'Elective I'], credits: [4, 4, 4, 3] },
            6: { names: ['IoT & OT Security', 'Incident Response Management', 'Blockchain Security', 'Elective II'], credits: [4, 4, 4, 3] },
            7: { names: ['Penetration Testing', 'Threat Intelligence', 'Elective III', 'Project Phase I'], credits: [4, 4, 3, 3] },
            8: { names: ['Final Project / Internship'], credits: [15] }
        }
    },
    
    // SCHOOL OF BUSINESS DATA
    BBA: {
        semesters: 6,
        courses: {
            1: { names: ['Principles of Management', 'Financial Accounting', 'Business Mathematics-1', 'Microeconomics', 'Business Communication'], credits: [4, 4, 4, 3, 3] },
            2: { names: ['Organizational Behavior', 'Marketing Management', 'Business Mathematics-2', 'Macroeconomics', 'Business Statistics'], credits: [4, 4, 4, 3, 3] },
            3: { names: ['Human Resource Management', 'Financial Management', 'Operations Management', 'Management Information Systems', 'Business Ethics'], credits: [4, 4, 4, 3, 3] },
            4: { names: ['Strategic Management', 'International Business', 'Research Methodology', 'Entrepreneurship Development', 'Consumer Behavior'], credits: [4, 4, 4, 3, 3] },
            5: { names: ['Project Management', 'Supply Chain Management', 'Financial Markets and Services', 'Elective I', 'Internship I'], credits: [4, 4, 4, 3, 2] },
            6: { names: ['Corporate Governance', 'Services Marketing', 'Elective II', 'Final Project'], credits: [4, 4, 3, 5] }
        }
    },
    BCom: {
        semesters: 6,
        courses: {
            1: { names: ['Financial Accounting', 'Business Law', 'Microeconomics', 'Business Organization & Management'], credits: [4, 4, 4, 3] },
            2: { names: ['Corporate Accounting', 'Business Statistics', 'Macroeconomics', 'Marketing Management'], credits: [4, 4, 4, 3] },
            3: { names: ['Cost Accounting', 'Human Resource Management', 'Indian Economy', 'Corporate Laws'], credits: [4, 4, 4, 3] },
            4: { names: ['Income Tax Law & Practice', 'Financial Management', 'E-Commerce', 'Entrepreneurship'], credits: [4, 4, 3, 3] },
            5: { names: ['Auditing & Corporate Governance', 'Financial Markets & Institutions', 'Elective I (e.g., International Business)'], credits: [4, 4, 3] },
            6: { names: ['GST & Customs Law', 'Management Accounting', 'Elective II (e.g., Digital Marketing)', 'Project Work'], credits: [4, 4, 3, 4] }
        }
    },
    MBA: {
        semesters: 4,
        courses: {
            1: { names: ['Management Principles', 'Managerial Economics', 'Financial Accounting', 'Quantitative Methods', 'Marketing Management'], credits: [3, 3, 3, 3, 3] },
            2: { names: ['Organizational Behavior', 'Corporate Finance', 'Operations Management', 'Business Communication', 'Human Resource Management'], credits: [3, 3, 3, 3, 3] },
            3: { names: ['Strategic Management', 'Business Analytics', 'Elective I (e.g., Supply Chain)', 'Elective II (e.g., Investment Analysis)', 'Summer Internship Report'], credits: [3, 3, 3, 3, 2] },
            4: { names: ['International Business', 'Business Ethics & Governance', 'Elective III', 'Final Project'], credits: [3, 3, 3, 5] }
        }
    },
    PGDM: {
        semesters: 4,
        courses: {
            1: { names: ['Principles of Management & OB', 'Managerial Economics', 'Financial Reporting', 'Statistics for Management', 'Marketing Essentials'], credits: [3, 3, 3, 3, 3] },
            2: { names: ['Corporate Finance', 'Operations & Supply Chain', 'Business Communication', 'Human Resource Management', 'Business Research Methods'], credits: [3, 3, 3, 3, 3] },
            3: { names: ['Strategic Management', 'Business Analytics', 'Specialization I', 'Specialization II', 'Industry Internship Project'], credits: [3, 3, 3, 3, 3] },
            4: { names: ['International Business Strategy', 'Corporate Governance & Ethics', 'Specialization III', 'Final Capstone Project'], credits: [3, 3, 3, 6] }
        }
    }    
};

function showCurriculum(programCode, programName) {
    const displayDiv = document.getElementById('curriculum-display');
    const titleEl = document.getElementById('curriculum-title');
    const accordionContainer = document.getElementById('accordion-container');

    document.querySelectorAll('.program-card').forEach(card => card.classList.remove('active'));
    event.currentTarget.classList.add('active');
            
    titleEl.textContent = programName;
    accordionContainer.innerHTML = ''; // Clear previous content

    const program = curriculumData[programCode];
    if (program && program.courses) {
        for (let i = 1; i <= program.semesters; i++) {
            const detailsEl = document.createElement('details');
            detailsEl.className = 'semester-item';
                    
            const summaryEl = document.createElement('summary');
            summaryEl.textContent = `Semester ${i}`;
                    
            const tableContainer = document.createElement('div');
            tableContainer.className = 'course-table-container';
                    
            let tableHtml = '<table><thead><tr><th>Subject Name</th><th>Credits</th></tr></thead><tbody>';
                    
            const semesterCourses = program.courses[i];
            if(semesterCourses && semesterCourses.names) {
                for (let j = 0; j < semesterCourses.names.length; j++) {
                    tableHtml += `<tr><td>${semesterCourses.names[j]}</td><td>${semesterCourses.credits[j]}</td></tr>`;
                }
            } else {
                tableHtml += `<tr><td colspan="2">Curriculum for this semester is under development.</td></tr>`;
            }
                    
            tableHtml += '</tbody></table>';
            tableContainer.innerHTML = tableHtml;
                    
            detailsEl.appendChild(summaryEl);
            detailsEl.appendChild(tableContainer);
            accordionContainer.appendChild(detailsEl);
        }
    }

    displayDiv.style.display = 'block';
    displayDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
