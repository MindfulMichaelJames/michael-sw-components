import * as React from "react";
import { TableData } from "./Table";

export interface sortingData {
  index: number;
  direction: "ascending" | "descending";
}

export interface sortingContextType {
  sortedBy: sortingData;
  setSortedBy: React.Dispatch<React.SetStateAction<sortingData>>;
}

export const SortContext = React.createContext<sortingContextType>({
  sortedBy: {index: -1, direction: "ascending"},
  setSortedBy: () => {}
});
