// 功能描述: 获取路由列表数据
// @params routers
export const getHomeRoute = routers => {
  let i = -1;
  let len = routers.length
  let homeRoute = {}
  while (++i < len) {
    let item = routers[i];
    if (item.children && item.children.length) {
      let res = getHomeRoute(item.children)
      if (res.name) {
        return res
      }
    } else {
      if (item.name === "home") {
        homeRoute = item
      }
    }
  }
  return homeRoute
}

