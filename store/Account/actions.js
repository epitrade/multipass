import state 												from "./state.js";

export default {
  async checkAuthState({ commit, dispatch }){
    try {
      console.log("CHECKING")
      let { data } = await this.$axios.post(`/api/account/check-cookie`, {}, { withCredentials: true });

      console.log(data)
      commit("SET_USER", data);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async checkAccountExists({ commit, dispatch }, email){
    try {
      return await this.$axios.get(`/api/account?email=${email}`);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async createAccount({ commit, dispatch }, payload){
    try {
      const { data } = await this.$axios.post(`/api/account/`, {
        email: payload.email,
        password: payload.password
      });
      commit("SET_USER", data);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async deleteAccount({ commit, dispatch }){
    try {
      const { data } = await this.$axios.post(`/api/account/delete`, {}, { withCredentials: true });
      commit("SET_USER", null);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async login({ commit, dispatch }, payload){
    try {
      const { data } = await this.$axios.post(`/api/account/login`, {
        email: payload.email,
        password: payload.password
      }, { withCredentials: true });
      commit("SET_USER", data);
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  },
  async logout({ commit, dispatch }, needsRedirect){
    try {
      let { data } = await this.$axios.post(`/api/account/logout`, {}, { withCredentials: true });
      commit("SET_USER", null);
      if (needsRedirect){ this.$router.push("/") }
    }
    catch (e){
      dispatch("setNotification", e.response.data.reason);
    }
  }
}
