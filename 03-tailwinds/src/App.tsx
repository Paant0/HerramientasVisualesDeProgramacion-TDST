import { useState } from 'react'
import './App.css'
import { Counter } from './Contador con Hook Personalizado/Counter'
import { useCounter } from './Contador con Hook Personalizado/useCounter'
import { BotonHover } from './components/BotonHover'
import { List } from './components/List'
import { StyledButton } from './Contador con Hook Personalizado/StyledButton'
import { Task } from './Lista de Tareas con Interfaz/Task'
import { TaskList } from './Lista de Tareas con Interfaz/TaskList'
import { ContactForm } from './Gestor de Contactos con props, hooks personalizados, listas tipadas e interfaces en React con TailwindCSS/ContactForm'
import { ContactList } from './Gestor de Contactos con props, hooks personalizados, listas tipadas e interfaces en React con TailwindCSS/ContactList'
// Importa solo los tipos con "import type"
import type { Contact } from './/Gestor de Contactos con props, hooks personalizados, listas tipadas e interfaces en React con TailwindCSS/useContacts'

// Importa el hook normalmente (sin type)
import { useContacts } from './/Gestor de Contactos con props, hooks personalizados, listas tipadas e interfaces en React con TailwindCSS/useContacts'
import { Parent } from './Cajas-Hervin_Prop Drilling con Props Tipadas/Parent'



function App() {
  const [count, setCount] = useState(0)
  const { contacts, addContact, removeContact, updateContact } = useContacts();
  const [editing, setEditing] = useState<Contact | null>(null);

  const handleSubmit = (contact: Contact) => {
    editing ? updateContact(contact) : addContact(contact);
    setEditing(null);
  };

  return (
    <>
      {/*<div className="flex flex-col justify-center items-center h-svh w-svw">
        <h1 className="text-4xl mb-5 text-black">
          {/* <Counter />
          <BotonHover/>
          <List /> 
          <TaskList />
          <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold mb-4">Gestor de Contactos</h1>
            <ContactForm initialData={editing || undefined} onSubmit={handleSubmit} />
            <ContactList contacts={contacts} onEdit={setEditing} onDelete={removeContact} />
          </div>

        </h1>
      </div>*/}

      <Parent />
    </>
  )
}

export default App
