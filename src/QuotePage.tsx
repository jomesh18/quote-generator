import { useEffect, useState } from "react";
import getQuote, { Quote } from "./getQuote";

const QuotePage = () => {
  const handleClick = () => {};
  const [quote, setQuote] = useState<Quote>({} as Quote);
  useEffect(() => {
    getQuote()
      .then((res) => setQuote(res))
      .catch((err) => err);
  }, [handleClick]);
  return (
    <>
      <div className="container">
        <h2>{quote.quote}</h2>
      </div>
      <h3>{quote.author}</h3>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Next
      </button>
    </>
  );
};

export default QuotePage;
