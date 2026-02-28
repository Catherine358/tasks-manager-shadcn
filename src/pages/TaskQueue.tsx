
import {useQuery} from "@tanstack/react-query";
import {getTasks} from "../api/tasks.ts";
import TaskList from "../components/TaskList.tsx";

export default function TaskQueue() {
    const { data: tasks = [] } = useQuery({
        queryKey: "tasks",
        queryFn: getTasks
    });

    return (
        <main >
            <h1>Task Queue</h1>
            <section>
                <TaskList tasks={tasks} />
            </section>
            </main>
    );
}