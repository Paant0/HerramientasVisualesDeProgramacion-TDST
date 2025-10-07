import { useState } from "react";

export interface Contact {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export function useContacts(initialContacts: Contact[] = []) {
    const [contacts, setContacts] = useState<Contact[]>(initialContacts);

    const addContact = (contact: Contact) => {
        setContacts((prev) => [...prev, contact]);
    };

    const removeContact = (id: string) => {
        setContacts((prev) => prev.filter((c) => c.id !== id));
    };

    const updateContact = (updated: Contact) => {
        setContacts((prev) =>
            prev.map((c) => (c.id === updated.id ? updated : c))
        );
    };

    return { contacts, addContact, removeContact, updateContact };
}
