import { cn } from "@/lib/utils";
import MyLogo from "./MyLogo";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { links } from "./Navbar";
import { useIsMobile } from "@/hooks/useMobile";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({
  isOpen,
  onClose
}: SideMenuProps) {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/40 shadow-xl hover-effect",
        isOpen ? "translate-x-0" : "-translate-x-full",
        !isMobile && "hidden"
      )}
      onClick={onClose}
    >
      <div
        className="min-w-72 max-w-90 bg-card h-screen text-foreground/85 p-5 border-r border-r-border/50 flex flex-col gap-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <Button
            onClick={onClose}
            title="close"
            variant="ghost"
            size="icon-sm"
            className="rounded-full hover:bg-accent"
          >
            <X size={18} />
          </Button>
        </div>

        <div className="w-fit">
          <MyLogo />
        </div>

        <div className="flex flex-col space-y-2">
          {
            links.map((link, ind) => {
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={ind}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "text-muted-foreground hover:text-shop-violet hover:bg-accent hover:text-foreground py-2 px-3 rounded-md font-semibold hover-effect",
                    isActive && "text-event-green bg-accent hover:text-event-green"
                  )}
                >
                  {link.name}
                </Link>
              )
            })
          }
        </div>
      </div>
    </div >
  )
}
