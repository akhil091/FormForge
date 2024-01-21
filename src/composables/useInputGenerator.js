export function useInputGenerator() {
    const inputs = function () {
        return {
            text: {
                type: 'text',
                icon: 'dynamic_form',
                name: 'text',
                template: `<input type='text' name=##name## placeholder=##placeholder## v-model=##vmodel## class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-neutral-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
                label: 'Enter your field label',
                generatedNode: null,
            },
            email: {
                type: 'email',
                icon: 'mail',
                name: 'email',
                template: `<input type='email' name=##name## placeholder=##placeholder## v-model=##vmodel## class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-neutral-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
                label: 'Email',
                generatedNode: null,
            },
            password: {
                type: 'password',
                icon: 'password',
                name: 'password',
                template: `<input type='password' name=##name## placeholder=##placeholder## v-model=##vmodel## class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-neutral-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
                label: 'Password',
                generatedNode: null,
            },
            number: {
                type: 'number',
                icon: 'email',
                name: 'number',
                template: `<input type='number' name=##name## placeholder=##placeholder## v-model=##vmodel## class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-neutral-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
                label: 'Number',
                generatedNode: null,
            }
        }
    }

    const generateInput = function (inputType = 'text') {
        //The generateInput function takes an optional input parameter and returns the configuration for the specified input type. If no input type is provided, it defaults to the configuration for a text input.

        const formInputs = inputs();
        return formInputs[inputType] || formInputs.text;
    }

    return { inputs, generateInput }
}