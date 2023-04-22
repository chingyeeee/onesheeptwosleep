import { lazy, Fragment, useState, useRef, useEffect } from "react";
import { Dialog, Transition, Tab, Switch } from "@headlessui/react";
import { ReactComponent as Menu } from "../assets/images/icons/icon-menu-sheep.svg";
import { ReactComponent as Download } from "../assets/images/icons/icon-download.svg";
import TabData from "../assets/data/TabList.json";
import { getImageUrl } from "../utils/getImageUrl";
import html2canvas from "html2canvas";
import Cloud from "../assets/images/icons/icon-cloud.svg";
import CloudMobileEn from "../assets/images/icons/icon-cloud-mobile-en.svg";
import CloudMobileCH from "../assets/images/icons/icon-cloud-mobile-ch.svg";
import ToggleText from "../components/ToggleText";
import { v4 as uuidv4 } from "uuid";
import { useIntro } from "../context/useIntro";

const Background = lazy(() => import("../components/Background"));

const Home = () => {
  const { isIntro, closeIntro } = useIntro();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  //toggle開關
  const [logoEnabled, setLogoEnabled] = useState(true);
  const [welcomeToEnabled, setWelcomeToEnabled] = useState(true);
  const [dreamCardEnabled, setDreamCardEnabled] = useState(true);
  const [aboutUsEnabled, setAboutUsEnabled] = useState(true);
  const [emotionEnabled, setEmotionEnabled] = useState(false);
  const [addItemsEnabled, setAddItemsEnabled] = useState(true);
  const [downloadEnabled, setDownloadEnabled] = useState(true);
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(null);
  //color
  const [color, setColor] = useState("color-default.svg");
  //cardItems
  const [cardItems, setCardItems] = useState([]);
  //stage Ref
  const stageRef = useRef();
  const pngRef = useRef();

  useEffect(() => {
    if (window.screen.width > 1024) {
      setPosX(window.screen.width / 2 + 200);
      setPosY(300);
    } else {
      setPosX(50);
      setPosY(270);
    }
  }, []);

  //開啓menu
  function openMenu() {
    setIsOpenMenu(true);
  }

  //關閉menu
  function closeMenu() {
    setIsOpenMenu(false);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  //根據word render對應的input
  function handleSwitchInput(word) {
    switch (word) {
      case "LOGOTYPE":
        return (
          <Switch
            value={logoEnabled}
            checked={logoEnabled}
            onChange={setLogoEnabled}
            className={`${logoEnabled ? "bg-black" : "bg-gray-300"}
          relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${logoEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "WELCOME TO":
        return (
          <Switch
            value={welcomeToEnabled}
            checked={welcomeToEnabled}
            onChange={setWelcomeToEnabled}
            className={`${welcomeToEnabled ? "bg-black" : "bg-gray-300"}
            relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${welcomeToEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
              pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "DREAM CARD":
        return (
          <Switch
            value={dreamCardEnabled}
            checked={dreamCardEnabled}
            onChange={setDreamCardEnabled}
            className={`${dreamCardEnabled ? "bg-black" : "bg-gray-300"}
            relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${dreamCardEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
              pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "ABOUT US":
        return (
          <Switch
            value={aboutUsEnabled}
            checked={aboutUsEnabled}
            onChange={setAboutUsEnabled}
            className={`${aboutUsEnabled ? "bg-black" : "bg-gray-300"}
              relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${aboutUsEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
                pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "EMOTIONS":
        return (
          <Switch
            value={emotionEnabled}
            checked={emotionEnabled}
            onChange={setEmotionEnabled}
            className={`${emotionEnabled ? "bg-black" : "bg-gray-300"}
                relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${emotionEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
                  pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "ADD ITEMS":
        return (
          <Switch
            value={addItemsEnabled}
            checked={addItemsEnabled}
            onChange={setAddItemsEnabled}
            className={`${addItemsEnabled ? "bg-black" : "bg-gray-300"}
                  relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${addItemsEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
                    pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
      case "DOWNLOAD":
        return (
          <Switch
            value={downloadEnabled}
            checked={downloadEnabled}
            onChange={setDownloadEnabled}
            className={`${downloadEnabled ? "bg-black" : "bg-gray-300"}
                  relative inline-flex h-[28px] w-[54px] shrink-0 cursor-custom rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use {word}</span>
            <span
              aria-hidden='true'
              className={`${downloadEnabled ? "translate-x-[1.6rem]" : "translate-x-0"}
                    pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        );
    }
  }

  //download stage as image
  const handleExport = () => {
    const element = pngRef.current;

    html2canvas(element).then((canvas) => {
      const imgSrc = canvas.toDataURL();
      const link = document.createElement("a");
      link.download = "oneSheepTwoSleep.png";
      link.href = imgSrc;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <>
      <div className={`min-safe-h-screen md:h-screen p-6 overflow-hidden relative`} ref={pngRef}>
        <>
          <Background
            color={color}
            logoEnabled={logoEnabled}
            welcomeToEnabled={welcomeToEnabled}
            cardItems={cardItems}
            setCardItems={setCardItems}
            stageRef={stageRef}
            aboutUsEnabled={aboutUsEnabled}
            dreamCardEnabled={dreamCardEnabled}
            emotionEnabled={emotionEnabled}
          />

          <div className='absolute z-[30] w-[10%] bottom-[15%] left-10 md:left-auto md:bottom-0 md:top-[30%] flex flex-col gap-8 items-center'>
            <div
              className={`flex flex-col opacity-0 items-center ${
                addItemsEnabled && "opacity-100 cursor-custom"
              }`}
              onClick={openMenu}>
              <Menu className='w-[100%] md:w-auto' />
              <p className='text-[8px] md:text-base underline underline-black w-max'>add items</p>
            </div>

            {downloadEnabled && (
              <div className='flex flex-col items-center cursor-custom' onClick={handleExport}>
                <Download className='w-[100%] md:w-auto' />
                <p className='text-[8px] md:text-base underline underline-black w-max'>download</p>
              </div>
            )}
          </div>
          <Transition appear show={isOpenMenu} as={Fragment}>
            <Dialog as='div' className='relative z-[31]' onClose={closeMenu}>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'>
                <div className='fixed inset-0 bg-white bg-opacity-50' />
              </Transition.Child>

              <div className='fixed inset-0 overflow-hidden'>
                <div className='min-h-full'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'>
                    <Dialog.Panel className='w-[110%] md:w-[50%] max-h-[50vh] md:min-h-[75vh] mr-auto transform overflow-hidden text-center align-middle transition-all absolute bottom-0 md:bottom-auto md:top-[20%] -left-[5%] border-2 md:left-[12%] md:border-4 border-black rounded-xl bg-white px-4'>
                      <Tab.Group>
                        <Tab.List className='flex py-2 md:py-4 border-b-2 md:border-b-4 border-black space-x-0.5'>
                          {Object.keys(TabData).map((tab) => (
                            <Tab
                              key={tab}
                              className={({ selected }) =>
                                classNames(
                                  "w-full py-1 md:py-2.5 text-xs md:text-lg font-medium leading-5",
                                  "ring-white ring-opacity-60 focus:outline-none focus:ring-2",
                                  selected
                                    ? "before:block before:absolute before:-inset-1 before:bg-lightpurple before:rounded-md before:z-[-1] before:scale-[0.65] relative inline-block text-white"
                                    : "text-black",
                                  `${
                                    tab === "1SHEEP2SLEEP" &&
                                    "border-x-2 md:border-x-4 border-black "
                                  }`
                                )
                              }>
                              {tab}
                            </Tab>
                          ))}
                        </Tab.List>
                        <Tab.Panels className='p-6 max-h-[40vh] md:max-h-[65vh] overflow-y-auto'>
                          <Tab.Panel>
                            <div className='mt-6 columns-3 md:columns-4'>
                              {TabData["STiCKERS"].map((sticker, idx) => {
                                return (
                                  <img
                                    className={`w-full cursor-custom hover:bg-[#a9a9ff40] place-self-start`}
                                    key={sticker}
                                    src={getImageUrl("stickers", sticker)}
                                    onClick={(e) => {
                                      setCardItems([
                                        ...cardItems,
                                        {
                                          image: sticker,
                                          x: posX,
                                          y: posY,
                                          width: e.target.width,
                                          height: e.target.height,
                                          id: uuidv4(),
                                          folder: "stickers",
                                        },
                                      ]);
                                    }}
                                  />
                                );
                              })}
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <h3 className='text-5xl text-left font-semibold'>LOGOTYPES_</h3>
                            <div className='flex flex-col gap-12 mt-6'>
                              {TabData["1SHEEP2SLEEP"].map((logo) => {
                                return (
                                  <img
                                    className='w-[80%] cursor-custom hover:bg-[#a9a9ff40] m-auto'
                                    key={logo}
                                    src={getImageUrl("cardLogos", logo)}
                                    onClick={(e) =>
                                      setCardItems([
                                        ...cardItems,
                                        {
                                          image: logo,
                                          x: posX,
                                          y: posY,
                                          width: e.target.width,
                                          height: e.target.height,
                                          id: uuidv4(),
                                          folder: "cardLogos",
                                        },
                                      ])
                                    }
                                  />
                                );
                              })}
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <h3 className='text-5xl text-left font-semibold'>
                              COLOR <br />
                              CHANGE_
                            </h3>
                            <div className='flex flex-wrap gap-4 mt-6'>
                              {TabData["BACKGROUND"].color.map((background) => {
                                return (
                                  <img
                                    className='w-[10%] cursor-custom'
                                    key={background}
                                    src={getImageUrl("cardColors", background)}
                                    onClick={() => setColor(background)}
                                  />
                                );
                              })}
                            </div>
                            <h3 className='text-5xl font-semibold text-left mt-12'>
                              BACKGROUND <br />
                              WORDS_
                            </h3>
                            <div className='flex flex-col gap-4 mt-6'>
                              {TabData["BACKGROUND"].word.map((word) => {
                                return (
                                  <div
                                    key={word}
                                    className='rounded-md border-2 border-black p-2 flex justify-between items-center'>
                                    <p className='text-lg font-bold'>{word}</p>
                                    {handleSwitchInput(word)}
                                  </div>
                                );
                              })}
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      </div>

      {/* Introduction Modal */}
      <Transition appear show={isIntro} as={Fragment}>
        <Dialog as='div' className='relative z-[32]' onClose={closeIntro}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-purple bg-opacity-95' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-x-hidden overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel
                  className='w-full transform md:overflow-hidden text-center align-middle transition-all text-sm md:text-lg font-medium leading-6 text-gray-900'
                  onClick={closeIntro}>
                  <img className='scale-[0.8] hidden md:block' src={Cloud} alt='cloud' />
                  <img className='scale-90 md:hidden' src={CloudMobileCH} alt='cloud' />
                  <img className='scale-90 md:hidden' src={CloudMobileEn} alt='cloud' />
                </Dialog.Panel>
              </Transition.Child>
              <ToggleText />
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Home;