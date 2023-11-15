import manual from "./assets/manual.png";
import foto from "./assets/foto.png";

function App() {
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 w-full -z-10 bg-cover bg-center">
        <img
          src={foto}
          alt="foto"
          className="w-full object-cover bg-gradient-to-tr absolute top-[-8rem] md:max-h-96 md:object-top"
        />
        <div className="mt-[150px] flex w-full flex-col">
          <h4 className="text-white text-3xl mt-[10px] font-semibold text-center inline-block z-20 w-full">
            Juliana Soares
          </h4>
          <span className="text-white text-md font-semibold text-center inline-block z-20 w-full">
            Engenheira Civil
          </span>
        </div>
      </div>
      <div className="bg-slate-700 w-full min-h-screen scroll-smooth p-2 shadow-md absolute top-[250px] md:flex md:flex-row md:gap-4 md:justify-center md:items-start">
        {/* <h3 className="font-semibold text-white text-2xl text-center mt-2 md:hidden">
          Produtos
        </h3> */}
        {/* card */}
        <div className="bg-slate-800 w-full h-96 flex p-4 rounded-xl mt-2 max-w-[400px]">
          <div className="bg-slate-300 h-auto rounded-xl relative overflow-hidden">
            <div className="absolute left-3 top-2 bg-violet-600 w-auto px-2 py-1 rounded-lg text-white text-xs font-semibold">
              Preço especial
            </div>
            <img src={manual} alt="produto" className="rounded-t-xl" />
            <div className="absolute w-full bottom-0 left-0 h-24 bg-slate-700 p-3 rounded-b-xl overflow-hidden">
              <span className="text-white text-sm font-semibold">
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
            <div className="absolute left-3 top-2 bg-violet-600 w-auto px-2 py-1 rounded-lg text-white text-xs font-semibold">
              Em breve
            </div>
            <img src={manual} alt="produto" className="rounded-t-xl" />
            <div className="absolute w-full bottom-0 left-0 h-24 bg-slate-700 p-3 rounded-b-xl overflow-hidden">
              <span className="text-white text-sm font-semibold">
                Manual do Proprietário
              </span>
              <div className="bg-slate-400 text-black text-sm font-semibold px-3 py-1 rounded-lg mt-2  w-full h-9 justify-center flex items-center">
                <span>{"Em Breve"} </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 w-full h-96 flex p-4 rounded-xl mt-4 max-w-[400px]">
          <div className="bg-slate-300 h-auto rounded-xl relative overflow-hidden">
            <div className="absolute left-3 top-2 bg-violet-600 w-auto px-2 py-1 rounded-lg text-white text-xs font-semibold">
              Em breve
            </div>
            <img src={manual} alt="produto" className="rounded-t-xl" />
            <div className="absolute w-full bottom-0 left-0 h-24 bg-slate-700 p-3 rounded-b-xl overflow-hidden">
              <span className="text-white text-sm font-semibold">
                Sistema de gestão de obras
              </span>
              <div className="bg-slate-400 text-black text-sm font-semibold px-3 py-1 rounded-lg mt-2  w-full h-9 justify-center flex items-center">
                <span>{"Em Breve"} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
