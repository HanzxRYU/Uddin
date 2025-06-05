// File: App.jsx
import React from "react";

function SAS() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 m-4 gap-4 w-96 min-h-screen mx-auto text-center dark:text-white dark:bg-gray-800 bg-gray-100 border-gray-200 rounded-lg shadow-lg max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {/* Section 1 */}
      <a href="#">
        <img class="rounded-t-lg" src="SUKI.jpg" alt="TS PMO" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            MAS IRONI BERCERITA
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          similique expedita ratione, sapiente voluptas est ipsa corporis quos!
          Delectus nostrum ex in at sapiente repudiandae, est architecto iusto?
          
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default SAS;
