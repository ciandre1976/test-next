"use client";

import React from "react";

export default function error({ error }) {
  console.log(error);
  return (
    <div className="text-center mt-10 text-red-700">Error has occutred!!!</div>
  );
}
