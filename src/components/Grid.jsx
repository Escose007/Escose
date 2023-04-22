const Grid = () => {
  return (
    <div className="group outline-none" tabIndex={index} key={index}>
      <div className="group flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
        <div className="transition ease duration-500 capitalize">
          {techType.title}
        </div>
        <div className="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
          <svg
            data-accordion-icon
            className="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500">
        {techType.tech.map((tech) => (
          <div>{tech.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
