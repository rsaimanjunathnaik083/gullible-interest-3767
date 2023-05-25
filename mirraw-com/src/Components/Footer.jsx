import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import footerimg from "../media/footer_bg.png"

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"600"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box backgroundImage={footerimg} color={useColorModeValue("white", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>HELP</ListHeader>
            <Link href={"#"}>Survey</Link>
            <Link href={"#"}>How To Buy</Link>
            <Link href={"#"}>Track Order</Link>
            <Link href={"#"}>Payments</Link>
            <Link href={"#"}>Shipping</Link>
            <Link href={"#"}>Cancellations</Link>
            <Link href={"#"}>FAQ</Link>
            <Link href={"#"}>Helpdesk</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>COMPANY</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Terms</Link>
            <Link href={"#"}>Privacy</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>BUSINESS</ListHeader>
            <Link href={"#"}>International Buyers</Link>
            <Link href={"#"}>Sell On Mirraw</Link>
            <Link href={"#"}>Designer Login</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>COUPON PARTNERS</ListHeader>
            <Link href={"#"}>Mirraw Coupons</Link>
            <Link href={"#"}>Mirraw Offers</Link>
            <Link href={"#"}>SOCIAL</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>PRESS</ListHeader>
            <Image src="https://www.mirraw.com/assets/dna-be0b711232e819d1dfeb542296bf4d56c80cd17c41badb9494300cffe4fe9cf5.png"/>
            <Image src="https://www.mirraw.com/assets/yourstory-af15b2ddcc71a01016c6b879d665af554375ace702d94eaa48d0b2210834e0d4.png"/>
            <Image src="https://www.mirraw.com/assets/payu-a31ef1db3817ade015c5ad386da4b2211b82dbebcad90964c58e4b7dc889b255.png"/>
            <Image src="https://www.mirraw.com/assets/paypal-449cce1c328ad3e821e482a3795a336b4659a62c892eddb7f5dd095eb5d42a16.png"/>
          </Stack>
        </SimpleGrid>
      </Container>      
      <Box py={3} backgroundColor='#7b0e1d'>
        <Text pt={1} fontSize={"sm"} textAlign={"center"}>
          Copyright © 2023, Mirraw Online Services Pvt. Ltd. All Rights Reserved.
        </Text>
      </Box>
    </Box>
  );
}
