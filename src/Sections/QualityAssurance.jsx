import Button from "../Components/Button";
import { qualityImg } from "../assets/images";

const QualityAssurance = () => {
  return (
    <section id="about-us" className="flex justify-between max-lg:flex-col gap-10 max-container w-full">

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We Ensure
          <span className="text-light-green"> Quality </span>
          <span className="text-light-green">Assurance</span> in Every Project
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          At our construction company, we pride ourselves on delivering projects
          that embody precision, excellence, and safety. Every structure is
          built with meticulous attention to detail, using top-grade materials
          and advanced techniques to ensure durability and reliability.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Your trust is our priority. We adhere to the highest industry
          standards and are committed to providing you with an exceptional
          building experience, from planning to completion.
        </p>
        <div className="mt-11">
          <Button label="Learn More" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={qualityImg}
          alt="qualityImg"
          width={570}
          height={522}
          className="object-contain rounded-3xl"
        />
      </div>

    </section>
  );
};

export default QualityAssurance;
