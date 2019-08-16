const deleteSession = function() {
    sessionStorage.clear();

    location.href = "index.html";

}


function uiInterface() {
    let users_session = JSON.parse(sessionStorage.getItem('users_session'));
    const ui = document.getElementById('ui-users');

   ui.innerHTML = '';

   for(current_user of users_session) {
       ui.innerHTML += `
            <div>
                <h3>Bienvenido: ${current_user.email}</h3>
            </div>
       `;
   }
}

console.log(uiInterface());

