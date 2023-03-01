const button = document.getElementById('btn-add-transaction')
const buttonCancelTransaction = document.getElementById('cancel-transaction')
const modal = document.querySelector('dialog')

button.onclick = () => modal.showModal()

buttonCancelTransaction.addEventListener('click', () => modal.close())