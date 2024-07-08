"use client";
import axios from "axios";
import { useMemo, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import { useUserStore } from "@app/lib/state/providers/user-store-provider";

import "bootstrap/dist/css/bootstrap.min.css";

import { Table as BTable } from "react-bootstrap";
import Link from "next/link";
import UserTableActionItem from "@app/components/userTableActionItem";
import { UserColumnDef, UserResponse } from "@app/lib/requests/user";
import useUserHistoryData from "@app/lib/hooks/useUserHistoryData";
export default function UsersHistory() {
  useUserHistoryData();
  const { history } = useUserStore((state) => state);
  const columnHelper = createColumnHelper<UserColumnDef>();
  const columns = [
    columnHelper.accessor("id", {}),
    columnHelper.accessor("thumbnail", {
      cell: (info) => (
        <Link href={`/users/${info.row.getValue("id")}`}>
          <Image src={info.getValue()} height={50} width={50} alt="User" />
        </Link>
      ),
    }),
    columnHelper.accessor("title", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("phone", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("country", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("actions", {
      cell: (info) => {
        console.log("info.row", info.row.getValue("id"));
        return (
          <UserTableActionItem
            id={info.row.getValue("id")}
            onDelete={onDelete}
          />
        );
      },
    }),
  ];
  const onDelete = async (id: string) => {
    console.log("delete", id);
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
    );
    if (res.status === 200) {
      alert("deleted");
      window.location.reload();
    }
  };
  let data: UserColumnDef[] = [];
  useMemo(() => {
    if (history.length > 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      data = history.map(
        (user: UserResponse) =>
          ({
            id: user.externalId,
            title: user.title,
            thumbnail: user.thumbnail,
            name: user.fullName,
            email: user.email,
            phone: user.phone,
            country: user.country,
            actions: "",
          }) as UserColumnDef,
      );
      console.log("data", data);
    }
  }, [history, data]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    autoResetPageIndex: false,
    autoResetExpanded: false,
    initialState: {
      columnVisibility: { id: false },
    },
  });
  return (
    <div className="p-2">
      <BTable striped bordered hover responsive size="sm">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </BTable>
    </div>
  );
}
