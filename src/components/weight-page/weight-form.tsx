import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";

const WeightForm = () => {
  const logWeight = async (formData: FormData) => {
    "use server";
    console.log(formData.get("weight"));
  };

  return (
    <>
      <Card>
        <CardContent>
          <form action={logWeight} className="flex gap-x-2 justify-center">
            <Input
              type="text"
              name="weight"
              placeholder="kg"
              className="max-w-[4.5rem] text-center"
            />
            <Button>Log weight</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default WeightForm;
