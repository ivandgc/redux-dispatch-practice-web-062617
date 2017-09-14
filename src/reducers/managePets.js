export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {...state, pets: state.pets.concat(action.pet)}
      break;
    case 'REMOVE_PET':
      return {...state, pets: state.pets.filter(pet => pet.id !== action.id)}
      break;
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let petsNamesHTML = state.pets.map(pet => `<li>${pet.name}</li>`).join('')
  document.getElementById('container').innerHTML = `<ul>${petsNamesHTML}</ul>`
}
