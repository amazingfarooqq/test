import { Tooltip } from 'flowbite-react'
import React, { useState } from 'react'

const Options = ({ leaveSpace }: { leaveSpace: any }) => {


    const [isMicMuted, setIsMicMuted] = useState(true)

    const handleMuteMicrophone = () => {
        setIsMicMuted(!isMicMuted)
    }
    return (
        <div className="flex items-center justify-center lg:mx-auto">

            {isMicMuted &&
                <Tooltip animation="duration-500" content={`Mute Microphone`}>

                    <button
                        onClick={handleMuteMicrophone}
                        type="button"
                        className="p-2.5 group rounded-full text-blue-400"
                    >
                        <svg
                            className="w-6 h-8"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 19"
                        >
                            <path d="M15 5a1 1 0 0 0-1 1v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a1 1 0 0 0-2 0v3a6.006 6.006 0 0 0 6 6h1v2H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9v-2h1a6.006 6.006 0 0 0 6-6V6a1 1 0 0 0-1-1Z" />
                            <path d="M9 0H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z" />
                        </svg>
                        <span className="sr-only">Mute microphone</span>
                    </button>
                </Tooltip>
            }
            {!isMicMuted &&
                <Tooltip animation="duration-500" content={`Unmute Microphone`}>
                    <button
                        onClick={handleMuteMicrophone}
                        type="button"
                        className="p-2.5 group rounded-full"
                    >
                        <svg
                            className="w-6 h-8"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 19"
                        >
                            <path d="M15 5a1 1 0 0 0-1 1v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a1 1 0 0 0-2 0v3a6.006 6.006 0 0 0 6 6h1v2H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9v-2h1a6.006 6.006 0 0 0 6-6V6a1 1 0 0 0-1-1Z" />
                            <path d="M9 0H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z" />
                        </svg>
                        <span className="sr-only">Mute microphone</span>
                    </button>

                </Tooltip>
            }
            <Tooltip animation="duration-500" content={`Open cam`}>
                <button
                    type="button"
                    className="p-2.5 group rounded-full"
                >
                    <svg
                        className="w-6 h-8"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 14"
                    >
                        <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                    </svg>
                    <span className="sr-only">Hide camera</span>
                </button>
            </Tooltip>
            {/* 
            <button
                type="button"
                className="p-2.5 group rounded-full"
            >
                <svg
                    className="w-6 h-8"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                    />
                </svg>
                <span className="sr-only">Video settings</span>
            </button> */}
            <Tooltip animation="duration-500" content={`Space settings`}>
                <button
                    type="button"
                    className="p-2.5 group rounded-full"
                >
                    <svg
                        className="w-6 h-8"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                        />
                    </svg>
                    <span className="sr-only">Video settings</span>
                </button>
            </Tooltip>
            {/* <button
                        type="button"
                        className="p-2.5 group rounded-full"
                    >
                        <svg
                            className="w-4 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 4 15"
                        >
                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                        <span className="sr-only">Show options</span>
                    </button> */}
            <Tooltip animation="duration-500" content={`End call`}>
                <button
                    type="button"
                    className="p-2.5 group rounded-full"
                    onClick={leaveSpace}
                >
                    <svg className="w-6 h-6 text-gray-800 text-red-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z" />
                    </svg>
                    <span className="sr-only">Show options</span>
                </button>
            </Tooltip>



            {/* <div
                        id="moreOptionsDropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                        <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-100"
                            aria-labelledby="moreOptionsDropdownButton"
                        >
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Show participants
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Adjust volume
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Show information
                                </a>
                            </li>
                        </ul>
                    </div> */}
        </div>
    )
}

export default Options