'use client'
import { BiSearch } from 'react-icons/bi'
const Search = () => {
  return (
    <div className="flex flex-grow-0 flex-shrink-1 basis-auto">
      <div
        className="
        border-[1px]
        w-full
        md:w-auto
        rounded-full
        shadow-sm
        hover:shadow-md
        cursor-pointer
        min-w-[348px] 
    "
      >
        <div
          className="
            flex
            flex-grow
            items-center
            justify-between
            text-sm
      "
        >
          <div
            className="
            font-semibold
            px-4
            py-2
        "
          >
            Địa điểm bất kỳ
          </div>
          <span
            className="
            w-[1px]
            h-6
            bg-slate-300
        "
          ></span>
          <div
            className="
            font-semibold
            px-4
            py-2
        "
          >
            Tuần bất kỳ
          </div>
          <span
            className="
            w-[1px]
            h-6
            bg-slate-300
        "
          ></span>
          <div
            className="
            pl-6
            pr-2
            py-1
            text-gray-600
            flex
            flex-row
            items-center
            gap-2
        "
          >
            <span>Thêm khách</span>
            <button
              className="
                p-2
                bg-rose-500
                rounded-full
                text-white
          "
            >
              <BiSearch size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
