export default function TaskAction({ onAddTaskModalOpen, onDeleteAllTasks }) {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          onClick={onAddTaskModalOpen}
          className="rounded-md cursor-pointer bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        >
          Add Task
        </button>
        <button
          className="rounded-md cursor-pointer bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={onDeleteAllTasks}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}
