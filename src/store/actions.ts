import { User } from "../types/types";

export const setUser = (user: User) => ({
  type: 'SET_USER',
  payload: user,
});
