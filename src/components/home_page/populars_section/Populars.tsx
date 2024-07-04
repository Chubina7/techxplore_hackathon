import React from "react";
import HorizontalList from "../../ui/horizontal_list/HorizontalList";
import { dummydata } from "../../../lib/DummyData";

export default function Populars() {
  // Retrieve data
  // ...
  // Pass tot the component
  return (
    <HorizontalList
      title="პოპულარული ქვიზები"
      seeAllLink="/quizzes?filter=popular"
      data={dummydata}
    />
  );
}
