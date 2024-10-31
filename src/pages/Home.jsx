import { useState, useEffect } from "react";
import { Header, Form, Ul } from "../style/Home";

export default function Home() {
  const [title, setTitle] = useState("");

  const [task, setTask] = useState([]);

  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("minhaLista"));
    if (tarefasSalvas) {
      setTask(tarefasSalvas);
    }
  }, []);

  const heandleChange = (event) => {
    const name = event.target.value;

    setTitle(name);

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newTask = [...task, title];

    setTask(newTask);

    localStorage.setItem("minhaLista", JSON.stringify(newTask));

    setTitle("");
  };

  const handleDelete = (id) => {

    let newTask = task.filter((item, index) => index !== id);

    setTask(newTask);

    localStorage.setItem("minhaLista", JSON.stringify(newTask));
  }

  return (
    <main>
      <Header>
        <Form onSubmit={handleSubmit}>
          <label>Crie uma lista</label>
          <input
            placeholder="Digite uma nova tarefa..."
            type="text"
            name="title"
            value={title}
            onChange={heandleChange}
          />
          <button type="submit">Adicionar</button>
        </Form>
      </Header>
      <hr />
      <Ul>
        {task.map( (item, index) => (
          <li key={index}>
            <h4>{item}</h4>
            <button onClick={() => (handleDelete(index))}>Excluir</button>
          </li>
        ))}
      </Ul>
    </main>
  );
}
