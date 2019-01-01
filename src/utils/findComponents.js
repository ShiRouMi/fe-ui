// 由一个组件，向上找到最近的指定父组件
function upFindNearComponnet(context, componentName) {
  if (context.$options.name === componentName) return context;

  var parent = context.$parent,
    name = parent.$options.name;

  // 这里有问题 如果找不到呢  递归完 return 的是 undefined 吧？
  return name === componentName
    ? parent
    : upFindNearComponnet(parent, componentName);
}

// 找到匹配的所有的父组件
function upFindAllComponent(context, componentName) {
  let arr = [];
  if (context.$options.name === componentName) arr.push(context);
  let parent = context.$parent,
    name = parent.$options.name;

  if (name === componentName) {
    arr.push(parent);
  } else {
    arr.concat(upFindAllComponent(parent, name));
  }

  return arr;
}

// 向下找当前最近的匹配子组件
function downFindNearComponnet(context, componentName) {
  let childrens = context.$children,
    children = null;

  if (childrens.length) {
    for (const child of childrens) {
      let name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = downFindNearComponnet(child, componentName);
        if (children) break;
      }
    }
  }

  return children;
}

function downFindAllComponent(context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    const findChilds = downFindAllComponent(child, componentName);
    return components.concat(findChilds);
  }, []);
}

function findBrotherComponents(context, componentName, exceptMe = true) {
  let children = context.$parents.$children;
  let res = children.filter(item => item.$options.name === componentName);
  let index = res.findIndex(item => item._uid === context._uid);
  if (exceptMe) res.splice(index, 1);
  return res;
}

export {
  upFindNearComponnet,
  upFindAllComponent,
  downFindNearComponnet,
  downFindAllComponent,
  findBrotherComponents
};
