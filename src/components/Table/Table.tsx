import * as React from "react";
import { THeader } from "./THeader";
import { TBody } from "./TBody";
import "@/global.css"
import { SortContext, sortingData } from "./sorting";

export interface ITableType {
  headings: string [];
  data: TableData[][];
}

export interface TableData {
  value: string;
  type: "text" | "link";
  href?: string;
}

export function Table({ headings, data }: ITableType): JSX.Element {
  const [sortedBy, setSortedBy] = React.useState<sortingData>({index: -1, direction: "ascending"});
  const value = { sortedBy, setSortedBy }
  return (
    <SortContext.Provider value={value}>
      <table key={"table"} className={"text-gray-500 table-auto text-3xl font-mono"}>
        <thead>
          <THeader headings={headings}/>
        </thead>
        <TBody rows={data} />
      </table>
    </SortContext.Provider>
  );
};