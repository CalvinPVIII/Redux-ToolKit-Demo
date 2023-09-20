import { addWord } from "../redux/dictionarySlice";
import { useDispatch } from "react-redux";

export default function WordForm() {
  const dispatch = useDispatch();

  const handleAddingNewWordToForm = (e) => {
    e.preventDefault();
    const word = {
      word: e.target.word.value,
      meaning: e.target.meaning.value,
    };
    dispatch(addWord(word));
  };

  return (
    <>
      <h2>Add a new word:</h2>
      <form onSubmit={handleAddingNewWordToForm}>
        <p>Word:</p>
        <input type="text" name="word" />
        <p>Meaning:</p>
        <input type="text" name="meaning" />
        <br />
        <button type="submit">Add word</button>
      </form>
    </>
  );
}
