import React from "react";
import HorizontalList from "../../ui/horizontal_list/HorizontalList";
import { dummydata } from "../../../lib/DummyData";

export default function Alls() {
  // Retrieve data
  // ...
  // Pass tot the component
  return (
    <HorizontalList
      title="ყველა ქვიზი"
      seeAllLink="/quizzes"
      data={dummydata}
    />
  );
}
