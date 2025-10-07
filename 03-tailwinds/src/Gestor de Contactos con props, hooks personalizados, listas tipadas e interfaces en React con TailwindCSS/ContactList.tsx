import type { Contact } from "./useContacts";

export interface ContactListProps {
    contacts: Contact[];
    onEdit: (contact: Contact) => void;
    onDelete: (id: string) => void;
}

export function ContactList({ contacts, onEdit, onDelete }: ContactListProps) {
    return (
        <ul className="space-y-3 mt-4">
            {contacts.map((c) => (
                <li
                    key={c.id}
                    className="flex justify-between items-center p-3 bg-gray-100 rounded shadow"
                >
                    <div>
                        <p className="font-semibold">{c.name}</p>
                        <p className="text-sm text-gray-600">{c.email}</p>
                        <p className="text-sm text-gray-600">{c.phone}</p>
                    </div>
                    <div className="space-x-2">
                        <button
                            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                            onClick={() => onEdit(c)}
                        >
                            Editar
                        </button>
                        <button
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                            onClick={() => onDelete(c.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
