import React from 'react';
import { HeaderNoLogo } from '../components/header';
import ProjectGrid from '../components/projectgrid';
import { motion } from "framer-motion";

// scss
import '../styles/app.scss';

// svgs
import heroLines from "../svgs/home_lines.svg";
import smallHeroLines from "../svgs/home_small_lines.svg";
import namelines from "../svgs/name_lines.svg";



function Home() {


  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: .5,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 0, opacity: .6, rotate: 0, pathLength: 0, pathSpacing: .2, transition: {delay: 0} },
    visible: { y: 0, opacity: 1, rotate: 0, pathLength: 1, pathSpacing: 0, transition: {delay: 0, duration: 2} }
  };

  const yUp = {
    hidden: { x: 0, y: -15, opacity: 0, transition: {delay: 0} },
    visible: { x: 0, y: -30, opacity: 1, transition: {delay: .3, duration: .8, ease: [0.05, 0.15, 0.30, 0.99] } }
  };

  const yDown = {
    hidden: { x: 0, y: -15, opacity: 0, transition: {delay: 0} },
    visible: { x :0, y: -5, opacity: 1, transition: {delay: .8, duration: 1, ease: [0.05, 0.15, 0.30, 0.99] } }
  };
  


  return (

    <div className="container">
      <HeaderNoLogo />

      <motion.div 
        className='row hero-banner'
        initial="hidden"
        animate="visible"
        variants={container}
      >

        <div className='text-center flex-md-equal justify-content-center center-bg'>

          <motion.svg
            className='svglines'
            width="762" 
            height="265" 
            viewBox="0 0 762 265" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M110.759 263.5C144.651 233.854 189.27 212.26 245.513 213.632C374.016 216.766 466.214 111.335 496.25 58.2272C504.495 42.2771 519.053 21.7519 539.869 1.50001" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M1.30566 192.802C37.0323 151.958 89.1225 117.893 159.322 119.605C261.844 122.106 341.257 55.5031 384.431 1.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M1.39404 37.3325C22.7973 29.369 46.6786 24.934 73.1313 25.5792C113.394 26.5612 150.093 16.8852 182.432 1.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M761.352 21.9535C652.056 38.3516 585.986 112.64 564.158 154.865C547.591 184.158 512.112 229.368 462.062 263.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M761.352 143.694C702.788 173.818 665.67 219.253 650.348 248.892C647.79 253.415 644.781 258.317 641.337 263.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M24.584 263.5C59.783 213.123 117.648 164.584 201.112 166.619C329.614 169.753 421.812 64.3221 451.848 11.2146C453.44 8.1353 455.267 4.88548 457.329 1.50001" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M1.30566 106.091C31.9692 85.2416 69.6852 71.4891 114.921 72.5924C188.436 74.3854 250.069 40.6465 294.978 1.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M761.352 78.5176C676.858 104.786 624.837 165.338 605.947 201.879C596.359 218.832 580.436 241.117 559.02 263.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M761.352 212.537C739.361 228.908 721.883 246.891 708.952 263.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M69.0576 263.5C104.789 222.577 156.928 188.41 227.23 190.125C355.732 193.259 447.93 87.8276 477.967 34.7202C483 24.9839 490.385 13.5429 500.11 1.50001" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M1.30566 150.45C35.7658 118.527 81.9975 94.6589 141.039 96.0989C229.019 98.2448 299.981 49.5001 345.627 1.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M1.30566 8.09592C17.8239 3.80978 35.6596 1.6046 54.8484 2.07262C62.7901 2.26632 70.5931 2.04536 78.2514 1.44771" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M402.708 263.5C474.5 229.961 525.082 168.122 545.875 131.358C566.542 91.3785 626.871 22.6546 726 1.53999" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M761.352 111.61C692.176 141.032 648.925 192.772 632.066 225.385C625.872 236.336 617.036 249.511 605.784 263.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M761.352 254C758.033 257.162 754.867 260.335 751.854 263.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M1.5 247.085C1.57056 246.977 1.64122 246.87 1.71198 246.762C36.373 194.061 95.63 140.985 182.829 143.112C300.963 145.993 388.415 57.1219 425.095 1.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M1.30566 71.502C28.3193 57.0372 60.0141 48.1926 96.6379 49.0859C154.826 50.5051 205.57 29.6638 246.469 1.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M761.352 50.0035C666.045 72.6552 607.88 139.265 587.664 178.372C574.692 201.308 550.124 234.005 516.045 263.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M761.352 176.504C718.406 203.506 689.457 237.955 674.689 263.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M259.195 263.587C264.949 263.226 270.836 263.11 276.855 263.257C405.358 266.391 497.556 160.96 527.592 107.852C543.11 77.833 580.989 31.6081 640.865 1.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M160.791 263.5C188.332 248.248 220.836 238.83 258.572 239.75C387.075 242.884 479.273 137.453 509.309 84.3456C521.176 61.3892 546.12 28.9556 583.978 1.5" stroke="#272727"/>
            <motion.path strokeLinecap="round" strokeLinejoin="round" initial="hidden" animate="visible" variants={item} d="M3.00002 263.5C2.17159 263.5 1.5 262.828 1.5 262L1.49999 3.00003C1.49999 2.17163 2.17156 1.50003 2.99999 1.50003L305.921 1.50002L760 1.5C760.828 1.5 761.5 2.17157 761.5 3L761.5 262C761.5 262.828 760.828 263.5 760 263.5L3.00002 263.5Z" stroke="#4A4A4A"/>
          </motion.svg>

          <motion.svg
            className='svglines_small' 
            width="456" 
            height="264" 
            viewBox="0 0 456 264" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <motion.path initial="hidden" animate="visible" variants={item} d="M386.869 0.499998C366.053 20.7518 351.495 41.2771 343.25 57.2272C313.214 110.335 221.016 215.766 92.5129 212.632C57.3787 211.775 26.7807 219.88 0.5 233.311" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M231.431 0.49999C188.257 54.5031 108.844 121.106 6.32211 118.605C4.36738 118.557 2.42669 118.537 0.5 118.545" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M29.4328 0.500014C20.142 4.92001 10.4915 8.8688 0.5 12.229" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M309.062 262.5C359.112 228.368 394.591 183.158 411.158 153.865C419.49 137.748 434.268 116.958 455.435 96.5" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M304.329 0.500017C302.267 3.88548 300.44 7.1353 298.848 10.2146C268.812 63.3221 176.614 168.753 48.1116 165.619C31.198 165.207 15.3356 166.871 0.5 170.207" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M141.978 0.499994C105.166 32.588 57.1181 61.0426 0.5 69.2732" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M406.021 262.5C427.437 240.117 443.359 217.832 452.947 200.879C453.74 199.345 454.591 197.77 455.5 196.157" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M347.111 0.500008C337.386 12.5429 330.001 23.9839 324.968 33.7202C294.931 86.8276 202.733 192.259 74.2307 189.125C46.9542 188.459 22.4117 193.196 0.500977 201.632" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M192.627 0.500007C149.157 46.2128 82.725 92.6008 0.5 95.0646" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M249.708 262.5C321.501 228.961 372.082 167.122 392.875 130.358C403.435 109.931 424.348 82.001 455.5 56.7507" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M272.095 0.499988C235.415 56.1218 147.963 144.993 29.8289 142.112C19.6755 141.864 9.90098 142.365 0.5 143.527" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M93.4693 0.499996C66.5238 19.055 35.3052 34.4317 0.5 42.3583" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M363.045 262.5C397.124 233.005 421.692 200.308 434.664 177.372C439.469 168.076 446.418 157.228 455.5 145.785" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M106.195 262.587C111.949 262.226 117.836 262.11 123.855 262.257C252.358 265.391 344.556 159.96 374.592 106.852C387.115 82.6263 414.202 47.8462 455.659 19.5" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M7.79102 262.5C35.3325 247.248 67.8358 237.83 105.572 238.75C234.075 241.884 326.273 136.453 356.309 83.3456C368.176 60.3892 393.12 27.9556 430.978 0.500004" stroke="#272727"/>
            <motion.path initial="hidden" animate="visible" variants={item} d="M1.99999 262.5C1.17157 262.5 0.5 261.828 0.5 261L0.499989 2.00003C0.499989 1.17163 1.17156 0.50003 1.99999 0.50003L182.712 0.500023L454 0.500011C454.828 0.500011 455.5 1.17155 455.5 2.00001L455.5 261C455.5 261.828 454.828 262.5 454 262.5L1.99999 262.5Z" stroke="#4A4A4A"/>
          </motion.svg>

          <motion.h1 
            className='name top-absolute'
            initial="hidden"
            animate="visible"
            variants={yUp}
          >
            Jyn Fairchild
          </motion.h1>

          {/* <motion.svg
            className='namelines mid-absolute'
            width="378" 
            height="9" 
            viewBox="0 0 378 9" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path initial="hidden" animate="visible" variants={sepLine} d="M377 1H370V8H377V1Z" stroke="white"/>
            <motion.path initial="hidden" animate="visible" variants={sepLine} d="M1 1H8V8H1V1Z" stroke="white"/>
            <motion.path initial="hidden" animate="visible" variants={sepLine} d="M219 4.5H365" stroke="#6B6B6B"/>
            <motion.path initial="hidden" animate="visible" variants={sepLine} d="M159 4.5H13" stroke="#6B6B6B"/>
            <motion.path initial="hidden" animate="visible" variants={sepLine} d="M210 5V4H169V5H210Z" fill="white" stroke="white"/>
          </motion.svg> */}

          <motion.h3 
            className='role bot-absolute'
            initial="hidden"
            animate="visible"
            variants={yDown}
          >
              DESIGNER &nbsp;&#x26;&nbsp; ENG
          </motion.h3>
        </div>

      </motion.div>

      {/* I SAID BITCHHHHHHHH */}
      <ProjectGrid />

      {/* long boi + all */}
      <div className='row justify-content-center pt-50 pt-lg-50 mb-100'>
        <div className='col-lg-6 pt-5 pt-md-5'>
          <p className='line-spacing-paragraph text-center'>
            Without design, the world sucks.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Home;
