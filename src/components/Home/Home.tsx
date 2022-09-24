import React from 'react'
import { Box, Container, Grid,Typography } from '@mui/material'

import { QuizOptionQuestion } from './../TsTypes/QuizTypes'

const Home:React.FC<QuizOptionQuestion> = ({question, option}) => {

  console.log(question, option);
  
  return (
    <>
    <Box sx={{
      textAlign:"center"
    }}>
    <Typography component={'h1'} variant='h1' sx={{
          fontFamily:"Fascinate Inline",
          fontWeight:500,
          fontSize:"70px",
          textAling:"center",
          // margin:'a uto'
        }}>

        REACT QUIZ

        </Typography>

      <Container>

     

        <Grid container>



        </Grid>

      </Container>

    </Box>

      



    </>
  )
}

export default Home