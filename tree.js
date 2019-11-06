const fs = require('fs');
const util = require('util');
const dirTree = require('directory-tree');

(async function() {
    try {
        async function convertFiles(files) {
            if (!files) {
                return [];
            }

            const items = [];

            for (const file of files) {
                const content = await readFile(file.path);

                items.push({
                    ...file,
                    content,
                });
            }

            return items;
        }

        const readFile = (fileName) => {
            return util.promisify(fs.readFile)(fileName, 'utf8');
        };

        const { children } = dirTree('./src/assets/icons');
        const icons = {
            items: await convertFiles(children),
        };

        fs.writeFile('icons.json', JSON.stringify(icons), 'utf8', function() {
            console.log('JSON with icons has been successfully created');
        });
    } catch (error) {
        throw new Error(error);
    }
})();
