/* eslint-disable react/no-unescaped-entities */
const ServiceCard = () => {
  return (
    <div className=" max-w-screen-xl h-[] mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="items-center flex flex-col text-center space-y-4 mb-5">
        <h1 className="text-xl md:text-3xl font-bold uppercase">
          <span className="text-[rgb(109,150,240)]">OUR GOAL</span> is to
          empower dreams and
          <span className="ml-2 text-[rgb(109,150,240)]">
            achieve excellence.
          </span>
        </h1>
        <span className="bg-blue-600 p-[1px] w-1/2"></span>
        <p className="text-sm lg:text-xl text-justify">
          Welcome to Titans Technology, a leading provider of IT upskilling and
          staffing solutions. At Titans, we specialize in empowering individuals
          with the skills and knowledge needed to thrive in the ever-evolving IT
          landscape. Our comprehensive upskilling programs are designed to equip
          professionals with the latest industry insights, ensuring they remain
          at the forefront of technological advancements.
        </p>
        <p className="text-sm lg:text-xl text-justify">
          In addition to our upskilling initiatives, Titans Technology offers
          cutting-edge staffing solutions, connecting skilled individuals with
          opportunities at top-tier companies. We take pride in fostering career
          growth and facilitating strategic talent placement. Join us on a
          transformative journey, where IT excellence meets unparalleled
          staffing solutions.
        </p>
      </div>
      <div className="h-1/2">
        <div className="text-center mt-20">
          <h2 className="text-4xl tracking-tight text-[rgb(109,150,240)] font-bold text-primary-800">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1  mt-20">
          {/* <!-- can help image --> */}
          <div className=" shadow-xl shadow-gray-200 col-span-1 md:row-span-1 bg-[#EDF6FF]">
            <img
              className="w-full md:w-3/5 pb-16 md:mx-[20%] "
              src="https://img.freepik.com/free-vector/flat-hand-drawn-people-analyzing-growth-chart-illustration_23-2148860943.jpg?w=826&t=st=1705604313~exp=1705604913~hmac=9bc0a2f2c452299e1bbee750d250ed4fe01a045aff331d110dd064bfd1f9e8e5"
              alt="can_help_banner"
            />
          </div>
          {/* <!-- end can help image --> */}
          <div className="flex flex-col md:flex-row space-y-4 mt-14 md:space-y-0 items-center justify-center">
            <div className="flex flex-col space-y-4">
              <div className="w-full px-2 ">
                <div className="h-fit p-6 border border-blue-400 rounded-br-xl">
                  <h3 className="text-sm lg:text-2xl font-bold mb-4">
                    IT Training
                  </h3>
                  <p className="text-xs lg:text-sm">
                    We provide professional IT upskilling training to enhance
                    your skills and boost your career. Our hands-on programs
                    cover the latest technologies, ensuring you stay ahead in
                    the ever-changing IT world. Whether you are an experienced
                    professional or a newcomer, our courses empower you for
                    success in today's competitive job market.
                  </p>
                </div>
              </div>

              <div className="w-full px-2 ">
                <div className="h-fit p-6 border border-blue-400 rounded-br-xl">
                  <h3 className="text-sm lg:text-2xl font-bold mb-4">
                    Staffing solutions
                  </h3>
                  <p className="text-xs lg:text-sm">
                    Experience strategic talent placement with Titans
                    Technology, your trusted partner in staffing solutions. We
                    connect skilled professionals with top-tier companies,
                    fostering career growth. Our expert team ensures precise
                    matches, creating opportunities for success in the
                    competitive job market. Elevate your career with our
                    professional and personalized staffing services.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 ">
              <div className="w-full px-2 ">
                <div className="h-fit p-6 border border-blue-400 rounded-br-xl">
                  <h3 className="text-sm lg:text-2xl font-bold mb-4">
                    Software Development
                  </h3>
                  <p className="text-xs lg:text-sm">
                    Elevate your projects with Titans Technology, a premier
                    software development service. Our expert team crafts
                    tailored solutions with cutting-edge technologies, ensuring
                    seamless and scalable applications. From concept to
                    deployment, we prioritize quality and innovation. Experience
                    excellence in software development with our professional
                    team, delivering solutions that meet and exceed your
                    expectations.
                  </p>
                </div>
              </div>

              <div className="w-full px-2 ">
                <div className="h-fit p-6 border border-blue-400 rounded-br-xl">
                  <h3 className="text-sm lg:text-2xl font-bold mb-4">
                    Data Science and Analytics
                  </h3>
                  <p className="text-xs lg:text-sm">
                    At Titans Technology, we offer top-tier Data Science and
                    Analytics services. Our expert team harnesses the power of
                    data to provide actionable insights, driving informed
                    decision-making. From predictive modeling to data
                    visualization, we deliver tailored solutions, empowering
                    your business with precision and intelligence. Elevate your
                    analytics strategy with Titans Technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
