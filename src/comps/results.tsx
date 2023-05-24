import React from "react";
import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
      {results.map((r) => {
        return (
          <>
            <Card key={r.id} res={r} />
          </>
        );
      })}
    </div>
  );
}
