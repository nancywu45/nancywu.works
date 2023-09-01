import React, { forwardRef, useState } from "react";

const Experience = forwardRef((props, ref) => {

  const work = [
    {
      id: 'PwC',
      company: 'PwC',
      role: 'Corporate Treasury Intern',
      startDate: 'Nov 2022',
      endDate: 'Present',
      bullet1: 'Contributed to development of Treasury Intelligence, an SQL and PowerBI-based SaaS to help clients monitor hedging and risks',
      bullet2: 'Assisted with commentary on FX and interest rate markets for clients'
    },
    {
      id: '2d',
      company: '2degrees',
      role: 'Retail Assistant',
      startDate: 'Nov 2021',
      endDate: 'Oct 2022',
      bullet1: 'Upselling tech products and mobile/broadband plans with long-term financing options to read monthly store KPI targets',
      bullet2: 'Reached more than $8,000 daily sales in peak periods',
    }
  ]

  const extracurricular = [
    {
      id: 'UAIC',
      company: 'University of Auckland Investment Club',
      role: 'Co-President',
      startDate: 'Oct 2022',
      endDate: 'Present',
      bullet1: 'Co-leading a team of 23 to provide a 30+ event schedule for members, consisting of educational workshops, competitions, mentoring programmes, and networking opportunities centred around finance and investing',
      bullet2: 'Increased club membership numbers by 67% to ~450 in 2023',
    },
    {
      id: 'DEVS',
      company: 'Developers Society',
      role: 'Treasurer',
      startDate: 'Nov 2022',
      endDate: 'Present',
      bullet1: 'Largest student run tech club in NZ aiming to bridge the gap between academia and industry, consisting of ~300 members',
      bullet2: 'Communicating with firms for sponsorship contracts and managed the yearly budget for EOY financial statements',
    },
    {
      id: 'UoA Case',
      company: 'University of Auckland Case Programme',
      role: 'Member',
      startDate: 'Sep 2022',
      endDate: 'Present',
      bullet1: 'Working in teams to analyse a business case and formulate strategies and implementation recommendations before presenting to a panel of judges',
      bullet2: 'Eligible to represent the university in national and international case competitions',
    }
  ]

  const [workToggle, setWorkToggle] = useState('PwC')
  const [expToggle, setExpToggle] = useState('UAIC')

  return (
    <section ref={ref} id="experience" className="min-h-[calc(100vh-100px)] w-full bg-green md:px-24 lg:px-40 font-main text-primary">
      <div className="p-10">
        <div className="flex">
            <h2 className="flex-shrink text-3xl">experience</h2>
            <div className="flex-grow border-t border-grey mt-5 ml-4"></div>
        </div>
        <h3 className="text-2xl mt-4 mb-2 md:my-4">work</h3>
        <div className="font-code font-light md:flex">
          <div className="pb-2 md:pb-0">
            {
              work.map(({id, company}) => {
                return(
                  <button 
                    className={`border-b-2 md:border-l-2  ${workToggle === id ? 'border-grey text-grey bg-midGreen' : 'border-lightGreen text-lightGreen'}  md:border-b-0 px-4 py-2 text-center md:text-left w-28 md:py-4  font-normal text-left`}
                    onClick={() => setWorkToggle(id)}
                  >
                    {company}
                  </button>
                )
              })
            }
          </div>
          <div>
            {
              work.map(({id, company, role, startDate, endDate, bullet1, bullet2}) => {
                return(
                  <>
                    {workToggle === id ? (
                    <div className="md:ml-6">
                      <p className="my-1 font-normal text-base md:text-lg">{company} · {role} </p>
                      <p className="my-1 text-grey text-sm md:text-base">{startDate} — {endDate}</p>
                      <ul className="my-1 ml-6 list-disc text-sm md:text-base">
                        <li className="my-2">
                          {bullet1}
                        </li>
                        <li className="my-2">
                          {bullet2}
                        </li>
                      </ul>
                    </div>) : null}
                  </>
                  
                )
              })
            }
          </div>
        </div>
        
        <h3 className="text-2xl mt-4 mb-2 md:my-4">extracurricular</h3>
        <div className="font-code font-light md:flex">
          <div className="pb-2 md:pb-0">
            {
              extracurricular.map(({id, company}) => {
                return(
                  <button 
                    className={`border-b-2 md:border-l-2  ${expToggle === id ? 'border-grey text-grey bg-midGreen' : 'border-lightGreen text-lightGreen'}  md:border-b-0 px-4 py-2 text-center md:text-left w-28 md:py-4  font-normal text-left`}
                    onClick={() => setExpToggle(id)}
                  >
                    {id}
                  </button>
                )
              })
            }
          </div>
          <div>
            {
              extracurricular.map(({id, company, role, startDate, endDate, bullet1, bullet2}) => {
                return(
                  <>
                    {expToggle === id ? (
                    <div className="md:ml-6">
                      <p className="my-1 font-normal text-base md:text-lg">{company} · {role} </p>
                      <p className="my-1 text-grey text-sm md:text-base">{startDate} — {endDate}</p>
                      <ul className="my-1 ml-6 list-disc text-sm md:text-base">
                        <li className="my-2">
                          {bullet1}
                        </li>
                        <li className="my-2">
                          {bullet2}
                        </li>
                      </ul>
                    </div>) : null}
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;