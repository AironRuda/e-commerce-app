import Image from "next/image";
import Link from "next/link";

interface ProfileOptionCardProps {
  name: string;
  href: string;
  icon: string;
}

const ProfileOptionCard = ({ name, href, icon }: ProfileOptionCardProps) => {
  return (
    <li
      key={name}
      className="flex bg-white rounded-2xl shadow-lg h-18 w-full hover:border-2"
      style={{
        boxShadow:
          "0 8px 10px -1px rgba(0, 0, 0, 0.1), 0 -4px 10px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Link
        href={href}
        className="p-4 px-8 rounded-lg flex items-center gap-4 w-full"
      >
        <Image className="mx-8" src={icon} alt="User" width={30} height={30} />
        <p className="flex-grow font-extrabold text-xl text-center">{name}</p>
      </Link>
    </li>
  );
};

export default ProfileOptionCard;
