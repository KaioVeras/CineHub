<div align="center">

# 🎬 CineHub

**Descubra, explore e salve os filmes que estão em cartaz — tudo em um só lugar.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![Zustand](https://img.shields.io/badge/Zustand-5-F97316)](https://zustand.docs.pmnd.rs)
![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-00C853)

<img src="src/assets/cinema-hero.jpg" alt="Interior de um cinema com holofotes dourados" width="100%">

</div>

## 📖 Sobre

O **CineHub** é uma aplicação web que consome a API do [The Movie Database (TMDB)](https://www.themoviedb.org) para exibir os filmes em cartaz, com páginas de detalhes completas, trailers e uma lista de favoritos persistida no navegador.

## ✨ Funcionalidades

- 🎭 **Catálogo em cartaz** — filmes *now playing* direto da API do TMDB
- 🔍 **Detalhes completos** — sinopse, gêneros, duração, avaliação e elenco de cada filme
- 🎥 **Trailers** — assista ao trailer diretamente na página do filme
- ❤️ **Favoritos** — salve filmes para assistir depois; os dados ficam salvos no `localStorage`
- 🍞 **Notificações** — feedback visual com toasts ao favoritar ou remover filmes
- 📱 **Responsivo** — layout adaptado para mobile, tablet e desktop

## 🚀 Tecnologias

| Categoria | Tecnologia |
|---|---|
| Frontend | [React 19](https://react.dev) |
| Build tool | [Vite 7](https://vite.dev) |
| Roteamento | [React Router 7](https://reactrouter.com) |
| Estado | [Zustand](https://zustand.docs.pmnd.rs) + `localStorage` |
| Requisições HTTP | [Axios](https://axios-http.com) |
| Ícones | [Lucide React](https://lucide.dev) · [React Icons](https://react-icons.github.io/react-icons/) |
| Notificações | [React Toastify](https://fkhadra.github.io/react-toastify/) |

## 🧭 Páginas

| Rota | Descrição |
|---|---|
| `/` | Home — hero cinematográfico + grid de filmes em destaque |
| `/movie/:id` | Detalhes do filme — informações, trailer e ações de favorito |
| `/favorites` | Favoritos — lista salva localmente, com remoção individual ou total |
| `*` | Página de erro 404 personalizada |

## 📦 Instalação

> **Requisito:** [Node.js](https://nodejs.org) 18 ou superior.

```bash
# 1. Clone o repositório
git clone https://github.com/KaioVeras/CineHub.git
cd CineHub

# 2. Instale as dependências
npm install

# 3. Configure a API key (veja detalhes abaixo)
cp .env.example .env

# 4. Execute em modo de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador. 🎉

### 🔑 Configuração da API

O CineHub consome a API do [TMDB](https://www.themoviedb.org), portanto você precisa de uma chave gratuita:

1. Crie uma conta no [TMDB](https://www.themoviedb.org/signup)
2. Gere sua chave em **Configurações → API** ([instruções](https://developer.themoviedb.org/docs/getting-access))
3. Copie o arquivo `.env.example` para `.env` e cole sua chave:

```env
VITE_TMDB_API_KEY=sua_api_key_aqui
```

> ⚠️ O arquivo `.env` está no `.gitignore` e **nunca deve ser commitado**.

## 🛠️ Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção na pasta `dist/` |
| `npm run preview` | Serve a build de produção localmente |
| `npm run lint` | Executa o ESLint para verificar o código |

## 🗂️ Estrutura do projeto

```
src/
├── assets/            # Imagens estáticas
├── components/        # Componentes reutilizáveis (NavBar, HeroSection, Loader...)
├── containers/        # Páginas (Home, MovieDetails, Favorites, Error)
├── routes/            # Configuração de rotas
├── services/          # Configuração da API do TMDB
├── store/             # Estados globais (Zustand)
├── App.jsx
├── index.css
└── main.jsx
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma [issue](https://github.com/KaioVeras/CineHub/issues) ou enviar um pull request.

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/minha-feature`)
3. Commit suas mudanças (`git commit -m 'feat: minha feature'`)
4. Push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

## 👨‍💻 Autor

Feito com 💛 por **[Kaio Veras](https://github.com/KaioVeras)**

## 📄 Licença

Este projeto está sob a licença MIT.
