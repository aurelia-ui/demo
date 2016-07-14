System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-rc.1.0.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-rc.1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-rc.1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
    "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-rc.1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-rc.1.0.0",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "chartjs": "npm:chart.js@2.1.6",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@2.2.4",
    "markdown-it": "npm:markdown-it@7.0.0",
    "moment": "github:moment/moment@2.14.1",
    "prismjs": "npm:prismjs@1.5.1",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.4.1"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:argparse@1.0.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sprintf-js": "npm:sprintf-js@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-binding@1.0.0-rc.1.0.2": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-rc.1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-rc.1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-rc.1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-framework@1.0.0-rc.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-history-browser@1.0.0-rc.1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-loader-default@1.0.0-rc.1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-loader@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-logging-console@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-metadata@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-pal-browser@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-polyfills@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-router@1.0.0-rc.1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-task-queue@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-resources@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-router@1.0.0-rc.1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chart.js@2.1.6": {
      "chartjs-color": "npm:chartjs-color@2.0.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "moment": "npm:moment@2.14.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:chartjs-color-string@0.4.0": {
      "color-name": "npm:color-name@1.1.1"
    },
    "npm:chartjs-color@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chartjs-color-string": "npm:chartjs-color-string@0.4.0",
      "color-convert": "npm:color-convert@0.5.3"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.23"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:linkify-it@2.0.0": {
      "uc.micro": "npm:uc.micro@1.0.2"
    },
    "npm:markdown-it@7.0.0": {
      "argparse": "npm:argparse@1.0.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "entities": "npm:entities@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "linkify-it": "npm:linkify-it@2.0.0",
      "mdurl": "npm:mdurl@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "uc.micro": "npm:uc.micro@1.0.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  depCache: {
    "blur-image.js": [
      "aurelia-framework"
    ],
    "components/chart/chart.js": [
      "aurelia-framework",
      "chartjs"
    ],
    "components/dropdown/dropdown.js": [
      "aurelia-framework"
    ],
    "components/example/example.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "fetch",
      "prismjs"
    ],
    "components/markdown/markdown.js": [
      "markdown-it",
      "aurelia-framework",
      "prismjs"
    ],
    "users.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "fetch"
    ],
    "welcome.js": [
      "prismjs"
    ]
  },
  bundles: {
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "app.js.map!github:systemjs/plugin-text@0.0.8.js",
      "blur-image.js",
      "blur-image.js.map!github:systemjs/plugin-text@0.0.8.js",
      "child-router.html!github:systemjs/plugin-text@0.0.8.js",
      "child-router.js",
      "child-router.js.map!github:systemjs/plugin-text@0.0.8.js",
      "components/chart/chart.html!github:systemjs/plugin-text@0.0.8.js",
      "components/chart/chart.js",
      "components/chart/chart.js.map!github:systemjs/plugin-text@0.0.8.js",
      "components/dropdown/dropdown.html!github:systemjs/plugin-text@0.0.8.js",
      "components/dropdown/dropdown.js",
      "components/dropdown/dropdown.js.map!github:systemjs/plugin-text@0.0.8.js",
      "components/example/example.html!github:systemjs/plugin-text@0.0.8.js",
      "components/example/example.js",
      "components/example/example.js.map!github:systemjs/plugin-text@0.0.8.js",
      "components/markdown/markdown.js",
      "components/markdown/markdown.js.map!github:systemjs/plugin-text@0.0.8.js",
      "examples/chart/chart.html!github:systemjs/plugin-text@0.0.8.js",
      "examples/chart/chart.js",
      "examples/chart/chart.js.map!github:systemjs/plugin-text@0.0.8.js",
      "examples/chart/examples/line-chart-example.html!github:systemjs/plugin-text@0.0.8.js",
      "examples/chart/examples/line-chart-example.js",
      "examples/chart/examples/line-chart-example.js.map!github:systemjs/plugin-text@0.0.8.js",
      "examples/chart/examples/pie-chart-example.html!github:systemjs/plugin-text@0.0.8.js",
      "examples/chart/examples/pie-chart-example.js",
      "examples/chart/examples/pie-chart-example.js.map!github:systemjs/plugin-text@0.0.8.js",
      "examples/dropdown/dropdown.html!github:systemjs/plugin-text@0.0.8.js",
      "examples/dropdown/dropdown.js",
      "examples/dropdown/dropdown.js.map!github:systemjs/plugin-text@0.0.8.js",
      "examples/dropdown/examples/example-1.html!github:systemjs/plugin-text@0.0.8.js",
      "examples/dropdown/examples/example-1.js",
      "examples/dropdown/examples/example-1.js.map!github:systemjs/plugin-text@0.0.8.js",
      "examples/dropdown/examples/example-2.html!github:systemjs/plugin-text@0.0.8.js",
      "examples/dropdown/examples/example-2.js",
      "examples/dropdown/examples/example-2.js.map!github:systemjs/plugin-text@0.0.8.js",
      "examples/markdown/example-1.html!github:systemjs/plugin-text@0.0.8.js",
      "examples/markdown/example-1.js",
      "examples/markdown/example-1.js.map!github:systemjs/plugin-text@0.0.8.js",
      "examples/markdown/markdown.html!github:systemjs/plugin-text@0.0.8.js",
      "examples/markdown/markdown.js",
      "examples/markdown/markdown.js.map!github:systemjs/plugin-text@0.0.8.js",
      "main.js",
      "main.js.map!github:systemjs/plugin-text@0.0.8.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.8.js",
      "users.html!github:systemjs/plugin-text@0.0.8.js",
      "users.js",
      "users.js.map!github:systemjs/plugin-text@0.0.8.js",
      "welcome.html!github:systemjs/plugin-text@0.0.8.js",
      "welcome.js",
      "welcome.js.map!github:systemjs/plugin-text@0.0.8.js"
    ],
    "aurelia.js": [
      "github:github/fetch@1.0.0.js",
      "github:github/fetch@1.0.0/fetch.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:jspm/nodelibs-punycode@0.1.0.js",
      "github:jspm/nodelibs-punycode@0.1.0/index.js",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-animator-css@1.0.0-rc.1.0.0.js",
      "npm:aurelia-animator-css@1.0.0-rc.1.0.0/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.0-rc.1.0.2.js",
      "npm:aurelia-binding@1.0.0-rc.1.0.2/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-rc.1.0.1.js",
      "npm:aurelia-bootstrapper@1.0.0-rc.1.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0.js",
      "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.0.js",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.0/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-rc.1.0.1.js",
      "npm:aurelia-framework@1.0.0-rc.1.0.1/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-rc.1.0.0.js",
      "npm:aurelia-history-browser@1.0.0-rc.1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-rc.1.0.0.js",
      "npm:aurelia-history@1.0.0-rc.1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-rc.1.0.0.js",
      "npm:aurelia-loader-default@1.0.0-rc.1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-rc.1.0.0.js",
      "npm:aurelia-loader@1.0.0-rc.1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-rc.1.0.0.js",
      "npm:aurelia-logging-console@1.0.0-rc.1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-rc.1.0.0.js",
      "npm:aurelia-logging@1.0.0-rc.1.0.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-rc.1.0.0.js",
      "npm:aurelia-metadata@1.0.0-rc.1.0.0/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-rc.1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0-rc.1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-rc.1.0.0.js",
      "npm:aurelia-pal@1.0.0-rc.1.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-rc.1.0.0.js",
      "npm:aurelia-path@1.0.0-rc.1.0.0/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-rc.1.0.0.js",
      "npm:aurelia-polyfills@1.0.0-rc.1.0.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0.js",
      "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-rc.1.0.0.js",
      "npm:aurelia-router@1.0.0-rc.1.0.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-rc.1.0.0.js",
      "npm:aurelia-task-queue@1.0.0-rc.1.0.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-rc.1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0-rc.1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/compose.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/focus.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/hide.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/if.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/show.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/with.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/router-view.js",
      "npm:aurelia-templating@1.0.0-rc.1.0.0.js",
      "npm:aurelia-templating@1.0.0-rc.1.0.0/aurelia-templating.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:chart.js@2.1.6.js",
      "npm:chart.js@2.1.6/src/chart.js",
      "npm:chart.js@2.1.6/src/charts/Chart.Bar.js",
      "npm:chart.js@2.1.6/src/charts/Chart.Bubble.js",
      "npm:chart.js@2.1.6/src/charts/Chart.Doughnut.js",
      "npm:chart.js@2.1.6/src/charts/Chart.Line.js",
      "npm:chart.js@2.1.6/src/charts/Chart.PolarArea.js",
      "npm:chart.js@2.1.6/src/charts/Chart.Radar.js",
      "npm:chart.js@2.1.6/src/charts/Chart.Scatter.js",
      "npm:chart.js@2.1.6/src/controllers/controller.bar.js",
      "npm:chart.js@2.1.6/src/controllers/controller.bubble.js",
      "npm:chart.js@2.1.6/src/controllers/controller.doughnut.js",
      "npm:chart.js@2.1.6/src/controllers/controller.line.js",
      "npm:chart.js@2.1.6/src/controllers/controller.polarArea.js",
      "npm:chart.js@2.1.6/src/controllers/controller.radar.js",
      "npm:chart.js@2.1.6/src/core/core.animation.js",
      "npm:chart.js@2.1.6/src/core/core.controller.js",
      "npm:chart.js@2.1.6/src/core/core.datasetController.js",
      "npm:chart.js@2.1.6/src/core/core.element.js",
      "npm:chart.js@2.1.6/src/core/core.helpers.js",
      "npm:chart.js@2.1.6/src/core/core.js",
      "npm:chart.js@2.1.6/src/core/core.layoutService.js",
      "npm:chart.js@2.1.6/src/core/core.legend.js",
      "npm:chart.js@2.1.6/src/core/core.plugin.js",
      "npm:chart.js@2.1.6/src/core/core.scale.js",
      "npm:chart.js@2.1.6/src/core/core.scaleService.js",
      "npm:chart.js@2.1.6/src/core/core.title.js",
      "npm:chart.js@2.1.6/src/core/core.tooltip.js",
      "npm:chart.js@2.1.6/src/elements/element.arc.js",
      "npm:chart.js@2.1.6/src/elements/element.line.js",
      "npm:chart.js@2.1.6/src/elements/element.point.js",
      "npm:chart.js@2.1.6/src/elements/element.rectangle.js",
      "npm:chart.js@2.1.6/src/scales/scale.category.js",
      "npm:chart.js@2.1.6/src/scales/scale.linear.js",
      "npm:chart.js@2.1.6/src/scales/scale.linearbase.js",
      "npm:chart.js@2.1.6/src/scales/scale.logarithmic.js",
      "npm:chart.js@2.1.6/src/scales/scale.radialLinear.js",
      "npm:chart.js@2.1.6/src/scales/scale.time.js",
      "npm:chartjs-color-string@0.4.0.js",
      "npm:chartjs-color-string@0.4.0/color-string.js",
      "npm:chartjs-color@2.0.0.js",
      "npm:chartjs-color@2.0.0/index.js",
      "npm:color-convert@0.5.3.js",
      "npm:color-convert@0.5.3/conversions.js",
      "npm:color-convert@0.5.3/index.js",
      "npm:color-name@1.1.1.js",
      "npm:color-name@1.1.1/index.js",
      "npm:entities@1.1.1/maps/entities.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:ieee754@1.1.6.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "npm:linkify-it@2.0.0.js",
      "npm:linkify-it@2.0.0/index.js",
      "npm:linkify-it@2.0.0/lib/re.js",
      "npm:markdown-it@7.0.0.js",
      "npm:markdown-it@7.0.0/index.js",
      "npm:markdown-it@7.0.0/lib/common/entities.js",
      "npm:markdown-it@7.0.0/lib/common/html_blocks.js",
      "npm:markdown-it@7.0.0/lib/common/html_re.js",
      "npm:markdown-it@7.0.0/lib/common/utils.js",
      "npm:markdown-it@7.0.0/lib/helpers/index.js",
      "npm:markdown-it@7.0.0/lib/helpers/parse_link_destination.js",
      "npm:markdown-it@7.0.0/lib/helpers/parse_link_label.js",
      "npm:markdown-it@7.0.0/lib/helpers/parse_link_title.js",
      "npm:markdown-it@7.0.0/lib/index.js",
      "npm:markdown-it@7.0.0/lib/parser_block.js",
      "npm:markdown-it@7.0.0/lib/parser_core.js",
      "npm:markdown-it@7.0.0/lib/parser_inline.js",
      "npm:markdown-it@7.0.0/lib/presets/commonmark.js",
      "npm:markdown-it@7.0.0/lib/presets/default.js",
      "npm:markdown-it@7.0.0/lib/presets/zero.js",
      "npm:markdown-it@7.0.0/lib/renderer.js",
      "npm:markdown-it@7.0.0/lib/ruler.js",
      "npm:markdown-it@7.0.0/lib/rules_block/blockquote.js",
      "npm:markdown-it@7.0.0/lib/rules_block/code.js",
      "npm:markdown-it@7.0.0/lib/rules_block/fence.js",
      "npm:markdown-it@7.0.0/lib/rules_block/heading.js",
      "npm:markdown-it@7.0.0/lib/rules_block/hr.js",
      "npm:markdown-it@7.0.0/lib/rules_block/html_block.js",
      "npm:markdown-it@7.0.0/lib/rules_block/lheading.js",
      "npm:markdown-it@7.0.0/lib/rules_block/list.js",
      "npm:markdown-it@7.0.0/lib/rules_block/paragraph.js",
      "npm:markdown-it@7.0.0/lib/rules_block/reference.js",
      "npm:markdown-it@7.0.0/lib/rules_block/state_block.js",
      "npm:markdown-it@7.0.0/lib/rules_block/table.js",
      "npm:markdown-it@7.0.0/lib/rules_core/block.js",
      "npm:markdown-it@7.0.0/lib/rules_core/inline.js",
      "npm:markdown-it@7.0.0/lib/rules_core/linkify.js",
      "npm:markdown-it@7.0.0/lib/rules_core/normalize.js",
      "npm:markdown-it@7.0.0/lib/rules_core/replacements.js",
      "npm:markdown-it@7.0.0/lib/rules_core/smartquotes.js",
      "npm:markdown-it@7.0.0/lib/rules_core/state_core.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/autolink.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/backticks.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/balance_pairs.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/emphasis.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/entity.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/escape.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/html_inline.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/image.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/link.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/newline.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/state_inline.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/strikethrough.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/text.js",
      "npm:markdown-it@7.0.0/lib/rules_inline/text_collapse.js",
      "npm:markdown-it@7.0.0/lib/token.js",
      "npm:mdurl@1.0.1.js",
      "npm:mdurl@1.0.1/decode.js",
      "npm:mdurl@1.0.1/encode.js",
      "npm:mdurl@1.0.1/format.js",
      "npm:mdurl@1.0.1/index.js",
      "npm:mdurl@1.0.1/parse.js",
      "npm:moment@2.14.1.js",
      "npm:moment@2.14.1/moment.js",
      "npm:prismjs@1.5.1.js",
      "npm:prismjs@1.5.1/prism.js",
      "npm:prismjs@1.5.1/themes/prism.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:process@0.11.5.js",
      "npm:process@0.11.5/browser.js",
      "npm:punycode@1.4.1.js",
      "npm:punycode@1.4.1/punycode.js",
      "npm:uc.micro@1.0.2.js",
      "npm:uc.micro@1.0.2/categories/Cc/regex.js",
      "npm:uc.micro@1.0.2/categories/Cf/regex.js",
      "npm:uc.micro@1.0.2/categories/P/regex.js",
      "npm:uc.micro@1.0.2/categories/Z/regex.js",
      "npm:uc.micro@1.0.2/index.js",
      "npm:uc.micro@1.0.2/properties/Any/regex.js"
    ]
  }
});