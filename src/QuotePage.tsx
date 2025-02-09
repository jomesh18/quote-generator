import { useEffect, useState } from "react";
import getQuote, { Quote } from "./getQuote";

const QuotePage = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchQuote = async () => {
    try {
      const initialQuote = await getQuote();
      setQuote(initialQuote);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error("Failed to fetch quote", err);
      setError("Failed to fetch quote");
    }
  };

  const handleClick = async () => {
    await fetchQuote();
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", padding: "10px", backgroundColor: "red" }}
    >
      <div className="d-flex flex-column mb-3">
        {error ? (
          <div className="text-center text-danger">{error}</div>
        ) : (
          <>
            <h2
              className="text-center"
              style={{ margin: "20px", padding: "10px" }}
            >
              {quote?.quote}
            </h2>
            <h3
              className="text-center"
              style={{ margin: "10px", padding: "5px" }}
            >
              {quote?.author}
            </h3>
          </>
        )}
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" onClick={handleClick}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
