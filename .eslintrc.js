module.exports = {
  extends: "next/core-web-vitals",
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  // This are the options for `.js` files.
  // For TS, check the overrides.
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ["import", "react", "react-hooks", "jsx-a11y", "prettier"],
  settings: {
    react: {
      version: "detect",
      jsxPragma: null,
    },
    "import/extensions": [".js", ".jsx"],
  },
  rules: {
    /**
     * Include prettier rules.
     * Using multiple tools that modifies our code will probably introduce problem due to the order in which they run. The best solution is to allow only one tool to do the modification, and integrate the other tools with it.
     * Adding this rules will allow eslint to make the modification on behalf of prettier.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/prettier/eslint-plugin-prettier)
     */
    "prettier/prettier": "warn",

    /**
     * Enforce returning from array methods that should return (map, reduce, etc.).
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/array-callback-return)
     */
    "array-callback-return": "error",
    /**
     * Derived classes **must** call `super` in their constructors, while non-derived class **must not** do it.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/constructor-super)
     */
    "constructor-super": "error",
    /**
     * Enforce moving the counter in the right direction in for loops.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/for-direction)
     */
    "for-direction": "error",
    /**
     * Disallow assignment operators in conditional statements.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-cond-assign)
     */
    "no-cond-assign": "error",
    /**
     * Disallow modifying variables that are declared using `const`.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-const-assign)
     */
    "no-const-assign": "error",
    /**
     * Disallow duplicate arguments in `function`.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-dupe-args)
     */
    "no-dupe-args": "error",
    /**
     * Disallow duplicate conditions in `if-else-if` chains.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-dupe-else-if)
     */
    "no-dupe-else-if": "error",
    /**
     * Disallow duplicate keys in object literals.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-dupe-keys)
     */
    "no-dupe-keys": "error",
    /**
     * Disallow a duplicate case label.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-duplicate-case)
     */
    "no-duplicate-case": "error",
    /**
     * Disallow duplicate imports.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-duplicate-imports)
     */
    "no-duplicate-imports": "error",
    /**
     * Disallow `case` statement fallthrough.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-fallthrough)
     */
    "no-fallthrough": "error",
    /**
     * Disallow irregular whitespace.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-irregular-whitespace)
     */
    "no-irregular-whitespace": "error",
    /**
     * Disallow number literals that lose precision (due to 64-bit float rounding).
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-loss-of-precision)
     */
    "no-loss-of-precision": "error",
    /**
     * Warn if an array has an empty slot. (ex.: `[1,,2])
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-sparse-arrays)
     */
    "no-sparse-arrays": "warn",
    /**
     * Disallow unmodified conditions of loops.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-unmodified-loop-condition)
     */
    "no-unmodified-loop-condition": "error",
    /**
     * Warn when there's unreachable code after `return`, `throw`, `continue`, and `break` statements.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-unreachable)
     */
    "no-unreachable": "warn",
    /**
     * Disallow negating the left operand of relational operators - `!x in y` should be `!(x in y)`.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-unsafe-negation)
     */
    "no-unsafe-negation": "error",
    /**
     * Disallow use of optional chaining in contexts where the `undefined` value will cause a type error.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-unsafe-optional-chaining)
     */
    "no-unsafe-optional-chaining": "error",
    /**
     * Warn if a variable is unused.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-unused-vars)
     */
    "no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    /**
     * Require calls to `isNaN()` when checking for `NaN`.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/use-isnan)
     */
    "use-isnan": "error",
    /**
     * Enforce curly braces around blocks.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/curly)
     */
    curly: "error",
    /**
     * Disallow unnecessary nested blocks.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-lone-blocks)
     */
    "no-lone-blocks": "error",
    /**
     * Warn when `if` statements are the only statement in `else` blocks.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-lonely-if)
     */
    "no-lonely-if": "warn",
    /**
     * Disallow use of chained assignment expressions.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-multi-assign)
     */
    "no-multi-assign": "error",
    /**
     * Disallow octal literals. (numbers that begins with a leading `0` are treated as octal, not decimal)
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-octal)
     */
    "no-octal": "error",
    /**
     * Disallow reassignment of function parameters.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-param-reassign)
     */
    "no-param-reassign": "error",
    /**
     * Disallow use of the comma operator.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-sequences)
     */
    "no-sequences": "error",
    /**
     * Warn when ternary operator is used, but there are simpler alternatives.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-unneeded-ternary)
     */
    "no-unneeded-ternary": "warn",
    /**
     * Warn when there's an unnecessary escape.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-useless-escape)
     */
    "no-useless-escape": "warn",
    /**
     * Require `let` or `const` instead of `var`.
     * Use `var` alongside `let` and `const` will cause more mental effort to remember which scoping rules apply to which variables.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/no-var)
     */
    "no-var": "error",
    /**
     * Warn when object literal shorthand syntax can be used.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/object-shorthand)
     */
    "object-shorthand": "warn",
    /**
     * Warn when destructuring can be used.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/prefer-destructuring)
     */
    "prefer-destructuring": "warn",
    /**
     * Enforce using the rest parameters instead of `arguments`.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/prefer-rest-params)
     */
    "prefer-rest-params": "error",
    /**
     * Enforce using spread syntax instead of `.apply()`.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://eslint.org/docs/rules/prefer-spread)
     */
    "prefer-spread": "error",

    //#region `import` plugin rules
    /**
     * Ensure imports point to a file/module that can be resolved.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-unresolved.md)
     */
    "import/no-unresolved": "error",
    /**
     * Ensure named imports correspond to a named export in the remote file.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/named.md)
     */
    "import/named": "error",
    /**
     * Ensure a default export is present, given a default import.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/default.md)
     */
    "import/default": "error",
    /**
     * Ensure imported namespaces (`import * as x`) contain dereferenced properties as they are dereferenced.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/namespace.md)
     */
    "import/namespace": "error",
    /**
     * Forbid import of modules using absolute paths.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-absolute-path.md)
     */
    "import/no-absolute-path": "error",
    /**
     * Forbid a module from importing itself.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-self-import.md)
     */
    "import/no-self-import": "error",
    /**
     * Forbid a module from importing a module with a dependency path back to itself.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-cycle.md)
     */
    "import/no-cycle": "error",
    /**
     * Prevent unnecessary path segments in import and require statements.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-useless-path-segments.md)
     */
    "import/no-useless-path-segments": [
      "error",
      {
        noUselessIndex: true,
      },
    ],
    /**
     * Prevent any invalid exports, i.e. re-export of the same name.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/export.md)
     */
    "import/export": "error",
    /**
     * Prevent usage of imported names marked with @deprecated documentation tag.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-deprecated.md)
     */
    "import/no-deprecated": "error",
    /**
     * Forbid the use of extraneous packages (undeclared in `package.json`).
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-extraneous-dependencies.md)
     */
    "import/no-extraneous-dependencies": "error",
    /**
     * Forbid the use of mutable exports with `var` or `let`.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-mutable-exports.md)
     */
    "import/no-mutable-exports": "error",
    /**
     * Warn for modules without exports, or exports without matching import in another module.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-unused-modules.md)
     */
    "import/no-unused-modules": "warn",
    /**
     * Ensure all imports appear before other statements.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/first.md)
     */
    "import/first": "error",
    /**
     * Prevent repeated import of the same module in multiple places.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md)
     */
    "import/no-duplicates": "error",
    /**
     * Warn when named exports are not grouped together in a single export declaration .
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/group-exports.md)
     */
    "import/group-exports": "warn",
    /**
     * Enforces the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
     */
    "react-hooks/rules-of-hooks": "error",
    /**
     * Warn when a variable is referenced ina hook, and is missing from the dependencies' array.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
     */
    "react-hooks/exhaustive-deps": "warn",
    //#endregion `import` plugin rules

    //#region `jsx-a11y` plugin rules
    /**
     * Warn when an `alt` attribute is not provided to an element that requires one.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/alt-text.md)
     */
    "jsx-a11y/alt-text": "warn",
    /**
     * Warn when an anchor doesn't contain accessible content.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-has-content.md)
     */
    "jsx-a11y/anchor-has-content": "warn",
    /**
     * Warn when an anchor is not a valid, navigable element.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md)
     */
    "jsx-a11y/anchor-is-valid": "warn",
    /**
     * Warn when an element with `aria-activedescendant` is not tabbable.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-activedescendant-has-tabindex.md)
     */
    "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
    /**
     * Warn when an `aria-*` prop is not valid.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-props.md)
     */
    "jsx-a11y/aria-props": "warn",
    /**
     * Warn when an ARIA state or property value are not valid.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-proptypes.md)
     */
    "jsx-a11y/aria-proptypes": "warn",
    /**
     * Warn when an element with ARIA roles doesn't use a valid, non-abstract ARIA role.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-role.md)
     */
    "jsx-a11y/aria-role": "warn",
    /**
     * Warn when an element that doesn't support ARIA roles, states, and properties have one of those attributes.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-unsupported-elements.md)
     */
    "jsx-a11y/aria-unsupported-elements": "warn",
    /**
     * Warn when autocomplete attributes are not used correctly.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/autocomplete-valid.md)
     */
    "jsx-a11y/autocomplete-valid": "warn",
    /**
     * Warn when a clickable non-interactive element doesn't have at least one keyboard event listener.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/click-events-have-key-events.md)
     */
    "jsx-a11y/click-events-have-key-events": "warn",
    /**
     * Warn when a heading (`h1`, `h2`, etc) element doesn't contain accessible content.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/heading-has-content.md)
     */
    "jsx-a11y/heading-has-content": "warn",
    /**
     * Warn when an `<html>` element doesn't have lang prop.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/html-has-lang.md)
     */
    "jsx-a11y/html-has-lang": "warn",
    /**
     * Warn when an `iframe` element doesn't have a title attribute.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/iframe-has-title.md)
     */
    "jsx-a11y/iframe-has-title": "warn",
    /**
     * Warn when `<img>` `alt` prop contain the word "image", "picture", or "photo".
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/img-redundant-alt.md)
     */
    "jsx-a11y/img-redundant-alt": "warn",
    /**
     * Warn when an element with interactive handlers like `onClick` is not focusable.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/interactive-supports-focus.md)
     */
    "jsx-a11y/interactive-supports-focus": "warn",
    /**
     * Warn when a label tag doesn't have a text label or an associated control.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/label-has-associated-control.md)
     */
    "jsx-a11y/label-has-associated-control": "warn",
    /**
     * Warn when `lang` attribute doesn't have a valid value.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/lang.md)
     */
    "jsx-a11y/lang": "warn",
    /**
     * Warn when `<audio>` or `<video>` elements don't have a `<track>` for captions.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/media-has-caption.md)
     */
    "jsx-a11y/media-has-caption": "warn",
    /**
     * Warn when `onMouseOver`/`onMouseOut` are not accompanied by `onFocus`/`onBlur` for keyboard-only users.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/mouse-events-have-key-events.md)
     */
    "jsx-a11y/mouse-events-have-key-events": "warn",
    /**
     * Warn when the `accessKey` prop is used on an element to avoid complications with keyboard commands used by a screenreader.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-access-key.md)
     */
    "jsx-a11y/no-access-key": "warn",
    /**
     * Warn when `autoFocus` prop is used.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-autofocus.md)
     */
    "jsx-a11y/no-autofocus": "warn",
    /**
     * Warn when distracting elements are used.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-distracting-elements.md)
     */
    "jsx-a11y/no-distracting-elements": "warn",
    /**
     * Warn when an interactive element is assigned non-interactive roles.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md)
     */
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "warn",
    /**
     * Warn when a non-interactive elements is assigned mouse or keyboard event listeners.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-element-interactions.md)
     */
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    /**
     * Warn when a non-interactive element is assigned interactive roles.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md)
     */
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
    /**
     * Warn when`tabIndex` is declared on a non-interactive elements.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-tabindex.md)
     */
    "jsx-a11y/no-noninteractive-tabindex": "warn",
    /**
     * Warn when an explicit `role` property is the same as implicit/default `role` property on an element.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-redundant-roles.md)
     */
    "jsx-a11y/no-redundant-roles": "warn",
    /**
     * Warn when a non-interactive, visible element (such as `<div>`) that have click handlers doesn't use the `role` attribute.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-static-element-interactions.md)
     */
    "jsx-a11y/no-static-element-interactions": "warn",
    /**
     * Warn when an element with ARIA roles don't have all required attributes for that role.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md)
     */
    "jsx-a11y/role-has-required-aria-props": "warn",
    /**
     * Warn when an element with explicit or implicit roles defined contain `aria-*` properties that are not supported by that `role`.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-supports-aria-props.md)
     */
    "jsx-a11y/role-supports-aria-props": "warn",
    /**
     * Warn when `scope` prop is used on elements other than `<th>` elements.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/scope.md)
     */
    "jsx-a11y/scope": "warn",
    /**
     * Warn when `tabIndex` value is greater than zero.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/tabindex-no-positive.md)
     */
    "jsx-a11y/tabindex-no-positive": "warn",
    //#endregion `jsx-a11y` plugin rules

    //#region `react` plugin rules
    /**
     * Enforces consistent naming for boolean props. (ex: isOpen instead of open)
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/boolean-prop-naming.md)
     */
    "react/boolean-prop-naming": "warn",
    /**
     * Prevent passing of children as props.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-children-prop.md)
     */
    "react/no-children-prop": "error",
    /**
     * Prevent using both children and dangerouslySetInnerHTML.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-danger-with-children.md)
     */
    "react/no-danger-with-children": "error",
    /**
     * Prevent usage of deprecated methods.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-deprecated.md)
     */
    "react/no-deprecated": "error",
    /**
     * Prevent string definitions for `ref`s and prevent referencing `this.refs`.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-string-refs.md)
     */
    "react/no-string-refs": "error",
    /**
     * Prevent unescaped HTML entities, which might represent malformed tags.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unescaped-entities.md)
     */
    "react/no-unescaped-entities": "error",
    /**
     * Enforce ES5 or ES6 class for returning value in render function.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-render-return.md)
     */
    "react/require-render-return": "error",
    /**
     * Prevent passing of children to void DOM elements (e.g. `<br />`).
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/void-dom-elements-no-children.md)
     */
    "react/void-dom-elements-no-children": "error",
    /**
     * Enforce passing `key` props in iterators/collection literals.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-key.md)
     */
    "react/jsx-key": "error",
    /**
     * Prevent duplicate props.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-duplicate-props.md)
     */
    "react/jsx-no-duplicate-props": "error",
    /**
     * Forbid `javascript:` URLs.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-script-url.md)
     */
    "react/jsx-no-script-url": "error",
    /**
     * Warns when `target` is set to `_blank` without `rel="noreferrer"`.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-target-blank.md)
     */
    "react/jsx-no-target-blank": "warn",
    /**
     * Warns when undeclared variables are used in JSX.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-undef.md)
     */
    "react/jsx-no-undef": "warn",
    /**
     * Prevent React to be marked as unused.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-react.md)
     */
    "react/jsx-uses-react": "error",
    /**
     * Prevent variables used in JSX to be marked as unused.
     * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
     * [reference](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-vars.md)
     */
    "react/jsx-uses-vars": "error",
    //#endregion `react` plugin rules

    // All the following rules will be turned off, because they will be handled by the formatter.
    // #region Formatting Rules
    "no-extra-semi": "off",
    "no-floating-decimal": "off",
    "no-mixed-operators": "off",
    "array-bracket-newline": "off",
    "array-bracket-spacing": "off",
    "array-element-newline": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "block-spacing": "off",
    "brace-style": "off",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "comma-style": "off",
    "computed-property-spacing": "off",
    "dot-location": "off",
    "eol-last": "off",
    "func-call-spacing": "off",
    "function-call-argument-newline": "off",
    "function-paren-newline": "off",
    "generator-star-spacing": "off",
    "implicit-arrow-linebreak": "off",
    indent: "off",
    "jsx-quotes": "off",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "line-comment-position": "off",
    "linebreak-style": "off",
    "lines-around-comment": "off",
    "lines-between-class-members": "off",
    "max-len": "off",
    "max-statements-per-line": "off",
    "multiline-ternary": "off",
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-extra-parens": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-multi-spaces": "off",
    "no-multiple-empty-lines": "off",
    "no-tabs": "off",
    "no-trailing-spaces": "off",
    "no-whitespace-before-property": "off",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "object-property-newline": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "padding-line-between-statements": "off",
    quotes: "off",
    "rest-spread-spacing": "off",
    semi: "off",
    "semi-spacing": "off",
    "semi-style": "off",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "space-in-parens": "off",
    "space-infix-ops": "off",
    "space-unary-ops": "off",
    "switch-colon-spacing": "off",
    "template-curly-spacing": "off",
    "template-tag-spacing": "off",
    "unicode-bom": "off",
    "wrap-iife": "off",
    "wrap-regex": "off",
    "yield-star-spacing": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-newline": "off",
    "react/jsx-props-no-multi-spaces": "off",
    "react/jsx-space-before-closing": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-wrap-multilines": "off",
    //#endregion Formatting Rules
  },
  overrides: [
    {
      // This are the options for `.ts` and `.tsx` files
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: false,
      },
      plugins: ["@typescript-eslint"],
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          node: {
            extensions: [".ts"],
          },
          typescript: {
            alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/react`
            project: "./tsconfig.json",
          },
        },
      },
      rules: {
        /**
         * Require that member overloads be consecutive.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md)
         */
        "@typescript-eslint/adjacent-overload-signatures": "error",
        /**
         * Requires using `T[]` for arrays.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.md)
         */
        "@typescript-eslint/array-type": [
          "error",
          {
            default: "array-simple",
            readonly: "array-simple",
          },
        ],
        /**
         * Disallow `await` on a value that is not a `Thenable`.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/await-thenable.md)
         */
        "@typescript-eslint/await-thenable": "error",
        /**
         * Bans `@ts-<directive>` comments from being used.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md)
         */
        "@typescript-eslint/ban-ts-comment": "error",
        /**
         * Bans specific types from being used (ex.: `String`, `Number`, `Function`, etc.).
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-types.md)
         */
        "@typescript-eslint/ban-types": "error",
        /**
         * Enforces consistent usage of `as` for type assertions.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)
         */
        "@typescript-eslint/consistent-type-assertions": "error",
        /**
         * Enforces consistent usage of `type` exports.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-exports.md)
         */
        "@typescript-eslint/consistent-type-exports": "error",
        /**
         * Enforces consistent usage of `type` imports.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md)
         */
        "@typescript-eslint/consistent-type-imports": "error",
        /**
         * Enforces using function property signature syntax over method syntax.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/method-signature-style.md)
         */
        "@typescript-eslint/method-signature-style": "error",
        /**
         * Disallow non-null assertion in locations that may be confusing.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md)
         */
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        /**
         * Disallow usage of the `any` type.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md)
         */
        "@typescript-eslint/no-explicit-any": "warn",
        /**
         * Disallow extra non-null assertion.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md)
         */
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        /**
         * Warn when there's an explicit type declarations for variables or parameters initialized to a number, string, or boolean.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.md)
         */
        "@typescript-eslint/no-inferrable-types": "warn",
        /**
         * Enforce valid definition of `new` and `constructor`.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-new.md)
         */
        "@typescript-eslint/no-misused-new": "error",
        /**
         * Avoid using promises in places not designed to handle them.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-promises.md)
         */
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksVoidReturn: false,
          },
        ],
        /**
         * Disallow the use of custom TypeScript `module`s and `namespace`s.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-namespace.md)
         */
        "@typescript-eslint/no-namespace": "error",
        /**
         * Disallow using a non-null assertion in the left operand of the nullish coalescing operator.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md)
         */
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        /**
         * Disallow using a non-null assertion after an optional chain expression.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md)
         */
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        /**
         * Warn when there's unnecessary equality comparisons against boolean literals.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md)
         */
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
        /**
         * Warn when a type assertion does not change the type of an expression.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md)
         */
        "@typescript-eslint/no-unnecessary-type-assertion": "warn",
        /**
         * Disallow unnecessary constraints on generic types.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md)
         */
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        /**
         * Disallow the use of require statements except in import statements.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-var-requires.md)
         */
        "@typescript-eslint/no-var-requires": "error",
        /**
         * Ensure initializing each enums member value.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md)
         */
        "@typescript-eslint/prefer-enum-initializers": "error",
        /**
         * Enforce `includes` method over `indexOf` method.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-includes.md)
         */
        "@typescript-eslint/prefer-includes": "error",
        /**
         * Enforce using concise optional chain expressions instead of chained logical ands.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-optional-chain.md)
         */
        "@typescript-eslint/prefer-optional-chain": "error",
        /**
         * Enforce using type parameter when calling `Array#reduce` instead of casting.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md)
         */
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        /**
         * Enforce that `this` is used when only `this` type is returned.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-return-this-type.md)
         */
        "@typescript-eslint/prefer-return-this-type": "error",
        /**
         * Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md)
         */
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        /**
         * When adding two variables, operands must both be of type number or of type string.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-plus-operands.md)
         */
        "@typescript-eslint/restrict-plus-operands": "error",
        /**
         * Enforce template literal expressions to be of string type.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-template-expressions.md)
         */
        "@typescript-eslint/restrict-template-expressions": "error",
        /**
         * Ensure exhaustiveness checking in switch with union type.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md)
         */
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        /**
         * Disallow triple slash directives in favor of ES6-style import declarations.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/triple-slash-reference.md)
         */
        "@typescript-eslint/triple-slash-reference": "error",
        /**
         * Enforces unbound methods are called with their expected scope.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unbound-method.md)
         */
        "@typescript-eslint/unbound-method": "error",
        /**
         * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unified-signatures.md)
         */
        "@typescript-eslint/unified-signatures": "error",

        // Rules that eslint can't enforce because it doesn't know how to handle TS syntax.
        // After each rule, we will disable its eslint equivalent.
        //#region Duplicate rules
        /**
         * Disallow duplicate imports.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicate-imports.md)
         */
        "@typescript-eslint/no-duplicate-imports": "error",
        "no-duplicate-imports": "off",
        /**
         * Disallow literal numbers that lose precision.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-loss-of-precision.md)
         */
        "@typescript-eslint/no-loss-of-precision": "error",
        "no-loss-of-precision": "off",
        /**
         * Disallow unused variables.
         * @type {'off'|'warn'|'error'|['warn',*]|['error',*]}
         * [reference](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md)
         */
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            varsIgnorePattern: "^_",
            argsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
            ignoreRestSiblings: true,
          },
        ],
        "no-unused-vars": "off",
        //#endregion Duplicate rules

        // All the following rules will be turned off, because they will be handled by the compiler.
        "constructor-super": "off", // ts(2335) & ts(2377)
        "getter-return": "off", // ts(2378)
        "no-const-assign": "off", // ts(2588)
        "no-dupe-args": "off", // ts(2300)
        "no-dupe-class-members": "off", // ts(2393) & ts(2300)
        "no-dupe-keys": "off", // ts(1117)
        "no-func-assign": "off", // ts(2539)
        "no-import-assign": "off", // ts(2539) & ts(2540)
        "no-new-symbol": "off", // ts(2588)
        "no-obj-calls": "off", // ts(2349)
        "no-redeclare": "off", // ts(2451)
        "no-setter-return": "off", // ts(2408)
        "no-this-before-super": "off", // ts(2376)
        "no-undef": "off", // ts(2304)
        "no-unreachable": "off", // ts(7027)
        "no-unsafe-negation": "off", // ts(2365) & ts(2360) & ts(2358)
        "valid-typeof": "off", // ts(2367)

        // All the following rules will be turned off, because they will be handled by the formatter.
        // #region Formatting Rules
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/brace-style": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/comma-spacing": "off",
        "@typescript-eslint/default-param-last": "off",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/func-call-spacing": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/keyword-spacing": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/no-extra-parens": "off",
        "@typescript-eslint/no-extra-semi": "off",
        "@typescript-eslint/object-curly-spacing": "off",
        "@typescript-eslint/padding-line-between-statements": "off",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/space-infix-ops": "off",
        //#endregion
      },
    },
    {
      // This are the options for just the `.tsx` files
      files: ["**/*.tsx"],
      rules: {
        "@typescript-eslint/ban-types": [
          "error",
          {
            extendDefaults: true,
            types: {
              "{}": false,
            },
          },
        ],
      },
    },
  ],
};
