import { createPortal } from "react-dom"

import Button from "./Button"
import Input from "./input"

const AddTaskDialog = ({ IsOpen, handleClose }) => {
  if (!IsOpen) return null

  return createPortal(
    <div className="fixed top-0 bottom-0 left-0 flex h-screen w-screen items-center justify-center backdrop-blur">
      <div className="w-84 rounded-xl bg-white p-5 text-center shadow-lg">
        <h2 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h2>
        <p className="mt-1 mb-4 text-sm text-[#9a9c9f]">
          Insira as informações abaixo
        </p>

        <div className="flex flex-col space-y-3">
          <Input
            id="title"
            label="Titulo"
            placeholder="Insira o titulo da tarefa"
          />
          <Input id="time" label="Horário" placeholder="Horário" />
          <Input
            id="description"
            label="Descrição"
            placeholder="Descreva a tarefa"
          />
          <div className="flex gap-3">
            <Button
              size="large"
              className="w-full"
              variant="secondary"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button size="large" className="w-full">
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default AddTaskDialog
