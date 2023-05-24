import React from "react";

export default function Results({ results }) {
  return (
    <div>
      {results.map((r) => {
        return (
          <>
            <p key={r.id}>{r.original_title}</p>
          </>
        );
      })}
    </div>
  );
}
