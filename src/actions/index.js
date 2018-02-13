export function increaseCounter(){
  return {
    type:"INCREASE_COUNTER"
  }
}

export function decreaseCounter(){
  return {
    type:"DECREASE_COUNTER"
  }
}

export function setSpecialText(txt){
  return {
    type:"SET_SPECIAL_TEXT",
    value:txt
  }
}

export function addUser(user){
  return {                                
    type:"ADD_USER",
    value:user
  }
}
export function removeUser(){
  return {
    type:"REMOVE_USER"
  }
}

export function setTemp(temp){
  return {
    type:"SET_TEMP",
    value:temp
  }
}
export function setCity(text){
  return {
    type:"SET_CITY",
    value:text
  }
}

export function setIsLoading(isLoading){
  return {
    type:"SET_IS_LOADING",
    value:isLoading
  }
}