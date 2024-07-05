const conta = {
    email: 'gabriel@email.com',
    password: '123456',
    name: 'Gabriel Junes',
    balance: 1850000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
