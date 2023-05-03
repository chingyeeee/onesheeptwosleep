import { Tab } from "@headlessui/react";
import TabData from "../../assets/data/TabList.json";
import { getImageUrl } from "../../utils/getImageUrl";
import { v4 as uuidv4 } from "uuid";

const StickersTab = ({ setCardItems }) => {
  return (
    <Tab.Panel>
      <div className='mt-6 columns-3'>
        {TabData["STiCKERS"].map((sticker) => {
          return (
            <img
              className={`w-full cursor-custom hover:bg-[#a9a9ff40] place-self-start`}
              key={sticker}
              src={getImageUrl("stickers", sticker)}
              onClick={(e) => {
                setCardItems((cardItems) => [
                  ...cardItems,
                  {
                    image: sticker,
                    x: window.screen.width / 3,
                    y: window.screen.height / 3,
                    width: e.target.width * 2,
                    height: e.target.height * 2,
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
  );
};
export default StickersTab;
