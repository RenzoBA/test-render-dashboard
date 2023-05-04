import SideBarClient from "@/components/SideBarClient";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-row">
      <SideBarClient />
      {children}
    </div>
  );
};

export default layout;
