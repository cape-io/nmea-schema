const _ = require('lodash/fp')
const globby = require('globby')

const { safeDump, safeLoad } = require('js-yaml')
const fs = require('fs')

const propIndex = _.flow(
  _.invert,
  _.propertyOf,
  getIndex => _.flow(_.over([getIndex, _.identity]), _.find),
)(['id', 'title', 'examples', 'name', 'description', 'fields'])

const propSorter = _.overArgs((propA, propB) => {
  if (propA < propB) return -1
  if (propA > propB) return 1
  return 0
}, [propIndex, propIndex])

function saveYaml(sentence) {
  const data = safeDump(sentence, { sortKeys: propSorter })
  fs.writeFileSync(`schema/sentences/${sentence.id}.yaml`, data, 'utf8')
}
const doc = safeLoad(fs.readFileSync('schema/sentences.yaml', 'utf8'))
doc.forEach(saveYaml)
// console.log(doc)
// globby(['schema/**/*.yaml'])
//   .then(console.log)
