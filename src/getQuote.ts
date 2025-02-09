import axios from "axios";

export interface Quote {
  id: number;
  author: string;
  quote: string;
}

const url = "https://dummyjson.com";

const getQuote = async (): Promise<Quote> => {
  try {
    const response = await axios.get<Quote>(`${url}/quotes/random`);
    return response.data;
  } catch (err) {
    console.error("Failed to fetch quote", err);
    throw new Error("Failed to fetch quote");
  }
};

export default getQuote;