"use client";

import { useState } from "react";
import ProfilePic from "../../user/ProfilePic";
import Modal from "./modal/Modal";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = () => setIsOpen((prev) => !prev);

  return (
    <>
      <span className="h-full cursor-pointer" onClick={modalHandler}>
        <ProfilePic className="h-full py-2" />
      </span>
      {isOpen && <Modal handleModal={modalHandler} />}
    </>
  );
}
