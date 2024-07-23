import React from "react";
import InputField from "../reuse/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useProductForm from "./useProductForm";
import { Field } from "@tanstack/react-form";

const AdminAdd = () => {
  const form = useProductForm();
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center align-center">
        <h1 className="text-[#F25C54] mx-auto text-2xl font-semibold">
          Add Product
        </h1>
        <div className="w-[50vw] mx-auto my-4 rounded-[20px] border-[#F25C54] p-10 border-2">
          <form
            onSubmit={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <div className="my-4">
              <Field
                form={form}
                name="productId"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) {
                      return "Product Id Required";
                    }
                  },
                }}
                children={(field) => (
                  <>
                    {" "}
                    <InputField
                      label="Product ID"
                      type="text"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      id="productId"
                    />
                    {field.state.meta.errors && (
                      <div className="text-sm mx-1 mt-1 mb-5 text-red-500">
                        {field.state.meta.errors}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
            <div className="my-4">
              <Field
                form={form}
                name="productName"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) {
                      return "Product Name Required";
                    }
                  },
                }}
                children={(field) => (
                  <>
                    {" "}
                    <InputField
                      label="Product name"
                      type="text"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      id="productName"
                    />
                    {field.state.meta.errors && (
                      <div className="text-sm mx-1 mt-1 mb-5 text-red-500">
                        {field.state.meta.errors}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
            <div className="my-4">
              <Field
                form={form}
                name="productPrice"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) {
                      return "Product Price Required";
                    }
                  },
                }}
                children={(field) => (
                  <>
                    <InputField
                      label="Product price"
                      type="number"
                      value={field.state.value ?? ""}
                      onChange={(e) => {
                        const value =
                          e.target.value === "" ? null : Number(e.target.value);
                        field.handleChange(value);
                      }}
                      id="productPrice"
                    />
                    {field.state.meta.errors && (
                      <div className="text-sm mx-1 mt-1 mb-5 text-red-500">
                        {field.state.meta.errors}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
            <div className="my-4">
              <Field
                form={form}
                name="productImage"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) {
                      return "Product Image Required";
                    }
                  },
                }}
                children={(field) => (
                  <>
                    {" "}
                    <InputField
                      label="Product Image"
                      type="text"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      id="productImage"
                    />
                    {field.state.meta.errors && (
                      <div className="text-sm mx-1 mt-1 mb-5 text-red-500">
                        {field.state.meta.errors}
                      </div>
                    )}
                  </>
                )}
              />{" "}
            </div>
            <div className="my-4">
              <Field
                form={form}
                name="productType"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) {
                      return "Product Type Required";
                    }
                  },
                }}
                children={(field) => (
                  <>
                    <Select
                      value={field.state.value}
                      onValueChange={(value) => field.handleChange(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Category</SelectLabel>
                          <SelectItem value="men">Men</SelectItem>
                          <SelectItem value="women">Women</SelectItem>
                          <SelectItem value="accessories">
                            Accessories
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {field.state.meta.errors && (
                      <div className="text-sm mx-1 mt-1 mb-5 text-red-500">
                        {field.state.meta.errors}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
          </form>
          <div className="mx-5">
            <Button className="w-full bg-[#F25C54]" onClick={form.handleSubmit}>
              Add Product
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminAdd;
