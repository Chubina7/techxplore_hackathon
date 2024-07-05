"use client";

import FilterBtn from "./FilterBtn";
import SelectCtg from "../../ui/selection/SelectCtg";
import { useState } from "react";

const dummyCategories = {
  cat1: ["აიტი სფერო", "ქიმია", "მათემატიკა"],
  cat2: [
    "React პროგრამირება",
    "Python პროგრამირება",
    "მოლეკულები",
    "პითაგორას თეორემა",
  ],
  cat3: ["მარტივი", "რთული", "საშუალო"],
};

export default function Filter() {
  const [queries, setQueries] = useState({
    cat1: "",
    cat2: "",
    cat3: "",
  });

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-5 justify-center items-center">
        <h1 className="text-lg font-bold">აირჩიე:</h1>
        <SelectCtg
          id="select_category1"
          selectTitle={queries.cat1 !== "" ? queries.cat1 : "კატეგორია"}
          options={dummyCategories.cat1}
          setterFunc={(value: string) => {
            setQueries((prev) => ({ ...prev, cat1: value }));
          }}
        />
        {queries.cat1 !== "" && (
          <SelectCtg
            id="select_category2"
            selectTitle={queries.cat2 !== "" ? queries.cat2 : "ქვე-კატეგორია"}
            options={dummyCategories.cat2}
            setterFunc={(value: string) => {
              setQueries((prev) => ({ ...prev, cat2: value }));
            }}
          />
        )}
        {queries.cat2 !== "" && (
          <SelectCtg
            id="select_category3"
            selectTitle={queries.cat3 !== "" ? queries.cat3 : "დონე"}
            options={dummyCategories.cat3}
            setterFunc={(value: string) => {
              setQueries((prev) => ({ ...prev, cat3: value }));
            }}
          />
        )}
      </div>
      <FilterBtn queries={queries} />
    </div>
  );
}
