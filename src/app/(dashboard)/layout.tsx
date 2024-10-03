import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[14%] xl:w-[14%] ">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start p-4"
        >
          <Image src="/logo.png" alt="logo" height={32} width={32} />
          <span className="hidden lg:block font-bold">Kinderville</span>
        </Link>

        <Menu />
      </div>
      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[86%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
