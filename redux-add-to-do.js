const todos=(state=[],action)=>{
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				{
					id:action.id,
					text:action.text,
					completed:false
				}
			];
		case 'TOGGLE_TODO':
			return state.map(todo=>{
				//console.log("Todo\n"+JSON.stringify(todo)+"\n ..................");
				if(todo.id !== action.id ){
					return todo;
				}else{
					return Object.assign({},todo,{
						completed:!todo.completed
					})
				}
			});

		default :
			state;
	}
}
const testAddTodo=()=>{
	var stateBefore=[];
	var stateAfter=[];
	var action={
		type:'ADD_TODO',
		id:0,
		text:'Learn Redux'
	};
	stateAfter=todos(stateBefore,action);
	console.log("Add Todo\n"+JSON.stringify(stateBefore));
	console.log(JSON.stringify(stateAfter));
};
const testToggleTodo=()=>{
	var stateBefore=[
		{
			id:0,
			text:'Learn Redux',
			completed:false
		}
	];
	var action={
		type:'TOGGLE_TODO',
		id:1
	};
	stateAfter=todos(stateBefore,action);
	console.log("Toggle Todo\n"+JSON.stringify(stateBefore));
	console.log(JSON.stringify(stateAfter));
};
// testAddTodo();
// testToggleTodo();

const visibilityFilter=(state='SHOW_ALL',action)=>{
	switch(action.type){
		case 'SET_VISIBILITY_FILTER':
			// console.log("filter "+action.filter);
			return action.filter;
		default:
			return state;
	}
};

const todoApp=(state={},action)=>{
	return {
		todos:todos(state.todos,action),
		visibilityFilter:visibilityFilter(state.visibilityFilter,action)
	};

};

// const {combineReducers}=Redux;
// 	const todoApp=combineReducers({
// 		todos:todos,
// 		visibilityFilter:visibilityFilter
// });


const {createStore}=Redux;
// const store=createStore(todos);
 const store=createStore(todoApp);

store.dispatch({
	type:'ADD_TODO',
	id:0,
	text:'Learn Redux'
});

console.log("\nAdd todo ....Current State .........."+JSON.stringify(store.getState()));

store.dispatch({
	type:'ADD_TODO',
	id:1,
	text:'Go Shopping'
});

console.log("\nAdd todo ....Current State .........."+JSON.stringify(store.getState()));

store.dispatch({
	type:'TOGGLE_TODO',
	id:1
});
console.log("\nToggel todo ....Current State .........."+JSON.stringify(store.getState()));

store.dispatch({
	type:'SET_VISIBILITY_FILTER',
	filter:'SHOW_COMPLETED'
});
let nextTodoId=0;
const render=()=>{
	var ul=document.getElementById("2");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(JSON.stringify(store.getState().todos)));
	li.setAttribute("id","list");
	li.setAttribute("onclick","toggle()");
	ul.appendChild(li);	
};

store.subscribe(render);
render();

console.log("\nDispatched Visibility Filter ....Current State .........."+JSON.stringify(store.getState()));

function add(){
	let text="";
	text=document.getElementById("inp").value;
	store.dispatch({
		type:'ADD_TODO',
		text:text,
		id:nextTodoId++
	});

}
function toggle(){
	store.dispatch({
		type:'TOGGLE_TODO',
		id:1
	});
}