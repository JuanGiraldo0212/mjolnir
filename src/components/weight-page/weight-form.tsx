import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";

const WeightForm = () => {
  const logWeight = async (formData: FormData) => {
    "use server";
    console.log(formData.get("weight"));
  };

  return (
    <div>
      <form action={logWeight} className="flex gap-x-2 justify-center">
        <Input
          type="text"
          name="weight"
          placeholder="kg"
          className="w-[50%] text-center"
        />
        <Button className="w-[50%]">Log weight</Button>
      </form>
    </div>
  );
};

export default WeightForm;
