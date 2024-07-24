import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { FcAbout, FcHome, FcMenu } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';

const Navbar = () => {
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" passHref>
          <Box as="a" paddingLeft="2">
            DwellSpot
          </Box>
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton as={IconButton} icon={<FcMenu />} variant="outline" color="red.400" />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem as="a" icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem as="a" icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem as="a" icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem as="a" icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
