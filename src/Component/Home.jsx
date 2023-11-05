import React from 'react'

import { Box , HStack,Heading,Text,Image,Button,Link} from '@chakra-ui/react'


import style from './Aboutme.module.css'



const Home = () => {


  const OpenPDF = () => {

    const url = `https://drive.google.com/file/d/1S2ijuOYDkyaACmJ6KicpC9dZ4xU-d7yY/view?usp=sharing`

    window.open(url, '_blank');



  }

  return (

    <Box    id = 'home'  border="2px solid rgb(224, 242, 241)" >
      
      {/* //mt = {{base : '20px','456px' : '25px','612px' : '30px','735px' : '40px', '934px':'100px'}} */}

      <HStack mt = {{base : '86px','456px' : '94px','612px' : '95px','735px' : '105px', '934px':'150px'}}  flexDirection={{base : 'column','934px' : 'row'}} pl = '25px'  backdropFilter={'blur(10px)'}  justify={'space-between'} bg= {"#E0EFF8"} >


        <Box mb = {{base : '50px','934px' : 'none'}} pt = {{base : '30px','934px' : 'none'}} pr = {{base : '30px','934px' : 'none'}} w = {{base : '98%','934px' : '50%'}}  textAlign={'left'} bg="#E0EFF8" >

            <Heading fontSize = '50px'  color = '#74992e' letterSpacing={'2px'} as = 'h1'>Hi! I Am</Heading>

            <Heading fontSize = '50px' id="user-detail-name"  color = '#74992e' fontFamily={'monospace'} letterSpacing={'2px'}  as = 'h1'>Nithin jayaraj</Heading>

            <Text mt = '15px' fontSize = '15px' color = '#1A202C' id="user-detail-intro">An aspiring Full Stack Web Developer.Proficient in front-endtechnologies like HTML, CSS, JavaScript, React, Redux, and ChakraUI Backend technologies Node.js,Express.js,Mongo db.A proactive problem-solver with excellent communication skills and a strong work ethic.</Text>

            <Button onClick = {OpenPDF} id="resume-button-2"  mb = '20px' _hover = {{background : 'black'}} mt = '15px' className="nav-link resume" size = {['sm','md']} variant = 'none' bg = '#1A202C;' border = '1px solid' boxShadow={'1px 1px 5px'} color = 'white'><Link  id="resume-link-2" _hover = {{textDecoration : 'none'}} href = 'NithinJayaraj.pdf' isExternal download = "NithinJayaraj.pdf">Resume</Link></Button>

            <HStack w = '170px' justify={'space-between'}>

                  
                <Link id="contact-linkedin" isExternal href = 'https://www.linkedin.com/in/nithin-jayaraj-b627161ba/'>  <Image _hover = {{cursor : 'pointer', transform:'scale(1.1)',transition : 'all 0.4s'}} w = '30px' src = 'linkedin.png'></Image> </Link>

                 
                  
                <Link id="contact-github" isExternal href = 'https://github.com/bhodi-creator'>  <Image _hover = {{cursor : 'pointer', transform:'scale(1.1)',transition : 'all 0.4s'}} w = '40px' src = 'github.png'></Image> </Link>

                  

                <Link  id="contact-email" isExternal href = 'mailto:nithinjayaraj23@gmail.com'>  <Image _hover = {{cursor : 'pointer', transform:'scale(1.1)',transition : 'all 0.4s'}} w = '35px' src = 'gmail.png'></Image>  </Link>

                <Link  id="contact-phone" isExternal href = 'https://wa.me/+918590599354'>  <Image _hover = {{cursor : 'pointer', transform:'scale(1.1)',transition : 'all 0.4s'}} w = '35px' src = 'whatsapp.png'></Image>  </Link>





            </HStack>



          </Box>

      



      <Image  className='home-img'  w ={{ base : '85%','401px' : '75%','457px' : '60%','697px' : '50%','798px' : '40%','934px' : '30%' }} src = 'nithin.jpeg'   borderRadius='300px'></Image>



      </HStack>

   





    </Box>
  )
}

export default Home