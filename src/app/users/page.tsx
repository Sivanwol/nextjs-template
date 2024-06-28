'use client'
import { useMemo, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { User, UserColumnDef } from "../../lib/schema/user";
import Image from "next/image";
import useUserData from "@app/lib/hooks/useUserData";
import { useUserStore } from "@app/lib/state/providers/user-store-provider";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Table as BTable } from 'react-bootstrap';
import Link from "next/link";
import UserTableActionItem from "@app/components/userTableActionItem";
export default function Users() {
  const [userLoading, setUserLoading] = useState(false);
  const [userLoadingError, seUserLoadingError] = useState(false);
  useUserData();
  const { users } = useUserStore((state) => state);
  useMemo(() => {
    if (users.length === 0) {
      setUserLoading(true);
    }}, [users]);
  const columnHelper = createColumnHelper<UserColumnDef>();
  const columns = [
    columnHelper.accessor("id", {
      header: () => "#",
      cell: (info) => <Link href={`/user/${info.getValue()}`}>See Profile</Link>,
    }),
    columnHelper.accessor("thumbnail", {
      cell: (info) => (
        <Image src={info.getValue()} height={50} width={50} alt="User" />
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
      cell: (info) => <UserTableActionItem id={info.row.getValue('id')} onSave={onSave} />,
    }),
  ];
  const onSave = (id: string) => {
    console.log('save',id);
  }
  let data: UserColumnDef[] = [];
  if (users.length > 0) {
    data = users.map((user: User) => ({
      id: user.id,
      thumbnail: user.picture.thumbnail,
      title: user.name.title,
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      phone: user.phone,
      country: user.location.country,
    }));
  }
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
                        header.getContext()
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
                        header.getContext()
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
