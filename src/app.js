export class App {
  configureRouter(config, router) {
    config.title = 'Demo';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'dropdown',      name: 'dropdown example',        moduleId: './examples/dropdown/dropdown', nav: true, title: 'Dropdown' },
      { route: 'markdown',         name: 'markdown example',        moduleId: './examples/markdown/markdown', nav: true, title: 'Markdown' },
      { route: 'chart',         name: 'chart example',        moduleId: './examples/chart/chart', nav: true, title: 'Chart' },
      // { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
