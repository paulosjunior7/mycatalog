import manual from "./assets/manual.png";
import foto from "./assets/foto.png";
import guiaimovel from "./assets/guiaimovel.png";
import sistemaobras from "./assets/sistemaobras.png";

function App() {
  return (
    <div className="relative mb-2">
      <div className="absolute top-0 left-0 w-full -z-10 bg-cover bg-center">
        <img
          src={foto}
          alt="foto"
          className="w-full object-cover absolute top-[-8rem] md:max-h-96 md:object-top
            bg-gradient-to-tr from-slate-700 to-slate-900
          "
        />
        <div className="absolute inset-[-40px] bg-gradient-to-b from-transparent to-black opacity-40"></div>
        <div className="mt-[150px] flex w-full flex-col">
          <h4 className="text-white text-3xl mt-[10px] font-semibold text-center inline-block z-20 w-full">
            Juliana Soares
          </h4>
          <span className="text-white text-md font-semibold text-center inline-block z-20 w-full">
            Engenheira Civil
          </span>
        </div>
      </div>
      <div className="bg-slate-700  rounded-b-none rounded-xl w-full min-h-screen scroll-smooth p-2 shadow-md absolute top-[240px] md:flex md:flex-row md:gap-4 md:justify-center md:items-start">
        {/* <h3 className="font-semibold text-white text-2xl text-center mt-2 md:hidden">
          Produtos
        </h3> */}
        {/* card */}
        <div className="bg-slate-800 w-full h-96 flex p-4 rounded-xl mt-2 max-w-[400px]">
          <div className="bg-slate-300 h-auto rounded-xl relative overflow-hidden">
            <img src={manual} alt="produto" className="rounded-t-xl" />
            <div className="absolute w-full bottom-0 left-0 h-24 bg-slate-700 p-3 rounded-b-xl overflow-hidden">
              <span className="text-white text-md font-semibold">
                Manual do Proprietário
              </span>
              <div
                onClick={() => {
                  window.open("https://chk.eduzz.com/2149503");
                }}
                className="bg-white text-black text-sm font-semibold px-3 py-1 rounded-lg mt-2  w-full h-9 justify-between flex items-center"
              >
                <span>{"Comprar"} </span>
                <span>{"R$ 197,00"} </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 w-full h-96 flex p-4 rounded-xl mt-4 max-w-[400px]">
          <div className="bg-slate-300 h-auto rounded-xl relative overflow-hidden">
            <img src={guiaimovel} alt="produto" className="rounded-t-xl" />
            <div className="absolute w-full bottom-0 left-0 h-24 bg-slate-700 p-3 rounded-b-xl overflow-hidden">
              <span className="text-white text-md font-semibold">
                Guia de verificação de imóveis
              </span>
              <div className="bg-slate-400 text-black text-sm font-semibold px-3 py-1 rounded-lg mt-2  w-full h-9 justify-center flex items-center">
                <span>{"Em Breve..."} </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 w-full h-96 flex p-4 rounded-xl mt-4 max-w-[400px] mb-5">
          <div className="bg-slate-300 h-auto rounded-xl relative overflow-hidden">
            <img src={sistemaobras} alt="produto" className="rounded-t-xl" />
            <div className="absolute w-full bottom-0 left-0 h-24 bg-slate-700 p-3 rounded-b-xl overflow-hidden">
              <span className="text-white text-md font-semibold">
                Sistema de gestão de obras
              </span>
              <div className="bg-slate-400 text-black text-sm font-semibold px-3 py-1 rounded-lg mt-2  w-full h-9 justify-center flex items-center">
                <span>{"Em Breve..."} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
