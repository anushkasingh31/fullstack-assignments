import { useState } from "react";

export function CustomButton() {
    return (
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => console.log("Button clicked!")}
        >
            Click Me
        </button>
    );
}
