const path = require('path')
const fs = require('fs')

const defaultGroups = [
  { configKey: 'colors', prefix: 'color' },
  { configKey: 'spacing', prefix: 'space' },
  { configKey: 'fontSize', prefix: 'size' },
]

module.exports = (opts = { tailwindConfig: 'tailwind.config.js', groups: defaultGroups }) => {
  return {
    postcssPlugin: 'tailwind-custom-properties',
    AtRule: {
      'tailwind-custom-properties': (rule, { Declaration, Rule }) => {
        const { tailwindConfig, groups } = opts
        const externalConfigFile = path.join(process.cwd(), tailwindConfig)

        if (!fs.existsSync(externalConfigFile)) throw new Error(`Did not find tailwind config file at ${tailwindConfig}`)

        const config = require(externalConfigFile)

        const results = groups.map(({configKey, prefix}) => {
          const group = config.theme[configKey];

          if (group) {
            return Object.keys(group).map(key => ({ name: `--${prefix}-${key}`, value: group[key] }))
          }
        })

        rule.replaceWith(new Rule({ selector: ':root' }).append(results.flat().map((rule) => {
          return new Declaration({ prop: rule.name, value: rule.value })
        })))
      } 
    },
  }
}

module.exports.postcss = true
