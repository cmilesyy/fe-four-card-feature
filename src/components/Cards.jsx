import supervisor from "../assets/images/icon-supervisor.svg";
import calculator from "../assets/images/icon-calculator.svg";
import karma from "../assets/images/icon-karma.svg";
import teamBuilder from "../assets/images/icon-team-builder.svg";

function Cards() {
  return (
    <>
      <section className="flex items-center justify-center mx-auto">
        <div>
          <div className="flex flex-col items-center justify-center text-center text-primary-dark pt-20 ">
            <h1 className=" font-extralight text-2xl flex flex-col gap-1 tracking-wide">
              Reliable, efficient delivery{" "}
              <span className="font-bold">Powered by Technology</span>{" "}
            </h1>
            <p className="px-5 font-light opacity-60  md:w-4/5 md:pt-5">
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </div>

          <div className="flex items-center justify-center flex-col pt-5 md:grid md:grid-cols-3 md:gap-5">
            <div className="flex flex-col text-primary-dark w-80 h-auto border-t-2 border-t-primary-blue w bg-white px-5 py-5 shadow-lg rounded-lg mb-7">
              <h3 className="text-xl">Supervisor</h3>
              <p className="opacity-60">
                Monitors activity to identify project roadblocks
              </p>
              <div className="flex items-end justify-end pt-5">
                <img
                  src={supervisor}
                  alt="supervisor"
                  className="h-14 w-14 items-end"
                />
              </div>
            </div>

            <div>
              <div className="flex flex-col text-primary-dark w-80 h-auto border-t-2 border-t-primary-red w bg-white px-5 py-5 shadow-lg rounded-lg mb-7">
                <h3 className="text-xl">Team Builder</h3>
                <p className="opacity-60">
                  Scans our talent network to create the optimal team for your
                  project
                </p>
                <div className="flex items-end justify-end pt-5">
                  <img
                    src={teamBuilder}
                    alt="team builder"
                    className="h-14 w-14 items-end"
                  />
                </div>
              </div>

              <div className="flex flex-col text-primary-dark w-80 h-auto border-t-2 border-t-primary-orange w bg-white px-5 py-5 shadow-lg rounded-lg mb-7">
                <h3 className="text-xl">Karma</h3>
                <p className="opacity-60">
                  Regularly evaluates our talent to ensure quality
                </p>
                <div className="flex items-end justify-end pt-5">
                  <img
                    src={karma}
                    alt="karma"
                    className="h-14 w-14 items-end"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-primary-dark w-80 h-auto border-t-2 border-t-primary-dark-blue w bg-white px-5 py-5 shadow-lg rounded-lg mb-7">
              <h3 className="text-xl">Calculator</h3>
              <p className="opacity-60">
                Uses data from past projects to provide better delivery
                estimates
              </p>
              <div className="flex items-end justify-end pt-5">
                <img
                  src={calculator}
                  alt="calculator"
                  className="h-14 w-14 items-end"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
