import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileHeaderLink = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const router = usePathname();

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : undefined}
        className={`flex items-center justify-between w-full py-2 text-white focus:outline-none 
          ${router === item.href ? "bg-myRed px-4" : "px-2"}
        `}
      >
        {item.label}
      </Link>
    </div>
  );
};

export default MobileHeaderLink;
