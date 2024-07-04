import NavItem from "./NavItem";

const list = [
  {
    title: "მთავარი",
    link: "/",
  },
  {
    title: "ქვიზები",
    link: "/quizzes",
  },
  {
    title: "ლიდერბორდი",
    link: "/leaderboard",
  },
];

export default function Navigation() {
  return (
    <nav className="h-full">
      <ul className="h-full flex gap-8 justify-center items-center">
        {list.map((li) => (
          <NavItem key={li.title} item={li} />
        ))}
      </ul>
    </nav>
  );
}
