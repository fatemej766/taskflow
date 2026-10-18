"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Dashboard", href: "/dashboard" },
];
const Header = () => {
  const pathName = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <LayoutDashboard className="size-5" />
            TaskFlow
          </Link>
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {links.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathName === "/"
                  : pathName === item.href || pathName.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                    isActive ? "bg-muted text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              Login
            </Link>
            <Link href="/register" className={buttonVariants({ size: "sm" })}>
              Register
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
