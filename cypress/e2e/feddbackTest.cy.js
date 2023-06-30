import loginPage from "../support/pages/LoginPage.js"

it('feedback test', () => {
    cy.visit('/contact')
    loginPage.singInButtonDismiss().click();

    cy.log('Comment')
    cy.get('#comment').type('thank you for the experience');

    cy.log('Raiting')
    cy.get('mat-slider')
        .then(($slider) => {
            const min = 0;
            const max = 100;
            const step = 3;
            const value = 50;
            const width = $slider.width();
            const range = max - min;
            const steps = range / step;
            const stepWidth = width / steps;
            const from = $slider.offset().left;
            const to = from + (stepWidth * (value / step));

            cy.get('#rating .mat-slider-thumb')
                .trigger('mousedown', { button: 0, force: true })
                .trigger('mousemove', { clientX: from, force: true })
                .trigger('mousemove', { clientX: to, force: true })
                .trigger('mouseup', { force: true });
        });

    cy.log('Captcha')
    cy.get('#captcha').get('code').then(($code) => {
        const captchaText = $code.text();
        const capthaValue = eval(captchaText);

        cy.get('#captchaControl').type(capthaValue);
        cy.get('[type="submit"]').click();

        cy.get('#cdk-overlay-2').should('contain', 'Thank you for your feedback.');
    })

})