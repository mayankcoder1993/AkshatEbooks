const imagePattern = /\.(jpe?g|png)$/i
export async function load(url, context, nextLoad) {
  if (imagePattern.test(url)) return { format: 'module', shortCircuit: true, source: `export default ${JSON.stringify(url)}` }
  return nextLoad(url, context)
}
