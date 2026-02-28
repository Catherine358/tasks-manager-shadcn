import { useNavigate } from 'react-router-dom';
import type {Task} from "../api/tasks.ts";
import {Card, CardContent} from "./ui/card.tsx";

export default function TaskItem({ task }: { task: Task }) {
    const navigate = useNavigate();

    const taskHandler = () => navigate(`/task/${task.id}`);

    return (
        <li>
            <Card asChild>
                <button

                    onClick={taskHandler}
                    aria-label={`View task ${task.contractNumber} - ${task.name}, Status: ${task.status}`}
                >
                    <CardContent>
                        <span>{task.contractNumber}</span>
                        <span>{task.status}</span>
                    </CardContent>
                </button>
            </Card>
        </li>
    );
}
