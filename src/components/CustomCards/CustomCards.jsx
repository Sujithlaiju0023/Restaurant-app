import React from 'react'
import {Box, styled, Typography} from '@mui/material'
import likeIcon from '../../assets/like.png'
import heartIcon from '../../assets/heart.png'
import shareIcon from '../../assets/share.png'

const CustomCards=({img, price, item, likes,heart, share})=> {

    const DishBox=styled(Box)(({theme})=>({
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
        maxWidth: 350,
        backgroundColor:'#fff',
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down('md')]:{
            margin: theme.spacing(2, 0, 2, 0),
        },
        '&:hover':{
            backgroundColor:'#F5F5F5',
            boxShadow:'0 0 5px rgba(0, 0, 0, 0.2)',
            transform:'scale(1.05)',
            transition:'all 0.3s ease-in-out',
        },
    }))

    const InfoBox =styled(Box)(()=>({
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    }))

    const imgContainer =styled(Box)(()=>({
        width:'100%',
    }))


  return (
    <DishBox>

        <imgContainer>
        <img src={img} alt='housePhoto' style={{maxWidth:'100%'}}/>
        </imgContainer>

        <Box sx={{padding:'1rem'}}>
        <Typography variant='body2' sx={{fontWeight:'700'}}>

            ${price}

        </Typography>

        <Typography variant='body2' sx={{my: 2}}>

        {item}


        </Typography>

        <Box
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
        }}
        >

            <InfoBox>

                <img src={likeIcon} alt='Likesicon' />

                <Typography variant='body2' sx={{mt: 1}}>
                {likes}
                </Typography>

            </InfoBox>

            <InfoBox>

                <img src={heartIcon} alt='HeartIcon' />

                <Typography variant='body2' sx={{mt: 1}}>
                {heart}
                </Typography>

            </InfoBox>

            <InfoBox>

                <img src={shareIcon} alt='Likesicon' />

                <Typography variant='body2' sx={{mt: 1}}>
                {share}
                </Typography>

            </InfoBox>

        </Box>


        </Box>

    </DishBox>
  )
}

export default CustomCards
