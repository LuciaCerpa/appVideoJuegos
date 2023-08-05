import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

export const principalGuard: CanActivateFn = (route, state) => {
  
  if (localStorage.getItem('isLogged')) {
    return true;    
  } else {
    Swal.fire({      
        title: 'Error!',
        text: 'Por favor ingresa tus datos de acceso!',
        icon: 'error',
        confirmButtonText: 'Ok'
    })
    const router = inject(Router);
    router.navigateByUrl('/');
    return false;
  }
};
