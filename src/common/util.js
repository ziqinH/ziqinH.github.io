const navSwitch = (props, routers, event) => {
  if (event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    props.actions.setBottomNavState({
      selectedIndex: routers.indexOf(href)
    });
    props.history.push(href);
  }

  props.actions.setMenuState({ open: false });
};

export { navSwitch };
