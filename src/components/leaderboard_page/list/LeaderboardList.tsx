import ListItem from "./item/ListItem";

const dummyList = [
  {
    place: 1,
    points: 657435,
    username: "სახელი1",
    surname: "გვარი1",
    user_picture: undefined,
  },
  {
    place: 2,
    points: 543210,
    username: "სახელი2",
    surname: "გვარი2",
    user_picture: undefined,
  },
  {
    place: 3,
    points: 432109,
    username: "სახელი3",
    surname: "გვარი3",
    user_picture: undefined,
  },
  {
    place: 4,
    points: 321098,
    username: "სახელი4",
    surname: "გვარი4",
    user_picture: undefined,
  },
  {
    place: 5,
    points: 210987,
    username: "სახელი5",
    surname: "გვარი5",
    user_picture: undefined,
  },
  {
    place: 6,
    points: 109876,
    username: "სახელი6",
    surname: "გვარი6",
    user_picture: undefined,
  },
  {
    place: 7,
    points: 98765,
    username: "სახელი7",
    surname: "გვარი7",
    user_picture: undefined,
  },
  {
    place: 8,
    points: 87654,
    username: "სახელი8",
    surname: "გვარი8",
    user_picture: undefined,
  },
  {
    place: 9,
    points: 76543,
    username: "სახელი9",
    surname: "გვარი9",
    user_picture: undefined,
  },
  {
    place: 10,
    points: 65432,
    username: "სახელი10",
    surname: "გვარი10",
    user_picture: undefined,
  },
];

export default function LeaderboardList() {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      {dummyList.map((placer) => (
        <ListItem key={placer.place} data={placer} />
      ))}
    </div>
  );
}
