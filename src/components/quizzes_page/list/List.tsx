import { dummydata } from "../../../lib/DummyData";
import Item from "../../ui/horizontal_list/list/item/Item";

export default function List() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {dummydata.map((quizz) => (
        <Item key={quizz.id} data={quizz} />
      ))}
    </div>
  );
}
