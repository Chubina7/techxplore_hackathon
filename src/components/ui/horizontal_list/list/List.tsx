import Item from "./item/Item";

type Props = {
  list: Array<IQuizzCard>;
};

export default function List({ list }: Props) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 overflow-x-scroll scroll-hidden p-3">
      {list.slice(0, 4).map((quizz) => (
        <Item key={quizz.id} data={quizz} />
      ))}
    </div>
  );
}
