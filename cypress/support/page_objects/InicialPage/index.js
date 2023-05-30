const elemento = require('./elements').ELEMENTS

class InicialPage{

    AbrirPaginaDeLogin(){
        cy.get(elemento.btnAbrirPaginaLogin).click();
    }


}

export default new InicialPage()
