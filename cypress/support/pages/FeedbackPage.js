class FeedbackPage {
    commentField() {
        return cy.get('#comment').type('thank you for the experience');
    }

    raitingField() {
        return cy.get('mat-slider')
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
    }

    capthaField() {
        return cy.get('#captcha').get('code').then(($code) => {
            const captchaText = $code.text();
            const capthaValue = eval(captchaText);

            cy.get('#captchaControl').type(capthaValue);

        })
    }

    submitbButtonField() {
        return cy.get('[type="submit"]')
    }

    notificationaAboutFeedback() {
        return cy.get('#cdk-overlay-2').should('contain', 'Thank you for your feedback.');
    }
}
export default new FeedbackPage();