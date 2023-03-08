import { apiRoutes } from '../config/routes';
import { ProfileInterface } from '../interfaces/auth';
import { useFetch } from './reactQuery';

export const useProfileQuery = () => {
  const context = useFetch<{ user: ProfileInterface }>(
    apiRoutes.getProfile,
    undefined,
    { retry: false }
  );
  return { ...context, data: context.data?.user };
};
