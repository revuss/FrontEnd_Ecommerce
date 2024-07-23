import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import InputField from "../reuse/input";
import { Field } from "@tanstack/react-form";
import useRegisterForm from "./useRegisterForm";
import { Link } from "react-router-dom";

const RegisterContent = () => {
  const form = useRegisterForm();
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
              name="username"
              validators={{
                onChange: ({ value }) => {
                  if (value.length < 4) {
                    return "username too short";
                  }
                },
              }}
              children={(field) => (
                <>
                  <InputField
                    id="username"
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="username"
                    label="username"
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
          </div>

          <div className="grid w-full items-center">
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

          <div className="grid w-full items-center">
            <Field
              form={form}
              name="confirmPassword"
              validators={{
                onChangeListenTo: ["password"],
                onChange: ({ value, fieldApi }) => {
                  if (value !== fieldApi.form.getFieldValue("password")) {
                    return "password doesn't match";
                  }
                },
              }}
              children={(field) => (
                <>
                  <InputField
                    id="confirmPassword"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="password"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                    label="confirm password"
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
        <Button onClick={form.handleSubmit}>Register</Button>
        <p className="text-center pt-4">
          Already have an account,{" "}
          <Link className="font-semibold" to="/admin/login">
            Login
          </Link>
        </p>
      </CardFooter>
    </>
  );
};

export default RegisterContent;
