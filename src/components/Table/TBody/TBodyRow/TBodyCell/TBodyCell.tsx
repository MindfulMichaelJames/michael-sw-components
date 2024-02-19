import * as React from "react";
import { TableData } from "@/components/Table/Table";
import Link from "next/link";

interface Props {
  id: string;
  item: TableData;
}

export function TBodyCell({ id, item }: Props): JSX.Element {
  return (
    <td key={id} className="min-w-16 pl-3 pr-7 px-2">
      {
        item.type === "link"
          ? <Link href={item.href} className="underline font-medium">{item.value}</Link>
          : <p>{item.value}</p>
      }
    </td>
  );
};