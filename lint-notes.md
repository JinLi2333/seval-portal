1. This can prevents any `import from '@seval-portal/client'`
``` json
'no-restricted-imports': [
  "error",
  {
    paths: [
      {
        name: '@seval-portal/client',
        message: 'should not import from client',
      }
    ]
  }
],
```

2. This can prevent any `import from ../../shared/xxx` from `client` package
``` json
'import/no-restricted-paths': [
  'error',
  {
    zones: [
      {
        target: 'packages/client',
        from: 'packages/shared',
        message: "client should not import from shared",
      },
    ],
  },
]
```


3. This prevents any `import from '../xxx'` for all files, even from same package
``` json
'no-restricted-imports': [
  "error",
  {
    "patterns": ["../*"]
  }
],
```

Maybe we can use #3 with typescript path alias to prevent this kind of import, but it's not a good idea to use this rule in a large project, because it's too strict.

Ideally, we should prevent any path import from other packages, but allow path import from the same package.
For example
``` typescript
// packages/shared/src/lib/Header.tsx
import { BasicButton } from '../components/Button'; // ok, in the same package
import { foo } from '../../../tools/src/utils';     // not allowed, from other package
```

This is what I want
```
"import/no-relative-packages": "error"
```

```
// packages/shared/src/lib/shared/Tail.tsx
import { Header } from "../Header";          // ok, in the same package
import { PurpleButton } from "../../Button"; // ok, in the same package
import { greet } from '../../../../tools'    // not allowed, from other package
```

## Use .pnpmfile.cjs to restrict dependencies
``` javascript
module.exports = {
  hooks: {
    readPackage(pkg) {
      const restrictedDeps = {
        "@seval-portal/client": ["@seval-portal/shared"], // Restrict @org/model for @org/shared
      };

      if (restrictedDeps[pkg.name]) {
        const forbidden = restrictedDeps[pkg.name].filter((dep) =>
          Object.keys(pkg.dependencies || {}).includes(dep)
        );

        if (forbidden.length > 0) {
          throw new Error(
            `❌ Package "${pkg.name}" cannot depend on ${forbidden.join(", ")}`
          );
        }
      }

      return pkg;
    }
  }
};

```