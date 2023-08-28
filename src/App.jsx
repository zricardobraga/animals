import { useState } from "react";
import Animal from "./components/Animal";
import styles from "./app.module.css";

export default function App() {
  const [animalsList, setAnimalsList] = useState([]);
  const [animalName, setAnimalName] = useState("");
  const [animalImageUrl, setAnimalImageUrl] = useState("");

  let isAnimalNameValid;
  let isAnimalImageUrlValid;
  //método que insere os novos animais no animalList
  const handleAnimalSubmit = (e) => {
    e.preventDefault();
    //chamada dos métodos de validadação dos valores digitados
    isAnimalNameValid = validadeAnimalName(animalName);
    isAnimalImageUrlValid = validadeAnimalImageUrl(animalImageUrl);

    //se os valores estiverem de acordo com a regra de validação, insere o novo animal na lista
    if (!isAnimalNameValid || !isAnimalImageUrlValid) {
      alert("Por favor, verifique os dados inseridos no formulário");
    } else {
      const newAnimal = { name: animalName, url: animalImageUrl };
      setAnimalsList((oldAnimalList) => [...oldAnimalList, newAnimal]);
      setAnimalName('');
      setAnimalImageUrl('');

    }
  };

  //método que valida se os valores inseridos no input de animalName estão corretos
  const validadeAnimalName = (animalName) => {
    //apaga os espaços em branco
    const withoutSpaces = animalName.trim();
    const result = withoutSpaces.length > 3 ? true : false;
    // console.log(result);
    return result;
  };

  //método que valida se os valores inseridos no input de animalImageUrl estão corretos
  const validadeAnimalImageUrl = (animalImageUrl) => {
    //apaga os espaços em branco
    const withoutSpaces = animalImageUrl.trim();
    const result = withoutSpaces.length > 6 ? true : false;
    // console.log(result);
    return result;
  };

  return (
    <>
      <main className={styles.main}>
        <section className={styles.formContainer}>
          <h2>ADICIONE AQUI SEU NOVO ANIMAL FAVORITO</h2>
          <div className={styles.content}>
            <form onSubmit={handleAnimalSubmit}>
              <div className={styles.input}>
                <input
                  type="text"
                  name="animalName"
                  id="animalName"
                  placeholder="Informe aqui o nome do animal"
                  onChange={(e) => setAnimalName(e.target.value)}
                  value={animalName}
                />

                {!isAnimalNameValid && (
                  <small className={styles.validator}>Por favor, insira um nome.</small>
                )}

                <input
                  type="text"
                  name="animalImageUrl"
                  id="animalImageUrl"
                  placeholder="Informe aqui a url da imagem do animal"
                  onChange={(e) => setAnimalImageUrl(e.target.value)}
                  value={animalImageUrl}
                />
                {isAnimalImageUrlValid && (
                  <small className={styles.validator}>Por favor, insira uma url válida.</small>
                )}
              </div>
              <button
                className={styles.button}
                type="submit"
                disabled={animalName === "" && animalImageUrl === ""}
              >
                ADICIONAR
              </button>
            </form>
          </div>
        </section>
        
        <section className={styles.listContainer}>
          <h2 className={styles.listName}>ANIMAIS FAVORITOS</h2>
          <div className={styles.cardContainer}>
            {animalsList &&
              animalsList.map((animal, index) => {
                return (
                  <>
                    <Animal key={index} animal={animal} />
                  </>
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
}
