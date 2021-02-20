// used if the user trys to visit /account and they're an admin
// saves having to switch the route desitination in teh components
export default ({store, redirect}) => {
  console.log("GUARD CALLED");
  console.log(store.getters.user);

  if (!store.getters.user){
    return redirect("/")
  }

};
