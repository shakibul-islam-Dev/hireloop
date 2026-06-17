import {
  Bell,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
  LayoutSideContentLeft,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

const DashboardSideBar = () => {
  const navItems = [
    { icon: House, label: "Dashboard", href: "/dashboard/recruiter" },
    {
      icon: Magnifier,
      label: "My Company",
      href: "/dashboard/recruiter/company",
    },
    { icon: Bell, label: "Manage Jobs", href: "/dashboard/recruiter/jobs" },
    {
      icon: Envelope,
      label: "Applications",
      href: "/dashboard/recruiter/applications",
    },
    { icon: Gear, label: "Settings", href: "/dashboard/recruiter/settings" },
  ];
  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
        {navContent}
      </aside>
      <Drawer>
        <Button className="lg:hidden" variant="secondary">
          <LayoutSideContentLeft></LayoutSideContentLeft>
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
};

export default DashboardSideBar;
