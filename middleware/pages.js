export default function (context) {
  // go tell the store to update the page
  console.log(context.route.name, 'page')
  context.store.commit('updatePage', context.route.name)
}
