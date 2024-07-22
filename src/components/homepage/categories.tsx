import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

const Categories = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <div className="h-auto grid grid-col-1 md:grid-cols-3">
        <Card
          onClick={() => handleNavigate("/men")}
          className="m-10 cursor-pointer"
        >
          <CardContent className="flex items-center justify-center p-6">
            <span className="text-4xl font-semibold">Men</span>
          </CardContent>
        </Card>
        <Card
          className="m-10 cursor-pointer"
          onClick={() => handleNavigate("/women")}
        >
          <CardContent className="flex items-center justify-center p-6">
            <span className="text-4xl font-semibold">Women</span>
          </CardContent>
        </Card>
        <Card
          className="m-10 cursor-pointer"
          onClick={() => handleNavigate("/accessories")}
        >
          <CardContent className="flex items-center justify-center p-6">
            <span className="text-4xl font-semibold">Accessories</span>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Categories;
