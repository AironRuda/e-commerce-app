import Image from "next/image";
import Link from "next/link";
import ProfileOptionCard from "../components/ProfileOptionCard";

const page = () => {
  const profileOptions = [
    {
      name: "Mis Favoritos",
      href: "/",
      icon: "/heart-icon.svg",
    },
    {
      name: "Mis Compras",
      href: "/",
      icon: "/shoping-bag-icon.svg",
    },
    {
      name: "Ajustes de la cuenta",
      href: "/",
      icon: "/shield-check-icon.svg",
    },
    {
      name: "Soporte Técnico",
      href: "/",
      icon: "/chat-alt-icon.svg",
    },
  ];
  return (
    <section className="p-5 pt-8 flex flex-col gap-4 w-full md:w-1/2 md:items-center md:justify-center md:bg-white md:rounded-4xl md:shadow-lg">
      <div className="flex flex-row justify-between relative">
        <Link className="absolute md:hidden" href="/">
          <Image src="/left-arrow-icon.svg" alt="User" width={25} height={25} />
        </Link>
        <div className="flex-grow self-center flex flex-col items-center gap-2 md:flex-row">
          <Image
            className="md:hidden"
            src="/user-icon.svg"
            alt="User"
            width={25}
            height={25}
          />
          <Image
            className="hidden md:block"
            src="/user-icon.svg"
            alt="User"
            width={35}
            height={35}
          />
          <h1 className="text-lg font-bold md:font-extrabold">Mi Perfil</h1>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:bg-white">
        <Image
          className="rounded-full my-4 md:my-8"
          src="/profile-image.png"
          alt="User"
          width={120}
          height={120}
        />
      </div>
      <div>
        <ul className="flex flex-col gap-4 w-full">
          {profileOptions.map((option) => (
            <ProfileOptionCard
              key={option.name}
              name={option.name}
              href={option.href}
              icon={option.icon}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
