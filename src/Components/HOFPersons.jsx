// eslint-disable-next-line no-unused-vars
import React from "react";

const PersonCard = () => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {/* Repeat the following block for each person */}
      {[...Array(10).keys()].map((index) => (
        <li
          key={index}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-red-500 text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=yQ-kKmUAAAAJ&citpid=1"
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              Najib Gafar
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus ea in, delectus aut, laudantium enim cum amet
              aperiam itaque explicabo sint labore mollitia? Consequatur
              perferendis ullam minima maxime similique molestias.
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PersonCard;
