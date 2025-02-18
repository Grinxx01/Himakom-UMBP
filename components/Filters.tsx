import { categories, years } from "@/constants/images";

interface FiltersProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  year: string;
  setYear: (value: string) => void;
}

export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
  year,
  setYear,
}: FiltersProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
     
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 rounded-md  text-white"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="p-2 rounded-md text-white"
      >
        {years.map((yr) => (
          <option key={yr} value={yr}>
            {yr}
          </option>
        ))}
      </select>

      <div className="flex items-center bg-white pr-1 pl-4 w-full py-1 text-black rounded-full">
        <input
          type="text"
          placeholder="Search picture"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="`text-sm ml-2 bg-white  outline-none w-full"
        />
        <button className="p-2 bg-black w-fit rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#fff"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
