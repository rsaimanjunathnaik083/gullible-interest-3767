import {
  Box,
  Flex,
  IconButton,
  Text,
  Image,
  Button,
  Grid,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {  FaShoppingBag } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';


export const Navbar = () => {
  return (
    <>
      <Box w='100%' h='35px' p='0' m='0' shadow='lg'>
        <Grid display='flex'>
          <Flex  w='88%' gap='5px' cursor='pointer' fontSize='12px' p='7px' pl='25px' color='brown'> 
            <Text>Contact Us |</Text>
            <Text>7 Day Returns |</Text>
            <Text>Track Order |</Text>
            <Text>Return Order |</Text>
            <Text>Sell On Fashion-Beyond |</Text>
            <Text>Survey</Text>
          </Flex>

          <Flex textAlign='end' justifyContent='flex-end' gap='10px' color='brown'>
            <Link to='login'><Button cursor='pointer' size='30px' backgroundColor='white' fontSize='13px'> <BsFillPersonFill  size='18px'/>LOG IN</Button></Link>
            <Link to='cart'><Button cursor='pointer' size='30px' backgroundColor='white' fontSize='13px'> <FaShoppingBag size='15px'/>CART (0)</Button></Link>
          </Flex>
        </Grid>
      </Box>
    </>
  )
}


// <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <Flex justifyContent={'space-between'} alignItems='center' w='90%' m={'auto'} >
//           <Text cursor='pointer' _hover={{ Color: "green", textDecoration: "underline" }}><Link to='home'>Home</Link></Text>
//               <Text cursor='pointer' _hover={{ Color: "green", textDecoration: "underline" }}><Link to='about'>About</Link></Text>
//               <Text cursor='pointer' _hover={{ Color: "green", textDecoration: "underline" }}><Link to='skills'>Skills</Link></Text>
//               <Text cursor='pointer' _hover={{ Color: "green", textDecoration: "underline" }}><Link to='projects'>Projects</Link></Text>
//               <Text cursor='pointer' _hover={{ Color: "green", textDecoration: "underline" }}><Link to='contact'>Contact</Link></Text>

//             <Flex as={'nav'} spacing={5} display={{ base: 'none', md: 'flex' }} gap='20px' w={{ base: '', md: '60%', lg: '40%' }} justifyContent='space-between' alignItems='center' fontWeight='700' fontSize='20px'>
//               <a href="https://drive.google.com/file/d/1BMRqb8SurfPgEu-V-pFfgGckAxU-SArt/view?usp=share_link" target='_blank' >
//                 <Button size={{ base: 'sm', md: 'md', lg: 'lg' }} mt={{ base: '10px', md: '0' }} color='black' bg='#efee83' _hover={{ bgColor: "green" }} gap={1.0}>
//                   Resume
//                   <VscCloudDownload />
//                 </Button>
//               </a>
//             </Flex>
//           </Flex>
//         </Flex>