import axios from "axios";

export interface Quote {
  id: number;
  author: string;
  quote: string;
}

const url = "https://dummyjson.com";

const getQuote = () =>
  axios
    .get<Quote>(url + "/quotes/random")
    .then((res) => res.data)
    .catch((err) => err.message);

export default getQuote;
