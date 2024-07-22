import { FormApi, useForm } from "@tanstack/react-form";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const useContactForm = (): FormApi<ContactForm> => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
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

export default useContactForm;
