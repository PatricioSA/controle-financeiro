const buttonNewTransaction = document.getElementById('btn-new-transaction')
const buttonAddTransaction = document.getElementById('add-transaction')
const buttonCancelTransaction = document.getElementById('cancel-transaction')
const modal = document.querySelector('dialog')

buttonNewTransaction.onclick = () => modal.showModal()

buttonCancelTransaction.addEventListener('click', () => modal.close())

buttonAddTransaction.addEventListener('click', addTransaction)

let transactions = []

function addTransaction() {
    const transactionName = document.getElementById('input-trasaction-name').value
    const transactionValue = document.getElementById('input-trasaction-value').value
    
    if(transactionName === '' || transactionValue === '') return
    
    createNewTransaction(transactionName, transactionValue)

    atualizarValores()

    modal.close()
}

function createNewTransaction(transactionName, transactionValue) {
    const listTransactions = document.querySelector('section[class="transactions"]')
    
    const inputTipoTransacao = document.querySelector('input[name="tipo-transacao"]:checked')
    console.log(inputTipoTransacao)
    
    const div = document.createElement('div')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    
    p1.innerText = transactionName
    p2.innerText = inputTipoTransacao.value == 'receita' ? `+R$${transactionValue}` : `-R$${transactionValue}`
    
    p2.style.color = inputTipoTransacao.value == 'receita' ? p2.style.color = 'green' : p2.style.color = 'red'
    
    div.append(p1, p2)
    listTransactions.appendChild(div)

    transactions.push([transactionName, inputTipoTransacao.value, parseInt(transactionValue)])
}

function calculateIncomes() {
    let totalIncome = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i][1] == 'receita') {
        totalIncome += transactions[i][2];
      }
    }
    const incomes = document.getElementById('total-incomes')
    incomes.innerText = totalIncome
    return totalIncome
}

function calculateExpanses() {
    let totalExpanses = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i][1] == 'despesa') {
        totalExpanses += transactions[i][2];
      }
    }
    const expanses = document.getElementById('total-expanses')
    expanses.innerText = totalExpanses
    return totalExpanses
}

function atualizarValores() {
    const totalValue = document.getElementById('total-value')
    calculateIncomes()
    calculateExpanses()

    totalValue.innerText = `R$${calculateIncomes() - calculateExpanses()}`
}