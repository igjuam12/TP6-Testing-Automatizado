import ContactPage from '../pages/contactPage';

describe('Add Contact Form', () => {
    let contactPage;

    beforeEach(() => {
        // Paso 1: Visitar la página de autenticación
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');

        // Paso 2: Realizar el proceso de autenticación (ajusta los selectores según sea necesario)
        cy.get('#email').type('enzocervi@gmail.com'); // Ingresa tu email de autenticación
        cy.get('#password').type('hola1234');      // Ingresa tu contraseña
        cy.get('button#submit').should('be.visible').click(); // Si el botón tiene un id de 'submit'        // Botón para iniciar sesión

        // Paso 3: Esperar a que la página de contacto se cargue
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList');
        
        // Paso 4: Hacer clic en el botón "Add Contact" para navegar al formulario
        cy.get('button#add-contact').should('be.visible').click();

        // Verificar que estamos en la página de "Add Contact"
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/addContact');

        // Crear una instancia de la página del formulario de contacto
        contactPage = new ContactPage();
    });

    it('should successfully submit the form with all required fields filled in correctly', () => {
        const contactData = {
            firstName: 'Tomas',
            lastName: 'Lemos',
            birthdate: '2000-04-25',
            email: 'lemosTomas@gmail.com',
            phone: '23546854132',
            street1: 'aca12',
            street2: 'aca24',
            city: 'Lujan de cuyo',
            stateProvince: 'Mendoza',
            postalCode: '5507',
            country: 'Argentina'
        };

        // Llenar el formulario de contacto
        contactPage.fillContactForm(contactData);
        contactPage.submitForm();

        // Verificar que no haya errores al enviar el formulario
        cy.get('#error').should('not.exist');
    });
});


