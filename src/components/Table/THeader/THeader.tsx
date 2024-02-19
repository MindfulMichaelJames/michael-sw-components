import * as React from "react";
import { THeaderCell } from "./THeaderCell";

export interface ITHeaderType {
  headings: string[];
}

export function THeader({ headings }: ITHeaderType): JSX.Element {
  return (
    <tr key={"tHeader"} className="text-left border border-gray-300 bg-gray-500 text-slate-300 rounded p-10">
      {headings.map((heading, index) => (
        <THeaderCell
          id={index}
          value={heading}
        />
      ))}
    </tr>
  );
};