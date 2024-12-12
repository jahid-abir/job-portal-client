import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const ApplyJobs = () => {
    const {id} = useParams()
    const {user} = useAuth()
    const navigate = useNavigate()
    const handleApplyJobs = e => {
        e.preventDefault()
        const linkedIn = e.target.linkedin.value;
        const github  = e.target.github.value;
        const resume = e.target.resume.value;
        // console.log(LinkedIn,Github,Resume)

        const jobApplication = {
            job_id : id,
            applicant:user.email,
            linkedIn,
            github,
            resume
        }
        fetch('http://localhost:5000/job-applications',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
                  navigate('/myApplication')
            }
        })
    }
    return (
        <div className="card bg-base-100 w-full shadow-2xl">
            <form onSubmit={handleApplyJobs} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn</span>
                    </label>
                    <input type="url" placeholder="LinkedIn" name='linkedin' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github</span>
                    </label>
                    <input type="url" placeholder="Github" name='github' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume</span>
                    </label>
                    <input type="url" placeholder="Resume" name='resume' className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default ApplyJobs;