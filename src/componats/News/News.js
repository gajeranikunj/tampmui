import React from 'react'
import CNavbare from '../CNavbare'
import Footer from '../Footer'
import { Box, Container, Grid } from '@mui/material'
import { MdKeyboardArrowRight } from "react-icons/md"

function News() {
    return (
        <>
            <CNavbare />
            <Box sx={{ backgroundColor: "#f8f8f8" }}>
                <Container sx={{ marginTop: "20px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={9}>
                            1
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ position: "sticky", top: "10px" }}>
                            <Box sx={{ backgroundColor: "white", padding: "20px" }}>
                                <Box >
                                    <Box sx={{ fontSize: "18px" }}>Categories</Box>
                                </Box>
                                <Box sx={{ color: "#6EC1E4", marginTop: "10px" }}>
                                    <Box sx={{ marginTop: "5px" }}><MdKeyboardArrowRight />All</Box>
                                    <Box sx={{ marginTop: "5px" }}><MdKeyboardArrowRight />Business</Box>
                                    <Box sx={{ marginTop: "5px" }}><MdKeyboardArrowRight />Construction</Box>
                                    <Box sx={{ marginTop: "5px" }}><MdKeyboardArrowRight />Real Estate</Box>
                                </Box>
                            </Box>

                            <Box sx={{ backgroundColor: "white", padding: "20px", marginTop: "30px" }}>
                                <Box >
                                    <Box sx={{ fontSize: "18px" }}>Archives</Box>
                                </Box>
                                <Box sx={{ color: "#6EC1E4", marginTop: "10px" }}>
                                    <Box sx={{ marginTop: "5px" }}><MdKeyboardArrowRight />March 2016</Box>
                                    <Box sx={{ marginTop: "5px" }}><MdKeyboardArrowRight />January 2016</Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />

        </>
    )
}

export default News