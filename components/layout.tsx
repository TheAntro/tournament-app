import React from 'react';
import { AppBar, Button, Toolbar, Typography, Box } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from '../src/Link';
import LoginButton from './loginButton';

type LayoutProps = {
  children: React.ReactElement | React.ReactElement[];
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Link href="/">
              <Typography
                color="white"
                variant="h6"
                sx={{ paddingInline: '0.5rem' }}
              >
                Tournament Generator
              </Typography>
            </Link>
          </Box>
          <LoginButton />
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}
