import React from 'react'
import CNavbare from '../CNavbare'
import Footer from '../Footer'
import { Box, Container, Grid } from '@mui/material'

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
                        <Grid item xs={12} md={3}>
                            <Box sx={{ backgroundColor: "white",padding:"20px" }}>
                                <Box >
                                    <Box sx={{fontSize:"22px"}}>Categories</Box>
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