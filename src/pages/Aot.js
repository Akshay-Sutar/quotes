import React from "react";
import QuoteCard from "../components/QuoteCard";
import Typography from "@mui/material/Typography";
import { quotes } from "../data/aot";

export default function Aot() {
  return (
    <div className="quotes-container">
      <Typography
        align="center"
        variant="h3"
        component="div"
        style={{ color: "#fff", marginTop: 15 }}
      >
        Attack on Titan
      </Typography>
      <div className="quotes-container-items">
        {quotes.map((quote) => {
          return <QuoteCard quote={quote} />;
        })}
      </div>
    </div>
  );
}
