import { useFetch, useLoadMore, usePrefetch, useUpdate } from './reactQuery';
import { apiRoutes } from '../config/routes';
import {
  AppointmentInterface,
  CarDetailInterface,
  InsuranceDetailsInterface,
} from '../interfaces/appointments';
import { pathToUrl } from '../utils/router';

export const useAppointmentsQuery = () =>
  useLoadMore<AppointmentInterface[]>(apiRoutes.getUserList);

export const useAppointmentQuery = (id: number) =>
  useFetch<AppointmentInterface>(pathToUrl(apiRoutes.appointment, { id }));

export const useAppointmentMutation = (id: number) =>
  useUpdate<AppointmentInterface, AppointmentInterface>(
    pathToUrl(apiRoutes.appointment, { id })
  );

export const useCarQuery = (id: number | null) =>
  useFetch<CarDetailInterface>(
    pathToUrl(apiRoutes.getCarDetail, { id }),
    undefined,
    { staleTime: 2000 }
  );

export const useInsuranceQuery = (id: number | null) =>
  useFetch<InsuranceDetailsInterface>(
    id ? pathToUrl(apiRoutes.getInsurance, { id }) : null
  );

export const usePrefetchCarDetails = (id: number | null) =>
  usePrefetch<InsuranceDetailsInterface>(
    id ? pathToUrl(apiRoutes.getCarDetail, { id }) : null
  );
