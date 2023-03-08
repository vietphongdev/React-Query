import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import {
  useAppointmentQuery,
  useAppointmentMutation,
} from '../../hooks/useAppointments';

type Props = {
  id: number;
};

const History = ({ id }: Props) => {
  const { data, isFetching } = useAppointmentQuery(+id);
  const { mutate: updateAppointment, isLoading: isUpdatingAppointment } =
    useAppointmentMutation(+id);

  if (isFetching) {
    return (
      <Box>
        <Box pt={2}>
          <Skeleton animation="wave" variant="rectangular" height={15} />
        </Box>
        <Box pt={2}>
          <Skeleton animation="wave" variant="rectangular" height={15} />
        </Box>
        <Box pt={2}>
          <Skeleton animation="wave" variant="rectangular" height={15} />
        </Box>
      </Box>
    );
  }

  const onSubmit = () => {
    updateAppointment(data!);
  };

  return (
    <>
      {data?.history.map((item) => (
        <Typography variant="body1" key={item.date}>
          Date: {item.date} <br />
          Comment: {item.comment}
        </Typography>
      ))}

      {!data?.history.length && !isFetching && (
        <Box mt={2}>
          <span>Nothing found</span>
        </Box>
      )}
      <Box mt={3}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={onSubmit}
          disabled={!data || isUpdatingAppointment}
        >
          Save
        </Button>
      </Box>
    </>
  );
};

export default History;
