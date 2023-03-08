import { useFetch } from './reactQuery';
import { ServiceInterface } from '../interfaces/appointments';
import { apiRoutes } from '../config/routes';

export const useServicesQuery = () =>
  useFetch<ServiceInterface[]>(apiRoutes.getServices, undefined, {
    suspense: true,
    retry: 0,
  });
