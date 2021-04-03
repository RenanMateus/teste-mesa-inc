export class ResponstaUsuario {
  data: Usuario;
  support = {
    url: '',
    text: ''
  };
}

export class ResponstaListaUsuarios {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Usuario[];
}

export class Usuario {
  id = 0;
  email = '';
  first_name = '';
  last_name = '';
  avatar: any = '';
}

export class UsuarioLogin {
  email = '';
  password = '';
}
