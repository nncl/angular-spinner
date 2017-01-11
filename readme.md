# Angular Spinner

Angular Spinner for loading moments.

## Getting Started

Installing via bower:

```
$ bower install angular-spinner --save
```

### Adding to your app

Add the `angular-spinner.js` file into your application:

```html
<script src="angular-spinner.js"></script>
```

Add the module in your app:

```js
var angular = module('myApp', ['angular-spinner']);
```

And make it work:

```js
$scope.isLoading = true;
```

```html
<ca-spinner is-loading="isLoading"></ca-spinner>
```

