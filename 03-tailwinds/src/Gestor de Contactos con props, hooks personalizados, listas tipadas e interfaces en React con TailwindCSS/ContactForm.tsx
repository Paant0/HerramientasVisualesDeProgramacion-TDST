import { useState, useEffect } from "react";
import type { Contact } from "./useContacts";

export interface ContactFormProps {
    initialData?: Contact;
    onSubmit: (contact: Contact) => void;
}

export function ContactForm({ initialData, onSubmit }: ContactFormProps) {
    const [name, setName] = useState(initialData?.name || "");
    const [email, setEmail] = useState(initialData?.email || "");
    const [phone, setPhone] = useState(initialData?.phone || "");

    useEffect(() => {
        if (initialData) {
            setName(initialData.name);
            setEmail(initialData.email);
            setPhone(initialData.phone);
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const contact: Contact = {
            id: initialData?.id || crypto.randomUUID(),
            name,
            email,
            phone,
        };
        onSubmit(contact);
        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-3 p-4 bg-white shadow rounded-md"
        >
            <input
                className="w-full border p-2 rounded"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                className="w-full border p-2 rounded"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
            />
            <input
                className="w-full border p-2 rounded"
                placeholder="Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                {initialData ? "Actualizar" : "Agregar"}
            </button>
        </form>
    );
}
