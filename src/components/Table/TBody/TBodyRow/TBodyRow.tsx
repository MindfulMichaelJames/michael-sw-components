import * as React from "react";
import { TBodyCell } from "./TBodyCell";
import "@/global.css"
import { TableData } from "../../Table";

export interface ITBodyRowType {
  id?: string;
  cells: TableData[];
}

export function TBodyRow({ id, cells }: ITBodyRowType): JSX.Element {
  return (
    <tr key={id} className="border border-gray-300 rounded p-10">
      {cells.map((cell, index) => (
        <TBodyCell id={`${id}-cell-${index}`} item={cell} />
      ))}
    </tr>
  );
};