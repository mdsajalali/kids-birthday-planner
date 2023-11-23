import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 100;

    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });
  return (
    <>
      {isVisible && (
        <div className="fixed bottom-5 right-5">
          <h1
            onClick={goToBtn}
            className="bg-[#FFECC6] p-4 rounded-full cursor-pointer  animate-bounce transition-transform duration-300 ease-in-out"
          >
            <FaArrowUp size={20} />
          </h1>
        </div>
      )}
    </>
  );
};

export default GoToTop;
