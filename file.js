'use strict'
module.exports = File

function File (contents) {
  if (this == null) return new File(contents)
  this.type = 'file'
  if (typeof contents === 'object' && !Buffer.isBuffer(contents)) {
    this.contents = JSON.stringify(contents)
  } else {
    this.contents = contents
  }
}