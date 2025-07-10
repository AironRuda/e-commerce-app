"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 z-10 md:flex md:items-center md:justify-between md:fixed md:top-0 md:bottom-auto md:shadow-none md:bg-background">
      <Image
        className="hidden md:block md:ml-4"
        src="/navbar-logo.svg"
        alt="Logo"
        width={30}
        height={30}
      />
      <nav className="bg-primary rounded-2xl p-6 md:bg-transparent">
        <ul className="flex items-center justify-around ">
          <li className="nav-item">
            <Link href="/">
              <Image
                className="md:hidden"
                src={
                  pathname === "/" ? "/white-house-icon.svg" : "/house-icon.svg"
                }
                alt="Home"
                width={25}
                height={25}
              />
              <p
                className={pathname === "/" ? "border-b-4 border-primary" : ""}
              >
                Inicio
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/categories"
              className="opacity-50"
              onClick={(e) => e.preventDefault()}
            >
              <Image
                className=" md:hidden"
                src="/collection-icon.svg"
                alt="Home"
                width={25}
                height={25}
              />
              <p
                className={
                  pathname === "/categories" ? "border-b-4 border-primary" : ""
                }
              >
                Categorias
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/cart"
              className="opacity-50"
              onClick={(e) => e.preventDefault()}
            >
              <Image
                className="md:hidden"
                src="/bag-icon.svg"
                alt="Home"
                width={25}
                height={25}
              />
              <p
                className={
                  pathname === "/cart" ? "border-b-4 border-primary" : ""
                }
              >
                Bolsa
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/profile">
              <Image
                className="md:hidden"
                src={
                  pathname === "/profile"
                    ? "/white-user-icon.svg"
                    : "/user-icon.svg"
                }
                alt="Home"
                width={25}
                height={25}
              />
              <p
                className={
                  pathname === "/profile" ? "border-b-4 border-primary" : ""
                }
              >
                Perfil
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
