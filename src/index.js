import {getUsers} from './api/userApi';

console.log('hello');// eslint-disable-line no-console

getUsers().then(result => {
  console.log('hello');// eslint-disable-line no-console
  let usersBody = '';
  console.log(result);// eslint-disable-line no-console
  result.forEach(user => {
    usersBody += `<tr>
      <td></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td></td>
      <td></td>
    </tr>`
  });
  global.document.getElementById('users').innerHTML = usersBody;
});

