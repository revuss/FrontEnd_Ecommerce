import { FormApi, useForm } from "@tanstack/react-form";

interface LoginForm {
  email: string;
  password: string;
}

const useLoginForm = (): FormApi<LoginForm> => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
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

export default useLoginForm;
