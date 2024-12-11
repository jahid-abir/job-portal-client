import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobData= useLoaderData()
    const { _id,title, company_logo, location, salaryRange, description, company, requirements,responsibilities,category,applicationDeadline } =jobData;
    return (
        <div className='my-10'>
            <img src={company_logo} alt="" />
            <h3 className='text-2xl font-semibold'>Name : {company}</h3>
            <h3 className='text-2xl font-semibold'>Location: {location}</h3>
            <h3 className='text-2xl font-semibold'>Description: {description}</h3>
            <h3 className='text-2xl font-semibold'>Job Title: {title}</h3>
            <h3 className='text-2xl font-semibold'>Category: {category}</h3>
            <h3 className='text-2xl font-semibold'>Deadline: {applicationDeadline}</h3>
            <h3 className='text-2xl font-semibold'>Salary Range: {salaryRange.min} - {salaryRange.max}</h3>
            <div>
                <h3 className='text-2xl font-semibold'>Requirement : </h3>
                {
                    requirements.map((skill,idx) => <p key={idx}>{idx +1}. {skill}</p>)
                }
            </div>
            <div>
            <h3 className='text-2xl font-semibold'>Responsibilities : </h3>
                {
                    responsibilities.map((res,idx) => <p key={idx}>{idx +1}. {res}</p>)
                }
            </div>
            <button className='btn btn-outline'>Apply Now</button>
        </div>
    );
};

export default JobDetails;