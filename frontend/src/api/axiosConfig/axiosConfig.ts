import axios from 'axios';
import { config } from '@/config/env';

export const api = axios.create({
  baseURL: config.api.baseUrl || 'http://localhost:3001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
