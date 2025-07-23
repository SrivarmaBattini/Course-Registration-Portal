const curriculumData = {
            // SCHOOL OF COMPUTING DATA
            CSE: {
                semesters: 8,
                courses: {
                    1: { names: ['Engineering Physics', 'Engineering Mathematics I', 'Basic Electrical Engineering', 'Programming for Problem Solving'], credits: [4, 4, 3, 4], totalCredits: 15 },
                    2: { names: ['Engineering Chemistry', 'Engineering Mathematics II', 'Basic Civil & Mechanical Engg.', 'Object Oriented Programming'], credits: [4, 4, 3, 4], totalCredits: 15 },
                    3: { names: ['Data Structures & Algorithms', 'Digital Electronics', 'Database Management Systems', 'Software Engineering'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    4: { names: ['Operating Systems', 'Computer Networks', 'Design & Analysis of Algorithms', 'Theory of Computation'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    5: { names: ['Compiler Design', 'Web Technologies', 'Machine Learning', 'Elective I'], credits: [4, 3, 4, 3], totalCredits: 14 },
                    6: { names: ['Distributed Systems', 'Cryptography & Network Security', 'Cloud Computing', 'Elective II'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    7: { names: ['Big Data Analytics', 'Internet of Things (IoT)', 'Elective III', 'Project Phase I'], credits: [4, 4, 3, 3], totalCredits: 14 },
                    8: { names: ['Final Project / Internship'], credits: [15], totalCredits: 15 }
                }
            },
            AI: {
                semesters: 8,
                courses: {
                    1: { names: ['Linear Algebra & Calculus', 'Python for AI', 'Digital Logic Design', 'Intro to AI'], credits: [4, 4, 3, 4], totalCredits: 15 },
                    2: { names: ['Data Structures for AI', 'Probability & Statistics', 'Computer Architecture', 'Object Oriented Programming'], credits: [4, 4, 3, 4], totalCredits: 15 },
                    3: { names: ['Foundations of Machine Learning', 'Database Systems', 'Operating Systems', 'Software Engineering'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    4: { names: ['Deep Learning', 'Natural Language Processing', 'Design & Analysis of Algorithms', 'Computer Networks'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    5: { names: ['Computer Vision', 'Reinforcement Learning', 'Big Data Technologies', 'Elective I'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    6: { names: ['Explainable AI (XAI)', 'AI Ethics & Governance', 'Cloud Computing for AI', 'Elective II'], credits: [3, 3, 4, 3], totalCredits: 13 },
                    7: { names: ['Robotics & Automation', 'AI in Healthcare', 'Elective III', 'Project Phase I'], credits: [4, 4, 3, 3], totalCredits: 14 },
                    8: { names: ['Final Project / Internship'], credits: [15], totalCredits: 15 }
                }
            },
            AIDS: {
                semesters: 8,
                courses: {
                    1: { names: ['Calculus & Linear Algebra', 'Python Programming', 'Digital Fundamentals', 'Intro to Data Science'], credits: [4, 4, 3, 4], totalCredits: 15 },
                    2: { names: ['Data Structures & Algorithms', 'Probability & Statistics', 'Database Management', 'Object Oriented Programming'], credits: [4, 4, 4, 4], totalCredits: 16 },
                    3: { names: ['Foundations of Machine Learning', 'Data Warehousing', 'Operating Systems', 'Software Engineering Principles'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    4: { names: ['Deep Learning Architectures', 'Big Data Analytics', 'Data Visualization Techniques', 'Computer Networks'], credits: [4, 4, 3, 3], totalCredits: 14 },
                    5: { names: ['Natural Language Processing', 'Data Mining', 'Cloud Computing Platforms', 'Elective I'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    6: { names: ['Predictive Analytics', 'AI Ethics', 'Streaming Data Processing', 'Elective II'], credits: [4, 3, 4, 3], totalCredits: 14 },
                    7: { names: ['Business Intelligence', 'Time Series Analysis', 'Elective III', 'Project Phase I'], credits: [4, 4, 3, 3], totalCredits: 14 },
                    8: { names: ['Final Project / Internship'], credits: [15], totalCredits: 15 }
                }
            },
            CS: {
                semesters: 8,
                courses: {
                    1: { names: ['Intro to Cybersecurity', 'Engineering Mathematics I', 'Digital Principles', 'Problem Solving using C'], credits: [4, 4, 3, 4], totalCredits: 15 },
                    2: { names: ['Data Structures', 'Engineering Mathematics II', 'Network Essentials', 'Object Oriented Programming in Java'], credits: [4, 4, 3, 4], totalCredits: 15 },
                    3: { names: ['Computer Networks', 'Database Security', 'Operating Systems Security', 'Ethical Hacking'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    4: { names: ['Cryptography Fundamentals', 'Web Application Security', 'Cyber Laws & Ethics', 'Secure Software Design'], credits: [4, 4, 3, 3], totalCredits: 14 },
                    5: { names: ['Malware Analysis', 'Digital Forensics', 'Cloud Security', 'Elective I'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    6: { names: ['IoT & OT Security', 'Incident Response Management', 'Blockchain Security', 'Elective II'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    7: { names: ['Penetration Testing', 'Threat Intelligence', 'Elective III', 'Project Phase I'], credits: [4, 4, 3, 3], totalCredits: 14 },
                    8: { names: ['Final Project / Internship'], credits: [15], totalCredits: 15 }
                }
            },
            // SCHOOL OF BUSINESS DATA
            BBA: {
                semesters: 6,
                courses: {
                    1: { names: ['Principles of Management', 'Financial Accounting', 'Business Mathematics-1', 'Microeconomics', 'Business Communication'], credits: [4, 4, 4, 3, 3], totalCredits: 18 },
                    2: { names: ['Organizational Behavior', 'Marketing Management', 'Business Mathematics-2', 'Macroeconomics', 'Business Statistics'], credits: [4, 4, 4, 3, 3], totalCredits: 18 },
                    3: { names: ['Human Resource Management', 'Financial Management', 'Operations Management', 'Management Information Systems', 'Business Ethics'], credits: [4, 4, 4, 3, 3], totalCredits: 18 },
                    4: { names: ['Strategic Management', 'International Business', 'Research Methodology', 'Entrepreneurship Development', 'Consumer Behavior'], credits: [4, 4, 4, 3, 3], totalCredits: 18 },
                    5: { names: ['Project Management', 'Supply Chain Management', 'Financial Markets and Services', 'Elective I', 'Internship I'], credits: [4, 4, 4, 3, 2], totalCredits: 17 },
                    6: { names: ['Corporate Governance', 'Services Marketing', 'Elective II', 'Final Project'], credits: [4, 4, 3, 5], totalCredits: 16 }
                }
            },
            BCom: {
                semesters: 6,
                courses: {
                    1: { names: ['Financial Accounting', 'Business Law', 'Microeconomics', 'Business Organization & Management'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    2: { names: ['Corporate Accounting', 'Business Statistics', 'Macroeconomics', 'Marketing Management'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    3: { names: ['Cost Accounting', 'Human Resource Management', 'Indian Economy', 'Corporate Laws'], credits: [4, 4, 4, 3], totalCredits: 15 },
                    4: { names: ['Income Tax Law & Practice', 'Financial Management', 'E-Commerce', 'Entrepreneurship'], credits: [4, 4, 3, 3], totalCredits: 14 },
                    5: { names: ['Auditing & Corporate Governance', 'Financial Markets & Institutions', 'Elective I (e.g., International Business)'], credits: [4, 4, 3], totalCredits: 11 },
                    6: { names: ['GST & Customs Law', 'Management Accounting', 'Elective II (e.g., Digital Marketing)', 'Project Work'], credits: [4, 4, 3, 4], totalCredits: 15 }
                }
            },
            MBA: {
                semesters: 4,
                courses: {
                    1: { names: ['Management Principles', 'Managerial Economics', 'Financial Accounting', 'Quantitative Methods', 'Marketing Management'], credits: [3, 3, 3, 3, 3], totalCredits: 15 },
                    2: { names: ['Organizational Behavior', 'Corporate Finance', 'Operations Management', 'Business Communication', 'Human Resource Management'], credits: [3, 3, 3, 3, 3], totalCredits: 15 },
                    3: { names: ['Strategic Management', 'Business Analytics', 'Elective I (e.g., Supply Chain)', 'Elective II (e.g., Investment Analysis)', 'Summer Internship Report'], credits: [3, 3, 3, 3, 2], totalCredits: 14 },
                    4: { names: ['International Business', 'Business Ethics & Governance', 'Elective III', 'Final Project'], credits: [3, 3, 3, 5], totalCredits: 14 }
                }
            },
            PGDM: {
                 semesters: 4,
                 courses: {
                    1: { names: ['Principles of Management & OB', 'Managerial Economics', 'Financial Reporting', 'Statistics for Management', 'Marketing Essentials'], credits: [3, 3, 3, 3, 3], totalCredits: 15 },
                    2: { names: ['Corporate Finance', 'Operations & Supply Chain', 'Business Communication', 'Human Resource Management', 'Business Research Methods'], credits: [3, 3, 3, 3, 3], totalCredits: 15 },
                    3: { names: ['Strategic Management', 'Business Analytics', 'Specialization I', 'Specialization II', 'Industry Internship Project'], credits: [3, 3, 3, 3, 3], totalCredits: 15 },
                    4: { names: ['International Business Strategy', 'Corporate Governance & Ethics', 'Specialization III', 'Final Capstone Project'], credits: [3, 3, 3, 6], totalCredits: 15 }
                 }
            }
        };


function updateWelcomeMessage() {
    const name = document.getElementById('name').value;
    const usernameSpan = document.getElementById('username');
    usernameSpan.textContent = name || 'User';
}

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', options);
    const time = now.toLocaleTimeString('en-US');
    document.getElementById('datetime').textContent = `${date} | ${time}`;
}

function updateBranches() {
    const school = document.getElementById('School').value;
    const branchSelect = document.getElementById('Branch');
    branchSelect.innerHTML = '<option disabled selected>Select Branch</option>'; // Reset

    if (school === 'computing') {
        branchSelect.innerHTML += '<option value="CSE">B.Tech - Computer Science & Engineering</option>';
        branchSelect.innerHTML += '<option value="AI">B.Tech - Artificial Intelligence</option>';
        branchSelect.innerHTML += '<option value="AIDS">B.Tech - AI & Data Science</option>';
        branchSelect.innerHTML += '<option value="CS">B.Tech - Cybersecurity</option>';
    } else if (school === 'business') {
        branchSelect.innerHTML += '<option value="BBA">Bachelor of Business Administration</option>';
        branchSelect.innerHTML += '<option value="BCom">B.Com (Hons.)</option>';
        branchSelect.innerHTML += '<option value="MBA">Master of Business Administration</option>';
        branchSelect.innerHTML += '<option value="PGDM">Post Graduate Diploma in Management</option>';
    }
    updateSemesters(); // Also reset semesters
}

function updateSemesters() {
    const branchCode = document.getElementById('Branch').value;
    const semesterSelect = document.getElementById('Semester');
    semesterSelect.innerHTML = '<option disabled selected>Select Semester</option>'; // Reset

    if (branchCode && curriculumData[branchCode]) {
        const semesterCount = curriculumData[branchCode].semesters;
        for (let i = 1; i <= semesterCount; i++) {
            semesterSelect.innerHTML += `<option value="${i}">Semester ${i}</option>`;
        }
    }
    updateTable(); // Clear table when branch changes
}

function updateTable() {
    const branch = document.getElementById('Branch').value;
    const semester = document.getElementById('Semester').value;
    const courseTable = document.getElementById('course-table');
            
    if (!branch || !semester) {
        courseTable.innerHTML = '';
            return;
    }
            
    let tableHtml = '<table><thead><tr><th>S.No</th><th>Select</th><th>Course Name</th><th>Credits</th></tr></thead><tbody>';
            
    const semesterData = curriculumData[branch]?.courses[semester];

    if (semesterData && semesterData.names) {
        for (let i = 0; i < semesterData.names.length; i++) {
            tableHtml += `<tr><td>${i + 1}</td><td><input type="checkbox" class="course-checkbox" data-credits="${semesterData.credits[i]}"></td><td>${semesterData.names[i]}</td><td>${semesterData.credits[i]}</td></tr>`;
        }
    } else {
        tableHtml += '<tr><td colspan="4" style="text-align:center;">Course data not available for this semester.</td></tr>';
    }

    tableHtml += '</tbody></table>';
    courseTable.innerHTML = tableHtml;
}

function enrollCourses() {
    const checkedBoxes = document.querySelectorAll('.course-checkbox:checked');
    let totalCredits = 0;
    let selectedCourses = [];

    checkedBoxes.forEach(checkbox => {
        totalCredits += parseInt(checkbox.getAttribute('data-credits'));
        const courseName = checkbox.closest('tr').cells[2].textContent;
        selectedCourses.push(courseName);
    });

    const branch = document.getElementById('Branch').value;
    const semester = document.getElementById('Semester').value;

    if(!branch || !semester) {
        alert('Please select a school, branch, and semester first.');
        return;
    }

    const requiredCredits = curriculumData[branch]?.courses[semester]?.totalCredits;

    if (checkedBoxes.length === 0) {
        alert('Please select at least one course to enroll.');
    } else if (totalCredits !== requiredCredits) {
        alert(`You must select exactly ${requiredCredits} credits for this semester. You have selected ${totalCredits} credits.`);
    } else {
        sessionStorage.setItem('registeredCourses', JSON.stringify(selectedCourses));
        window.location.href = "confirmation.html";
    }
}

function logout(event) {
    event.preventDefault(); 
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = "index.html";
    }
}

// Initial setup calls
updateDateTime();
setInterval(updateDateTime, 1000);
updateTable();