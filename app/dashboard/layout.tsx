import { Metadata } from "next";
import {
  LayoutDashboard,
  Package,
  Heart,
  Clock,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard - DevMarket",
  description: "Manage your digital products and account settings",
};

const sidebarLinks = [
  {
    href: "/dashboard",
    label: "Overview",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/purchases",
    label: "My Purchases",
    icon: Package,
  },
  {
    href: "/dashboard/wishlist",
    label: "Wishlist",
    icon: Heart,
  },
  {
    href: "/dashboard/history",
    label: "History",
    icon: Clock,
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r bg-muted/40 lg:block">
        <nav className="flex h-full flex-col">
          <div className="flex-1 space-y-1 p-4">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm hover:bg-muted"
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
          <div className="border-t p-4">
            <button className="flex w-full items-center space-x-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20">
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}