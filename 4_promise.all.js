
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const getTodosByIds = async (ids) => {
    try{
        const requests = await ids.map((id) => 
        fetch(`${TODOS_URL}/${id}`))
        console.log('requests', requests)
        const responses = await Promise.all(requests)

        const allTasks = await Promise.all(responses.map((data) => data.json()))
        
        console.log('allTasks', allTasks)

    } catch(error) {
        console.log('error:', error)
    } finally {
        console.log('Код завершен!')
    }
}
getTodosByIds([43, 21, 55, 100, 10]);

/*
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const getTodosByIds = (ids) => {
  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
  Promise.all(requests)
    .then((responses) => {
      const dataResults = responses.map((data) => data.json());
      return Promise.all(dataResults)
    })
    .then((allTasks) => {
      console.log(allTasks);
    })
    .catch((error) => {
      console.log(error);
    })
}
getTodosByIds([43, 21, 55, 100, 10]);
*/