module.exports = function (hookArgs) {
    return (args, originalMethod) => {
        return originalMethod(...args).then(originalPatterns => {
            return [...originalPatterns, "node_modules/nativescript-plugin/**/*", '!node_modules/nativescript-plugin/**/*.ts'];
        });
    };
}