import{EventEmitter}from 'node:events';
const task = new EventEmitter();
const sayHi = (name) => {
    console.log(`Hi ${name}`);
};
const start = () => {
    console.log("System start");
}
task.once('start', start);//event and method binding
task.on('greet', sayHi);//event and method binding
task.emit('greet', 'Anuj');//annoucement 
task.emit('greet', 'An');
task.emit('greet', 'Anj');