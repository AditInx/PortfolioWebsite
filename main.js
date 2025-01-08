async function loadComponent(selector, file) {
    const response = await fetch(`components/${file}`);
    const html = await response.text();
    document.querySelector(selector).innerHTML = html;
  }


loadComponent("#navbar","navbar.html");
loadComponent("#home","home.html");
loadComponent("#about","about.html");
loadComponent("#skills","skills.html");
loadComponent("#projects","projects.html");
loadComponent("#footer","footer.html");