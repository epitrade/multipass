import state 												from "./state.js";

export default {
  setIsNotificationShown({ commit, dispatch }, bool){
    commit("SET_IS_NOTIFICATION_SHOWN", bool);
  },
  setNotificationText({ commit, dispatch }, text){
    commit("SET_NOTIFICATION_TEXT", text);
  },
  setNotification({ commit, dispatch }, text){
    dispatch("setNotificationText", text);
    dispatch("setIsNotificationShown", true);
    setTimeout(() => {
      //dispatch("setNotificationText", null);
      dispatch("setIsNotificationShown", false);
    }, 3000);
  }
}
