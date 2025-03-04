import React from 'react';
import {NavLink} from '@remix-run/react';
import {Button} from './ui/button';

export function Header2() {
  return (
    <header className="px-4 py-4 bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="max-w-xxl mx-auto px-2">
        <div className="max-w-xxl mx-auto flex items-center justify-center bg-white p-4 rounded-md h-[70px] relative shadow-sm">
          <div className="flex items-center h-full absolute top-0 left-0 p-4">
            <NavLink to="/" className="text-xl font-bold text-black">
              UNCMFRT.COM
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="text-black focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <nav className="flex space-x-6 text-black">
              <NavLink to="/" className="text-sm font-medium ">
                Shop
              </NavLink>
              <NavLink to="/" className="text-sm font-medium ">
                Science
              </NavLink>
              <NavLink to="/" className="text-sm font-medium ">
                Podcasts
              </NavLink>
              <NavLink to="/" className="text-sm font-medium ">
                Trainers
              </NavLink>
              <NavLink to="/" className="text-sm font-medium ">
                Blog
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center h-full absolute top-0 right-0 p-4">
            <div className="flex items-center space-x-4">
              <Button className="flex items-center space-x-1 h-[45px] bg-[#E4E4E4] text-black font-medium hover:bg-gray-300">
                <span className="text-sm">Men</span>
                <span className="w-[33px] h-[33px] bg-white rounded-full flex items-center justify-center">
                  <svg
                    style={{width: '33px', height: '33px'}}
                    viewBox="0 0 33 33"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                  >
                    <path
                      fill="#000"
                      d="M17 17c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4Zm0-6.667A2.67 2.67 0 0 1 19.667 13 2.67 2.67 0 0 1 17 15.667 2.67 2.67 0 0 1 14.333 13 2.67 2.67 0 0 1 17 10.333Zm6 14a.667.667 0 1 1-1.333 0 4.67 4.67 0 0 0-3.073-4.38l-1.011 1.518.728 2.66c.122.444-.27.87-.8.87h-1.022c-.53 0-.922-.426-.8-.87l.728-2.66-1.011-1.518a4.67 4.67 0 0 0-3.073 4.381.667.667 0 0 1-1.333 0c0-3.308 2.692-6 6-6s6 2.691 6 6Z"
                    />
                  </svg>
                </span>
              </Button>

              <Button
                className="flex items-center h-[45px] font-medium text-white "
                asChild
              >
                <NavLink to="/">
                  <span>Take The Quiz</span>
                </NavLink>
              </Button>

              <NavLink to="/account" className="text-white ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                >
                  <path
                    fill="#0E0804"
                    d="M16.5 16.5c1.563.042 2.854.583 3.875 1.625C21.417 19.145 21.958 20.438 22 22a.974.974 0 0 1-.281.719A.974.974 0 0 1 21 23H9a.974.974 0 0 1-.719-.281A.974.974 0 0 1 8 22c.042-1.563.583-2.854 1.625-3.875 1.02-1.042 2.313-1.583 3.875-1.625h3Zm-6.969 5H20.47c-.146-1-.584-1.833-1.313-2.5-.729-.646-1.614-.98-2.656-1h-3c-1.042.02-1.927.354-2.656 1-.73.667-1.167 1.5-1.313 2.5ZM15 15c-1.125-.02-2.073-.406-2.844-1.156-.75-.771-1.135-1.719-1.156-2.844.02-1.125.406-2.073 1.156-2.844C12.927 7.406 13.875 7.021 15 7c1.125.02 2.073.406 2.844 1.156.75.771 1.135 1.719 1.156 2.844-.02 1.125-.406 2.073-1.156 2.844-.771.75-1.719 1.135-2.844 1.156Zm0-6.5c-.708.02-1.302.26-1.781.719-.459.479-.698 1.073-.719 1.781.02.708.26 1.302.719 1.781.479.459 1.073.698 1.781.719.708-.02 1.302-.26 1.781-.719.459-.479.698-1.073.719-1.781-.02-.708-.26-1.302-.719-1.781C16.302 8.76 15.708 8.52 15 8.5Z"
                  />
                </svg>
              </NavLink>

              <NavLink to="/cart" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                >
                  <path
                    fill="#0E0804"
                    d="M11.5 12v-1.5c.02-1 .365-1.823 1.031-2.469C13.177 7.365 14 7.021 15 7c1 .02 1.823.365 2.469 1.031.666.646 1.01 1.469 1.031 2.469V12h2c.417.02.77.167 1.063.438.27.291.416.645.437 1.062V20c-.02.854-.313 1.563-.875 2.125-.563.563-1.27.854-2.125.875h-8c-.854-.02-1.563-.313-2.125-.875-.563-.563-.854-1.27-.875-2.125v-6.5c.02-.417.167-.77.438-1.063A1.63 1.63 0 0 1 9.5 12h2Zm1.5 0h4v-1.5c-.02-.563-.219-1.031-.594-1.406S15.563 8.52 15 8.5c-.563.02-1.031.219-1.406.594S13.02 9.938 13 10.5V12Zm-3.5 1.5V20c.02.417.167.77.438 1.063.291.27.645.416 1.062.437h8a1.63 1.63 0 0 0 1.063-.438A1.63 1.63 0 0 0 20.5 20v-6.5h-2v1.75c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V13.5h-4v1.75c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V13.5h-2Z"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
