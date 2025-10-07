import { Task } from "./Task";
import { useTask } from "./UseTask";

export function TaskList() {
    const { tasks, addTask, removeTask, resetList, toggleTask } = useTask([
        { id: 1, title: "Aprender React", isCompleted: false },
        { id: 2, title: "Practicar TypeScript", isCompleted: true },
    ]);

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>

            <ul className="space-y-2">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onToggle={toggleTask}
                        onRemove={removeTask}
                        baseStyle="cursor-pointer p-2 border rounded-md"
                        completedStyle="line-through text-gray-500"
                        hoverStyle="hover:bg-gray-100"
                    />
                ))}
            </ul>

            <div className="flex gap-2 mt-4">
                <button
                    onClick={() => addTask("Añadir nueva tarea")}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                    Añadir nueva tarea
                </button>
                <button
                    onClick={resetList}
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                >
                    Resetear todo
                </button>
            </div>
        </div>
    );
}
