import {
  Box,
  Flex,
  Text,
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
