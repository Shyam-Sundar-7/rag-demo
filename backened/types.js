const zod=require("zod");

const CreateTodo=zod.object({
    Title:zod.string(),
    Description:zod.string(),
})

const UpdateTodo=zod.object({
    Id:zod.string(),
})

module.exports={
    createTodo:CreateTodo,
    updateTodo:UpdateTodo
}