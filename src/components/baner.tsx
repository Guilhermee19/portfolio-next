export default function Banner() {
  return (
    <div className="bg-room-tech bg-cover bg-center w-full min-h-dvh flex items-center justify-center">
      <div className="text-center">
        <h5 className="w-full text-left text-2xl text-white font-bold">
          Olá, eu sou
        </h5>
        <h1 className="text-7xl font-bold m-0 text-main">
          Guilherme <span className="text-label">Santana</span>
        </h1>
        <h5 className="w-full text-right text-2xl text-white font-bold">
          sou <span className="text-main">Desenvolvedor Front-End</span>
        </h5>
      </div>
    </div>
  );
}
