module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Warn when @data is used to import schema files instead of @schema',
      category: 'Best Practices',
      recommended: true
    },
    fixable: 'code',
    schema: [],
    messages: {
      useSchemaAlias: 'Use @schema/* instead of @data/* for schema files. Found: {{importPath}}'
    }
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        const importPath = node.source.value;
        
        // Check if import uses @data and points to schema files
        if (typeof importPath === 'string' && importPath.startsWith('@data/')) {
          // Check if the path contains 'schema' or points to schema directory
          if (importPath.includes('schema') || importPath.startsWith('@data/schema')) {
            context.report({
              node: node.source,
              messageId: 'useSchemaAlias',
              data: {
                importPath: importPath
              },
              fix(fixer) {
                // Suggest replacement with @schema
                const newPath = importPath.replace('@data/schema', '@schema');
                return fixer.replaceText(node.source, `'${newPath}'`);
              }
            });
          }
        }
      },

      // Also check require() calls
      CallExpression(node) {
        if (node.callee.name === 'require' && node.arguments.length === 1) {
          const arg = node.arguments[0];
          if (arg.type === 'Literal' && typeof arg.value === 'string') {
            const requirePath = arg.value;
            
            if (requirePath.startsWith('@data/') && 
                (requirePath.includes('schema') || requirePath.startsWith('@data/schema'))) {
              context.report({
                node: arg,
                messageId: 'useSchemaAlias',
                data: {
                  importPath: requirePath
                },
                fix(fixer) {
                  const newPath = requirePath.replace('@data/schema', '@schema');
                  return fixer.replaceText(arg, `'${newPath}'`);
                }
              });
            }
          }
        }
      }
    };
  }
};