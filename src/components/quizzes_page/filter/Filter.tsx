import FilterBtn from "./FilterBtn";
import SelectCtg from "./selection/SelectCtg";

export default function Filter() {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-5 justify-center items-center">
        {/* კატეგორიები გამოჩნდეს რიგრიგობით */}
        <SelectCtg
          id="select_category1"
          selectTitle="მთავარი"
          options={["პროგრამირება", "ბლოკჩეინი", "მათემატიკა"]}
        />
        <SelectCtg
          id="select_category2"
          selectTitle="ქვე-კატეგორია"
          options={["მერვე კლასის", "დამწყებისთვის"]}
        />
        <SelectCtg
          id="select_category3"
          selectTitle="ოფშენალი"
          options={["ანდეფაინდ"]}
        />
      </div>
      <FilterBtn />
    </div>
  );
}
