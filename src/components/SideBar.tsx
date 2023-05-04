import Link from "next/link";

const SideBar = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-2 w-32 h-full bg-gray-500">
      <Link href="/dashboard-server">Dashboard</Link>
      <Link href="/dashboard-server/options">Options</Link>
      <Link href="/dashboard-server/user">User</Link>
      <Link href="/" className="mt-20">
        Return
      </Link>
    </div>
  );
};

export default SideBar;
