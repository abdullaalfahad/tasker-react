import { FaRegStar } from "react-icons/fa";

export default function TaskLists({ tasks, onFavorite, onEdit, onDeleteTask }) {
  return (
    <table className="table-fixed overflow-auto xl:w-full">
      <thead>
        <tr>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
        </tr>
      </thead>
      <tbody>
        {tasks?.map((task) => {
          return (
            <tr
              key={task.id}
              className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
            >
              <td>
                <FaRegStar
                  color={task.isFavorite ? "yellow" : "gray"}
                  className="cursor-pointer"
                  onClick={() => onFavorite(task.id)}
                />
              </td>
              <td>{task.title}</td>
              <td>
                <div>{task.description}</div>
              </td>
              <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  {task.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="text-center">{task.priority}</td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <button
                    className="text-red-500 cursor-pointer"
                    onClick={() => onDeleteTask(task.id)}
                  >
                    Delete
                  </button>
                  <button className="text-blue-500 cursor-pointer" onClick={() => onEdit(task)}>
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
