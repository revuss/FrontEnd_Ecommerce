import React from "react";
import products, { Products } from "./data";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddButton from "./button";

const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "productId",
    header: "Product ID",
  },
  {
    accessorKey: "productName",
    header: "Product Name",
  },
  {
    accessorKey: "productPrice",
    header: "Price",
  },
  {
    accessorKey: "productImage",
    header: "Product Image",
  },
  {
    accessorKey: "productType",
    header: "Product Type",
  },
  {
    id: "edit",
    header: "Edit",
    cell: ({ row }) => (
      <div>
        <button
          onClick={() => handleEdit(row.original)}
          className="mr-2 p-2 bg-white rounded-md border px-4 text-black rounded"
        >
          Edit
        </button>
        <button
          onClick={() => handleRemove(row.original)}
          className="p-2 bg-red-500 rounded-md px-4 text-white "
        >
          Remove
        </button>
      </div>
    ),
  },
];
const handleEdit = (product: Products) => {
  console.log("Edit product", product);
};

const handleRemove = (product: Products) => {
  console.log("Remove product", product);
};
const AdminPanel: React.FC = () => {
  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <div className="table-container rounded-xl border-1  mx-20 my-10">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <AddButton />
    </>
  );
};

export default AdminPanel;
