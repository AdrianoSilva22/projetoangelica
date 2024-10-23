import "../styles/MainEvent.css";
import Lixeira from "../assets/thrash.png"
import Lapis from "../assets/pencil.png"

function MainEvent() {
  return (
    <div className="main-event">
      <h1>Eventos</h1>
      <div className="tabela">
        <div className="indice linha">
          <span className="celula">Título</span>
          <span className="celula">Descrição</span>
          <span className="celula">Data e hora</span>
          <span className="celula">Editar</span>
          <span className="celula">Excluir</span>
        </div>
        <div className="linha">
          <span className="celula">Luau</span>
          <span className="celula">Um luau para todos!</span>
          <span className="celula">2024-10-23 17:00</span>
          <span className="celula"><img src={Lapis} alt="pencil" /></span>
          <span className="celula"><img src={Lixeira} alt="thrash" /></span>
        </div>
        <div className="linha">
          <span className="celula">Social</span>
          <span className="celula">R$5 entrada</span>
          <span className="celula">2024-10-24 19:00</span>
          <span className="celula"><img src={Lapis} alt="pencil" /></span>
          <span className="celula"><img src={Lixeira} alt="thrash" /></span>
        </div>
        <div className="linha">
          <span className="celula">Ação social</span>
          <span className="celula">Sairemos pontualmente</span>
          <span className="celula">2024-10-25 9:00</span>
          <span className="celula"><img src={Lapis} alt="pencil" /></span>
          <span className="celula"><img src={Lixeira} alt="thrash" /></span>
        </div>
        <div className="linha">
          <span className="celula">Entrega de livros</span>
          <span className="celula">Distribuição nas praças</span>
          <span className="celula">2024-10-30 9:00</span>
          <span className="celula"><img src={Lapis} alt="pencil" /></span>
          <span className="celula"><img src={Lixeira} alt="thrash" /></span>
        </div>
        <div className="linha">
          <span className="celula">Acampamento de carnaval</span>
          <span className="celula">Vagas limitadas</span>
          <span className="celula">2025-02-02 8:00</span>
          <span className="celula"><img src={Lapis} alt="pencil" /></span>
          <span className="celula"><img src={Lixeira} alt="thrash" /></span>
        </div>
        <div className="linha">
          <span className="celula">Festa das crianças</span>
          <span className="celula">Cada adulto leva um pratinho</span>
          <span className="celula">2025-05-010 15:00</span>
          <span className="celula"><img src={Lapis} alt="pencil" /></span>
          <span className="celula"><img src={Lixeira} alt="thrash" /></span>
        </div>
      </div>
    </div>
  );
}

export default MainEvent;
