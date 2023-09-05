import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const HomePage: React.FC<{}> = () => {
    const backgroundImageUrl = 'https://img.freepik.com/premium-photo/white-daisy-flowers-light-background-healthy-medical-holiday-concept-high-top-view_78949-758.jpg?w=360';

    return (
        <div style={{
            padding:'50px',
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '95vh'
        }}>
        
            <h1 style={{ color: '#424242', textAlign:'center' }}> Welcome to Doremi System ! </h1>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">

                </Container>
                <br />
                <ul></ul>
                <br />
                <Container maxWidth="sm">
                    <Box sx={{ bgcolor: 'transparent', width: '100vh', height: '55vh', fontSize:'1.5vh', textAlign:'justify'}}>
                        <h1 style={{ color: '#472420' }}> 
                        Description:
                        <br></br>
                        The "Doremi System" is a comprehensive and user-centric solution designed to empower users with the ability to effortlessly update and manage their personal details within a web application. 
                        This system enhances the user experience by providing a seamless and intuitive interface for making changes to essential information, such as contact details, preferences, and account settings.</h1>
                    </Box>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default HomePage;
