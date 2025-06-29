"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import ThemeSwitcher from "@/components/theme-switcher";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import {
  ChevronDownIcon,
  FaceIcon,
  GlobeIcon,
  OpenInNewWindowIcon,
  PersonIcon,
  TimerIcon,
} from "@radix-ui/react-icons";

export default function NavBar() {
  const menuItems = [
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const dropdownItems = [
    {
      key: "ai_summary",
      label: "AI-Powered Summaries",
      description:
        "AI generates concise meeting summaries with key points and decisions.",
      icon: <OpenInNewWindowIcon />,
    },
    {
      key: "action_tracking",
      label: "Action Item Tracking",
      description:
        "Auto-extract action items, assign them, and track follow-ups with ease.",
      icon: <PersonIcon />,
    },
    {
      key: "integration",
      label: "Seamless Integrations",
      description:
        "Seamlessly integrates with Zoom, Google Meet, and more coming soon.",
      icon: <GlobeIcon />,
    },
    {
      key: "secure_storage",
      label: "Secure by Design",
      description:
        "All transcripts and summaries are encrypted and securely stored.",
      icon: <TimerIcon />,
    },
    {
      key: "reliable_support",
      label: "Human Support",
      description: "Get support when you need it — fast, helpful, and human.",
      icon: <FaceIcon />,
    },
  ];

  return (
    <Navbar isBlurred maxWidth="xl" className="z-50">
      {/* Mobile toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile brand */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <a href="/" className="font-bold text-lg tracking-tight">
            SummarIQ
          </a>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop layout */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarBrand>
          <a
            href="/"
            className="font-bold text-2xl tracking-tight flex items-center gap-2"
          >
            SummarIQ
          </a>
        </NavbarBrand>
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Button as={Link} href={item.href} variant="light" size="lg">
              {item.name}
            </Button>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button endContent={<ChevronDownIcon />} variant="light" size="lg">
                Features
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Features" className="w-[340px]">
              {dropdownItems.map((item) => (
                <DropdownItem
                  key={item.key}
                  startContent={item.icon}
                  description={item.description}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      {/* Right section */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            href="https://x.com/SamarjitRoy25"
            color="primary"
            variant="solid"
            size="md"
            className="gap-2"
          >
            Connect
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 1200 1227"
              fill="currentColor"
            >
              <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
            </svg>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full text-base"
              href={item.href}
              size="lg"
              color="foreground"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="border-t mt-3 pt-3">
          <p className="text-sm font-medium mb-2 px-4 text-gray-400">Features</p>
          {dropdownItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <div className="px-4 py-2">
                <div className="flex items-start gap-2">
                  {item.icon}
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
