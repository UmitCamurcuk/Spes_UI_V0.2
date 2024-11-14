// utils/httpRequests.ts
import apiClient from './httpClient';

export const getRequest = (url: string) => apiClient.get(url);
export const postRequest = (url: string, data: any) => apiClient.post(url, data);
export const putRequest = (url: string, data: any) => apiClient.put(url, data);
export const deleteRequest = (url: string) => apiClient.delete(url);
