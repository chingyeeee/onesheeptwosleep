import { Fragment } from "react";
import { ReactComponent as Acquaintance } from "../../assets/images/quiz/4/acquaintance.svg";
import { ReactComponent as Myself } from "../../assets/images/quiz/4/myself.svg";
import { ReactComponent as Negative } from "../../assets/images/quiz/4/negative.svg";
import { ReactComponent as None } from "../../assets/images/quiz/4/none.svg";
import { ReactComponent as NotThreatening } from "../../assets/images/quiz/4/notthreatening.svg";
import { ReactComponent as Other } from "../../assets/images/quiz/4/other.svg";
import { ReactComponent as Positive } from "../../assets/images/quiz/4/positive.svg";
import { ReactComponent as Strangers } from "../../assets/images/quiz/4/strangers.svg";
import { ReactComponent as Threatening } from "../../assets/images/quiz/4/threatening.svg";
import { ReactComponent as Title4 } from "../../assets/images/quiz/4/title.svg";
import { Q4options } from "./options";

const Option = ({ opt, optText, Image, handleSaveAns, otherAns }) => {
  return (
    <div
      className={`flex justify-between md:text-xl p-2 cursor-custom group hover:bg-black items-center flex-1 transition duration-500 ${
        otherAns[1] === opt && "bg-black"
      }`}
      onClick={() => handleSaveAns(1, opt)}>
      <span className={`group-hover:hidden md:text-2xl ${otherAns[1] === opt && "hidden"}`}>
        {opt}
      </span>
      {
        <Image
          className={`w-[30%] group-hover:block group-hover:fill-purple ${
            otherAns[1] === opt ? "block fill-purple" : "hidden"
          }`}
        />
      }
      <p className={`group-hover:text-purple ${otherAns[1] === opt && "text-purple"}`}>{optText}</p>
    </div>
  );
};

const Question4 = ({ questionNum, setQuestionNum, handleSaveAns, otherAns, quizAns }) => {
  const optionsArray = Q4options[quizAns[1]] || [];
  const optLength = optionsArray.length;
  return (
    <div
      className={`bg-purple flex px-4 md:px-20 flex-col justify-between overflow-hidden absolute w-full z-[17] ${
        questionNum <= 4
          ? "h-[92%] md:h-[90%] pt-36 md:pt-48 pb-16 animate-slideDown"
          : "h-[16%] md:h-[20%] animate-slideUp"
      }`}>
      <div
        className={`${
          questionNum === 4 && "hidden"
        } flex justify-between md:text-xl absolute inset-x-0 h-min bottom-1 md:bottom-1.5 font-chakra px-4 md:px-8 hover:italic cursor-custom`}
        onClick={() => setQuestionNum(4)}>
        <p>IV.</p>
        <p>FOURTH</p>
      </div>

      {questionNum === 4 && (
        <>
          <div className='flex flex-col gap-6 items-center justify-center text-center'>
            <Title4 className='w-[40%] md:w-[12%]' />
            <div className='text-sm md:text-xl font-medium'>
              <p>承上題，請選擇以下項目</p>
              <p className='font-medium mt-2'>
                FOLLOWING THE PREVIOUS QUESTION, WHAT SPECIFIC IT IS?
              </p>
            </div>
          </div>
          <div
            className={`md:flex justify-center gap-24 ${
              quizAns[1] === "1" ? "md:h-[35%]" : "md:h-[16%] md:mb-[3%]"
            } `}>
            <>
              {optionsArray.length > 1 ? (
                <Fragment>
                  <div className='w-[90%] mx-auto md:w-[40%] flex flex-col font-semibold divide-y-2 divide-black border-y-2 border-black'>
                    {optionsArray.slice(0, optLength / 2).map((option) => {
                      const { opt, optText, Image } = option;
                      return (
                        <Option
                          key={opt}
                          opt={opt}
                          optText={optText}
                          Image={Image}
                          handleSaveAns={handleSaveAns}
                          otherAns={otherAns}
                        />
                      );
                    })}
                  </div>

                  <div className='w-[90%] mx-auto md:w-[40%] flex flex-col font-semibold divide-y-2 divide-black md:border-y-2 border-b-2 border-black'>
                    {optionsArray.slice(optLength / 2, optLength + 1).map((option) => {
                      const { opt, optText, Image } = option;
                      return (
                        <Option
                          key={opt}
                          opt={opt}
                          optText={optText}
                          Image={Image}
                          handleSaveAns={handleSaveAns}
                          otherAns={otherAns}
                        />
                      );
                    })}
                  </div>
                </Fragment>
              ) : (
                <div className='w-[90%] mx-auto md:w-[40%] flex flex-col font-semibold divide-y-2 divide-black border-y-2 border-black'>
                  {optionsArray.map((option) => {
                    const { opt, optText, Image } = option;
                    return (
                      <Option
                        key={opt}
                        opt={opt}
                        optText={optText}
                        Image={Image}
                        handleSaveAns={handleSaveAns}
                        otherAns={otherAns}
                      />
                    );
                  })}
                </div>
              )}
            </>
          </div>
        </>
      )}
    </div>
  );
};

export default Question4;
