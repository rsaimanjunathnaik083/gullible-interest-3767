import {
  Box,
  Flex,
  Image,
  Input,
  HStack,
  Button,
  Text,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  WrapItem,
  Grid,
} from '@chakra-ui/react';
import fashion from "../media/fashion-beyond-all.png"
import { SearchIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";

export const Navbar2 = () => {
  return (
    <>
      <Box w='100%' h='80px' p='0' m='0'>
        <Grid display='flex'>
          <Flex cursor='pointer'>
            <Link to="./">
              <Image src={fashion} h='100px' w='auto' ml='150px' />
            </Link>
          </Flex>

          <Flex textAlign='end' justifyContent='flex-end' m='15px' ml='23%'>
            <Input placeholder='Search Something...' w='550px' h='45px' border='1px solid black' borderRadius='none' />
            <SearchIcon border='1px solid brown' w='45px' h='45px' mr='0' p='9px' bg='brown' color='white' />
          </Flex>
        </Grid>
      </Box>
      <hr />

      <Box w='100%' h='30px' p='0'pt="5px" m='0'>
        <HStack height="30px" justifyContent="center">
          <Grid templateColumns="repeat(12, auto)" gap={{ base: "1", md: "3", lg: "5", }}>
            {/* 1} Sarees  */}
            <WrapItem>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Button
                    colorScheme="none"
                    color="black"
                    p="0"
                    borderRadius="none"
                    _hover={{
                      color: "#670b19",
                      borderBottom: "3px solid #670b19",
                    }}
                    h="50px"
                    fontSize={{
                      base: "10px",
                      lg: "15px",
                    }}
                  >
                    <Link to='women'>
                      <Text >Sarees</Text>
                    </Link>
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"100%"} m={"-8px 0 0 0"}>
                  <PopoverBody
                    p="0"
                    lineHeight="12px"
                    textAlign="left"
                    fontSize={"15px"}
                  >
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          ROOTS
                        </Text>
                        <Text>Banarasi Slik</Text>
                        <Text>Kanchipuram Silk</Text>
                        <Text>Bhagalpuri Silk</Text>
                        <Text>Mysore Silk</Text>
                        <Text>Manipuri Silk</Text>
                        <Text>Kota Silk</Text>
                        <Text>Bandhani</Text>
                        <Text>Paithani</Text>
                        <Text>Kota</Text>
                        <Text>Patola</Text>
                        <Text>Jamdani</Text>
                        <Text>Maheshwari</Text>
                        <Text>Kerala Kasavu</Text>
                        <Text>Bengali</Text>
                        <Text>Uppada</Text>
                        <Text>Nauvari</Text>
                        <Text>Banarasi</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          FABRIC
                        </Text>
                        <Text>Georgette</Text>
                        <Text>Art Silk</Text>
                        <Text>Cotton</Text>
                        <Text>Pure Silk</Text>
                        <Text>Net</Text>
                        <Text>Velvet</Text>
                        <Text>Chiffon</Text>
                        <Text>Brasso</Text>
                        <Text>Chanderi</Text>
                        <Text>Organza Sarees</Text>
                        <Text>Tussar Silk</Text>
                        <Text>Crepe</Text>
                        <Text>Satin</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          OCCASION
                        </Text>
                        <Text>Party Wear</Text>
                        <Text>Wedding</Text>
                        <Text>EID</Text>
                        <Text>Diwali</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          WORK
                        </Text>
                        <Text>Embroidered</Text>
                        <Text>Printed</Text>
                        <Text>Heavy Work Sarees</Text>
                        <Text>Handloom Sarees</Text>
                        <Text>Hand Woven Sarees</Text>
                        <Text>Chikankari</Text>
                        <Text>Kalamkari</Text>
                        <Text>Ikat</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          COLLECTIONS
                        </Text>
                        <Text>Exclusive</Text>
                        <Text>Bridal Sarees</Text>
                        <Text>Pre Stitched Sarees</Text>
                        <Text>Half Saree</Text>
                        <Text>Traditional Sarees</Text>
                        <Text>South Indian Sarees</Text>
                        <Text>Bollywood Sarees</Text>
                        <Text>Best Sellers</Text>
                        <Text>New Arrivals</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          MORE
                        </Text>
                        <Text>Blouses</Text>
                        <Text>Readymade Blouse</Text>
                        <Text>Blouse Fabric</Text>
                        <Text>Sleeveless blouse</Text>
                        <Text>Bridal Blouses</Text>
                        <Text>Petticoats</Text>
                        <Text>Blouse Neck</Text>
                        <Text>Designs</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </WrapItem>

            {/* 2} Lehengas  */}
            <WrapItem>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Button
                    colorScheme="none"
                    color="black"
                    p="0"
                    borderRadius="none"
                    _hover={{
                      color: "#670b19",
                      borderBottom: "3px solid #670b19",
                    }}
                    h="50px"
                    fontSize={{
                      base: "10px",
                      lg: "15px",
                    }}
                  >
                    <Text to="/womenPage">Lehengas</Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"100%"} m={"-8px 0 0 0"}>
                  <PopoverBody
                    p="0"
                    lineHeight="20px"
                    textAlign="left"
                    fontSize={"15px"}
                  >
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          FABRIC
                        </Text>
                        <Text>Net</Text>
                        <Text>Silk</Text>
                        <Text>Georgette</Text>
                        <Text>Velvet</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} align="left" p={2}>
                        <Text as="b" color="#670b19" m="10px 0">
                          OCCASION
                        </Text>
                        <Text>Party Wear</Text>
                        <Text>Bridal</Text>
                        <Text>Casual</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          STYLE
                        </Text>
                        <Text>Ghagra Choli</Text>
                        <Text>Lehenga Choli</Text>
                        <Text>Crop Top</Text>
                        <Text>Readymade</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} align="left" p={2}>
                        <Text as="b" color="#670b19" m="10px 0">
                          COLLECTION
                        </Text>
                        <Text>Ethnic</Text>
                        <Text>Pakistani</Text>
                        <Text>Lehenga Saree</Text>
                        <Text>Floral</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </WrapItem>

            {/* 3} Salwar Kameez  */}
            <WrapItem>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Button
                    colorScheme="none"
                    color="black"
                    p="0"
                    borderRadius="none"
                    _hover={{
                      color: "#670b19",
                      borderBottom: "3px solid #670b19",
                    }}
                    h="50px"
                    fontSize={{
                      base: "10px",
                      lg: "15px",
                    }}
                  >
                    <Text>Salwar Kameez</Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"100%"} m={"-8px 0 0 0"}>
                  <PopoverBody
                    p="0"
                    lineHeight="30px"
                    textAlign="left"
                    fontSize={"15px"}
                  >
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          STYLE
                        </Text>
                        <Text>Anarkali Suits</Text>
                        <Text>Straight Suits</Text>
                        <Text>Churidar Suits</Text>
                        <Text>Punjabi Suits</Text>
                        <Text>Dress Material</Text>
                        <Text>Abaya Suits</Text>
                        <Text>Pakistani Suits</Text>
                        <Text>Palazzo Suits</Text>
                        <Text>Sharara Suits</Text>
                        <Text>Patiala Suits</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          FABRIC
                        </Text>
                        <Text>Cotton</Text>
                        <Text>Georgette</Text>
                        <Text>Chanderi</Text>
                        <Text>Silk</Text>
                        <Text>Net</Text>
                        <Text>Crepe</Text>
                        <Text>Cotton Silk</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          OCCASION
                        </Text>
                        <Text>Party Wear</Text>
                        <Text>Wedding</Text>
                        <Text>Salwar</Text>
                        <Text>Festive</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          COLLECTION
                        </Text>
                        <Text>Plus Size Suits</Text>
                        <Text>Best Sellers</Text>
                        <Text>New Arrivals</Text>
                        <Text>Combo Salwar</Text>
                        <Text>Ready to Ship</Text>
                        <Text>Collar Neck</Text>
                        <Text>Designs</Text>
                        <Text>Ethnic Suits</Text>
                        <Text>Patiala Combo </Text>
                        <Text>Bollywood</Text>
                        <Text>Salwars</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          STITCHING
                        </Text>
                        <Text>Readymade</Text>
                        <Text>Suits</Text>
                        <Text>Semi Stitched</Text>
                        <Text>Suits</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          Inner & Sleep Wear
                        </Text>
                        <Text>All Inner & Sleep Wear</Text>
                        <Text>Vests</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </WrapItem>

            {/* 4} Kurtis  */}
            <WrapItem>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Button
                    colorScheme="none"
                    color="black"
                    p="0"
                    borderRadius="none"
                    _hover={{
                      color: "#670b19",
                      borderBottom: "3px solid #670b19",
                    }}
                    h="50px"
                    fontSize={{
                      base: "10px",
                      lg: "15px",
                    }}
                  >
                    <Text>Kurtis</Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"100%"} m={"-8px 0 0 0"}>
                  <PopoverBody
                    p="0"
                    lineHeight="30px"
                    textAlign="left"
                    fontSize={"15px"}
                  >
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          STYLE
                        </Text>
                        <Text>Kurta Sets</Text>
                        <Text>Long Kurtis</Text>
                        <Text>Short Kurtis</Text>
                        <Text>Sleeveless Kurtis</Text>
                        <Text>Anarkali Kurtis</Text>
                        <Text>Kaftans</Text>
                        <Text>Plus Size Kurtis</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          FABRIC
                        </Text>
                        <Text>Silk</Text>
                        <Text>Chiffon</Text>
                        <Text>Georgette</Text>
                        <Text>Cotton</Text>
                        <Text>Rayon</Text>
                        <Text>Crepe</Text>
                        <Text>Chanderi</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          OCCASION
                        </Text>
                        <Text>Party Wear</Text>
                        <Text>Festive</Text>
                        <Text>Casual</Text>
                        <Text>Wedding</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          WORK
                        </Text>
                        <Text>Printed</Text>
                        <Text>Embroidered</Text>
                        <Text>Plain</Text>
                        <Text>Chikankari</Text>
                        <Text>Stone Work</Text>
                        <Text>Heavy Work</Text>
                        <Text>Mirror Work</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          BOTTOM WEAR
                        </Text>
                        <Text>Palazzos</Text>
                        <Text>Harem Pants</Text>
                        <Text>Leggings</Text>
                        <Text>Patiala Pants</Text>
                        <Text>Skirts</Text>
                        <Text>Trousers</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </WrapItem>

            {/* 5} Jewellery  */}
            <WrapItem>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Button
                    colorScheme="none"
                    color="black"
                    p="0"
                    borderRadius="none"
                    _hover={{
                      color: "#670b19",
                      borderBottom: "3px solid #670b19",
                    }}
                    h="50px"
                    fontSize={{
                      base: "10px",
                      lg: "15px",
                    }}
                  >
                    <Text>Jewellery</Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"100%"} m={"-8px 0 0 0"}>
                  <PopoverBody
                    p="0"
                    lineHeight="30px"
                    textAlign="left"
                    fontSize={"15px"}
                  >
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          TYPE
                        </Text>
                        <Text>Necklace Sets</Text>
                        <Text>Necklaces</Text>
                        <Text>Bangles & Bracelets</Text>
                        <Text>Earrings</Text>
                        <Text>Anklets</Text>
                        <Text>Pendants</Text>
                        <Text>Silk Thread</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          WORK
                        </Text>
                        <Text>Temple Jewellery</Text>
                        <Text>Antique Jewellery</Text>
                        <Text>Kundan Jewellery</Text>
                        <Text>South Indian Jewellery</Text>
                        <Text>Pearl Jewellery</Text>
                        <Text>Handmade Jewellery</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          WEDDING
                        </Text>
                        <Text>Bridal Jewellery</Text>
                        <Text>Bridal Sets</Text>
                        <Text>Mangalsutra</Text>
                        <Text>Maang Tikka</Text>
                        <Text>Rings</Text>
                        <Text>Toe Rings</Text>
                        <Text>Nose Rings</Text>
                        <Text>Baju Band</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          FEATURED
                        </Text>
                        <Text>Silk Thread Earrings</Text>
                        <Text>Brooch</Text>
                        <Text>Silk Thread Bangles</Text>
                        <Text>Studs</Text>
                        <Text>Jhumkas</Text>
                        <Text>Choker Necklace</Text>
                        <Text>Danglers & Drops</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          COLLECTIONS
                        </Text>
                        <Text>Gemstones</Text>
                        <Text>Ear Cuffs</Text>
                        <Text>Designer Jewellery</Text>
                        <Text>Hair Accessories</Text>
                        <Text>Oxidised Jewellery</Text>
                        <Text>Jewellery Box</Text>
                        <Text>Ethnic Jewellery</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </WrapItem>

            {/* 6} Kids  */}
            <WrapItem>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Button
                    colorScheme="none"
                    color="black"
                    p="0"
                    borderRadius="none"
                    _hover={{
                      color: "#670b19",
                      borderBottom: "3px solid #670b19",
                    }}
                    h="50px"
                    fontSize={{
                      base: "10px",
                      lg: "15px",
                    }}
                  >
                    <Text>Kids</Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"100%"} m={"-8px 0 0 0"}>
                  <PopoverBody
                    p="0"
                    lineHeight="30px"
                    textAlign="left"
                    fontSize={"15px"}
                  >
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          GIRLS
                        </Text>
                        <Text>Lehenga</Text>
                        <Text>Salwar Suits</Text>
                        <Text>Gowns</Text>
                        <Text>Sarees</Text>
                        <Text>Frocks</Text>
                        <Text>Dresses</Text>
                        <Text>Girls Jackets</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          BOYS
                        </Text>
                        <Text>Kurta Pyjamas</Text>
                        <Text>Indo Western</Text>
                        <Text>Sherwani</Text>
                        <Text>Dhoti Kurta</Text>
                        <Text>Nehru Jacket</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          COLLECTIONS
                        </Text>
                        <Text>Jewellery</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </WrapItem>

            {/* 7} Men  */}
            <WrapItem>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Button
                    colorScheme="none"
                    color="black"
                    p="0"
                    borderRadius="none"
                    _hover={{
                      color: "#670b19",
                      borderBottom: "3px solid #670b19",
                    }}
                    h="50px"
                    fontSize={{
                      base: "10px",
                      lg: "15px",
                    }}
                  >
                    <Text>Men</Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"100%"} m={"-8px 0 0 0"}>
                  <PopoverBody
                    p="0"
                    lineHeight="30px"
                    textAlign="left"
                    fontSize={"15px"}
                  >
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          CLOTHING
                        </Text>
                        <Text>Kurta Pajama</Text>
                        <Text>Dhoti Kurta</Text>
                        <Text>Nehru Jacket</Text>
                        <Text>Kurtas</Text>
                        <Text>Blazers</Text>
                        <Text>Sherwani</Text>
                        <Text>Pathani Suits</Text>
                        <Text>Bandhgala</Text>
                        <Text>Dhoti</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          JEWELLERY
                        </Text>
                        <Text>Earrings</Text>
                        <Text>Studs</Text>
                        <Text>Sherwani</Text>
                        <Text>Bracelets</Text>
                        <Text>Pendants</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          ACCESSORIES
                        </Text>
                        <Text>Turbans</Text>
                        <Text>Cufflinks</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          FOOTWEAR
                        </Text>
                        <Text>Casual</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </WrapItem>

            {/* 8} Western  */}
            <WrapItem>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Button
                    colorScheme="none"
                    color="black"
                    p="0"
                    borderRadius="none"
                    _hover={{
                      color: "#670b19",
                      borderBottom: "3px solid #670b19",
                    }}
                    h="50px"
                    fontSize={{
                      base: "10px",
                      lg: "15px",
                    }}
                  >
                    <Text>Western</Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"100%"} m={"-8px 0 0 0"}>
                  <PopoverBody
                    p="0"
                    lineHeight="30px"
                    textAlign="left"
                    fontSize={"15px"}
                  >
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          APPAREL
                        </Text>
                        <Text>Dresses</Text>
                        <Text>Tops</Text>
                        <Text>Tunics</Text>
                        <Text>Gowns</Text>
                        <Text>Indowestern</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          BOTTOMS
                        </Text>
                        <Text>Palazzos</Text>
                        <Text>Leggings</Text>
                        <Text>Skirts</Text>
                        <Text>Trousers</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </WrapItem>

            {/* 9} Blouses  */}
            <WrapItem>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Button
                    colorScheme="none"
                    color="black"
                    p="0"
                    borderRadius="none"
                    _hover={{
                      color: "#670b19",
                      borderBottom: "3px solid #670b19",
                    }}
                    h="50px"
                    fontSize={{
                      base: "10px",
                      lg: "15px",
                    }}
                  >
                    <Text>Blouses</Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"100%"} m={"-8px 0 0 0"}>
                  <PopoverBody
                    p="0"
                    lineHeight="30px"
                    textAlign="left"
                    fontSize={"15px"}
                  >
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          OCCASION
                        </Text>
                        <Text>Casual</Text>
                        <Text>Party Wear</Text>
                        <Text>Wedding</Text>
                        <Text>Festival</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          LOOK
                        </Text>
                        <Text>Fashion</Text>
                        <Text>Traditional</Text>
                        <Text>Designer</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          COLLECTION
                        </Text>
                        <Text>Plus Size</Text>
                        <Text>Readymade</Text>
                        <Text>Stretchable</Text>
                        <Text>Bridal</Text>
                        <Text>Blouse Material</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </WrapItem>

            {/* 10} Home & Living  */}
            <WrapItem>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Button
                    colorScheme="none"
                    color="black"
                    p="0"
                    borderRadius="none"
                    _hover={{
                      color: "#670b19",
                      borderBottom: "3px solid #670b19",
                    }}
                    h="50px"
                    fontSize={{
                      base: "10px",
                      lg: "15px",
                    }}
                  >
                    <Text>Home & Living</Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"100%"} m={"-8px 0 0 0"}>
                  <PopoverBody
                    p="0"
                    lineHeight="30px"
                    textAlign="left"
                    fontSize={"15px"}
                  >
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          FURNISHING
                        </Text>
                        <Text>Bed Sheets</Text>
                        <Text>Quilts</Text>
                        <Text>Curtains</Text>
                        <Text>Cushion Covers</Text>
                        <Text>Carpets & Rugs</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          DECOR
                        </Text>
                        <Text>Sculptures</Text>
                        <Text>Candles</Text>
                        <Text>Vases</Text>
                        <Text>Door Hangings</Text>
                        <Text>Decorative Plates</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          WALL ACCENTS
                        </Text>
                        <Text>Paintings</Text>
                        <Text>Wall Art</Text>
                        <Text>Wall Clocks</Text>
                        <Text>Photo Frames</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          KITCHEN & DINING
                        </Text>
                        <Text>Cookware</Text>
                        <Text>Utensils</Text>
                        <Text>Coasters</Text>
                        <Text>Trays</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          GOD STATUES
                        </Text>
                        <Text>Ganesha</Text>
                        <Text>Krishna</Text>
                        <Text>Hanuman</Text>
                        <Text>Shiva</Text>
                        <Text>Saibaba</Text>
                        <Text>Maa Durga</Text>
                        <Text>Buddha</Text>
                        <Text>Shiv Ling</Text>
                        <Text>Other Deities</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          POOJA ITEMS
                        </Text>
                        <Text>Diyas</Text>
                        <Text>Pooja Thali</Text>
                        <Text>Japa Mala</Text>
                        <Text>Pooja Bell</Text>
                        <Text>Chowki</Text>
                        <Text>Jhula</Text>
                        <Text>Pooja Kalash</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </WrapItem>

            {/* 11} Luxe  */}
            <WrapItem>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Button
                    colorScheme="none"
                    color="black"
                    p="0"
                    borderRadius="none"
                    _hover={{
                      color: "#670b19",
                      borderBottom: "3px solid #670b19",
                    }}
                    h="50px"
                    fontSize={{
                      base: "10px",
                      lg: "15px",
                    }}
                  >
                    <Text>Luxe</Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"100%"} m={"-8px 0 0 0"}>
                  <PopoverBody
                    p="0"
                    lineHeight="30px"
                    textAlign="left"
                    fontSize={"15px"}
                  >
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          WOMEN
                        </Text>
                        <Text>Sarees</Text>
                        <Text>Lehengas</Text>
                        <Text>Anarkali</Text>
                        <Text>Gowns</Text>
                        <Text>Kurta</Text>
                        <Text>Palazzo Set</Text>
                        <Text>Pant Set</Text>
                        <Text>Kaftan</Text>
                        <Text>Dresses</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          KIDS
                        </Text>
                        <Text>Girls Lehenga Set</Text>
                        <Text>Girls Kurta Set</Text>
                        <Text>Girls Frocks</Text>
                        <Text>Boys Kurta Pajama</Text>
                        <Text>Boys Sherwani</Text>
                        <Text>Boys Nehru Jackets</Text>
                        <Text>Boys Blazer</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          MEN
                        </Text>
                        <Text>Kurta Sets</Text>
                        <Text>Kurtas</Text>
                        <Text>Nehru Jacket</Text>
                        <Text>Sherwani</Text>
                        <Text>Blazers</Text>
                        <Text>Accessories</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          JEWELLERY
                        </Text>
                        <Text>Jewellery Set</Text>
                        <Text>Earrings</Text>
                        <Text>Rings</Text>
                        <Text>Bangles & Bracelet</Text>
                        <Text>Maang Tikka</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          ACCESSORIES
                        </Text>
                        <Text>Scarves</Text>
                        <Text>Hard Clutch</Text>
                        <Text>Potli</Text>
                        <Text>Hair Accessories</Text>
                        <Text>Footwear</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          OCCASION
                        </Text>
                        <Text>Festive</Text>
                        <Text>Casual</Text>
                        <Text>Wedding</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </WrapItem>

            {/* 12} Collections  */}
            <WrapItem>
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Button
                    colorScheme="none"
                    color="black"
                    p="0"
                    borderRadius="none"
                    _hover={{
                      color: "#670b19",
                      borderBottom: "3px solid #670b19",
                    }}
                    h="50px"
                    fontSize={{
                      base: "10px",
                      lg: "15px",
                    }}
                  >
                    <Text>Collections</Text>
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"100%"} m={"-8px 0 0 0"}>
                  <PopoverBody
                    p="0"
                    lineHeight="20px"
                    textAlign="left"
                    fontSize={"13px"}
                  >
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          ROOTS
                        </Text>
                        <Text>Sarees</Text>
                        <Text>Kurtas & Suits</Text>
                        <Text>Dress Material</Text>
                        <Text>Blouses</Text>
                        <Text>Dupattas</Text>
                        <Text>Bottoms</Text>
                        <Text>Jewellery</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          WESTERN WEAR
                        </Text>
                        <Text>Tops</Text>
                        <Text>Dresses</Text>
                        <Text>Tunics</Text>
                        <Text>Gowns</Text>
                        <Text>Indowestern</Text>
                        <Text>Palazzos</Text>
                        <Text>Leggings</Text>
                        <Text>Skirts</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          ACCESSORIES
                        </Text>
                        <Text>Stoles & Dupattas</Text>
                        <Text>Shawls</Text>
                        <Text>Bags</Text>
                        <Text>Footwear</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          BEAUTY
                        </Text>
                        <Text>Makeup</Text>
                        <Text>Face Care</Text>
                        <Text>Hair Care</Text>
                        <Text>Body Care</Text>
                        <Text>Female Hygiene</Text>
                        <Text>Personal Hygiene</Text>
                        <Text></Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          FOOD
                        </Text>
                        <Text>Packaged Food</Text>
                        <Text>Beverages</Text>
                        <Text>Baby Food</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          ISLAMIC
                        </Text>
                        <Text>Abaya</Text>
                        <Text>Hijab</Text>
                        <Text>Burka</Text>
                        <Text>Tunics</Text>
                        <Text>Kaftans</Text>
                        <Text>Kids Abaya</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#670b19" m="10px 0">
                          COMBOS
                        </Text>
                        <Text>Sarees</Text>
                        <Text>Dress Material</Text>
                        <Text>Kurtis</Text>
                        <Text>Jewellery</Text>
                        <Text>Leggings</Text>
                        <Text>Patiala Pants</Text>
                        <Text></Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </WrapItem>


          </Grid>
        </HStack>
      </Box>
    </>
  )
}
