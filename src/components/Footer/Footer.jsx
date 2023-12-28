import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="mx-auto w-full max-w-screen-xl grid px-4 py-8 grid-cols-5">
          <div>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white ">
              Exclusive
            </span>
            <ul className="text-white">
              <li className="mb-4 mt-4">
                <a href="#" className=" hover:underline">
                  Subscribe
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Get 10% off your first order
                </a>
              </li>
              <li className="mb-4">
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-44 z-20 text-[15px] text-gray-900 bg-black border-white border rounded-lg font-[popins] "
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-[70px] p-2.5 text-sm font-medium h-full text-white rounded-e-lg  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                        stroke="#FAFAFA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold text-white">Support</h2>
            <ul className="text-white text-sm">
              <li className="mb-4">
                <p className="w-44">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </p>
              </li>
              <li className="mb-4">
                <p className="w-44">exclusive@gmail.com</p>
              </li>
              <li className="mb-4">
                <p className="w-44">+88015-88888-9999</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold text-white">Account</h2>
            <ul className="text-white text-sm">
              <li className="mb-4">
                <a href="#" className="w-44">
                  My Account
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="w-44">
                  Login / Register
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="w-44">
                  Cart
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="w-44">
                  Wishlist
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="w-44">
                  Shop
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold text-white">
              Quick Link
            </h2>
            <ul className="text-white text-sm">
              <li className="mb-4">
                <a href="#" className="w-44">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="w-44">
                  Terms of Use
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="w-44">
                  FAQ
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="w-44">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold text-white">
              Download App
            </h2>
            <ul className="text-white text-sm">
              <li className="mb-4">
                <p className="w-44 text-[10px]">
                  Save $3 with App New User Only
                </p>
              </li>
              <li className="mb-4">
                <div className="w-44 flex">
                  <a href="#">
                    <img
                      src="https://i.imgur.com/PdNUytb.png"
                      alt="QR-CODE"
                      className="w-16 h-16"
                    />
                  </a>
                  <div>
                    <a href="#">
                      <img
                        src="https://i.imgur.com/01XMcPK.png"
                        alt=""
                        className="pl-2 h-8 w-28 pb-1"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="https://i.imgur.com/EdDMwoS.png"
                        alt=""
                        className="pl-2 h-8 w-28 pt-1"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="w-44">
                  <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z"
                          fill="white"
                        />
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#" className="hover:text-gray-900">
                      <CiTwitter className="w-[27px] h-[27px]" />
                      <span className="sr-only">Twitter page</span>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M15 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V15C1 16.0609 1.42143 17.0783 2.17157 17.8284C2.92172 18.5786 3.93913 19 5 19H15C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15V5C19 3.93913 18.5786 2.92172 17.8284 2.17157C17.0783 1.42143 16.0609 1 15 1Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14V14Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.5 5.5C15.7652 5.5 16.0196 5.39464 16.2071 5.20711C16.3946 5.01957 16.5 4.76522 16.5 4.5C16.5 4.23478 16.3946 3.98043 16.2071 3.79289C16.0196 3.60536 15.7652 3.5 15.5 3.5C15.2348 3.5 14.9804 3.60536 14.7929 3.79289C14.6054 3.98043 14.5 4.23478 14.5 4.5C14.5 4.76522 14.6054 5.01957 14.7929 5.20711C14.9804 5.39464 15.2348 5.5 15.5 5.5Z"
                          fill="white"
                        />
                      </svg>
                      <span className="sr-only">Instagram page</span>
                    </a>

                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                          fill="white"
                        />
                      </svg>
                      <span className="sr-only">LinkedIn Page</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="opacity-10 bg-white h-[0.5px]  w-full"></div>
        <div className="px-4 py-6  flex justify-center items-center bg-black ">
          <p className="text-sm text-[#FFF] opacity-30">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
