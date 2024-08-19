async function obtenerUsuarios() {
  try {
      const respuesta = await fetch('http://localhost:3001/users')
      const data = await respuesta.json();
      return data
  } catch (error) {
      console.log(error);
  }
}

export{obtenerUsuarios}