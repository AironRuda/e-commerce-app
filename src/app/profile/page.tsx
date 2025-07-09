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
    <section className="p-8 flex flex-col gap-4 w-full md:w-1/2 md:items-center md:justify-center md:bg-white md:rounded-4xl md:shadow-lg">
      <Link className="md:hidden" href="/">
        <Image src="/left-arrow-icon.svg" alt="User" width={50} height={50} />
      </Link>
      <div className="flex flex-col items-center gap-4 md:bg-white">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Image src="/user-icon.svg" alt="User" width={50} height={50} />
          <h1 className="text-2xl font-bold">Mi Perfil</h1>
        </div>
        <Image
          className="rounded-full"
          src="/profile-image.png"
          alt="User"
          width={200}
          height={200}
        />
        <ul className="flex flex-col gap-4">
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
