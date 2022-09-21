import React, { useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import BG from './bg.jpg'


function Home() {

    let api = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple'


useEffect(()=>{
    const API = async () =>{

        const getdata =  await (await fetch(api)).json();
        return getdata.results.map((item: { question: any })=>{













console.log(item.question);



        })
        
    console.log(getdata);
    
    }
    API();
}, [])

   const startQuiz = () => {
    alert('click ho gia')


   }
  return (
    <>
       <Box>
        <Typography component={'h1'} variant='h1' sx={{
          fontFamily:"Fascinate Inline",
          // background:"linear-gradient(rgb(255, 255, 255), rgb(135, 241, 255))",
          fontWeight:500,
          fontSize:"70px",
          textAling:"center",
        }}>

        REACT QUIZ

        </Typography>

        <Button  onClick={startQuiz} sx={{
                cursor: 'pointer',
                background: 'linear-gradient(rgb(255, 255, 255), rgb(255, 204, 145))',
                border: '2px solid rgb(211, 133, 88)',
                boxShadow: 'rgb(0 0 0 / 25%) 0px 5px 10px',
                borderRadius: '10px',
                height: '40px',
                margin: '20px 0px',
                padding: '0px 40px',
        }}>
            start
        </Button>

<Typography
sx={{
  fontSize:'2rem',
  color:'rgb(255 255 255)',
  fontFamily:'Catamaran',
  mb:3
}}
>Score : 0</Typography>




<Box sx={{
     maxWidth: '500px',
     background: 'rgb(235, 254, 255)',
     borderRadius: '10px',
     border: '2px solid rgb(0, 133, 163)',
     padding: '2rem 1rem',
     boxShadow: 'rgb(0 0 0 / 25%) 0px 5px 10px',
     textAlign: 'center',
     margin:'auto',
  
}}>
<Box>


  <Typography sx={{
    fontSize:'1rem',
    color:'black',
    fontFamily:'Catamaran',
    margin:'16px 0px'

  }}>
  Question: 1 / 10
  </Typography>

  <Typography sx={{
    color:'black',
    fontSize:'16px',
    margin:'16px 0px'
  }}>
  Which of the following did not feature in the cartoon 'Wacky Races'?
  </Typography>

</Box>
<Box>

<Box>
<Button sx={{
    cursor: 'pointer',
    userSelect: 'none',
        fontSize: '0.8rem',

    height: '40px',
    width: '500px',

    margin: '8px 0px',

    background: 'linear-gradient(90deg, rgb(86, 204, 255), rgb(110, 175, 180))',
    border:' 3px solid rgb(255, 255, 255)',
    boxShadow:' rgb(0 0 0 / 10%) 1px 2px 0px',
    borderRadius: '10px',
    color: 'rgb(255, 255, 255)',
    textShadow: 'rgb(0 0 0 / 25%) 0px 1px 0px',
    '&:hover':{
      opacity:0.9
    }
  }}>
  <Typography component={'span'} >
    Question 1
  </Typography>
</Button>
</Box>


<Box>
<Button sx={{
    cursor: 'pointer',
    userSelect: 'none',
        fontSize: '0.8rem',

    height: '40px',
    width: '500px',

    margin: '8px 0px',

    background: 'linear-gradient(90deg, rgb(86, 204, 255), rgb(110, 175, 180))',
    border:' 3px solid rgb(255, 255, 255)',
    boxShadow:' rgb(0 0 0 / 10%) 1px 2px 0px',
    borderRadius: '10px',
    color: 'rgb(255, 255, 255)',
    textShadow: 'rgb(0 0 0 / 25%) 0px 1px 0px',
    '&:hover':{
      opacity:0.9
    }
  }}>
  <Typography component={'span'} >
    Question 1
  </Typography>
</Button>
</Box>

<Box>
<Button sx={{
    cursor: 'pointer',
    userSelect: 'none',
        fontSize: '0.8rem',

    height: '40px',
    width: '500px',

    margin: '8px 0px',

    background: 'linear-gradient(90deg, rgb(86, 204, 255), rgb(110, 175, 180))',
    border:' 3px solid rgb(255, 255, 255)',
    boxShadow:' rgb(0 0 0 / 10%) 1px 2px 0px',
    borderRadius: '10px',
    color: 'rgb(255, 255, 255)',
    textShadow: 'rgb(0 0 0 / 25%) 0px 1px 0px',
    '&:hover':{
      opacity:0.9
    }
  }}>
  <Typography component={'span'} >
    Question 1
  </Typography>
</Button>
</Box>



<Box>
<Button sx={{
    cursor: 'pointer',
    userSelect: 'none',
        fontSize: '0.8rem',

    height: '40px',
    width: '500px',

    margin: '8px 0px',

    background: 'linear-gradient(90deg, rgb(86, 204, 255), rgb(110, 175, 180))',
    border:' 3px solid rgb(255, 255, 255)',
    boxShadow:' rgb(0 0 0 / 10%) 1px 2px 0px',
    borderRadius: '10px',
    color: 'rgb(255, 255, 255)',
    textShadow: 'rgb(0 0 0 / 25%) 0px 1px 0px',
    '&:hover':{
      opacity:0.9
    }
  }}>
  <Typography component={'span'} >
    Question 1
  </Typography>
</Button>
</Box>




</Box>


</Box>


      </Box>
    </>
  )
}

export default Home