export default function Job({ job }) {
    return (
        <div className="job-container">
                <div className="job-time">{job.time}</div>
                <span className="job-circle-seperator">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#7fb069" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span>
                <div className="job-title">
                    {job.title} - {job.company} 
                    <a className="job-link" >
                    </a>
                </div>
            <div className="job-description">{job.description}</div>
        </div>
    );
}