
const user = [
    {
        usuario: "wilyos",
        password: "1597"
    }
]

localStorage.setItem('user', JSON.stringify(user));
user.forEach(user => {
    console.log(`usuario:${user.usuario} contraseña: ${user.password}`);
    
});


function singin()
{   
    e.preventDefault()
    let usuarios = JSON.parse(localStorage.getItem('user'));

    let usuario=document.getElementById("usuario").value;
    let pass=document.getElementById("password").value;
    if (usuario!= "" && pass!="")
    {

        const actualizarUsuarios = usuarios.find(i)
        
        
        user.push(
            {
                usuario: usuario,
                password: pass
            }
        );
        user.forEach(user => {
            console.log(`usuario:${user.usuario} contraseña: ${user.password}`);
            
        });
        alert("usuario ingresado correctamente")
    }
    else
    {
        alert("Todos los campos deben llenarse")
    }
    

      
}





function login(e)
{
    e.preventDefault()

    var usuario = "wil"
    var password = "1234"
   
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("password").value;
    
    if(user===usuario && pass===password)
    {
        window.location.href="/bienvenida.html";
    }
    else
    {
        alert("Datos incorrectos");
    }
}

