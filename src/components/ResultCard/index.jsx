import { Disclosure } from "@headlessui/react";
import Loading2 from "../../assets/images/quiz/loading/loading2.svg";
import Loading5 from "../../assets/images/quiz/loading/loading5.svg";
import { ReactComponent as ChevronUp } from "../../assets/images/quiz/showResult/chevronUp.svg";
import LeftMarquee from "../../assets/images/quiz/showResult/left-marquee.svg";
import Marquee from "../../assets/images/quiz/showResult/marquee.svg";
import RightMarquee from "../../assets/images/quiz/showResult/right-marquee.svg";
import { getImageUrl } from "../../utils/getImageUrl";
import { getEmotion, getCharacter, getLifeStyle } from "./EmotionAlgorithm";
import { useNavigate } from "react-router-dom";

const Result = ({ signImgPath, quizAns, otherAns, setQuestionNum }) => {
  const navigate = useNavigate();
  const percentageArray = [
    getRandomPercentage(94, 70),
    getRandomPercentage(80, 50),
    getRandomPercentage(94, 70),
  ];

  const twoChoices = getRandomPercentage(3, 2);
  const fourChoices = getRandomPercentage(5, 2);

  function getRandomPercentage(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className='relative min-safe-h-screen overflow-hidden'>
      <div className='bg-blue h-[2rem] md:h-[5rem] relative overflow-hidden'>
        <div className='absolute inset-y-0 m-auto flex animate-marquee w-[200%]'>
          <img className='w-[50%] h-auto' src={Marquee} />
          <img className='w-[50%] h-auto' src={Marquee} />
          <img className='w-[50%] h-auto' src={Marquee} />
          <img className='w-[50%] h-auto' src={Marquee} />
        </div>
      </div>
      <div className='bg-yellow absolute left-0 w-[2rem] md:w-[5rem] min-h-inherit h-full overflow-hidden'>
        <div className='absolute inset-x-0 m-auto flex flex-col animate-marqueeV h-[200%]'>
          <img className='h-[50%] md:h-[100%] w-auto' src={LeftMarquee} />
          <img className='h-[50%] md:h-[100%] w-auto' src={LeftMarquee} />
          <img className='h-[50%] md:h-[100%] w-auto' src={LeftMarquee} />
          <img className='h-[50%] md:h-[100%] w-auto' src={LeftMarquee} />
        </div>
      </div>
      <div className='bg-purple absolute right-0 w-[2rem] md:w-[5rem] min-h-inherit h-full overflow-hidden'>
        <div className='absolute inset-x-0 m-auto flex flex-col animate-marqueeV h-[200%]'>
          <img className='h-[50%] md:h-[100%] w-auto' src={RightMarquee} />
          <img className='h-[50%] md:h-[100%] w-auto' src={RightMarquee} />
          <img className='h-[50%] md:h-[100%] w-auto' src={RightMarquee} />
          <img className='h-[50%] md:h-[100%] w-auto' src={RightMarquee} />
        </div>
      </div>
      <img
        src={Loading5}
        className={
          "absolute -right-[0.1rem] -top-[0.1rem] w-[2.13rem] h-[2.13rem] md:w-[5.1rem] md:h-[5.2rem]"
        }
      />
      <img
        src={Loading2}
        className={
          "absolute -left-[0.1rem] -top-[0.1rem] w-[2.13rem] h-[2.13rem] md:w-[5.13rem] md:h-[5.2rem]"
        }
      />

      <div className='w-[80%] mx-auto md:w-full px-4 md:pt-6 pb-12 min-safe-h-screen overflow-scroll'>
        <img className='m-auto h-[8rem] md:h-[12rem] mb-2' src={signImgPath} alt='yourName' />
        <div className='mx-auto w-full max-w-3xl bg-white px-2 pb-8'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-t-2 border-blue p-3 text-left text-sm font-medium focus:outline-none relative z-[20]'>
                  <p className='md:text-lg text-blue'>
                    (1) <br />有{percentageArray[0]}%的人也跟你一樣做了（ {getEmotion(quizAns)[0]}{" "}
                    ）的夢 <br />
                    BASED ON YOUR CHOICE, <br />
                    YOU HAVE A{" "}
                    <span className='font-padyakke text-red'>({getEmotion(quizAns)[1]})</span>
                    <span className='text-red'> {getEmotion(quizAns)[0]} </span>
                    DREAM.
                  </p>
                  <ChevronUp
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='p-3 space-y-8 text-sm md:text-md text-red relative flex flex-col items-end z-[10]'>
                  <img
                    className='md:scale-100 scale-[1.4]'
                    src={getImageUrl("quiz/showResult", `${quizAns[0]}.svg`)}
                  />

                  <p className='w-full underline-offset-1 decoration-red decoration-solid underline'>
                    {quizAns[0] === "D"
                      ? getEmotion(quizAns)[fourChoices]
                      : quizAns[0] === "A" || quizAns[0] === "B" || quizAns[0] === "G"
                      ? getEmotion(quizAns)[twoChoices]
                      : getEmotion(quizAns)[2]}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-t-2 border-blue p-3 text-left text-sm font-medium focus:outline-none relative z-[20]'>
                  <p className='md:text-lg text-blue'>
                    (2) <br />而{percentageArray[1]}%的人夢境中的主角是（
                    {getCharacter(quizAns, otherAns)[0]}） <br />
                    WITH
                    <span className='font-padyakke text-red'>
                      ({getCharacter(quizAns, otherAns)[1]})
                    </span>
                    <span className='text-red'>{getCharacter(quizAns, otherAns)[0]}</span>
                    BECOMING YOUR DREAM’S <br />
                    MAIN OBJECT.
                  </p>
                  <ChevronUp
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='p-3 space-y-8 text-sm md:text-md text-red relative flex flex-col items-end z-[10] w-full'>
                  <img
                    className='md:scale-100 scale-[1.4]'
                    src={getImageUrl("quiz/showResult", `${quizAns[1]}.svg`)}
                  />
                  <p className='w-full underline-offset-1 decoration-red decoration-solid underline'>
                    {otherAns[1] === "significant other"
                      ? getCharacter(quizAns, otherAns)[twoChoices]
                      : getCharacter(quizAns, otherAns)[2]}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full justify-between border-t-2  border-blue p-3 text-left text-sm font-medium focus:outline-none relative z-[20] ${
                    !open && "border-b-2"
                  }`}>
                  <p className='md:text-lg text-blue'>
                    (3) <br />
                    {percentageArray[1]}%的人做了有關（
                    {getLifeStyle(quizAns)[0]}） 的夢
                    <br /> AND YOUR DREAM IS ALL ABOUT{""}
                    <span className='font-padyakke text-red'>({getLifeStyle(quizAns)[1]})</span>
                    <span className='text-red'>{getLifeStyle(quizAns)[0]}</span>
                  </p>
                  <ChevronUp
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel
                  className={`p-3 space-y-8 text-sm md:text-md text-red relative flex flex-col items-end  ${
                    open && "border-b-2 border-blue"
                  }`}>
                  <img
                    className='md:scale-100 scale-[1.4]'
                    src={getImageUrl("quiz/showResult", `${quizAns[2]}.svg`)}
                  />

                  <p className='w-full underline-offset-1 decoration-red decoration-solid underline'>
                    {quizAns[2] === "Y"
                      ? getLifeStyle(quizAns)[fourChoices]
                      : quizAns[2] === "X"
                      ? getLifeStyle(quizAns)[2]
                      : getLifeStyle(quizAns)[twoChoices]}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div
            className={`px-8 py-2 cursor-custom text-darkgreen border-2 border-darkgreen rounded-full w-max mx-auto mt-12 mb-12 hover:bg-darkgreen hover:text-white transition animate-lightening2`}
            onClick={() => navigate("../download", { state: { signImgPath, quizAns } })}>
            生成解夢卡
          </div>
        </div>
      </div>
    </div>
  );
};
export default Result;