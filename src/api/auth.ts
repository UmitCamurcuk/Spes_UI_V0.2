// api/auth.ts
import { postRequest } from '../utils/httpRequests';

export const login = (username: string, password: string) => {
    return postRequest('/api/auth/login', { username, password });
};
