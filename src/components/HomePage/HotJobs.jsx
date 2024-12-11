import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = () => {
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
            {
                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
    );
};

export default HotJobs;