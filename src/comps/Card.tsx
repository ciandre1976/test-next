import React from "react";

export default function Card({ res }) {
  return (
    <>
      <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 rounded-lg border boreder-slate-400 m-2">
        {res.original_title}{" "}
      </div>
    </>
  );
}
