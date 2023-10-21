import { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const WordArea = () => {
  const [words, setWords] = useState([]);

  const fetchWords = async () => {
    const querySnapshot = await getDocs(collection(db, "words"));
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setWords(newData);
  };

  const deleteWord = async (id) => {
    const reference = doc(db, "words", id);
    await deleteDoc(reference);
    fetchWords();
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div className="w-[60%] xs:h-[80%] h-[60%] bg-gray-500 flex flex-col items-center">
      <ul className="h-full w-full bg-red-400 items-center flex flex-col gap-[2px] scroll-smooth overflow-y-scroll">
        {words?.map((word, i) => (
          <a
            key={i}
            className="w-full xs:h-[5%] h-[10%] bg-green-400 cursor-pointer"
            onClick={() => deleteWord(word.id)}
          >
            <li key={i}>{word.word}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default WordArea;
