class CreateComponents {
  constructor({ components = [{ name, selector }] }) {
    for (const component of components) {
      this.generate(component)
    }
  }

  generate({ name, selector }) {
    const nodeList = document.querySelectorAll(selector)

    this[name] = Array.from(nodeList).reduce((acc, element) => {
      const keyName = this.#generateKey(element, name)
      acc[keyName] = element

      return acc
    }, {})
  }

  #generateKey(nodeElement, name) {
    const regex = new RegExp(`${name}-*`, "g")
    const attributeName = nodeElement.id
    return attributeName.replaceAll(regex, "")
  }
}

