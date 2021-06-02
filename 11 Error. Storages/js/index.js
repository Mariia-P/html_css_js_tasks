function visitLink(path) {
  //your code goes here
  if (localStorage.getItem(path) > 0) {
    let value = +localStorage.getItem(path);
    value++;
    localStorage.setItem(path, value);
    return;
  } else {
    localStorage.setItem(path, 1);
  }
}

function viewResults() {
  //your code goes here
  if (document.querySelector('.new_ul')) {
    const ul = document.querySelector('.new_ul');
    ul.remove();
  }
  const button = document.querySelector('.btn');
  const list = document.createElement('ul');
  list.classList.add('new_ul');
  const liP1 = document.createElement('li');
  const liP2 = document.createElement('li');
  const liP3 = document.createElement('li');
  liP1.innerHTML = localStorage.getItem('Page1') || 'Page1 no entries';
  liP2.innerHTML = localStorage.getItem('Page2') || 'Page2 no entries';
  liP3.innerHTML = localStorage.getItem('Page3') || 'Page3 no entries';
  const elements = [liP1, liP2, liP3];
  button.after(list);
  list.append(...elements);
  console.log('[button]', button);
  console.log('[list]', list);
  localStorage.clear();
}
