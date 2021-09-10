import React, { useState } from 'react'
import { CheckCircleIcon, ChevronRightIcon, MailIcon } from '@heroicons/react/solid'

const ListItemLoading = (props) => {

    return (
        <li key={props.location.id}>
            <a className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0">
                            <svg class="animate-spin -ml-1 mt-1 mr-1 h-10 w-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                            <div>
                                <p className="text-base font-normal text-gray-400 truncate">{props.location.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    )

}

export default ListItemLoading;