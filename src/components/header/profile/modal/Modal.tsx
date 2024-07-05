import HelpCenter from "./HelpCenter";
import Profile from "./Profile";
import Settings from "./Settings";
import SignOut from "./SignOut";

type Props = {
  handleModal: () => void;
};

export default function Modal({ handleModal }: Props) {
  return (
    <div
      className="absolute -bottom-1 transform translate-y-[100%] right-0 bg-customBrightWhite py-2 rounded-3xl overflow-hidden select-none"
      id="profile_modal"
    >
      <Profile handleModal={handleModal} />
      <Settings handleModal={handleModal} />
      <HelpCenter handleModal={handleModal} />
      <SignOut handleModal={handleModal} />
    </div>
  );
}
