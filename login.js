
function login(e)
{
    e.preventDefault()

    var usuario = "wil"
    var password = "1234"
    let user=document.getElementById("usuario").value
    let pass=document.getElementById("password").value
    
    if(user===usuario && pass===password)
    {
        window.location.href="/bienvenida.html"
    }
    else
    {
        alert("Datos incorrectos")
    }
}