import * as React from "react";
import { TBodyRow } from "./TBodyRow";
import { SortContext } from "../sorting";
import { TableData } from "../Table";

interface Props {
  rows: TableData[][];
}

export function TBody({ rows }: Props): JSX.Element {
  const { sortedBy } = React.useContext(SortContext);

  const sortingComparator = (rowA: TableData[], rowB: TableData[]): number => {
    if (sortedBy && sortedBy.index > -1) {
      const compared = rowA[sortedBy.index].value.localeCompare(rowB[sortedBy.index].value);
      if (sortedBy.direction === "descending") {
        return -compared;
      } else {
        return compared;
      }
    } 
    return 0;
  };

  rows.sort(sortingComparator);

  return (
    <tbody>
      {rows.map((row, index) => (
        <TBodyRow id={`row-${index}`} cells={row} />
      ))}
    </tbody>
  );
};