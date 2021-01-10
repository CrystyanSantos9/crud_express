
  if(location.href.indexOf('delete=true') !=-1){

    swal({
            title:'Sucesso!',
            text: 'Cliente removido com sucesso.',
            icon: 'success',
            button: 'OK'
          });
 }
    
  else if(location.href.indexOf('edit=true') != -1){

          swal({
            title:'Sucesso!',
            text: 'Cliente atualizado com sucesso.',
            icon: 'success',
            button: 'OK'
          });
      }
      else if(location.href.indexOf('new=true') != -1){
         swal({
            title:'Sucesso!',
            text: 'Cliente inserido com sucesso.',
            icon: 'success',
            button: 'OK'
          });
      }