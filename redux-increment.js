const counter= (state=0,action)=>{
  switch (action.type){
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
    default: 
      return state;
  }
}

var {createStore}=Redux;
var store=createStore(counter);
console.log(store.getState());
 
const render=()=>{
    document.getElementById("1").innerHTML=store.getState();
};
store.subscribe(render);
render();
 
const inc=()=>{
  store.dispatch({type:'INCREMENT'});
}
const dec=()=>{
  store.dispatch({type:'DECREMENT'});
}