import Job from "../components/job";

const jobs = [
    {
        title: 'Intermediate Software Developer',
        time: '2021 - Present',
        description: 'Led the re-architecture of a Python-based report generator, saving clients extensive manual work. Also developed a reusable component library in Flutter, enhancing code quality and team onboarding. Spearheaded CI/CD improvements and served as Scrum Master, driving agile practices across the company.',
        company: 'Giatec',
        companyLink: 's',
    },
    {
        title: 'Software Developer',
        time: '2019 - 2021',
        description: 'Enhanced front-end functionality with React, contributed to a high-coverage DRM solution using Python, and bolstered DevOps capabilities with Docker and Kubernetes. Played a key role in improving system reliability and alerting for real-time content protection.',
        company: 'Irdeto',
        companyLink: 's',
    },
    {
        title: 'Bachelor of Computing (Honours)',
        time: '2014 - 2018',
        description: 'Graduated with a strong foundation in computing, specializing in software design. Actively participated in university clubs, consistently taking on technical roles, which honed both leadership and collaboration skills while applying classroom knowledge to real-world challenges.',
        company: 'Queens University',
        companyLink: 's',
    },
    {
        title: 'Data Analyst Intern',
        time: '2017',
        description: 'Supported data management for over 100 schools by optimizing data collection processes, resulting in significant labor savings. Collaborated closely with data analysts to maintain and improve the accuracy of technology asset databases.',
        company: 'SCDSB',
        companyLink: 's',
    }
];

export default function Career() {
    return  (
        <div id="career">
            <div className="vt-section-title title" id="career-title">My Career<span className='accent-color'>.</span></div>
            <div id="jobs-container">
                {jobs.map(j => (
                    <Job job={j} />
                ))}
            </div>
        </div>
    );
};