# partload
Display partial spinning loading icon on your view with keeping your page clean.

## usage
To display a spinner on a specific element:

```javascript
$("#elementId").showPartLoad(); 
```

To hide an existing spinner from an element:
```javascript
$("#elementId").hidePartLoad(); 
```

## options
- iconUrl: link to the spinner icon.
- animationDuration: in miliseconds.

```javascript
var options = {
        iconUrl: "/Images/partload.gif",
        animationDuration: 400
};
$("#elementId").showPartLoad(options);
```
