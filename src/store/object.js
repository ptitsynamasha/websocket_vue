export default {
  state: {
    objects: [
      {
        title: 'squirrel',
        description: 'desc',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '1'
      },
      {
        title: 'bird',
        description: 'desc2',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '2'
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    objects(state) {
      return state.objects
    },
    promoObjects(state) {
      return state.objects.filter(v => v.promo)
    },
    myObjects(state){
      return state.objects;
    }
  }
}
