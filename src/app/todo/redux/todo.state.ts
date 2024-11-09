export interface TodoSchema{
    id: number;
    title: string;
    description: string;
}

export interface TodoList {
  list: TodoSchema[];
}

export const initialState : TodoList = {
  list: [
    // {
    //   id: 1,
    //   title: 'Note 1',
    //   description: 'Note Description',
    // },
  ],
};
