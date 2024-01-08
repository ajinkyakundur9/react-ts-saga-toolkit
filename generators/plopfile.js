module.exports = (plop) => {
	plop.setGenerator('component', {
		description: 'Create a component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your component name?',
			},
		],
		actions: [
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
				templateFile: 'templates/Component.tsx.hbs',
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/index.ts',
				templateFile: 'templates/index.ts.hbs',
			},
			// {
			// 	type: 'add',
			// 	path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
			// 	templateFile: 'templates/styles.ts.hbs',
			// },
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
				templateFile: 'templates/stories.tsx.hbs',
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
				templateFile: 'templates/test.tsx.hbs',
			},
		],
	});
	plop.setGenerator('reduxActions', {
		description: 'Create a saga and slice',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your component name?',
			},
		],
		actions: [
			{
				type: 'add',
				path: '../src/store/actions/{{camelCase name}}/{{camelCase name}}Saga.ts',
				templateFile: 'store-actions/saga.ts.hbs',
			},
			{
				type: 'add',
				path: '../src/store/actions/{{camelCase name}}/{{camelCase name}}Slice.ts',
				templateFile: 'store-actions/slice.ts.hbs',
			},
		],
	});
};
