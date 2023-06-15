import { MdLanguage } from 'react-icons/md'
import { BiMenu } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'

const UserMenu = () => {
  return (
    <div className="hidden md:flex justify-end flex-grow flex-shrink-0 basis-[140px] ">
      <div
        className="
    flex
    flex-grow-0
    items-center
    justify-between
    gap-4
    text-sm
  "
      >
        <button
          className="
          hover:bg-gray-100
          hover:rounded-full
          p-3
          font-semibold"
        >
          Cho thuê chỗ ở qua Airbnb
        </button>
        <MdLanguage
          size={44}
          className="
        fill-gray-700
        hover:bg-gray-100
        hover:rounded-full
        p-3
        cursor-pointer
      "
        />
        <div
          className="
        flex
        items-center
        gap-2
        border-[1px]
        rounded-full
        p-2
        cursor-pointer
        hover:shadow-md
      "
        >
          <BiMenu size={20} />
          <FaUserCircle
            size={30}
            className="
          fill-gray-500
        "
          />
        </div>
      </div>
    </div>
  )
}

export default UserMenu
