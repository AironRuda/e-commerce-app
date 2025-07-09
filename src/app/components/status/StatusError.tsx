import Image from "next/image";

const StatusError = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center pt-20">
      <Image src="/error-icon.svg" alt="error" width={100} height={100} />
      <p className="text-xl font-bold pt-4">
        Hubo un error al cargar el producto...
      </p>
    </div>
  );
};

export default StatusError;
