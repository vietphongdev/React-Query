import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useCarQuery } from '../../hooks/useAppointments';

type Props = {
  id: number;
};

const CarDetails = ({ id }: Props) => {
  const { data, isLoading } = useCarQuery(id);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!data) {
    return <span>Nothing found</span>;
  }

  return (
    <Box>
      <Box mt={2}>
        <Typography>Model: {data.model}</Typography>
      </Box>

      <Box mt={2}>
        <Typography>Number: {data.number}</Typography>
      </Box>
    </Box>
  );
};

export default CarDetails;
