import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
});

// Dados privados (não serão expostos completamente)
const dragHouses = [
  { id: 1, name: "House of Avalon", base: "Los Angeles, California", famousQueen: "Raja" },
  { id: 2, name: "House of Edwards", base: "Dallas, Texas", famousQueen: "Alyssa Edwards" },
  { id: 3, name: "House of Haunt", base: "Chicago, Illinois", famousQueen: "Vander Von Odd" },
  { id: 4, name: "House of Davenport", base: "Atlanta, Georgia", famousQueen: "Kennedy Davenport" },
  // ... outros dados
];

const dragQueens = [
  { id: 1, name: "RuPaul", house: "House of Avalon", season: "Host", winner: true },
  { id: 2, name: "Bianca Del Rio", house: "House of Edwards", season: "Season 6", winner: true },
  { id: 3, name: "Trixie Mattel", house: "House of Haunt", season: "All Stars 3", winner: true },
  // ... outros dados
];

// Rotas que retornam apenas informações básicas
server.get("/houses", async (request, response) => {
  response.type("application/json").code(200);
  return { 
    count: dragHouses.length,
    message: "Houses disponíveis: " + dragHouses.map(h => h.name).join(", ")
  };
});

server.get("/queens", async (request, response) => {
  response.type("application/json").code(200);
  return { 
    count: dragQueens.length,
    message: "Total de queens no sistema: " + dragQueens.length
  };
});

interface QueenParams {
  id: string;
}

// Rota que verifica se uma queen existe, mas não retorna dados completos
server.get<{ Params: QueenParams }>(
  "/queens/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const queenExists = dragQueens.some((q) => q.id === id);

    if (!queenExists) {
      response.type("application/json").code(404);
      return { message: "Queen Not Found - She's probably painting her mug! 💄" };
    } else {
      response.type("application/json").code(200);
      return { 
        exists: true,
        message: "Queen encontrada no sistema! 👑"
      };
    }
  }
);

// Rota para contar vencedoras sem expor dados
server.get("/queens/winners", async (request, response) => {
  const winnerCount = dragQueens.filter(queen => queen.winner).length;
  response.type("application/json").code(200);
  return { 
    winnerCount,
    message: `Temos ${winnerCount} vencedoras coroadas! 👑`
  };
});

// Health check sem expor dados internos
server.get("/", async (request, response) => {
  response.type("application/json").code(200);
  return { 
    message: "Drag Race API is serving looks! 💅", 
    version: "1.0.0",
    description: "API segura do mundo do Drag Race",
    endpoints: [
      "/houses - Informações sobre houses",
      "/queens - Informações sobre queens",
      "/queens/winners - Contagem de vencedoras",
      "/queens/:id - Verifica se uma queen existe"
    ]
  };
});

// Rota de exemplo que processa dados mas não retorna tudo
server.post<{ Body: { query: string } }>(
  "/search",
  async (request, response) => {
    const { query } = request.body;
    
    // Processa internamente mas retorna apenas resultados limitados
    const foundHouses = dragHouses.filter(house =>
      house.name.toLowerCase().includes(query.toLowerCase()) ||
      house.base.toLowerCase().includes(query.toLowerCase())
    );

    const foundQueens = dragQueens.filter(queen =>
      queen.name.toLowerCase().includes(query.toLowerCase())
    );

    response.type("application/json").code(200);
    return {
      housesFound: foundHouses.length,
      queensFound: foundQueens.length,
      message: `Busca concluída para: ${query}`
    };
  }
);

server.listen({ port: 3333 }, () => {
  console.log("🎭 Drag Race API started - Dados protegidos!");
  console.log("💄 Server running on http://localhost:3333");
});