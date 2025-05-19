fetch("https://jsonplaceholder.typicode.com/users")
 .then(response => response.json())
 .then(usuario =>{
  const container = document.querySelector("#container")
  const users = usuario.map(item =>{
    return `
    <div class="card">
      <img src="https://placehold.co/600x400" alt=${item.name}/>
      <h2>${item.name}</h2>
      <p><b>Username:</b>${item.name}</p>
      <p><b>Email:</b>${item.email}</p>
      <p><b>Telefone:</b>${item.phone}</p>
      <p><b>website:</b>${item.website}</p>
      <p><b>Empresa:</b>${item.company.name}</p>
      <p><b>Endereço:</b>${item.address.street},${item.address.suite},${item.address.city}</p>
    </div>
   `
      
  
  })
  container.innerHTML = users.join("")
 })