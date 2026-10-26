const imageModules = import.meta.glob('./images/*', {
  eager: true,
  import: 'default',
  query: '?url'
})

export const imageUrls = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [path.split('/').pop(), url])
)