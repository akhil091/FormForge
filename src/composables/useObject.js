export function useObject() {
    // Function to clone properties from source to target object
    const cloneObject = function (source, target) {
        // Iterate over the keys of the source object
        Object.keys(source).forEach((key) => {
            // Assign each property from source to target
            target[key] = source[key];
        });
        
        return target;  // Return the modified target object
    }

    return { cloneObject };  // Return an object with the cloneObject function
}

//"composables" typically refer to a design pattern or a set of functions that encapsulate specific pieces of logic or functionality in a reusable way. Composables are often used to structure and organize code in a more modular and maintainable manner.