import { useState, useEffect } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const SubmitArea = () => {
  const [word, setWord] = useState("");
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    updateWordCount();
  }, []);

  const getDocumentCount = async () => {
    const querySnapshot = await getDocs(
      collection(db, `${localStorage.getItem("name")}-words`)
    );
    const count = querySnapshot.size;
    return count;
  };

  const updateWordCount = async () => {
    const count = await getDocumentCount();
    setWordCount(count);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (word === "") {
      alert("Please write something");
      return;
    }

    try {
      const docRef = await addDoc(
        collection(db, `${localStorage.getItem("name")}-words`),
        {
          word: word,
        }
      );
      alert("Word Saved👍", docRef.id);
      updateWordCount();
      window.location.reload();
    } catch (e) {
      alert("Error adding document: ", e);
    }

    setWord("");
  };

  return (
    <div className="w-[60%] h-[80%]  bg-white outline items-center flex flex-col justify-center">
      <textarea
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="w-[90%] h-[10%] text-black bg-white outline resize-none mb-10"
        placeholder="Write your note here"
      ></textarea>
      <div className="outline w-max rounded-sm h-auto mb-5">
        You learned {wordCount} {wordCount === 1 ? "word" : "words"}
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="outline w-24  rounded-xl hover:text-black hover:bg-yellow-500 transition-all ease-in-out h-10"
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitArea;
