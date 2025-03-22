import { useState } from "react";

export function SimpleForm() {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted value:", inputValue);
    };
    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input
                type="text"
                className="border p-2 rounded w-full"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                Submit
            </button>
        </form>
    );
}
