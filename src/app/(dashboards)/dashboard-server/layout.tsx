import SideBar from "@/components/SideBar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-row">
      <SideBar />
      {children}
    </div>
  );
};

export default layout;
