import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import useContactForm from "./useContactForm";
import { Field } from "@tanstack/react-form";

const ContactForm = () => {
  const form = useContactForm();
  return (
    <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
      <h1 className="text-4xl text-[#F25C54] sm:text-4xl font-bold title-font mb-4">
        Contact Form
      </h1>
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <div className="p-2 w-full">
          <div className="relative">
            <Field
              form={form}
              name="name"
              validators={{
                onChange: ({ value }) => {
                  if (value.length < 3) {
                    return "Too short name";
                  }
                },
              }}
              children={(field) => (
                <>
                  <Label
                    htmlFor="name"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    name="name"
                    className="w-full "
                  />
                  {field.state.meta.errors && (
                    <div className="text-sm mx-1 mt-1 text-red-500">
                      {field.state.meta.errors}
                    </div>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
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
                  <Label
                    htmlFor="email"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Email
                  </Label>
                  <Input
                    type="text"
                    id="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    name="email"
                    className="w-full "
                  />
                  {field.state.meta.errors && (
                    <div className="text-sm mx-1 mt-1 text-red-500">
                      {field.state.meta.errors}
                    </div>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <Field
              form={form}
              name="message"
              validators={{
                onChange: ({ value }) => {
                  if (value.length < 7) {
                    return "Message too short";
                  }
                },
              }}
              children={(field) => (
                <>
                  <Label
                    htmlFor="message"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    name="message"
                    className="w-full"
                  ></Textarea>
                  {field.state.meta.errors && (
                    <div className="text-sm mx-1 mt-1 text-red-500">
                      {field.state.meta.errors}
                    </div>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <Button
            onClick={form.handleSubmit}
            className="flex text-white bg-[#F25C54] border-0 py-7 px-6 focus:outline-none hover:bg-orange-700 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
