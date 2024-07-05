import Item from "../../ui/horizontal_list/list/item/Item";

type Props = {
  data: Array<IQuizzCard> | null;
};

export default function List({ data }: Props) {
  if (!data)
    return (
      <div className="w-full text-center">
        <p>სერვერთან კავშირისას დაფისქირდა შეცდომა</p>
      </div>
    );

  if (data.length <= 0)
    return (
      <div className="w-full text-center">
        <p>ქვიზების ჩამონათვალი ცარიელია</p>
      </div>
    );

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {data.map((quizz) => (
        <Item key={quizz.id} data={quizz} />
      ))}
    </div>
  );
}
