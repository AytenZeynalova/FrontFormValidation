

(function () {
    'use strict'
  
    let isValid=true;
    var forms = document.querySelectorAll('.needs-validation')
  
    
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')

          if(isValid){
            toastr["success"]("Your form submited successfully!")
        }
        }, false)
      })
  })()

  
