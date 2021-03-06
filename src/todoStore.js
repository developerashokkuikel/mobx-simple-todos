import {observable, action, computed} from 'mobx'

class TodoStore {
	@observable todos = [
		{
			task: 'Roast',
			completed: true
		}
	]

	@computed get getCompletedTask() {
		return (
			this.todos.filter(
				todo => todo.completed === true
			).length
		)
	}

	@computed get report() {
		return (
			`${this.getCompletedTask}/${this.todos.length}`
		)
	}

	@action setComplete(task) {
		task.completed = !task.completed
	}

	@action addTodo(task) {
		if(task) {
			this.todos.push(
				{
					task: task,
					completed: false
				}
			)
		} else {
			console.warn('Please enter task')
		}
	}
}

const Todos = new TodoStore()

export default Todos
