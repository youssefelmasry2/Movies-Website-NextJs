import Link from "next/link";
import { IconType } from "react-icons"; // Import the type for icons if you are using react-icons

// Define the props type for MenuItem
interface MenuItemProps {
  title: string;
  address?: string;
  Icon?: IconType; // Use IconType from react-icons or React.ComponentType if using other icons
}

export default function MenuItem({ title, address = "#", Icon }: MenuItemProps) {
  return (
    <Link href={address} className='hover:text-amber-500'>
      {Icon && <Icon className="text-2xl sm:hidden" />}
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  );
}