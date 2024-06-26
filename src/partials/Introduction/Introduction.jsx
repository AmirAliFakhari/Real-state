import IntroCart from "./IntroCart";
import introductionData from "../../services/data/introductionData";

function Introduction() {
  return (
    <div className="mt-12 flex flex-col gap-7 ">
      <p className="ms-5 text-center font-bold text-slate-700 underline decoration-red-600 underline-offset-8 sm:text-xl">
        سقفینو چطور به خانه‌دار شدن شما کمک می‌کند
      </p>
      <div className="flex flex-col flex-wrap items-center justify-center  gap-5 sm:flex-row sm:justify-evenly">
        {introductionData.map((res) => (
          <IntroCart
            to={res.to}
            buttonText={res.buttonText}
            img={res.img}
            text={res.text}
            title={res.title}
            key={res.img}
            link={res.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Introduction;
