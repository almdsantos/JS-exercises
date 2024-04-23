var btnEntrar = document.querySelector('#btnEntrar');
btnEntrar.addEventListener("click", async function (event){
    event.preventDefault();
    var login = document.querySelector("#loginTxt").value;
    var senha = document.querySelector("#senhaTxt").value;
    alert("oi")
    const config = {
        method: "post",
        header:{
            'Accept': 'application/json',
            'content-Type': 'application/json',
        },
        body: JSON.stringify({
            usuario: login,
            password: senha
        })
    };
    const response = await fetch('../Controller/controllerLogin.php', config);
    const require = await response.json();
    
});


