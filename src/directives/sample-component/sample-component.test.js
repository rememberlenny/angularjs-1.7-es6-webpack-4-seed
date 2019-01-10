export default ngModule => {
    describe(`sample-component`, () => {
        beforeEach(window.module(ngModule.name));

        it(`should test property`, () => {
            expect(true).to.be.true;
        });
    });
}