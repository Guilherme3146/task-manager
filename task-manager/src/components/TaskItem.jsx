import { CheckIcon, LoaderIcon, DetailIcon, TrashIcon } from "../assets/icons"
import Button from "./Button"

const TaskItem = ({ task, handleCheckboxClick, handleDeleteClick }) => {
  const getStatusClass = () => {
    switch (task.status) {
      case "in_progress":
        return "bg-[#FFAA04] text-[#FFAA04]"
      case "done":
        return "bg-[#00adb5] text-[#00adb5]"
      case "not_started":
        return "bg-[#35383E] bg-current/10 text-[#35383E]"
      default:
        return "bg-[#35383E] bg-current/10 text-[#35383E]"
    }
  }

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg bg-current/10 px-4 py-3 text-sm transition ${getStatusClass()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClass()}`}
        >
          <input
            type="checkbox"
            checked={task.status === "done"}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => handleCheckboxClick(task.id)}
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderIcon className="animate-spin" />
          )}
        </label>

        {task.title}
      </div>

      <div className="flex cursor-pointer items-center gap-2">
        <Button variant="ghost" onClick={() => handleDeleteClick(task.id)}>
          <TrashIcon className="text-[#9a9c9f] transition" />
        </Button>
        <a href="#" className="transition hover:opacity-75">
          <DetailIcon />
        </a>
      </div>
    </div>
  )
}
export default TaskItem
