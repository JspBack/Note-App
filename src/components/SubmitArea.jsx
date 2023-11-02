import { useState, useEffect } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const SubmitArea = () => {
  const [word, setWord] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);

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

    if (isButtonClicked) {
      return;
    }

    if (word === "") {
      alert("You can't submit an empty word🦆");
      return;
    }
    if (word.length > 30) {
      alert("It's not a word dumass, write less than 30 characters🦆");
      return;
    }

    setIsButtonClicked(true);

    try {
      await addDoc(collection(db, `${localStorage.getItem("name")}-words`), {
        word: word,
      });
      setAlertMessage("Word Saved🦆");
      updateWordCount();
      setIsAlertVisible(true);

      setTimeout(() => {
        setIsAlertVisible(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, 1000);

      setWord("");
    } catch (e) {
      alert("🦆Error adding document: ", e);
    }
  };

  return (
    <div className="w-[60%] h-[90%] bg-white outline items-center flex flex-col justify-center">
      <textarea
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="w-[90%] h-[20%] xs:h-[10%] text-black bg-white outline resize-none mb-5 xs:mb-10"
        placeholder="Write your word here 🐸"
      ></textarea>
      <div className="outline w-max rounded-sm h-auto mb-5">
        You learned {wordCount} {wordCount === 1 ? "word" : "words"}
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={isButtonClicked}
        className={`outline w-24  rounded-xl hover:text-black hover:bg-yellow-500 transition-all ease-in-out xs:h-10 h-6 ${
          isButtonClicked ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isButtonClicked ? "Submitted" : "Submit"}
      </button>
      {isAlertVisible && (
        <div className="rounded-lg bg-green-500 text-white p-2 mt-2">
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default SubmitArea;
