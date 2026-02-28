

import type {Task} from "../api/tasks.ts";
import TaskItem from "./TaskItem.tsx";

type TaskListProps = {
 tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {

    return (
        <ul >
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
}
