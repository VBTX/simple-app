export const addToDo = item => {
	return {
		type: 'ADD_TODO',
		item
	};
};

export const deleteToDo = id => {
	return {
		type: 'DELETE_TODO',
		id
	};
};
export const completeToDo = item => {
	return {
		type: 'COMPLETE_TODO',
		item
	};
};
