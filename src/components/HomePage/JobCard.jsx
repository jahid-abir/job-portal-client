import React from 'react';
import { SiGooglemaps } from 'react-icons/si';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { _id,title, company_logo, location, salaryRange, description, company, requirements } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className='flex gap-2 pl-4 mt-4'>
            <figure>
                <img className='w-16'
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            <div>
                <h3 className="text-4xl">{company}</h3>
                <p className='flex items-center gap-1'><SiGooglemaps/> {location}</p>
            </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}<div className="badge badge-secondary">NEW</div></h2>
                <p>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        requirements.map((skill,idx) => <p key={idx} className='border p-3 rounded-lg'>{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-between items-center">
                    <div>
                        <p>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    </div>
                   <Link to={`/jobs/${_id}`}>
                   <button className="btn btn-primary">Apply</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;