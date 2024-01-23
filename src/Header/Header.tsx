// Import other dependencies
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import styles from "../Header/Header.module.css";

const suggestions = [
  "abcdddd",
  "abddsadac",
  "abdasc",
  "abcdasdas",
  "abcdasdas",
  "adasdasbc",
  "adasdsabc",
  "abdasdsac",
];

function Header() {
  const [modalOnOff, setModalOnOff] = useState<boolean>(false);
  const [transitionClass, setTransitionClass] = useState<string>("");
  const [isInputFocused, isSetInputFocused] = useState(false);

  const onOffMenu = () => {
    setModalOnOff(!modalOnOff);
  };

  useEffect(() => {
    if (modalOnOff) {
      // Delay adding the transition class to ensure it triggers the transition
      const timeoutId = setTimeout(() => {
        setTransitionClass(`${styles["transition"]}`);
      }, 10);

      return () => clearTimeout(timeoutId);
    } else {
      // Remove the transition class immediately when closing the modal
      setTransitionClass("");
    }
  }, [modalOnOff]);

  const testArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      <header className="bg-black flex flex-col px-4 py-3 gap-2">
        {/* top first container */}
        <div className="flex justify-between">
          {/* left container */}
          <div className="flex items-center gap-8">
            <GiHamburgerMenu
              onClick={onOffMenu}
              style={{
                color: "white",
                backgroundColor: "black",
                height: "23px",
                width: "23px",
              }}
            />
            <p className="text-white font-bold text-2xl">IDILA</p>
          </div>

          {/* right-container */}
          <div className="flex items-center gap-6">
            <GoPerson
              style={{
                color: "white",
                backgroundColor: "black",
                height: "23px",
                width: "23px",
              }}
            />
            <FaRegHeart
              style={{
                color: "white",
                backgroundColor: "black",
                height: "23px",
                width: "23px",
              }}
            />
            <BsCart3
              style={{
                color: "white",
                backgroundColor: "black",
                height: "23px",
                width: "23px",
              }}
            />
          </div>
        </div>
        {/* input bottom container */}

        <div className="flex justify-center items-center">
          {/* input HTML tag */}
          <input
            className={`placeholder:font-[500] w-full pl-4 py-2 rounded-tl-3xl text-[15px] focus:outline-none ${
              !isInputFocused ? "rounded-bl-3xl" : ""
            }`}
            type="text"
            placeholder="Cauta parfum, produse cosmetice brand..."
            onClick={() => {
              isSetInputFocused(true);
            }}
          ></input>

          {/* magnifying-glass logo container */}
          <div
            className={`bg-white py-[10px] px-3 rounded-tr-3xl flex justify-center items-center border-b ${
              !isInputFocused ? "rounded-br-3xl" : ""
            }`}
          >
            <SlMagnifier
              style={{
                color: "gray",
                backgroundColor: "white",
                height: "18px",
                width: "18px",
              }}
            />
          </div>
        </div>
      </header>
      {/* suggestions modal */}
      {isInputFocused && (
        <ul className="absolute top-[90px] left-0 right-2.5 mx-4 z-20 bg-white rounded-bl-3xl rounded-br-3xl p-4">
          {suggestions.map((suggestion) => {
            return <li>{suggestion}</li>;
          })}
        </ul>
      )}

      {/* MODAL menu of hamburger button */}
      <div className={`pb-10 ${styles["modal-container"]} ${transitionClass}`}>
        {/* top container title and closure */}
        <div className="flex items-center justify-between px-3">
          <h1 className="font-bold text-lg py-3 m-auto">Meniu</h1>
          {/* X logo container */}
          <div className="absolute top-[13px] right-[13px]" onClick={onOffMenu}>
            <IoClose
              style={{
                color: "black",
                backgroundColor: "white",
                height: "25px",
                width: "25px",
              }}
            />
          </div>
        </div>
        {/* menu list */}
        <menu className="text-[15px] overflow-auto h-full pb-10">
          <p className="border-y-[1px] py-3 px-4">Autentificare</p>
          {testArr.map((item) => {
            return (
              <li
                key={item}
                className="flex items-center justify-between border-y-[1px] py-3 px-4"
              >
                <p>Promotii</p>
                <IoIosArrowForward
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    height: "22px",
                    width: "22px",
                  }}
                />
              </li>
            );
          })}
        </menu>
      </div>
    </>
  );
}

export default Header;
