import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { pr1 } from "../assets/images";

const Hero = () => {

  return (
    <section id="Home"
      className="w-full flex justify-center min-h-screen gap-10 max-container ">
      
      <div className="flex flex-1 flex-col z-10 justify-center items-start xl:w-[50%] max-xl:padding-x ">
        <p className="text-xl font-montserrat text-light-green z-10 max-xl:pt-6">
          Building the Future
        </p>

        <h1 className="mt-6 font-palanquin text-8xl max-md:text-[64px] font-bold">
          <span className="xl:whitespace-nowrap z-10 ">
            Innovative Solutions
          </span>
              <br />
          <span className="text-light-green inline-block mt-2">Your Dream</span> Home
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-10 sm:max-w-sm">
          Explore our innovative construction solutions designed for quality,
          sustainability, and lasting beauty.
        </p>

        <Button label="Contact US" url={arrowRight}/>

        <div className="flex gap-16 justify-start items-start mt-[2rem] flex-wrap w-full ">
          {statistics.map((stat)=>(
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="font-montserrat leading-5 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-lg:hidden flex justify-center items-center xl:min-h-screen max-xl:py-40  bg-center">
      <img
          src={pr1}
          alt="Project"
          width={580}
          height={560}
          className="object-contain "
        />
      </div>

    </section>
  );
};

export default Hero;
