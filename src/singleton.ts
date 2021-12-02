class Singleton {
	_var = 'This is a singleton'
} 

let singleton : Singleton

function init() {
	singleton = new Singleton()
}

export {init, singleton}

