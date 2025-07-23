import { AxiosError, AxiosResponse } from 'axios';
import api from '../api';

const getCurrencyInfo = async (
  baseCurrency: string,
): Promise<AxiosError | any> => {
  try {
    const response = await api.get<AxiosResponse, any>(
      `/latest/${baseCurrency}`,
    );
    const data = response.data;
    const itemInfo = data.data;
    return itemInfo;
  } catch (e) {
    const error = e as AxiosError;
    return error;
  }
};

export default getCurrencyInfo;
