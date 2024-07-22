import ContactForm from "./ContactForm";
import Left from "./Left";

const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div
          className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
          id="contact-form"
        >
          <Left />
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
