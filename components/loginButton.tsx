import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@mui/material';

export default function LoginButton({ user }: any) {
  const { data: session } = useSession();

  if (session) {
    return (
      <Button onClick={() => signIn()} color="inherit">
        Login
      </Button>
    );
  } else {
    return (
      <Button onClick={() => signOut()} color="inherit">
        Logout
      </Button>
    );
  }
}
