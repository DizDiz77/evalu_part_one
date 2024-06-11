// +++++++++++++++++++++ TOASTS ++++++++++++++

function mostrarToast() {
  
  let toast = document.getElementById("mitoast");
  
  toast.className = "mostrar";
  
  setTimeout(function () {
    toast.className = toast.className.replace("mostrar", "");
  }, 1000); // El toast se ocultará después de 5 segundos
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')


if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}




// +++++++++++++++++++++ POPOVER ++++++++++++++


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))







// +++++++++++++++++++++ ALERTA ++++++++++++++

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}




// +++++++++++++++++++++ OFFCANVA, se encuentra en el index++++++++++++++


