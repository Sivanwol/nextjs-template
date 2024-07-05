"use client";
import axios from "axios";
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

import "bootstrap/dist/css/bootstrap.min.css";

import { Table as BTable } from "react-bootstrap";
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
    }
  }, [users]);
  const columnHelper = createColumnHelper<UserColumnDef>();
  const columns = [
    columnHelper.accessor("id", {}),
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
      cell: (info) => (
        <UserTableActionItem id={info.row.getValue("id")} onSave={onSave} />
      ),
    }),
  ];
  const onSave = async (id: string) => {
    const user = users.find((user) => user.id === id);
    const saveObj = {
      uuid: user?.id,
      userName: user?.username,
      title: user?.name.title,
      email: user?.email,
      name: `${user?.name.first} ${user?.name.last}`,
      phone: user?.phone,
      country: user?.location.country,
      city: user?.location.city,
      address: `${user?.location.street.name} ${user?.location.street.number}`,
      thumbnail: user?.picture.thumbnail,
      gender: user?.gender,
    };
    console.log("save", id, user, saveObj);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/save`,
      saveObj,
    );

    if (res.status === 200) {
      alert("saved");
      window.location.reload();
    }
  };
  let data: UserColumnDef[] = [];
  useMemo(() => {
    if (users.length > 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      data = users.map(
        (user: User) =>
          ({
            id: user.id,
            thumbnail: user.picture.thumbnail,
            title: user.name.title,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            phone: user.phone,
            country: user.location.country,
            actions: "",
          }) as UserColumnDef,
      );
      console.log("data", data);
    }
  }, [users, data]);

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
