export default {
  boards: [
    {
      id: Date.now(),
      title: 'Example board',
      favorite: false,
      background: 'rgb(137, 96, 158)',
      lists: [
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
  ],
  boardCreation: false
}