import React from 'react';
import { Footer } from '../components/footer';
import { HeaderProject } from '../components/header';
import ProjectGrid from '../components/projectgrid';
import { motion } from 'framer-motion';

// Syntax Highlighter
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Scss
import '../styles/app.scss';

// Svgs
import flurish from "../svgs/flurish_lines.svg";

// Code

// Rest of images
import BldChat from '../images/bld_chat.png';
import BldPivot from '../images/bld_pivot.png';
import BldInvoice from '../images/bld_invoice.png';
import BldSpec1 from '../images/bld_nav_both.png';
import BldSpec2 from '../images/bld_spec.png';



function Chesspgn() {


  // Animation
  const container = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 2.2
      }
    }
  };

  // These animation objects define how the animations display. 
  // n versions is currently only staggering animation timings using (delay: 1)

  const yUp = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: .4, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };
  
  const yUp2 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: .8, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };

  const yUp3 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 1.4, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };

  const codesnippet = `  directory = "mi_pgns/"

  filename = []
      
  for file in os.listdir(directory):
      fname = os.fsdecode(file)
      if fname.endswith(".pgn"): 
          filename.append(directory + fname)
          continue
      else:
          continue`


const codesnippet2 = `  ## ------------ Take that New Array of files, Combine them into a single PGN ------------ ##

# Create a blank PGN file to store all Mechanics Institue Games in
f = open("converted_pgn_2022/all_converted.pgn", "w")

#Array of files to combine into one master PGN
with open("converted_pgn_2022/all_converted.pgn", 'w') as outfile:

    # For Loop that goes through each pgn, copies all of the text to a new combined PGN.
    for item in filename:

        with open(item, encoding='ISO-8859-1', errors='ignore') as infile:
            contents = infile.read()
            
            # remove 'ï»¿' from first index (I have no idea why those characters are on the first item)
            fixedContents = contents.replace("ï»¿", "'backslash'n")
            outfile.write(fixedContents)

outfile.close()


## ------------ Take PGN, Make into a string, useful for searching and combining games to metadata ------------ ##

# setting index to 0, index is needed for finding the game in a for loop later in the code
index = 0

# Open the combined file, fileString is a giant string of all the games
openFile = open("converted_pgn_2022/all_converted.pgn", 'r')
fileString = openFile.read()

# Create an string separating items by double line breaks
allMovesSeparated = fileString.split("'backslash'n'backslash'n")
totalGames = len(allMovesSeparated) / 2

print("")
print("The total amount of games is", math.trunc(totalGames))
print("")`


const codesnippet3 = `  ## ------------ New PGN with Player Name ------------ ##

# getting length of list
length = len(allMovesSeparated)

userGames = 0

# Creating a new PGN with the Person's name
with open("converted_pgn_2022/" + name + "_games.pgn", 'a+') as userfile:

    # For Loop that goes through games in all_converted and finds name.
    for item in allMovesSeparated:
            index +=1
            #if their name is found, take the match data and notation, write to new PGN.
            if name in item:
                userfile.write(item + "\n\n")
                userfile.write(allMovesSeparated[index] + "\n\n")
                userGames +=1

print(name, "has", userGames, "games in the database")
print("")`

  



  return (
    <div className="container">

      <HeaderProject />

      <div className='row project-page-title-description justify-content-center mb-lg-140 mb-100'>

        <motion.div 
          className='pp-ts text-width-100'
          initial="hidden"
          animate="visible"
          variants={yUp}
        >
          <h1 className='pp-title mr-20'>Chess.PGN App</h1>
          <h2 className='pp-sub-text'>STUDY YOUR OPPONENTS</h2>
        </motion.div>

        <motion.p 
          className='project-page-p text-width-100'
          initial="hidden"
          animate="visible"
          variants={yUp2}
        >
          A personal coding project that I'm super proud of, this python app lets you study 
          opponents by finding and consolidating all of their OTB games. In the land of competitive 
          chess, understanding what openings your opponent plays, what tatics they've fallen for in 
          the past, is a strong advantage over the board.
        </motion.p>

      </div>

      {/* ------ 1st of Code ------ */}
      <motion.div 
        className='row justify-content-center mb-lg-140 mb-80'
        initial="hidden"
        animate="visible"
        variants={yUp3}
      >

        <div className='row m-20'>
          <div className='flurish-parent'>
            <h3 className='flurish-text-vertical'>CODE</h3>
            <img className='flurish-vertical' src={flurish} alt='flurish' />
          </div>
        </div>

        <div className='row code-width-40 justify-content-center mb-lg-20 mb-100'>
          
          {/* Code */}
          <SyntaxHighlighter
            language="python" 
            style={vscDarkPlus}
            showLineNumbers={true}
            lineNumberContainerStyle='line-number'
            customStyle = {{
              width: '100%',
              color: 'rgb(156, 220, 254)', 
              className: 'language-python',
              fontSize: '.85em'
            }}
            codeTagProps = {{
              width: '100%',
              color: 'inherit', 
              className: 'language-python',
              fontSize: "inherit"
            }}
          >
          {codesnippet}
          </SyntaxHighlighter>
          
        </div>
        
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
      >

        {/* Text Paragraph */}
        <div className='row project-page-mid-role justify-content-center w-100 mb-lg-140 mb-80'>
          <p className='project-page-p text-width-100'>
            This program, first consolodates all PGNs files from my local chessclub (Mechanics Institue 
            in SF). Does a search for their name, finds their games, makes a new PGN file, exports their 
            games to a lichess study. The PGN file is also exported for easy openingtree.org breakdowns 
            of their openings.</p>
        </div>
        
        {/* ------ 2nd of Code ------ */}
        <motion.div 
        className='row justify-content-center mb-lg-140 mb-80'
        initial="hidden"
        animate="visible"
        variants={yUp3}
      >

        <div className='row m-20'>
          <div className='flurish-parent'>
            <h3 className='flurish-text-vertical'>CODE</h3>
            <img className='flurish-vertical' src={flurish} alt='flurish' />
          </div>
        </div>

        <div className='row code-width-66 justify-content-center mb-lg-20 mb-100'>
          
          {/* Code */}
          <SyntaxHighlighter
            language="python" 
            style={vscDarkPlus}
            showLineNumbers={true}
            wrapLines={true}
            lineNumberContainerStyle='line-number'
            customStyle = {{
              width: '100%',
              color: 'rgb(156, 220, 254)', 
              className: 'language-python',
              fontSize: '.85em'
            }}
            codeTagProps = {{
              width: '100%',
              color: 'inherit', 
              className: 'language-python',
              fontSize: "inherit"
            }}
          >
          {codesnippet2}
          </SyntaxHighlighter>
          
        </div>
        
      </motion.div>

        {/* Text Paragraph */}
        <div className='row project-page-mid-role justify-content-center w-100 mb-lg-140 mb-100'>
          <p className='project-page-p text-width-100'>Revenue breakdown by project, by month, by person. 
            Blended rate next to the original estimate was a common ask from clients. Invoicing panel 
            making invoicing simple and easy.</p>
        </div>

        {/* ------ 3rd of Mocks ------ */}
        <div className='row image-set justify-content-center mb-lg-240 mb-200'>
          <div className='flex-images-bld image-width-90 p-20 p-lg-30'>
              <img className='image-width-100 tablet-margin-b-pivot phone-margin-b-pivot web-margin-r-pivot' src={BldPivot} alt='pivot'/>
              <img className='image-width-50' src={BldInvoice} alt='invoice'/>
          </div>
        </div>

        {/* Text Paragraph */}
        <div className='row project-double-text justify-content-center w-100 mb-lg-200 mb-120'>

          <div className='flurish-parent d-none d-sm-none d-md-none d-lg-block d-xl-block mr-lg-40'>
            <h3 className='flurish-text-vertical'>QUALITY MATTERS</h3>
            <img className='flurish-vertical flurish-quality' src={flurish} alt='flurish' />
          </div>

          <p className='project-page-p text-width-51 mb-60 mr-lg-80'>I think engineers get a bad rep 
            with the design community for implementing designs poorly. This is half true, but often I 
            find designers aren&#x27;t communicating well, having check ins during the engineering team 
            during the coding process and made zero specs around their designs.</p>

          <p className='project-page-p text-width-51 mb-60 mr-lg-80'>I&#x27;m a huge fan on making specs 
            for engineers. Often specs act as blueprints and then when something is off, you can pull 
            up the spec and it acts as almost a contract that you can hold the engineer too.</p>
        </div>

        {/* ------ 4th of Mocks ------ */}
        <div className='row image-set justify-content-center'>
          <div className='flex-images-bld image-width-50 p-lg-30 p-20'>
              <img className='image-width-50 pr-40 pb-40 pb-lg-none' src={BldSpec1} alt='image8'/>
              <img className='image-width-50 pb-20 pb-lg-none' src={BldSpec2} alt='image9'/>
          </div>
        </div>

      </motion.div>  

      <div className='mb-100'></div>

      <ProjectGrid />

      <Footer />
    </div>
  );
}

export default Chesspgn;