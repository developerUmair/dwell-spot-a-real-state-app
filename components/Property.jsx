import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import millify from "millify";
import Image from "next/image";
import Link from "next/link";
import { GoVerified } from 'react-icons/go'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'

const Property = ({ property }) => {
    const { coverPhoto, isVerified, price, rentFrequency, rooms, baths, area, agency, title, externalID } = property;
    return (
        <Link href={`/property/${externalID}`} passHref>
            <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent='flex-start' cursor='pointer'>
                <Flex flexWrap='wrap' w='420px' paddingTop='0' justifyContent='flex-start'>
                    <Box>
                        <Image src={coverPhoto?.url} width={400} height={260} alt="cover-photo" />
                    </Box>
                    <Box>
                        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                            <Flex alignItems='center'>
                                <Box paddingRight='3' color='green'>{isVerified && <GoVerified />}</Box>
                                <Text fontWeight='bold' fontSize='lg'>AED {millify(price)} {rentFrequency && `/${rentFrequency}`}</Text>
                            </Flex>
                            <Box>
                                <Avatar size='sm' src={agency?.logo?.url} />
                            </Box>
                        </Flex>
                        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue'>
                            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                        </Flex>
                        <Text fontSize='lg'>
                            {title.length > 40 ? `${title.substring(0, 40)}...`: title}
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Link>
    );
};

export default Property;
