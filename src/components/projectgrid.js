import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../components/projectcard';
import projectorder from "../json/_projectorder.json";
import { motion } from "framer-motion";

// scss
import '../styles/app.scss';

//svgs
import flurish from "../svgs/flurish_lines.svg";




// ------------- Start of Code ------------- //




export function ProjectGrid() {

  const xRight = {
    hidden: { x: -15, y: 0, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 1.4, duration: 1, ease: [0.05, 0.15, 0.30, 0.99] } }
  };


  const projectListFiltered = () => {

    let pageSet = [];

    // for loop that looks at the URL and excludes the current page in the grid of projects
    for (let property in projectorder.order) {

      // print all values of projectorder
      // console.log(`${property}: ${projectorder.order[property]}`);

      // current URL
      let currentpage = window.location.href;
      // console.log(currentpage);

      // if the project is in the Str(URL) then don't add it to the new array
      if (currentpage.includes(projectorder.order[property])) {
        continue;
      }
      else {
        pageSet.push(projectorder.order[property]);
      }
    }

    return pageSet;
  }


  let pageSet = projectListFiltered();
  // console.log(pageSet);


  const pairs = () => {

    // new array
    var groups = [];

    // For loop that counts to two, pushes values in sets of 2 to groups array
    for (var i = 0; i < pageSet.length; i += 2) {
      groups.push(pageSet.slice(i, i + 2));
    }
    // console.log(groups);
    return groups;
  }

  
  let groups = pairs();

  
  // Primary Return
  return (

    <div className="container">


      {/* Project Links */}
      <motion.div 
        className='row'
        initial="hidden"
        animate="visible"
        variants={xRight}
      >
        <img className='flurish-horizontal' src={flurish} alt='flurish' />
        <h3 className='flurish-text'>PROJECTS</h3>
      </motion.div>

      {// Start of Dynamic Loading of Grid
        groups.map((project, index) => {
                  
          // console.log('group map', project.length)
          // console.log('project', project);

          // If array has 2 items, & is even index
          if (project.length === 2 && index % 2 === 0) {

            // return
            return (
              <div key={`project-card-${project}-${index}`} className='row'>
                <div className="col-12 flex-parent">
                  <Link className='flex-child-66' to={'/' + project[0]}>
                    <ProjectCard projectName={project[0]}/>
                  </Link>
                  
                  <div className='d-lg-none phone-between-padding'></div>

                  <Link className='flex-child-33' to={'/' + project[1]}>
                    <ProjectCard projectName={project[1]}/>
                  </Link>
                </div>
              </div>
            )
          
            // If array has 2 items, & is odd index
          } else if (project.length === 2 && index % 1 === 0) {

            // return
            return (
              <div key={`project-card-${project}-${index}`} className='row'>
                <div className="col-12 flex-parent">
                  <Link className='flex-child-33' to={'/' + project[0]}>
                    <ProjectCard projectName={project[0]}/>
                  </Link>
                  
                  <div className='d-lg-none phone-between-padding'></div>

                  <Link className='flex-child-66' to={'/' + project[1]}>
                    <ProjectCard projectName={project[1]}/>
                  </Link>
                </div>
              </div>
            )

            // If array has 1 item
          } else {

            return (
              <div key={`project-card-${project}-${index}`} className='row'>
                <div className="col-12 flex-parent">
                  <Link className='w-100 flex-child-100' to={'/' + project[0]}>
                    <ProjectCard projectName={project[0]}/>
                  </Link>
                </div>
              </div>
            )
          }
        }
      )}


    </div>
  );
}

export default ProjectGrid;