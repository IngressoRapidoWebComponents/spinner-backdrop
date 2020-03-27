/**
@license
Copyright (c) 2016 The Ingresso Rápido Web Components Authors. All rights reserved.
This code may only be used under the BSD style license found at http://ingressorapidowebcomponents.github.io/LICENSE.txt
The complete set of authors may be found at http://ingressorapidowebcomponents.github.io/AUTHORS.txt
The complete set of contributors may be found at http://ingressorapidowebcomponents.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**

The `spinner-backdrop` shows a `paper-spinner` and a backdrop overlay with a great fade-in/fade-out animation to entire container.
Perfect for page route transition!

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
`--spinner-backdrop-overlay` |  overlay mixin | {}
`--spinner-backdrop-overlay-color` | Color of the overlay | #FFF
`--spinner-backdrop-overlay-opacity` | Opacity of the overlay | 1
`--spinner-backdrop-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--spinner-backdrop-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--spinner-backdrop-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--spinner-backdrop-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--spinner-backdrop-stroke-width` | The width of the spinner stroke | 3px

@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import '@polymer/paper-spinner/paper-spinner.js';
import { NeonAnimationRunnerBehavior } from '@polymer/neon-animation/neon-animation-runner-behavior.js';
import '@polymer/neon-animation/animations/fade-out-animation.js';
import 'web-animations-js/web-animations.min.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style is="custom-style">

      :host {
        display: none;
        height: 100%;
        width: 100%;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--spinner-backdrop-overlay-color, #FFF);
        opacity: var(--spinner-backdrop-overlay-opacity, 1);
        z-index: var(--spinner-backdrop-z-index, 1);
        @apply --spinner-backdrop-overlay;
      }

      paper-spinner {
        --paper-spinner-layer-1-color: var(--spinner-backdrop-layer-1-color);
        --paper-spinner-layer-2-color: var(--spinner-backdrop-layer-2-color);
        --paper-spinner-layer-3-color: var(--spinner-backdrop-layer-3-color);
        --paper-spinner-layer-4-color: var(--spinner-backdrop-layer-4-color);
        --paper-spinner-stroke-width: var(--spinner-backdrop-stroke-width, 3px);
      }

    </style>

    <div class="overlay" hidden\$="[[!_animationActive]]">
      <paper-spinner alt="[[alt]]" active="[[loading]]"></paper-spinner>
    </div>
`,

  is: 'spinner-backdrop',

  behaviors: [
    NeonAnimationRunnerBehavior
  ],

  listeners: {
    'neon-animation-finish': '_onNeonAnimationFinish'
  },

  properties: {
    /**
     * Gets and Sets loading state, not counting animation time
     *
     * @type Boolean
     */
    loading: {
      type: Boolean,
      value: false,
      notify: true,
      observer: '_loadingChanged'
    },
    /**
     * Gets active state, true if element is showing on page
     *
     * @type Boolean
     */
    _animationActive: {
      type: Boolean,
      value: false
    },
    /**
     * Alternative text for accessibility
     *
     * @type String
     */
    alt: String,
    /**
     * Default animation configuration
     *
     * @type AnimationConfig
     */
    animationConfig: {
      readOnly: true,
      value: function() {
        return {
          'exit' : [{
            name: 'fade-out-animation',
            node: this,
            timing: {duration: 1000}
          }]
        }
      }
    }
  },

  /**
   * Observer if is loading or not
   */
  _loadingChanged: function() {
    this._animationActive = true;
    this.style.display = 'block';

    if (!this.loading) {
      this.playAnimation('exit');
    }
  },

  /**
   * Observer if animation is ended
   */
  _onNeonAnimationFinish: function() {
    this._animationActive = false;
    this.style.display = 'none';
  }
});
