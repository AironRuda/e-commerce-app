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
      className="bg-white rounded-lg shadow-lg h-16 w-full hover:border-2"
    >
      <Link
        href={href}
        className="p-4 px-8 rounded-lg flex items-center gap-4 w-full"
      >
        <Image className="mx-8" src={icon} alt="User" width={30} height={30} />
        <p className="font-extrabold text-2xl text-center">{name}</p>
      </Link>
    </li>
  );
};

export default ProfileOptionCard;
