'use client';

import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsFilter } from 'react-icons/bs';
// import SearchFilters from '../components/SearchFilters';
// import Property from '../components/Property';
import noresult from '../../../assets/noresult.svg';
import Image from 'next/image';
import { baseUrl, fetchApi } from '../../../utils/fetchApi';
import SearchFilters from '../../../components/SearchFilters';
import Property from '../../../components/Property';

const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const searchParams = useSearchParams();
  const purpose = searchParams.get('purpose') || 'for-rent';
  const rentFrequency = searchParams.get('rentFrequency') || 'yearly';
  const minPrice = searchParams.get('minPrice') || '0';
  const maxPrice = searchParams.get('maxPrice') || '1000000';
  const roomsMin = searchParams.get('roomsMin') || '0';
  const bathsMin = searchParams.get('bathsMin') || '0';
  const sort = searchParams.get('sort') || 'price-desc';
  const locationExternalIDs = searchParams.get('locationExternalIDs') || '5002';
  const categoryExternalID = searchParams.get('categoryExternalID') || '4';
  const areaMax = searchParams.get('areaMax') || '3500';

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await fetchApi(`${baseUrl}/properties/list?purpose=${purpose}&locationExternalIDs=${locationExternalIDs}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
      setProperties(data?.hits);
    };

    fetchProperties();
  }, [locationExternalIDs, purpose, categoryExternalID, bathsMin, rentFrequency, minPrice, maxPrice, roomsMin, sort, areaMax]);

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prev) => !prev)}
      >
        <Text>Search Property by Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDirection='column' marginTop='5' marginBottom='5'>
          <Image src={noresult} alt="no result" />
          <Text fontSize='2xl' marginTop='3'>No Results Found</Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;
