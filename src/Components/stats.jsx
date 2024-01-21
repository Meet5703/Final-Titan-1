/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function Stats() {
  const [shown1, setShown1] = useState(false);
  const [shown2, setShown2] = useState(false);
  const [shown3, setShown3] = useState(false);
  const [shown4, setShown4] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(() => setShown1(true), {
      threshold: 1
    });
    const observer2 = new IntersectionObserver(() => setShown2(true), {
      threshold: 1
    });
    const observer3 = new IntersectionObserver(() => setShown3(true), {
      threshold: 1
    });
    const observer4 = new IntersectionObserver(() => setShown4(true), {
      threshold: 1
    });

    observer1.observe(document.getElementById("num1"));
    observer2.observe(document.getElementById("num2"));
    observer3.observe(document.getElementById("num3"));
    observer4.observe(document.getElementById("num4"));

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
      observer4.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="p-5">
        <h1 className="text-center border-b-2 border-blue-400 md:text-3xl font-bold p-4">
          Our Facts and Figures
        </h1>
        <p className="text-center p-5 mb-11">
          Welcome to the organization where the results speak louder than their
          words
        </p>
        <section className="flex flex-wrap px-16 gap-12 mb-24 md:grid md:gap-16 md:grid-cols-4 mt-10">
          {/* Block #1 */}
          <article className="text-center">
            <h2>
              <span
                id="num1"
                className={`flex tabular-nums text-slate-900 text-4xl md:text-5xl ml-[40%] md:ml-24 font-extrabold mb-2 transition-[_--num] duration-[3s] ease-out ${
                  shown1 && "10"
                }`}
              >
                <span className="supports-[counter-set]:sr-only"></span>10+
              </span>
              <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2 text-2xl">
                Years
              </span>
            </h2>
            <p className="text-sm text-slate-500">
              Many desktop publishing packages and web page editors now use
              Pinky as their default model text.
            </p>
          </article>
          {/* Block #2 */}
          <article className="text-center">
            <h2>
              <span
                id="num2"
                className={`flex tabular-nums text-slate-900 text-4xl md:text-5xl ml-[40%] md:ml-24 font-extrabold mb-2 transition-[_--num] duration-[3s] ease-out ${
                  shown2 && "50"
                }`}
              >
                <span className="supports-[counter-set]:sr-only"></span>50+
              </span>
              <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2 text-2xl">
                Projects
              </span>
            </h2>
            <p className="text-sm text-slate-500">
              Many desktop publishing packages and web page editors now use
              Pinky as their default model text.
            </p>
          </article>
          {/* Block #3 */}
          <article className="text-center">
            <h2>
              <span
                id="num3"
                className={`flex tabular-nums text-slate-900 text-4xl md:text-5xl ml-[40%] md:ml-[72px] font-extrabold mb-2 transition-[_--num] duration-[3s] ease-out ${
                  shown3 && "800"
                }`}
              >
                <span className="supports-[counter-set]:sr-only"></span>800+
              </span>
              <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2 text-2xl">
                Placements
              </span>
            </h2>
            <p className="text-sm text-slate-500">
              Many desktop publishing packages and web page editors now use
              Pinky as their default model text.
            </p>
          </article>
          {/* Block #4 */}
          <article className="text-center">
            <h2>
              <span
                id="num4"
                className={`flex tabular-nums text-slate-900 text-4xl md:text-5xl ml-[40%] md:ml-[72px] font-extrabold mb-2 transition-[_--num] duration-[3s] ease-out ${
                  shown4 && "500"
                }`}
              >
                <span className="supports-[counter-set]:sr-only"></span>500+
              </span>
              <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2 text-2xl">
                Trainee
              </span>
            </h2>
            <p className="text-sm text-slate-500">
              Many desktop publishing packages and web page editors now use
              Pinky as their default model text.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Stats;
