import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskLists from "./TaskLists";
import AddTaskModal from "./AddTaskModal";

const defaultTask = {
  id: crypto.randomUUID(),
  title: "Integration API",
  description:
    "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
  tags: ["Web", "Javascript", "Api"],
  priority: "High",
  isFavorite: false,
};

export default function TaskBoard() {
  const [tasks, setTasks] = useState([defaultTask]);
  const [isShowAddEditTaskModal, setIsShowAddEditTaskModal] = useState(false);

  return (
    <section className="mb-20">
      {isShowAddEditTaskModal && <AddTaskModal onCancel={() => setIsShowAddEditTaskModal(false)} />}

      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddTaskModalOpen={() => setIsShowAddEditTaskModal(true)} />
          <div className="overflow-auto">
            <TaskLists tasks={tasks} />
          </div>
        </div>
      </div>
    </section>
  );
}
