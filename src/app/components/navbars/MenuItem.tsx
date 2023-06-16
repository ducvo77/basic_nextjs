'use client'

const MenuItem = () => {
  return (
    <div className="md:w-auto w-[12.5rem]">
      <ul
        className="
        flex flex-col
      "
      >
        <li
          className="
        hover:bg-gray-100
        px-4 py-3
        font-semibold
      "
        >
          Đăng ký
        </li>
        <li
          className="
        hover:bg-gray-100
        px-4 py-3
      "
        >
          Đăng nhập
        </li>
      </ul>
      <span
        className="
        w-full h-[1px]
      bg-gray-300
        flex
      "
      ></span>
      <ul
        className="
        flex flex-col
      "
      >
        <li
          className="
        hover:bg-gray-100
        px-4 py-3
      "
        >
          Cho thuê chỗ ở qua Airbnb
        </li>
        <li
          className="
        hover:bg-gray-100
        px-4 py-3
      "
        >
          Trợ giúp
        </li>
      </ul>
    </div>
  )
}

export default MenuItem
