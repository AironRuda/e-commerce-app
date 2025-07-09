import Image from "next/image";

const StatusLoading = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center pt-20">
      <Image src="/loader-gif.gif" alt="loading" width={100} height={100} />
      <p className="text-xl font-bold pt-4">Cargando...</p>
    </div>
  );
};

export default StatusLoading;
