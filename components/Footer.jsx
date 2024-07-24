import { Box } from "@chakra-ui/react"

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
       {currentYear} DwellSpot, Inc.
    </Box>
  )
}

export default Footer