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
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleSaveTask = (newTask) => {
    if (taskToUpdate) {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    } else {
      setTasks([...tasks, newTask]);
    }
    setIsShowAddEditTaskModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setIsShowAddEditTaskModal(true);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleDeleteAllTasks = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleCancelModal = () => {
    setTaskToUpdate(null);
    setIsShowAddEditTaskModal(false);
  };

  return (
    <section className="mb-20">
      {isShowAddEditTaskModal && (
        <AddTaskModal
          onSaveTask={handleSaveTask}
          onCancel={handleCancelModal}
          taskToUpdate={taskToUpdate}
        />
      )}

      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddTaskModalOpen={() => setIsShowAddEditTaskModal(true)}
            onDeleteAllTasks={handleDeleteAllTasks}
          />
          <div className="overflow-auto">
            <TaskLists tasks={tasks} onEdit={handleEditTask} onDeleteTask={handleDeleteTask} />
          </div>
        </div>
      </div>
    </section>
  );
}
