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
      className="flex bg-white rounded-2xl shadow-lg h-12 w-full hover:border-2"
      style={{
        boxShadow:
          "0 8px 10px -1px rgba(0, 0, 0, 0.1), 0 -4px 10px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Link href={href} className="rounded-lg flex items-center w-full">
        <Image className="mx-8" src={icon} alt="User" width={20} height={20} />
        <p className="flex-grow font-extrabold text-base text-center">{name}</p>
      </Link>
    </li>
  );
};

export default ProfileOptionCard;
