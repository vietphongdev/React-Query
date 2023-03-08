import React from 'react';
import { Avatar, Box, CircularProgress, Typography } from '@mui/material';
import { useProfileQuery } from '../../hooks/useAuth';
import { deepPurple } from '@mui/material/colors';

const UserProfile = () => {
  const { data: user, isLoading } = useProfileQuery();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="flex-end">
        <CircularProgress color="inherit" size={24} />
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="flex-end">
      {user ? (
        <Avatar sx={{ bgcolor: deepPurple[500] }}>
          <Typography variant="caption">{user.name}</Typography>
        </Avatar>
      ) : (
        'Unauthorized'
      )}
    </Box>
  );
};

export default UserProfile;
