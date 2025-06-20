function validarEdad() {
  const nombre = document.getElementById("name").value.trim();
  const edadIngresada = document.getElementById("age").value.trim();
  const edad = Number(edadIngresada);
  const tabla = document.querySelector("#tabla tbody");

  if (nombre === "") {
    alert("Ingresa tu nombre.");
    return;
  }

  if (isNaN(edad) || edad <= 0) {
    console.error("Error: Ingresa una edad válida en números.");
    alert("Error: Ingresa una edad valida.");
    return;
  }

  if (edad > 120) {
    alert("Edad no permitida.");
    return;
  }

  if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
  } else {
    const mensaje = `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    alert(mensaje);

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${nombre}</td>
      <td>${edad}</td>
      <td>${mensaje}</td>
    `;
    tabla.appendChild(fila);
  }

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}
