# tailwind-custom-properties

[PostCSS] plugin building a list of custom properties from a given tailwind
config.

[PostCSS]: https://github.com/postcss/postcss

```css
@tailwind-custom-properties;
```

```css
:root {
  --color-primary: #0000ff;
  --color-secondary: #ff0000;
  --color-light: #f3f3f3;
  --color-dark: #252525;
  --space-sm: 0.75em;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --size-sm: 0.75em;
  --size-md: 1rem;
  --size-lg: 1.5rem
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss tailwind-custom-properties
```

**Step 2:** Check your project for existing PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('tailwind-custom-properties'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage

## Acknowledgement
- [Andy Bell's CUBE CSS with Tailwind
CSS](https://github.com/hankchizljaw/CUBE-with-tailwind)
