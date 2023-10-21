import { useState } from "react";
import { addDoc, collection, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const SubmitArea = () => {
  const [word, setword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (word === "") {
      alert("Please write something");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "words"), {
        word: word,
      });
      alert("Word Saved👍", docRef.id);
    } catch (e) {
      alert("Error adding document: ", e);
    }

    // addDoc(userCollectionRef, { word: word })
    //   .then(() => {
    //     alert("Mesajınız gönderildi👍");
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });

    setword("");
  };
  return (
    <div className="w-[60%] h-[80%]  bg-gray-500 items-center flex flex-col justify-center">
      <textarea
        value={word}
        onChange={(e) => setword(e.target.value)}
        className="w-[90%] h-[10%] text-white outline-none resize-none mb-10"
        placeholder="Write your note here"
      ></textarea>
      <div className="outline w-max rounded-sm h-auto mb-5 ">
        You learned 0 words
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
