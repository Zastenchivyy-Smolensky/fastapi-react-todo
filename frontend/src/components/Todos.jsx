import React from "react";
import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import AddTodo from "./AddTodo";
import { Box, Flex, Text } from "@chakra-ui/react";
import UpdateTodo from "./updateTodo";
import DeleteTodo from "./DeleteTodo";
const TodosContext = React.createContext({
  todos: [],
  fetchTodos: () => {},
});

function Todos() {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const res = await fetch("http://localhost:8000/todo");
    const todos = await res.json();
    setTodos(todos.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  function TodoHelper({ item, id, fetchTodos }) {
    return (
      <Box p={1} shadow="sm">
        <Flex justify="space-between">
          <Text mt={4} as="div">
            {item}
            <Flex align="end">
              <UpdateTodo item={item} id={id} fetchTodos={fetchTodos} />
              <DeleteTodo id={id} fetchTodos={fetchTodos} /> {/* new */}
            </Flex>
          </Text>
        </Flex>
      </Box>
    );
  }

  return (
    <TodosContext.Provider value={{ todos, fetchTodos }}>
      <AddTodo />
      <Stack spacing={5}>
        {todos.map((todo) => (
          <TodoHelper item={todo.item} id={todo.id} fetchTodos={fetchTodos} />
        ))}
      </Stack>
    </TodosContext.Provider>
  );
}

export default Todos;
