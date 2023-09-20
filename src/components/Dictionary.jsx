import { useSelector } from "react-redux";
import { dictionarySelector } from "../redux/store";
import { useDispatch } from "react-redux";
import { removeWord } from "../redux/dictionarySlice";

export default function Dictionary() {
  const dictionary = useSelector(dictionarySelector);
  const dispatch = useDispatch();

  const handleClick = (word) => {
    dispatch(removeWord(word));
  };

  return (
    <>
      <h1>My Dictionary:</h1>
      {dictionary.map((word, i) => (
        <li key={i} onClick={() => handleClick(word)}>
          {word.word} - {word.meaning}
        </li>
      ))}
    </>
  );
}
