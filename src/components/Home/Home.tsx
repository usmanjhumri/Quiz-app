import React, { useState } from 'react'
import { Box, Button, Container, Grid,Typography } from '@mui/material'

import { QuizOptionQuestion } from './../TsTypes/QuizTypes'

const Home:React.FC<QuizOptionQuestion> = ({question, option, callback,}) => {


  const [ startquiz, setStartquiz] = useState()

  const handleSelection = (e:any)=>{
    console.log(e.target.value);
    setSelectans(e.target.value)
    

  }
  console.log(question, option);

  const btn = document.getElementById('btn')
  const box = document.getElementById('display')

  if(btn != null && box != null){

    btn.addEventListener('click', function handleclick (){

      if (box.style.display === 'none') {
        // ✅ Shows element if hidden
        box.style.display = 'block';
  
        btn.style.display = 'none';
      } else {
        // ✅ Hides element if shown
        box.style.display = 'none';
  
        btn.style.display = 'none';
        
      }


    })

  }

  
  
  return (
    <>
   <Box sx={{
    marginBottom:"1rem"
   }}>
    <Typography variant='h1' component={'h1'} sx={{
      fontFamily:"Fascinate Inline",
      fontSize:"70px",
      fontWeight:500,
      background:"linear-gradient(rgb(255, 255, 255), rgb(135, 241, 255))",
      backgroundClip:"text",
      WebkitTextFillColor:"transparent",
      filter:"drop-shadow(rgb(0, 133, 163) 2px 2px)",
      marginBottom:"2rem"

    }}>
      REACT QUIZ
    </Typography>

    <Box sx={{
      marginBottom:"2rem"
    }}>
      <Button id="btn" sx={{
        cursor:"pointer",
        background:"linear-gradient(rgb(255, 255, 255), rgb(255, 204, 145))",
        border:"2px solid rgb(211, 133, 88)",
        boxShadow:"rgb(0 0 0 / 25%) 0px 5px 10px",
        borderRadius:"10px",
        color:"black",
        padding:"10px 40px",
        textTransform:"capitalize",
        letterSpacing:"2px",
        

      }}>
        start
      </Button>


    </Box>

      

   </Box>


      <Box id="display" sx={{
        display:"none"
      }}>

        <Typography sx={{
      fontFamily:"arial",
      fontSize:"40px",
      fontWeight:400,
      filter:"drop-shadow(rgb(0, 133, 163) 2px 2px)",
      marginBottom:"2rem",
      textTransform:"capitalize",


    }}>
          score :
        </Typography>

   <Box sx={{
        background:"rgb(235, 254, 255)",
        borderRadius:"10px",
        border:"2px solid rgb(0, 133, 163)",
        padding:"20px",
        boxShadow:"rgb(0 0 0 / 25%) 0px 5px 10px",
        textAling:"center",
        marginBottom:"2rem"
      }}>

        <Typography sx={{
          marginBottom:"1rem"
        }}>
          Question : 
        </Typography>

        <Typography sx={{
          marginBottom:"1rem"
        }}>
          {question}
        </Typography>

        {
          option.map((opt:string,  ind:number)=>{
            return(
              <Box key={ind}>
          <Button onChange={handleSelection} defaultValue={opt} sx={{
            cursor:"pointer",
            userSelect:"none",
            WebkitUserSelect:"none",
            msUserSelect:"none",
            fontSize:"0.8rem",
            width:"100%",
            height:"40px",
            margin:"5px 0",
            background:"linear-gradient(90deg, rgb(86, 204, 255), rgb(110, 175, 180))",
            border:"3px solid rgb(255, 255, 255)",
            borderRadius:"10px",
            color:"rgb(255, 255, 255)",
            textShadow:"rgb(0 0 0 / 25%) 0px 1px 0px",
            
            "&:hover":{
              opacity:0.8
            }
          }}>
            {opt}
          </Button>
        </Box>
            )
          })
        }





      </Box>

   <Box>
    <Button onClick={callback} sx={{
        cursor:"pointer",
        background:"linear-gradient(rgb(255, 255, 255), rgb(255, 204, 145))",
        border:"2px solid rgb(211, 133, 88)",
        boxShadow:"rgb(0 0 0 / 25%) 0px 5px 10px",
        borderRadius:"10px",
        color:"black",
        padding:"10px 40px",
        textTransform:"capitalize",
        letterSpacing:"2px",
        

      }}>

        next

    </Button>
   </Box>

   </Box>
      



    </>
  )
}

export default Home

function setSelectans(value: any) {
  throw new Error('Function not implemented.')
}
