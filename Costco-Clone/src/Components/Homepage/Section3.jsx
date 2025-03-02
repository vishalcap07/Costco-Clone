import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Card = ({
  image,
  heading,
  smallImg1,
  smallImg2,
  smallImg3,
  text1,
  text2,
  text3,
}) => {
  return (
    <SimpleGrid bg={"#065FA4"} color={"white"} borderRadius={8}>
      <Box>
        <img src={image} alt="" />
      </Box>
      <SimpleGrid textAlign={"center"} p={12} pt={2} gap={10}>
        <Text fontWeight={700} fontSize={"larger"}>
          {heading}
        </Text>
        <SimpleGrid
          gridTemplateColumns={"repeat(3,1fr)"}
          gap={3}
          fontWeight={600}
        >
          <SimpleGrid gap={2}>
            <Flex w={"30%"} m={"auto"}>
              <img src={smallImg1} alt="" />
            </Flex>
            <text>{text1}</text>
          </SimpleGrid>
          <SimpleGrid gap={2}>
            <Flex w={"30%"} m={"auto"}>
              <img src={smallImg2} alt="" />
            </Flex>
            <text>{text2}</text>
          </SimpleGrid>
          <SimpleGrid gap={2}>
            <Flex w={"30%"} m={"auto"}>
              <img src={smallImg3} alt="" />
            </Flex>
            <text>{text3}</text>
          </SimpleGrid>
        </SimpleGrid>

        <Link to={"/computer"}>
          <Button
            bg={"#D32029"}
            borderRadius={50}
            p={5}
            color={"white"}
            fontWeight={600}
            _hover={{ color: "black", backgroundColor: "white" }}
            w={"50%"}
            m={"auto"}
          >
            SHOP NOW
          </Button>
        </Link>
      </SimpleGrid>
    </SimpleGrid>
  );
};

const Section3 = () => {
  const arr = [
    "https://mobilecontent.costco.com/live/resource/img/23w11064/23w10160-4across-wsl.jpg",
    "https://mobilecontent.costco.com/live/resource/img/23w11064/23w10160-4across-treasure-hunt.jpg",
    "https://mobilecontent.costco.com/live/resource/img/23w11064/23w10160-4across-whats-new.jpg",
    "https://mobilecontent.costco.com/live/resource/img/23w11064/23w10160-4across-lower-prices.jpg",
  ];

  return (
    <Box>
      <SimpleGrid
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(4,1fr)",
        ]}
        justifyContent={"center"}
        p={[5, 5, 10, 20]}
        gap={12}
      >
        {arr.map((elem, i) => (
          <Flex justifyContent={"center"} key={i}>
            <img src={elem} alt="" />
          </Flex>
        ))}
      </SimpleGrid>

      <SimpleGrid
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
        ]}
        gap={12}
        p={[2, 5, 8, 20]}
        pb={[2, 2, 2, -28]}
      >
        <SimpleGrid
          alignItems={"center"}
          color={"white"}
          p={12}
          pt={20}
          pb={20}
          bg={"#CA1F28"}
          borderRadius={8}
        >
          <Text fontSize={"3rem"} fontWeight={700}>
            Why Buy at Costco?
          </Text>
          <Text fontWeight={600} fontSize={"1.3rem"} mt={2} mb={8}>
            The price you SEE is the price you PAY.
          </Text>
          <Text>
            <Text fontWeight={600}>Compare Costco all-in pricing.</Text> No
            Surprise at checkout for services such as installation, haul away
            and extended warranties. See products pages for details.
          </Text>
        </SimpleGrid>

        <Card
          image={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-apliances-img--m.jpg"
          }
          heading={"APPLIANCES"}
          smallImg1={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-delivery-and-setup-fy24--white.svg"
          }
          smallImg2={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-delivery-fy24--white.svg"
          }
          smallImg3={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-warranty-fy24--white.svg"
          }
          text1={"Installation & Haul Away"}
          text2={"Costco Direct Delivery"}
          text3={"2-Year Warranty"}
        />

        <Card
          image={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-tires-img--m.jpg"
          }
          heading={"TIRES"}
          smallImg1={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-installation-fy24--white.svg"
          }
          smallImg2={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-tire-fy24--white.svg"
          }
          smallImg3={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-warranty-fy24--white.svg"
          }
          text1={"Installation Included"}
          text2={"Balancing & Flat Repairs"}
          text3={"5-Year Warranty"}
        />

        <Card
          image={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-tvs-img--m.jpg"
          }
          heading={"TELEVISIONS"}
          smallImg1={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-delivery-and-setup-fy24--white.svg"
          }
          smallImg2={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-tech-support-fy24--white.svg"
          }
          smallImg3={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-warranty-fy24--white.svg"
          }
          text1={"Free Shipping"}
          text2={"Free Tech Support"}
          text3={"2-Year Warranty"}
        />

        <Card
          image={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-computers-img--m.jpg"
          }
          heading={"COMPUTERS"}
          smallImg1={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-reward-fy24--white.svg"
          }
          smallImg2={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-tech-support-fy24--white.svg"
          }
          smallImg3={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-warranty-fy24--white.svg"
          }
          text1={"90-Day Returns"}
          text2={"Free Tech Support"}
          text3={"2-Year Warranty"}
        />

        <Card
          image={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/eco-home-why-buy-mattresses-img--m.jpg"
          }
          heading={"MATTRESSES"}
          smallImg1={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-delivery-and-setup-fy24--white.svg"
          }
          smallImg2={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-delivery-fy24--white.svg"
          }
          smallImg3={
            "https://mobilecontent.costco.com/staging/resource/img/24w01226/icon-warranty-fy24--white.svg"
          }
          text1={"Setup & Haul Away"}
          text2={"Costco Direct Delivery"}
          text3={"10-Year Warranty"}
        />
      </SimpleGrid>

      <SimpleGrid
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
        ]}
        gap={12}
        p={[2, 5, 8, 20]}
        justifyContent={"center"}
      >
        <Link to={"/women-clothing"}>
          <Box>
            <img
              src="https://mobilecontent.costco.com/live/resource/img/24w09044/24w09044_third_banner_neutrogena_beach_defense.jpg"
              alt=""
            />
          </Box>
        </Link>
        <Link to={"/random"}>
          <Box>
            <img
              src="https://mobilecontent.costco.com/staging/resource/img/24w09043/24w09043_homepage_third_banner_laundry_wash_combo.jpg"
              alt=""
            />
          </Box>
        </Link>
        <Link to={"/random"}>
          <Box>
            <img
              src="https://mobilecontent.costco.com/live/resource/img/24w09057/m_24w09057_search_banner_winix.jpg"
              alt=""
            />
          </Box>
        </Link>
      </SimpleGrid>
    </Box>
  );
};

export default Section3;
