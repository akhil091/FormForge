export function useSibling() {
    const getSiblingByClass = (node, siblingClass = '', mode = 'next') => {
        const funName = mode + 'ElementSibling'

        if (funName in node == false) {
            return null
        }

        let sibling = node[funName]

        if (siblingClass.trim() === '') {
            return sibling
        }

        while (!sibling.classList.contains('update-input-holder')) {
            sibling = sibling[funName]
        }

        if (!sibling.classList.contains('update-input-holder')) {
            return null
        }

        return sibling
    }
    return { getSiblingByClass }
}
