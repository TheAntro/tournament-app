import type { NextPage } from 'next';
import { Container, Typography, Box } from '@mui/material';
import Head from 'next/head';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tournament App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth="md">
          <Box
            sx={{
              my: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h1">Login page</Typography>
          </Box>
        </Container>
      </main>
    </>
  );
};

export default Login;
