"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import { useEffect, useState } from "react";
import Property from "../../components/Property";

const Banner = ({
  purpose,
  imgUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imgUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.700" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1} <br /> {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  const [propertyForSale, setPropertyForSale] = useState([]);
  const [propertyForRent, setPropertyForRent] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const saleData = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
      );
      const rentData = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
      );

      setPropertyForSale(saleData?.hits);
      setPropertyForRent(rentData?.hits);
    };

    fetchProperties();
  }, []);

  console.log(propertyForSale);
  return (
    <Box>
      <Banner
        purpose={"RENT A HOME"}
        title1={"Rental Homes for"}
        title2={"Everyone"}
        desc1={"Explore Apartments, Villas, Homes"}
        desc2={"and more"}
        buttonText={"Explore Renting"}
        linkName="/search?purpose=for-rent"
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertyForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose={"BUY A HOME"}
        title1={"Find, Buy & Own Your"}
        title2={"Dream Homes"}
        desc1={"Explore Apartments, Villas, Homes"}
        desc2={"and more"}
        buttonText={"Explore Buying"}
        linkName="/search?purpose=for-sale"
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
      {propertyForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}


