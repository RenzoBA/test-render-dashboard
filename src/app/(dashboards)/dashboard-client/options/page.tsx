"use client";

import { useMyContext } from "@/context/my-context";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const { user } = useMyContext();
  return <div>options page: {user.name}</div>;
};

export default page;
