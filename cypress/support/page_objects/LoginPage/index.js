const elemento = require('./elements').ELEMENTS


class LoginPage {

    InformarUsuario(usuario) {
        cy.get(elemento.username).type(usuario)
    }

    InformarSenha(senha) {
        cy.get(elemento.password).type(senha, { log: false })
    }

    SubmeterFormularioLogin() {
        cy.get(elemento.btnSubmeterFormularioLogin).click()
    }

    AbrirProdutoPage(){
        cy.get(elemento.btnAbrirProdutoPage).click()
    }
}

export default new LoginPage()