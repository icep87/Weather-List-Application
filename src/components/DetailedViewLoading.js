import React, { useState } from 'react';

const DetailedViewLoading = () => {
    
    return (
        <div class="border border-grey-300 rounded-md p-4 max-w-sm w-full mx-auto m-5">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-md bg-gray-300 h-12 w-12"></div>
                <div class="flex-1 space-y-4 py-1">
                    <div class="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div class="space-y-2">
                        <div class="h-4 bg-gray-300 rounded"></div>
                        <div class="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DetailedViewLoading;