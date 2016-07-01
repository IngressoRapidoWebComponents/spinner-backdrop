[![bower version](https://img.shields.io/bower/v/spinner-backdrop.svg)](https://libraries.io/bower/spinner-backdrop)
[![open issues](https://img.shields.io/github/issues/IngressoRapidoWebComponents%2Fspinner-backdrop.svg)](https://github.com/IngressoRapidoWebComponents/spinner-backdrop/issues)
[![license](https://img.shields.io/github/license/IngressoRapidoWebComponents%2Fspinner-backdrop.svg)](https://github.com/IngressoRapidoWebComponents/spinner-backdrop/blob/master/LICENSE)


# \<spinner-backdrop\>

The `spinner-backdrop` shows a `paper-spinner` and a backdrop overlay with a great fade-in/fade-out animation to entire container.
Perfect for page route transition!

_[Demo and API docs](https://ingressorapidowebcomponents.github.io/components/spinner-backdrop)_


Example:
```html
    <dom-module id="custom-element">
      <template>
        <spinner-page loading="{{loading}}"></spinner-page>
      </dom-module>
    </template>
```

The `spinner-backdrop` will fill the entire `custom-element` container until `loading` gonna be false

You can do it with others elements, example:
```html
    <paper-dialog>
      <spinner-page loading="{{loading}}"></spinner-page>
    </paper-dialog>
```

Combine with others elements state, example:
```html
    <iron-ajax loading="{{loading}}"></iron-ajax>
    <spinner-page loading="{{loading}}"></spinner-page>
```

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--spinner-backdrop-overlay-color` | Color of the overlay | #FFF
`--spinner-backdrop-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--spinner-backdrop-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--spinner-backdrop-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--spinner-backdrop-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--spinner-backdrop-stroke-width` | The width of the spinner stroke | 3px