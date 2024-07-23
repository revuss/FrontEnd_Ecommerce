import { FormApi, useForm } from "@tanstack/react-form";

interface RegisterForm {
  productId: string;
  productName: string;
  productPrice: number | null;
  productImage: string;
  productType: string;
}

const useProductForm = (): FormApi<RegisterForm> => {
  const form = useForm<RegisterForm>({
    defaultValues: {
      productId: "",
      productName: "",
      productPrice: null,
      productImage: "",
      productType: "",
    },
    onSubmit: async ({ value }) => {
      try {
        console.log(value);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return form;
};

export default useProductForm;
