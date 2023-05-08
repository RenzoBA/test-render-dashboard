"use client";

import { useMyContext } from "@/context/my-context";
import React from "react";

type Props = {};

const UserPage = (props: Props) => {
  const { user } = useMyContext();
  return <div>user page: {user.name}</div>;
};

export default UserPage;
