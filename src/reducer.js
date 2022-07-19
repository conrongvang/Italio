export default function reducer(state, action, args) {
  switch (action) {
    case "ADD":
      const [newCar] = args;
      return {
        ...state,
        cars: [...state.cars, newCar]
      };
    default:
      return state;
  }
}
