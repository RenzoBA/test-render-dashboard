"use client";

import { useMyContext } from "@/context/my-context";
import React, { ChangeEvent, FormEvent, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const { user, setUser } = useMyContext();
  const [newUserName, setNewUserName] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUserName(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUser({ ...user, name: newUserName });
  };

  return (
    <div>
      dashboard page {user.name}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="new name"
          value={newUserName}
          onChange={handleChange}
          className="text-black"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default page;
