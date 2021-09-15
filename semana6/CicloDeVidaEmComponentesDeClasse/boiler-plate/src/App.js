import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      { id: Date.now(), texto: "Texto da primeira tarefa", completa: false },
      { id: Date.now(), texto: "Texto da segunda tarefa", completa: true },
    ],
    inputValue: "",
    filtro: "pendentes",
  };

  componentDidUpdate() {
    const tarefaUpdate = this.state.tarefas;
    window.localStorage.setItem('texto tarefa', JSON.stringify(tarefaUpdate));
  }
  componentDidMount() {
  const tarefasString = window.localStorage.getItem('tarefas');
  
    if (tarefasString) {
      const text = JSON.parse(tarefasString);
      this.setState({ tarefasString: text });
  }
};

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.inputValue });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };
    const copiaDoEstado = [...this.state.tarefas, novaTarefa];
    this.setState({ novaTarefa: copiaDoEstado });
  };

  selectTarefa = (id) => {
    const novaListaId = this.state.tarefas.map((novoId) => {
      if (id === novoId.id) {
        return false;
      } else {
        return true;
      }
    });
  };

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
