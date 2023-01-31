import { useState } from "react";

function App() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    maritalStatus: "",
    genre: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      const newData = {
        ...prev,
        [name]: value,
      };
      return newData;
    });
  };

  const handleClick = () => {
    alert("Formulário enviado com sucesso!");
    setData({
      fullName: "",
      email: "",
      maritalStatus: "",
      genre: "",
    });
  };

  const calculateProgress = () => {
    let valueProgress = 0;

    if (data.fullName) {
      const explodeString = data.fullName.split(" ");
      if (explodeString[1]) {
        valueProgress += 25;
      }
    }
    if (data.email) {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (pattern.test(data.email)) {
        valueProgress += 25;
      }
    }
    if (data.maritalStatus) {
      valueProgress += 25;
    }
    if (data.genre) {
      valueProgress += 25;
    }

    return valueProgress;
  };
  return (
    <div className="App">
      <h1>Progresso do formulário</h1>

      <main>
        <div className="bar-container">
          <div
            className="bar"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        <div className="form-group">
          <label htmlFor="">Nome Completo</label>
          <input
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">E-mail</label>
          <input name="email" value={data.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="">Estado Civil</label>
          <select
            name="maritalStatus"
            value={data.maritalStatus}
            onChange={handleChange}
          >
            <option value="">- selecione...</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Gênero</label>
          <div className="radios-container">
            <span>
              <input
                type="radio"
                name="genre"
                value={"masculino"}
                onChange={handleChange}
                checked={data.genre === "masculino"}
              />
              Masculino
            </span>
            <span>
              <input
                type="radio"
                name="genre"
                value={"feminino"}
                onChange={handleChange}
                checked={data.genre === "feminino"}
              />
              Feminino
            </span>
          </div>
        </div>
        <button onClick={handleClick} disabled={calculateProgress() !== 100}>
          Enviar Formulário
        </button>
      </main>
    </div>
  );
}

export default App;
