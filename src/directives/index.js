import sampleComponentDirective from './sample-component/sample-component';

export default ngModule => {
    sampleComponentDirective(ngModule);
    // require('./sample-component/sample-component').default(ngModule);
};