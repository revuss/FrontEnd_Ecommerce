import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import InputField from "../reuse/input";
import useLoginForm from "./useLoginForm";
import { Field } from "@tanstack/react-form";
import { Link } from "react-router-dom";

const LoginContent = () => {
  const form = useLoginForm();
  return (
    <>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <div className="grid w-full items-center">
            <Field
              form={form}
              name="email"
              validators={{
                onChange: ({ value }) => {
                  if (!/\S+@\S+\.\S+/.test(value)) {
                    return "Invalid email";
                  }
                },
              }}
              children={(field) => (
                <>
                  <InputField
                    id="email"
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="user@mail.com"
                    label="email"
                  />
                  {field.state.meta.errors && (
                    <div className="text-sm mx-1 mt-1 mb-5 text-red-500">
                      {field.state.meta.errors}
                    </div>
                  )}
                </>
              )}
            />

            <Field
              form={form}
              name="password"
              validators={{
                onChange: ({ value }) => {
                  if (value.length < 8) {
                    return "password too short";
                  }
                },
              }}
              children={(field) => (
                <>
                  <InputField
                    id="password"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="password"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                    label="password"
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
        </form>
      </CardContent>
      <CardFooter className="flex flex-col justify-between">
        <Button className="w-full" onClick={form.handleSubmit}>
          Login
        </Button>
        <p className="text-center pt-3">
          Don't have an account,{" "}
          <Link className="font-semibold" to="/admin/register">
            Register
          </Link>
        </p>
      </CardFooter>
    </>
  );
};

export default LoginContent;
