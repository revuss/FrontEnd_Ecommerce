import { FormApi, useForm } from "@tanstack/react-form";

interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const useRegisterForm = (): FormApi<RegisterForm> => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
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

export default useRegisterForm;
