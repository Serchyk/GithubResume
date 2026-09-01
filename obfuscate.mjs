import pkg from 'javascript-obfuscator'
const { obfuscate } = pkg
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, extname } from 'path'

const distDir = './dist'

function processDir(dir) {
  for (const file of readdirSync(dir)) {
    const path = join(dir, file)
    if (statSync(path).isDirectory()) {
      processDir(path)
    } else if (extname(file) === '.js') {
      const code = readFileSync(path, 'utf8')
      const result = obfuscate(code, {
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.5,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.2,
        stringArray: true,
        stringArrayThreshold: 0.75,
        renameGlobals: true,
        selfDefending: true,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'mangled-shuffled',
        log: false,
        numbersToExpressions: true,
        simplify: true,
        splitStrings: true,
        splitStringsChunkLength: 10,
        transformObjectKeys: true,
        unicodeEscapeSequence: false,
      })
      writeFileSync(path, result.getObfuscatedCode())
      console.log(`✓ ${path}`)
    }
  }
}

processDir(distDir)
console.log('Obfuscation complete!')
