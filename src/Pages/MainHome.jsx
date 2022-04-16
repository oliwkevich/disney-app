import React from "react";

import bg from "../assets/pictures/hero-background.jpg";
import bg_pic_1 from "../assets/pictures/cta-logo-one.svg";
import bg_pic_2 from "../assets/pictures/cta-logo-two.png";
import { useNavigate } from "react-router-dom";

export const MainHome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!window.localStorage.getItem("TokenAPI")) {
      console.log("work");
      navigate("/login");
    } else {
      console.log("work2");
      navigate("/home");
    }
  };
  return (
    <section>
      <div className="relative min-h-[calc(100vh-72px)]">
        <img src={bg} layout="fill" objectFit="cover" />
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">
          <img src={bg_pic_1} width="600" height="150" objectFit="contain" />
          <button
            onClick={handleClick}
            className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 space-y-10 px-6 w-full rounded hover:bg-[#0485ee]"
          >
            СПРОБУВАТИ ЗАРАЗ
          </button>
          <p className="text-xs text-center ">
            Отримайте преміум-доступ до нашого контенту за додаткову плату з
            підпискою Disney+. Усі самі свіжіші фільми та серіали, тільки у нас.
            Ласкаво просимо. Ціна: 2499 форінтів.
          </p>
          <img src={bg_pic_2} width="600" height="70" objectFit="contain" />
        </div>
      </div>
    </section>
  );
};
