import type { Task as TaskType } from "./UseTask";

interface TaskProps {
    task: TaskType;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
    // al menos 3 estilos
    baseStyle: string;
    completedStyle: string;
    hoverStyle: string;
}

export function Task({
    task,
    onToggle,
    onRemove,
    baseStyle,
    completedStyle,
    hoverStyle,
}: TaskProps) {
    return (
        <li
            onClick={() => onToggle(task.id)}
            className={`${baseStyle} ${task.isCompleted ? completedStyle : ""} ${hoverStyle}`}
        >
            {task.title}
            <button
                className="ml-4 text-red-500 hover:text-red-700"
                onClick={(e) => {
                    e.stopPropagation();
                    onRemove(task.id);
                }}
            >
                Borrar
            </button>
        </li>
    );
}
