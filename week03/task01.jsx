import { useState } from "react";

export function TextUpdater() {
    const [text, setText] = useState("");
    return (
        <div className="p-4">
            <input
                type="text"
                className="border p-2 rounded w-full"
                placeholder="Type here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p className="mt-2 text-lg">{text}</p>
        </div>
    );
}
