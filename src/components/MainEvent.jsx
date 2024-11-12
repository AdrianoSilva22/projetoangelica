import "../styles/MainEvent.css";
import Lixeira from "../assets/thrash.png";
import Lapis from "../assets/pencil.png";
import { useEffect, useState } from "react";
import { getEvents, deleteEvent } from "../services/eventService";
import { Link } from "react-router-dom";

function MainEvent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setData(events.list);
    };
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este evento?");
    if (confirmDelete) {
      try {
        await deleteEvent(id);
        setData((prevData) => prevData.filter(event => event.id !== id));
        alert("Evento excluído com sucesso!");
      } catch (error) {
        console.error('Erro ao excluir o evento:', error);
        alert("Erro ao excluir o evento. Tente novamente.");
      }
    }
  };

  const handleSendMessage = async (event) => {
    const payload = {
      RecipientNumber: "+558199738983",
      MessageBody: event.description,
      Variables: {
        Nome: event.title,
        Data: new Date(event.scheduling).toLocaleDateString("pt-BR"),
        Hora: new Date(event.scheduling).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      },
    };

    try {
      const response = await fetch("http://localhost:5153/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
      } else {
        alert("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      alert("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <div className="main-event">
      <h1>Eventos</h1>
      <div className="tabela">
        <div className="indice linha">
          <span className="celula">Imagem</span>
          <span className="celula">Título</span>
          <span className="celula">Descrição</span>
          <span className="celula">Data e hora</span>
          <span className="celula">Editar</span>
          <span className="celula">Excluir</span>
          <span className="celula">Enviar</span>
        </div>

        {data.map((event) => (
          <div key={event.id} className="linha">
            <span className="celula">
              <img src={event.imagePath} alt={event.title} className="imagem-evento" />
            </span>
            <span className="celula">{event.title}</span>
            <span className="celula">{event.description}</span>
            <span className="celula">
              {new Date(event.scheduling).toLocaleString("pt-BR", {
                dateStyle: "short",
                timeStyle: "short",
              })}
            </span>
            <span className="celula">
              <Link
                to="/update-event"
                state={{
                  id: event.id,
                  title: event.title,
                  description: event.description,
                  imagePath: event.imagePath,
                  scheduling: event.scheduling,
                }}
              >
                <img src={Lapis} alt="Editar" />
              </Link>
            </span>
            <span className="celula">
              <img
                src={Lixeira}
                alt="Excluir"
                onClick={() => handleDelete(event.id)}
                style={{ cursor: "pointer" }}
              />
            </span>
            <span className="celula">
              <button onClick={() => handleSendMessage(event)}>Enviar</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainEvent;
