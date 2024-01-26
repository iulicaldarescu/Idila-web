// Import other dependencies
import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import styles from "../Header/Header.module.css";
import Categories from "../Components/Categories/Categories";

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
  const [isInputFocused, isSetInputFocused] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down
      if (window.scrollY > 0) {
        isSetInputFocused(false);
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const outsideSuggestionsContainer = useRef(null);

  const handleOutsideClick = () => {
    isSetInputFocused(false);
  };

  const userClickedOutside = (ref: any, callback: any) => {
    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          // Click occurred outside of the specified element
          callback();
        }
      };

      // Attach the event listener to the document body
      document.addEventListener("click", handleClickOutside);

      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [ref, callback]);
  };

  userClickedOutside(outsideSuggestionsContainer, handleOutsideClick);

  return (
    <>
      <header className="fixed left-0 right-0 bg-black flex flex-col px-4 py-3 gap-2 z-50">
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
            {isScrolled && (
              <SlMagnifier
                onClick={() => {
                  setIsScrolled(false);
                }}
                style={{
                  color: "white",
                  backgroundColor: "black",
                  height: "21px",
                  width: "21px",
                }}
              />
            )}
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
        {!isScrolled && (
          <div>
            <div className="relative">
              {/* input HTML tag with magnifier icon */}
              <input
                className={`placeholder:font-[500] w-full pl-4 pr-12 py-2 rounded-t-3xl text-[15px] focus:outline-none ${
                  !isInputFocused ? "rounded-b-3xl" : ""
                }`}
                type="text"
                placeholder="Cauta parfum, produse cosmetice brand..."
                onClick={(e) => {
                  e.stopPropagation();
                  isSetInputFocused(true);
                }}
              />
              {/* Magnifying-glass logo container */}
              <SlMagnifier
                onClick={() => isSetInputFocused(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                style={{
                  height: "18px",
                  width: "18px",
                }}
              />
            </div>
            {/* suggestions modal container */}
            {isInputFocused && (
              <ul
                ref={outsideSuggestionsContainer}
                className={`absolute top-[90px] left-0 right-0 mx-4 z-20 bg-white rounded-bl-3xl rounded-br-3xl p-4`}
              >
                {/* Close icon container */}
                <div className="flex justify-end">
                  <IoClose
                    onClick={() => isSetInputFocused(false)}
                    style={{
                      height: "20px",
                      width: "20px",
                    }}
                  />
                </div>
                {suggestions.map((suggestion) => {
                  return <li>{suggestion}</li>;
                })}
              </ul>
            )}
          </div>
        )}
      </header>

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
        <Categories />
      </div>
    </>
  );
}

export default Header;
