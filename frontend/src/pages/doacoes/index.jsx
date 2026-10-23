import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const caminhoImagens = "/assets/images/";

const doacoes = [
  {
    id: 1,
    nome: "Pães franceses",
    quantidade: "30 unidades",
    estabelecimento: "Padaria Pão Bom",
    distancia: "2,4 km",
    retirada: "16:30",
    status: "Disponível",
    imagem: "paes.jpg",
  },
  {
    id: 2,
    nome: "Frutas e legumes",
    quantidade: "15 kg",
    estabelecimento: "Mercado Boa Escolha",
    distancia: "3,8 km",
    retirada: "16:00",
    status: "Disponível",
    imagem: "frutas.jpg",
  },
  {
    id: 3,
    nome: "Refeições prontas",
    quantidade: "50 unidades",
    estabelecimento: "Restaurante Sabor & Cia",
    distancia: "5,2 km",
    retirada: "12:00",
    status: "Reservado",
    imagem: "refeicoes.jpg",
  },
];

export default function Doacoes() {
  const [busca, setBusca] = useState("");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [statusFiltro, setStatusFiltro] = useState("Todos");

  const doacoesFiltradas = doacoes.filter((doacao) => {
    const termo = busca.toLowerCase();

    const correspondeBusca =
      doacao.nome.toLowerCase().includes(termo) ||
      doacao.estabelecimento.toLowerCase().includes(termo);

    const correspondeStatus =
      statusFiltro === "Todos" || doacao.status === statusFiltro;

    return correspondeBusca && correspondeStatus;
  });

  return (
    <main className="doacoes-page">
      <aside className="doacoes-sidebar">
        <Link to="/" className="sidebar-logo">
          <img
            src={`${caminhoImagens}logo.png`}
            alt="Alimento que Conecta"
          />
          <span>
            Alimento
            <br />
            que Conecta
          </span>
        </Link>

        <nav className="sidebar-menu">
          <Link to="/">
            <span>⌂</span>
            Início
          </Link>

          <Link to="/doacoes" className="active">
            <span>⌕</span>
            Buscar doações
          </Link>

          <Link to="/necessidades">
            <span>▣</span>
            Necessidades
          </Link>

          <Link to="/solicitacoes">
            <span>♧</span>
            Solicitações
          </Link>

          <Link to="/recebimentos">
            <span>▤</span>
            Recebimentos
          </Link>

          <Link to="/historico">
            <span>◷</span>
            Histórico
          </Link>

          <Link to="/perfil">
            <span>♙</span>
            Perfil
          </Link>
        </nav>

        <Link to="/login" className="sidebar-sair">
          <span>⇥</span>
          Sair
        </Link>
      </aside>

      <section className="doacoes-conteudo">
        <header className="doacoes-cabecalho">
          <h1>Doações disponíveis</h1>
          <p>
            Encontre alimentos que podem ser doados e faça sua solicitação.
          </p>
        </header>

        <div className="doacoes-toolbar">
          <div className="doacoes-busca">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Buscar por alimento, estabelecimento ou cidade..."
              value={busca}
              onChange={(evento) => setBusca(evento.target.value)}
            />
          </div>

          <button
            type="button"
            className="doacoes-filtros"
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
          >
            ☷ Filtros
          </button>
        </div>

        {mostrarFiltros && (
          <div className="doacoes-filtro-opcoes">
            <label htmlFor="status-doacao">Status da doação</label>
            <select
              id="status-doacao"
              value={statusFiltro}
              onChange={(evento) => setStatusFiltro(evento.target.value)}
            >
              <option value="Todos">Todos</option>
              <option value="Disponível">Disponíveis</option>
              <option value="Reservado">Reservados</option>
            </select>
          </div>
        )}

        <div className="doacoes-lista">
          {doacoesFiltradas.map((doacao) => (
            <article className="doacao-card" key={doacao.id}>
              <div className="doacao-imagem">
                <img
                  src={`${caminhoImagens}${doacao.imagem}`}
                  alt={doacao.nome}
                />
              </div>

              <div className="doacao-informacoes">
                <h2>{doacao.nome}</h2>
                <p className="doacao-quantidade">{doacao.quantidade}</p>

                <div className="doacao-estabelecimento">
                  <span>♟</span>
                  {doacao.estabelecimento}
                </div>

                <div className="doacao-detalhes">
                  <span>
                    <span aria-hidden="true">⌖</span>
                    {doacao.distancia}
                  </span>

                  <span>
                    <span aria-hidden="true">◷</span>
                    Retirada até {doacao.retirada}
                  </span>
                </div>
              </div>

              <div className="doacao-acoes">
                <span
                  className={`doacao-status ${
                    doacao.status === "Disponível"
                      ? "disponivel"
                      : "reservado"
                  }`}
                >
                  {doacao.status}
                </span>

                {doacao.status === "Disponível" ? (
                  <Link
                    to={`/solicitar-doacao/${doacao.id}`}
                    className="doacao-botao"
                  >
                    Solicitar
                  </Link>
                ) : (
                  <Link
                    to={`/doacoes/${doacao.id}`}
                    className="doacao-botao detalhes"
                  >
                    Ver detalhes
                  </Link>
                )}
              </div>
            </article>
          ))}

          {doacoesFiltradas.length === 0 && (
            <p className="doacoes-vazio">
              Nenhuma doação encontrada. Tente alterar sua pesquisa ou seus
              filtros.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}