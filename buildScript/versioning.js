const versionRegex = /^version="((([0-9])\.([0-9])\.([0-9]))(?:-([0-9A-Za-z-.]+))?(?:\+([0-9A-Za-z-.]+))?)"/

function readVersion (contents) {
  return versionRegex.exec(contents)[1]
}

function writeVersion (contents, nextVersion) {
  const currentVersion = readVersion(contents)
  return contents.replace(currentVersion, nextVersion)
}

module.exports.readVersion = readVersion
module.exports.writeVersion = writeVersion
