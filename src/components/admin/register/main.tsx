import React from "react";
import CardContainer from "../reuse/cardContainer";
import CardHeadTitle from "../reuse/titleHead";
import RegisterContent from "./content";

const RegisterAdmin = () => {
  return (
    <>
      <CardContainer>
        <CardHeadTitle
          title="Sign Up"
          description="Create your account by filling the form"
        />
        <RegisterContent />
      </CardContainer>
    </>
  );
};

export default RegisterAdmin;
