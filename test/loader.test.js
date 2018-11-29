import compiler from './index.js';

test('svgo loader', async () => {
    const stats = await compiler('test.js');
    const output = stats.toJson().modules[0].source;
    console.log(output);

    // expect(output).toBe('export default "Hey Alice!\\n"');
    expect(output).toBe("const email = require('./file/email.svg');\n");
});
