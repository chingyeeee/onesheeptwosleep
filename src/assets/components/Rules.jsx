import { ReactComponent as RulesLogo } from "../images/rules/rules.svg";
import { ReactComponent as Finger } from "../images/icons/icon-finger.svg";
import { useEffect, useState } from "react";

function TypingText({ isTypingFinished, setIsTypingFinished }) {
  const [text, setText] = useState("");

  const content =
    "請試著回想一個讓你印象深刻的夢，可以是任何的情境\n 不管傷心難過、開心快樂甚至是難以啟齒的夢，都請回答接下來的問題！\n Please try to recall a dream that impressed you, it can be any situation, \n Regardless of whether you are sad, happy or even unspeakable dreams, \n please answer the following questions!";
  const speed = 50;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText((text) => text + content.charAt(i));
      i++;
      if (i === content.length) {
        clearInterval(typingInterval);
        setIsTypingFinished(true);
      }
    }, speed);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="w-[70%] h-[220px] md:h-[170px] mx-auto mt-6 md:leading-8 text-sm md:text-lg">
      {isTypingFinished ? (
        <p>
          請試著回想一個讓你印象深刻的夢，可以是任何的情境
          <br />
          不管傷心難過、開心快樂甚至是難以啟齒的夢，都請回答接下來的問題！
          <br />
          Please try to recall a dream that impressed you, it can be any
          situation,
          <br />
          Regardless of whether you are sad, happy or even unspeakable dreams,{" "}
          <br />
          please answer the following questions!
        </p>
      ) : (
        text.split("").map((char, index) => {
          if (char === "\n") {
            return <br key={index} />;
          } else {
            return (
              <span
                key={index}
                className={`opacity-1 animate-typing delay-${index}s`}
              >
                {char}
              </span>
            );
          }
        })
      )}
    </div>
  );
}

const Rules = ({ nextStep }) => {
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  const handleScreenClick = () => {
    if (!isTypingFinished) {
      setIsTypingFinished(true);
    }
  };

  return (
    <div
      className="h-full flex justify-center items-center animate-zoomIn"
      onClick={handleScreenClick}
    >
      <div className="w-[90%] md:w-[70%] bg-yellow rounded-[150px] md:rounded-full py-24 md:py-24 md:p-12 text-center min-h-[50%]">
        <RulesLogo className="w-[40%] m-auto" />
        <TypingText
          handleScreenClick={handleScreenClick}
          isTypingFinished={isTypingFinished}
          setIsTypingFinished={setIsTypingFinished}
        />

        <div
          className={`bg-blue mt-8 w-min m-auto px-6 py-3 rounded-full cursor-[url('/src/assets/images/cursor-pointer.png'),_pointer] animate-remind-lightening transition hover:animate-lightening ${
            isTypingFinished ? "opacity-1" : "opacity-0"
          }`}
          onClick={nextStep}
        >
          <Finger className="w-[42px] h-[20px] md:w-[56px] md:h-[25px] fill-yellow" />
        </div>
      </div>
    </div>
  );
};

export default Rules;
