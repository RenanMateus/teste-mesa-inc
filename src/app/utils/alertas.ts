import Swal from 'sweetalert2';

export const Toasts = {
  toast: Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000
  }),

  mensagemSucesso(mensagem: string): void {
    this.toast.fire(<any>{
      icon: 'success',
      title: mensagem
    });
  },

  mensagemErro(mensagem: string): void {
    this.toast.fire(<any>{
      icon: 'error',
      title: mensagem
    });
  },

  mensagemErroConexao(): void {
    this.toast.fire(<any>{
      icon: 'error',
      title: 'Erro interno no servidor, tente mais tarde!'
    });
  },

  mensagemPersonalizada(tipo: string, mensagem: string): void {
    this.toast.fire(<any>{
      icon: tipo,
      title: mensagem
    });
  }
};
