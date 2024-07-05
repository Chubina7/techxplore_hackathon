type Props = {
  username: string;
  surname: string;
};
export default function UserNames({ surname, username }: Props) {
  return (
    <h1>
      {username} {surname}
    </h1>
  );
}
