import { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const WordArea = () => {
  const [words, setWords] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const fetchWords = async () => {
    const querySnapshot = await getDocs(
      collection(db, `${localStorage.getItem("name")}-words`)
    );
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setWords(newData);
  };

  const deleteWord = async (id) => {
    const reference = doc(db, `${localStorage.getItem("name")}-words`, id);
    await deleteDoc(reference);
    fetchWords();
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div className="w-[60%] xs:h-[90%] bg-white h-[80%] flex flex-col items-center">
      {showMessage && (
        <div className="bg-red-500 text-white p-2 rounded-lg mb-2  ">
          Word deleted! Refreshing...
        </div>
      )}

      <ul className="h-full w-full bg-white outline items-center flex flex-col gap-[2px] scroll-smooth overflow-x-hidden overflow-y-scroll">
        {words?.map((word, i) => (
          <a
            key={i}
            className="w-full xs:h-[5%] h-max bg-yellow-300 cursor-pointer"
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
