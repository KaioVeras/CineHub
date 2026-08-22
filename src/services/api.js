import axios from "axios";

// A API key é lida da variável de ambiente VITE_TMDB_API_KEY (arquivo .env).
// Definida aqui como padrão para não precisar repeti-la em cada requisição.
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: "pt-BR",
    }
})

export default api;
