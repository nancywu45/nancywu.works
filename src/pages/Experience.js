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
      bullet1: 'Co-leading a team of 23 to provide educational workshops, competitions, mentoring programmes, and networking opportunities centred around finance and investing',
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
    }
  ]

  const [workToggle, setWorkToggle] = useState()
  const [expToggle, setExpToggle] = useState()

  return (
    <section ref={ref} id="experience" className="min-h-[calc(100vh-100px)] w-full bg-green md:px-24 lg:px-40 font-main text-primary">
      <div className="p-10">
        <div className="flex">
            <h2 className="flex-shrink text-3xl">experience</h2>
            <div className="flex-grow border-t border-grey mt-5 ml-4"></div>
        </div>
        <h3 className="text-2xl my-4">work</h3>
        <div className="font-code flex">
          <div className="flex-col">
            {
              work.map(({id, company}) => {
                return(
                  <button 
                    className="border-l-2 p-4 text-left w-full hover:bg-lightGreen focus:bg-lightGreen active:bg-lightGreen"
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
                    <div className="ml-6">
                      <p className="my-1 text-lg">{company} · {role} </p>
                      <p className="my-1 text-grey">{startDate} — {endDate}</p>
                      <ul className="my-1 ml-6 list-disc">
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
        
        <h3 className="text-2xl my-4">extracurricular</h3>
        <div className="font-code flex">
          <div className="flex-col">
            {
              extracurricular.map(({id, company}) => {
                return(
                  <button 
                    className="border-l-2 p-4 text-left w-full hover:bg-lightGreen focus:bg-lightGreen active:bg-lightGreen"
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
                    <div className="ml-6">
                      <p className="my-1 text-lg">{company} · {role} </p>
                      <p className="my-1 text-grey">{startDate} — {endDate}</p>
                      <ul className="my-1 ml-6 list-disc">
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
