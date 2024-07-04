import SeeAllBtn from "./SeeAllBtn";

type Props = {
  titleName: string;
  seeAllLink: string;
};

export default function Name({ seeAllLink, titleName }: Props) {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-xl font-bold">{titleName}</h1>
      <SeeAllBtn link={seeAllLink} />
    </div>
  );
}
