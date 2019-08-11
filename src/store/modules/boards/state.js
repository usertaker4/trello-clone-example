export default {
  boards: [
    {
      id: Date.now(),
      title: 'Example board',
      favorite: false,
      editing: false,
      list: [
        {
          id: Date.now(),
          title: 'Example list',
          tasks: [
            {
              id: Date.now(),
              title: 'Example task'
            }
          ]
        }
      ]
    }
  ]
}