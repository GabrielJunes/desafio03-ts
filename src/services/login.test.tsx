import { login } from "./login"

describe('login', () => {

    const mockEmail = 'nath@dio.bank'
    const mockSenha = '123456'
    it('Deve exibir um alert com boas vindas caso o email e a senha sejam válidos', async() => {
        const response = await login(mockEmail,mockSenha)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email e a senha sejam inválidos', async() => {
        const response = await login('email@invalido.com', '12345')
        expect(response).toBeFalsy()
    })
})