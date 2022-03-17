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
import chessboard from '../svgs/chess_illustration.svg'



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

  const yUp4 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 1.5, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };

  const yUp5 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 1.8, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
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


const codesnippet2 = `## Take that New Array of files, Combine them into a single PGN

# Create a blank PGN file to store all Mechanics Institue Games in
f = open("converted_pgn/all_converted.pgn", "w")

#Array of files to combine into one master PGN
with open("converted_pgn/all_converted.pgn", 'w') as outfile:

  # For Loop that goes through each pgn
  for item in filename:

    with open(item, encoding='ISO-8859-1', errors='ignore') as infile:
      contents = infile.read()
            
        # remove 'ï»¿' from first index
        fixedContents = contents.replace("ï»¿", "/n")
        outfile.write(fixedContents)

outfile.close()

# setting index
index = 0

# Open the combined file, fileString is a giant string of all the games
openFile = open("converted_pgn/all_converted.pgn", 'r')
fileString = openFile.read()

# Create an string separating items by double line breaks
allMovesSeparated = fileString.split("/n/n")
totalGames = len(allMovesSeparated) / 2

print("")
print("The total amount of games is", math.trunc(totalGames))
print("")`


const codesnippet3 = `## New PGN with Player Name

# Getting length of list
length = len(allMovesSeparated)

userGames = 0

# Creating a new PGN with the Person's name
with open("converted_pgn/" + name + "_games.pgn", 'a+') as userfile:

  # For Loop that goes through games in all_converted and finds name.
  for item in allMovesSeparated:
    index +=1
    # if their name is found, take the match data and notation, 
    # write metadata + game to new PGN.
    if name in item:
      userfile.write(item + "/n/n")
      userfile.write(allMovesSeparated[index] + "/n/n")
      userGames +=1

print(name, "has", userGames, "games in the database")
print("")`

  



  return (
    <div className="container">

      <HeaderProject />

      <div className='row project-page-title-description justify-content-center mb-lg-60 mb-60'>

        <motion.div 
          className='pp-ts text-width-100'
          initial="hidden"
          animate="visible"
          variants={yUp}
        >
          <h1 className='pp-title mr-20'>CHESS PGN APP</h1>
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
          chess, understanding your opponents openings, what tatics they've fallen for, often gives 
          a winning advantage.
        </motion.p>

      </div>
      
      <motion.div
        initial='hidden'
        animate='visible'
        variants={yUp4}
      >
        
        {/* ------ Illustration of Chessboard ------ */}
        <div className='row justify-content-center mb-lg-30 mb-30'>

          <div className='image-width-33-chess'>
            <img className='w-100' src={chessboard} alt='bldchatimage'/>
          </div>

        </div>

      </motion.div>


      {/* Flurish */}

      <motion.div 
        className='row justify-content-center m-20'
        initial='hidden'
        animate='visible'
        variants={yUp5}
      >
        <img className='flurish-horizontal' src={flurish} alt='flurish' />
        <h3 className='flurish-text'>DATA SET</h3>
      </motion.div>



      {/* ------ 1st of Code ------ */}
      <motion.div 
        className='row justify-content-center mb-lg-140 mb-80'
        initial="hidden"
        animate="visible"
        variants={yUp3}
      >

        <div className='row code-width-40 justify-content-center mb-lg-20 mb-30'>
          
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
              fontSize: '.7em'
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
            This program, first consolodates all PGN files from my local chessclub (The Mechanics Institue 
            in San Francisco). They upload all PGN files to their website, for anyone to download. Some of the 
            larger files contain thousands of games. They have no standard naming convention, so all the games are unsorted.
            </p>
        </div>

        <div className='row justify-content-center m-20'>
          <img className='flurish-horizontal' src={flurish} alt='flurish' />
          <h3 className='flurish-text'>ORGANIZE THE DATA</h3>
        </div>


        
      {/* ------ 2nd of Code ------ */}
      <motion.div 
      className='row justify-content-center mb-lg-140 mb-80'
      initial="hidden"
      animate="visible"
      variants={yUp3}
      >

        <div className='row code-width-40 justify-content-center mb-lg-20 mb-30'>
          
          {/* Code */}
          <SyntaxHighlighter
            language="python" 
            style={vscDarkPlus}
            showLineNumbers={true}
            wrapLines={false}
            wrapLongLines={false}
            lineNumberContainerStyle='line-number linenumber'
            customStyle = {{
              width: '100%',
              color: 'rgb(156, 220, 254)', 
              className: 'language-python',
              margin: '0',
              padding: '0',
              paddingTop: '15px',
              paddingBottom: '15px',
              fontSize: '.7em'
            }}
            codeTagProps = {{
              width: '100%',
              color: 'inherit', 
              className: 'language-python',
              margin: '0',
              padding: '0',
              fontSize: "inherit"
            }}
          >
          {codesnippet2}
          </SyntaxHighlighter>
          
        </div>
        
      </motion.div>
      

      {/* Text Paragraph */}
      <div className='row project-page-mid-role justify-content-center w-100 mb-lg-140 mb-100'>

        <p className='project-page-p text-width-100'>
          At this point I need to organize the data. PGN files have two data patterns, the 
          metadata (date, players, elo ratings, event etc..) and the actual moves played in the chess game.
          I first seperate the moves from the metadata by linebreaks, this helps me query how many games there are
          and sets up an easy way to search for names and find both the metadata and game that corresponds.
        </p>

      </div>

      <div className='row justify-content-center m-20'>
        <img className='flurish-horizontal' src={flurish} alt='flurish' />
        <h3 className='flurish-text'>PUSH GAMES TO PGN</h3>
      </div> 

      {/* ------ 2nd of Code ------ */}
      <motion.div 
      className='row justify-content-center mb-lg-140 mb-80'
      initial="hidden"
      animate="visible"
      variants={yUp3}
      > 

        <div className='row code-width-40 justify-content-center mb-lg-20 mb-30'>
          
          {/* Code */}
          <SyntaxHighlighter
            language="python"
            style={vscDarkPlus}
            showLineNumbers={true}
            wrapLines={false}
            wrapLongLines={false}
            lineNumberContainerStyle='line-number linenumber'
            customStyle = {{
              width: '100%',
              color: 'rgb(156, 220, 254)', 
              className: 'language-python',
              margin: '0',
              padding: '0',
              paddingTop: '15px',
              paddingBottom: '15px',
              fontSize: '.7em'
            }}
            codeTagProps = {{
              width: '100%',
              color: 'inherit', 
              className: 'language-python',
              margin: '0',
              padding: '0',
              fontSize: "inherit"
            }}
          >
          {codesnippet3}
          </SyntaxHighlighter>
          
        </div>
        
      </motion.div>

      

        {/* Text Paragraph */}
        <div className='row project-page-mid-role justify-content-center w-100 mb-lg-140 mb-100'>
          <p className='project-page-p text-width-100'>
            Then we do a search for their name, find their games, makes a new PGN file, check how many games 
            they have in the database if any at all. The games are put into a new PGN file that is exported into a 
            local folder for upload to lichess or openingtree for study.
          </p>
        </div>

      </motion.div>  

      <div className='mb-100'></div>

      <ProjectGrid />

      <Footer />
    </div>
  );
}

export default Chesspgn;