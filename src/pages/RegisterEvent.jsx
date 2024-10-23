'use client'
import { useEffect, useState } from 'react';
import '../styles/registerEvent.css';
import { createEvent } from '../services/eventService';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateEvent from "../components/CreateEvent";
import MainEvent from '../components/MainEvent';
function RegisterEvent() {

  return (
    <div className="App">
      {/* <h1>Registrar Evento</h1>

      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="imageFile">Imagem:</label>
        <input
          type="file"
          id="imageFile"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <div>
        <label htmlFor="scheduling">Data do Evento (yyyy-MM-dd:HH:mm):</label>
        <input
          type="text"
          id="scheduling"
          value={scheduling}
          onChange={(e) => setScheduling(e.target.value)}
          placeholder="2024-10-23:14:00"
          required
        />
      </div>

      <button onClick={handleCreate}>Salvar Evento</button> */}
      <Header />
      <CreateEvent />
      {/* <MainEvent /> */}
      <Footer />
    </div>
  );
}

export default RegisterEvent;