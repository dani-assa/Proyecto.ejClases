export const alertCustom = (title, text, icon) => {
  Swal.fire({
    title,
    text,
    icon,
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ok!'
  }).then((result) => {
    if (result.isConfirmed) {
      if (typeof action === 'function') return action();
    }
});
}; 
