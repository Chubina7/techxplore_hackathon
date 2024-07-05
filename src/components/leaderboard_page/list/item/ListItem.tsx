import Place from "./Place";
import Points from "./Points";
import UserNames from "./UserNames";
import UserPicture from "./UserPicture";

type Props = {
  data: {
    place: number;
    user_picture: string | undefined;
    username: string;
    surname: string;
    points: number;
  };
};

export default function ListItem({ data }: Props) {
  const { place, points, surname, user_picture, username } = data;

  return (
    <div
      className={`w-full flex justify-between items-center rounded-3xl px-3 py-2 ${
        place === 1
          ? "bg-customPurpleDark text-customBrightWhite scale-105"
          : "scale-100 bg-customPurpleLight"
      }`}
    >
      <div className="flex justify-center items-center gap-4">
        <Place data={place} />
        <UserPicture src={user_picture} />
        <UserNames surname={surname} username={username} />
      </div>
      <Points data={points} />
    </div>
  );
}
