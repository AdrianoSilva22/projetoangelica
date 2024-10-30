import { apiService } from "./apiService";

export const createEvent = async (eventData) => {
    try {
      const response = await apiService.post('/Event', eventData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar o evento:', error);
      throw error;
    }
  };
  
  export const getEvents = async () => {
    try {
      const response = await apiService.get('/Event/?PageSize=20&PageNumber=0&Sort=asc');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar os eventos:', error);
      throw error;
    }
  };
  
  export const getEventById = async (id) => {
    try {
      const response = await apiService.get(`/Event/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar o evento com ID ${id}:`, error);
      throw error;
    }
  };
  
  export const updateEvent = async (id, eventData) => {
    try {
      const response = await apiService.put(`/Event/${id}`, eventData);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar o evento com ID ${id}:`, error);
      throw error;
    }
  };
  
  export const deleteEvent = async (id) => {
    try {
      const response = await apiService.delete(`/Event?Id=${id}`); 
      return response.data; 
    } catch (error) {
      console.error(`Erro ao deletar o evento com ID ${id}:`, error);
      throw error; 
    }
  };

  