import Link from "next/link";

const SideBarClient = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-2 w-32 h-full bg-red-500">
      <Link href="/dashboard-client">Dashboard</Link>
      <Link href="/dashboard-client/options">Options</Link>
      <Link href="/dashboard-client/user">User</Link>
      <Link href="/" className="mt-20">
        Return
      </Link>
    </div>
  );
};

export default SideBarClient;
