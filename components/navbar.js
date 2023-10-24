const header = document.querySelector('header');

const navbar = () => {
  const user = JSON.parse(localStorage.getItem('user')) || undefined;
  console.log(user);
  return (header.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          ${user 
              ? `
              <li class="nav-item">
                <a class="btn btn-success btn-sm mb-2" href="#">${user.name}</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-success btn-sm mb-2" onclick= "
                  localStorage.clear(),
                  window.location.reload()"
                  href="#">Cerrar sesión</a>
              </li>
              `
              : `
              <li class="nav-item">
                <a class="btn btn-success mx-2 btn-sm" onclick="window.location.pathname = './views/login.html'">Login</a>
                <a class="btn btn-success btn-sm" href="#">Register</a>
              </li>`
          }
          ${user?.role === 'ADMIN'
          ? ` <li class="nav-item">
                <a class="btn btn-success btn-sm mb-2" href="./views/admin.html">Panel Admin</a>
              </li>
          `
          : ``
        }
        </ul>
      </div>
    </div>
</nav>
  `);
}

export default navbar;