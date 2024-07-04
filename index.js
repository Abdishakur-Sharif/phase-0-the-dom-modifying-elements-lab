// Write your code here!
const remove = document.querySelector('main#main')
remove.remove();

const newHeader = document.createElement("h1")
newHeader.id = 'victory';
newHeader.textContent = 'Abdishakur is the champion'
document.body.append(newHeader);



