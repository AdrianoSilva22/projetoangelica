'use client';
import React, { useState } from "react";
import "../styles/CreateEvent.css";
import { createEvent } from "../services/eventService";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePath, setImagePath] = useState("");
  const [date, setDate] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePath(URL.createObjectURL(file));
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault(); 

    const newEvent = {
      isDeleted: false,
      title,
      description,
      imagePath,
      scheduling: date,
    };

    try {
      await createEvent(newEvent);
      alert('Evento criado com sucesso!!');
      setTitle("");
      setDescription("");
      setImage(null);
      setImagePath("");
      setDate("");
    } catch (error) {
      console.error('Erro ao criar o evento:', error);
      alert('Evento criado com sucesso!');
    }
  };

  return (
    <div className="Register">
      <form onSubmit={handleCreate}>
        <h1>Crie seu evento</h1>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Descrição:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Imagem:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && <p>Arquivo selecionado: {image.name}</p>}
        </label>
        <label>
          Data:
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="botao-form">Salvar evento</button>
      </form>
    </div>
  );
}

export default CreateEvent;
