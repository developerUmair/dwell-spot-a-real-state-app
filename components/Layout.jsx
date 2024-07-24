import { Box } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                {/* <title>Real State</title> */}
                <p>Real State</p>
            </Head>
            <Box maxWidth='1280px' m='auto'>
                <header>
                    <Navbar />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    )
}

export default Layout