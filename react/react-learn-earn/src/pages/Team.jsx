import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import DataService from '../service/DataService';

const Team = () => {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    DataService.getTeam()
         .then((response) => {
          setTeams(response.data);
         });
  }, []);

  return (
    <>
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="breadcrumb-hero">
          <div className="container">
            <div className="breadcrumb-hero">
              <h2>Team</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <ol>
            <li><NavLink to="/"> Home </NavLink></li>
            <li>Team</li>
          </ol>
        </div>
      </section>

      
      <section id="team" className="team">
        <div className="container">

          <div className="row">

            {
              teams.map((team) => 
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up">
                <div className="member-img">
                  <img src={team.image_src} className="img-fluid" alt="" />
                  <div className="social">
                    <a href={team.twitter} target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
                    <a href={team.facebook} target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                    <a href={team.instagram} target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                    <a href={team.linkedin} target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{team.name}</h4>
                  <span>{team.designation}</span>
                  <p>{team.content}</p>
                </div>
              </div>
            </div>
              )
            }
          </div>

        </div>
      </section>

    </main>
    </>
  )
}

export default Team;