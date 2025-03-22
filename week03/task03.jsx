import { useState } from "react";

export function UserCard({ name, email }) {
    return (
        <div className="border rounded-lg shadow-lg p-4 m-4 max-w-sm">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">{email}</p>
        </div>
    );
}
