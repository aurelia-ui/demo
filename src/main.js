// import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  
  aurelia.use.globalResources("components/example/example");
  aurelia.use.globalResources("components/dropdown/dropdown");
  aurelia.use.globalResources("components/chart/chart");
  aurelia.use.globalResources("components/markdown/markdown");

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
