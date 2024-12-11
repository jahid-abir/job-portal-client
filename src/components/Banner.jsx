import React from 'react';
import { motion } from "motion/react"
import { easeInOut } from 'motion';
import team1 from '../assets/groupPic/team1.jpg'
import team2 from '../assets/groupPic/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img animate={{y:[50,100,50]}} transition={{duration:5, repeat:Infinity}} src={team1}
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-8 border-blue-400 border-b-8" />
                    <motion.img animate={{x:[100,150,100]}} transition={{duration:5, repeat:Infinity}} src={team2}
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-8 border-blue-400 border-b-8" />
                </div>
                <div className='flex-1'>
                    <motion.h1 animate={{x:100}} transition={{duration:2 ,delay:1, ease:easeInOut, repeat:Infinity}} className="text-5xl font-bold">Latest <motion.span animate={{color: ['#e9f620','#e15d3a','#19eca5']}} transition={{repeat:Infinity, duration:3}}>Job</motion.span> For You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;