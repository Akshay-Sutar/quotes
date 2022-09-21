import React from "react";
import QuoteCard from "../components/QuoteCard";
import {quotes} from "../data/aot";

export default function Aot() {
  return (
    <div className="quotes-container">
      {quotes.map((quote) => {
        return <QuoteCard quote={quote} />;
      })}
    </div>
  );
}
