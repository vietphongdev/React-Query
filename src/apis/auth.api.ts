import { apiRoutes } from '../config/routes';
import { api } from './base.api';

export const getTokenByPassword = (email: string, password: string) =>
  api.post<{ token: string }>(apiRoutes.getTokenByPassword, {
    email,
    password,
  });
