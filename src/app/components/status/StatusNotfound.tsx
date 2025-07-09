import Image from "next/image";

const StatusNotfound = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center pt-20">
      <Image
        src="/status-notfound-icon.svg"
        alt="notfound"
        width={100}
        height={100}
      />
      <p className="text-xl font-bold pt-4">No se encontro el producto</p>
    </div>
  );
};

export default StatusNotfound;
