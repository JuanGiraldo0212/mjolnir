const ValueCard = ({ value, unit }: { value: string; unit: string }) => {
  return (
    <div className="p-4 w-[50%] h-[80%] text-center flex flex-col bg-secondary rounded-sm">
      <div className="m-auto">
        <h1 className="text-lg">{value}</h1>
        <h5 className="text-sm text-nowrap">{unit}</h5>
      </div>
    </div>
  );
};

export default ValueCard;
