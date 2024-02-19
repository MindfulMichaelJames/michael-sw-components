import * as React from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SortContext, sortingData } from "../../sorting";

interface Props {
  id: number;
  value: string;
}

const sortIcon = (index: number, sortedBy: sortingData) => {
  if (sortedBy && sortedBy.index === index) {
    if (sortedBy.direction === "ascending") {
      return <ArrowDropUpIcon/>;
    } else if (sortedBy.direction === "descending") {
      return <ArrowDropDownIcon/>;
    }
  }
  return undefined;
};

const toggleSort = (index: number, sortedBy: sortingData): sortingData => {
  if (sortedBy && sortedBy.index === index && sortedBy.direction === "ascending") {
    return ({index: index, direction: "descending"});
  }
  return ({index: index, direction: "ascending"})
}

export function THeaderCell({ id, value }: Props): JSX.Element {
  const { sortedBy, setSortedBy } = React.useContext(SortContext);
  return (
    <th key={`tHeader-cell-${id}`} onClick={() => setSortedBy(toggleSort(id, sortedBy))} className="pl-2 pr-5 px-3">
      {value}
      {sortIcon(id, sortedBy)}
    </th>
  );
};