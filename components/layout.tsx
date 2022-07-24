import React from 'react';
import { AppBar, Button, Toolbar, Typography, Box } from '@mui/material';
import { NextLinkComposed } from '../src/Link';
import Link from '../src/Link';

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
          <Button
            component={NextLinkComposed}
            to={{ pathname: '/login' }}
            color="inherit"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}
