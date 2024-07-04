import Link from "next/link";
import Categories from "./Categories";
import Difficulty from "./Difficulty";
import Icon from "./Icon";

type Props = {
  data: IQuizzCard;
};

export default function Item({ data }: Props) {
  const { categories, difficulty, icon, id, name } = data;

  return (
    <Link
      href={`/quizz?id=${id}`}
      className="w-80 rounded-2xl p-3 bg-customPurpleLight flex flex-col hover:scale-105 transition-all duration-300"
    >
      <div className="w-full flex justify-between items-center pb-4">
        <Icon src={icon} />
        <Difficulty level={difficulty} />
      </div>
      <h1 className="text-lg font-semibold line-clamp-2">{name}</h1>
      <Categories list={categories} />
    </Link>
  );
}
