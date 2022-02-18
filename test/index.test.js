const postcss = require('postcss')
const plugin = require('../src/index.js')

async function run (input, output, opts = {
  tailwindConfig: './test/fixtures/tailwind.config.js',
  groups: [{
    configKey: 'colors', prefix: 'color',
  }, {
    configKey: 'spacing', prefix: 'space',
  }, {
    configKey: 'fontSize', prefix: 'size',
  }],
}) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('correctly renders tailwind config to custom properties with default config', async () => {
  const results = `:root {
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
}`
  await run('@tailwind-custom-properties;', results)
})

it('correctly renders tailwind config to custom properties with custom config', async () => {
  const results = `:root {
    --color-primary: #0000ff;
    --color-secondary: #ff0000;
    --color-light: #f3f3f3;
    --color-dark: #252525
}`
  await run('@tailwind-custom-properties;', results, {
    tailwindConfig: './test/fixtures/tailwind.config.js',
    groups: [{
      configKey: 'colors', prefix: 'color',
    }]
  })
})

it('throws an error for a missing tailwind.config file', async () => {
  const runPostcss = async () => {
    await postcss([plugin()]).process('@tailwind-custom-properties;', { from: undefined })
  }

  await expect(runPostcss()).rejects.toThrowError('Did not find tailwind config file')
})
