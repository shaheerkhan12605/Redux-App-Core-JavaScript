

const addCounter=(list)=> {
	return [...list,0];
}

const removeCounter=(list,index)=>{
	 
	return [...list.slice(0,index),
			...list.slice(index+1)];
}
const incrementCounter=(list,index)=>{
return [...list.slice(0,index),
		list[index]+1,
		...list.slice(index+1)];
}
const decrementCounter=(list,index)=>{
	return [...list.slice(0,index),
		list[index]-1,
		...list.slice(index+1)];
}

const testRemoveCounter=()=>{
	var listBefore=[0,10,20];
 	var listAfter=[];

	listAfter=removeCounter(listBefore,1); 
	 console.log("Before : "+listBefore);
	 console.log("After : "+listAfter);
}

const testAddCounter=()=>{
	 var listBefore=[];
	 var listAfter=[];
	 listAfter=addCounter(listBefore);
	 console.log("Before : "+listBefore);
	 console.log("After : "+listAfter);
 }
const testIncrementCounter=()=>{
	var listBefore=[10,20,30,40];
	 var listAfter=[];
	 listAfter=incrementCounter(listBefore,2);
	 console.log("Before : "+listBefore);
	 console.log("After : "+listAfter);
	}

const testDecrementCounter=()=>{
	var listBefore=[10,20,30,40];
	 var listAfter=[];
	 listAfter=decrementCounter(listBefore,2);
	 console.log("Before  : "+listBefore);
	 console.log("After : "+listAfter);
}

testAddCounter();
testRemoveCounter();
testIncrementCounter();
testDecrementCounter();
console.log("All Test Passed");
