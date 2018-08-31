class ChatUser {
  constructor({color, email, id, isAdmin, isBan, isMute, token}) {
    this.color = color;
    this.email = email;
    this.id = id;
    this.isAdmin = isAdmin;
    this.isBan = isBan;
    this.isMute = isMute;
    this.token = token;
  }
}

export default {
  state: {
    userChat: null,
  },
  mutations: {
    setUserChat(state, payload) {
      state.userChat = payload;
      localStorage.setItem('userChat', JSON.stringify(payload));
    }
  },
  actions: {
    chatLoginUser({commit}, {email, password}) {
      commit('clearError');
      commit('setLoading', true);

      const chatUser = {
        email,
        password
      };

      Vue.http.post('/api/auth/login', chatUser)
        .then(resp => {
          commit('setUserChat', new ChatUser(resp.body));
        })
        .catch(e => commit('setError', e))
        .finally(() => {
          commit('setLoading', false);
        })
    },
  },
  getters: {
    userChat(state) {
      return state.userChat
    },
    isUserLoggedInChat(state) {
      return state.userChat !== null
    }
  }
}
