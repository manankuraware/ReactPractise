import axios from "axios";

const api = axios.create({
  baseURL:
    "https://v6.exchangerate-api.com/v6/897c23339071bea6dbff6159",
});

export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
