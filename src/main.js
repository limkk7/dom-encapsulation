const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素

// const div = dom.create("div");
// console.log(div);

// dom.after(test, div)

// const div3 = dom.create('<div id="parent"></div>')

// dom.wrap(test, div3)

// const nodes = dom.empty(empty)
// console.log(nodes)

// dom.attr(test, 'title', 'a ha')
// const title = dom.attr(test, 'title')
// console.log(title)

// dom.text(test, 'hello')
// dom.text(test)

// dom.style(test, { border: '1px solid red', color: 'blue' })
// console.log(dom.style(test, 'border'))
// dom.style(test, 'border', '1px solid red');

// dom.class.add(test, 'red')
// dom.class.add(test, 'blue')
// dom.class.remove(test, 'blue')
// console.log(dom.class.has(test, 'blue'))

// const fn = () => {
//   console.log('click')
// }

// dom.on(test, 'click', fn)
// dom.off(test, 'click', fn)

// const testDiv = dom.find('#test')[0]
// console.log(testDiv)

// const testDiv2 = dom.find('#test2')[0]
// console.log(dom.find('.red', testDiv2))

// console.log(dom.parent(test))
// console.log(dom.siblings(dom.find('#s3')[0]))
// console.log(dom.next(dom.find('#s2')[0]))
// console.log(dom.prev(dom.find('#s2')[0]))

// const t = dom.find('#travel')[0]
// dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))