/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export'
}

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

nextConfig.assetPrefix = assetPrefix
nextConfig.basePath = basePath


module.exports = nextConfig
