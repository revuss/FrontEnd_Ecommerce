import CardHeadTitle from "../reuse/titleHead";
import CardContainer from "../reuse/cardContainer";
import LoginContent from "./content";

const LoginAdmin = () => {
  return (
    <>
      <CardContainer>
        <CardHeadTitle
          title="Login"
          description="Please login to access your account"
        />
        <LoginContent />
      </CardContainer>
    </>
  );
};

export default LoginAdmin;
