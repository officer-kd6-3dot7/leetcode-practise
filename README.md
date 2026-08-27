# ts-lc

A VS Code template for solving LeetCode problems in TypeScript.

`ts-lc` is an **addon on top of the VS Code LeetCode extension**. It provides a richer local TypeScript development environment while keeping the LeetCode extension responsible for interacting with LeetCode.

## Getting Started

1. Fork this repository.
2. Clone it.
3. Run:

```bash
pnpm install
```

4. Open the repository in VS Code.
5. Install the recommended extensions.
6. Configure the LeetCode extension to use the `src` directory as its workspace folder.

You can either set this manually through the extension or add the following to global settings.json

```json
"leetcode.workspaceFolder": "...\\ts-lc\\src"
"leetcode.defaultLanguage": "typescript",
```

Once configured, LeetCode problem files are created inside `src`.

### The LeetCode extension is required

This repository does **not** replace the LeetCode extension.

The extension handles:

- Signing in to LeetCode
- Pulling problems
- Creating problem files
- Running LeetCode test cases
- Submitting solutions
- Other LeetCode API interactions

Use this repository as the **local development environment on top of the extension**.

---

## Recommended Extensions

The repository recommends:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "leetcode.vscode-leetcode",
    "yoavbls.pretty-ts-errors",
    "orta.vscode-twoslash-queries",
    "wallabyjs.quokka-vscode"
  ]
}
```

### ESLint

`dbaeumer.vscode-eslint`

Provides ESLint integration and diagnostics directly in VS Code.

### Prettier

`esbenp.prettier-vscode`

Provides formatting using the repository's Prettier configuration.

### LeetCode

`leetcode.vscode-leetcode`

**Critical to this template.** Handles the actual interaction with LeetCode, including authentication, pulling questions, testing and submission.

### Pretty TypeScript Errors

`yoavbls.pretty-ts-errors`

Makes large and deeply nested TypeScript diagnostics easier to read.

### Twoslash Queries

`orta.vscode-twoslash-queries`

Allows TypeScript types to be inspected directly in the editor.

### Quokka.js

`wallabyjs.quokka-vscode`

Runs JavaScript/TypeScript expressions directly inside the file and displays runtime values inline.

Useful for quickly testing a function without creating a separate test file.

---

## TypeScript Environment

The local environment uses:

| Component  | Version   |
| ---------- | --------- |
| TypeScript | `5.7.3`   |
| Node.js    | `22.14.0` |
| pnpm       | `10.15.0` |

TypeScript targets ES2024 with:

```text
--alwaysStrict
--strictBindCallApply
--strictFunctionTypes
--target ES2024
```

VS Code is configured to use the repository's local TypeScript installation:

```json
"js/ts.tsdk.path": "node_modules\\typescript\\lib"
```

---

## Dependencies

The dependencies available to LeetCode solutions are pinned to exact versions.

### Lodash

```json
"lodash": "4.17.21"
```

LeetCode provides Lodash as `_` globally. This repository therefore declares the global for TypeScript in `global.d.ts`:

```ts
import type lodash from "lodash";

declare global {
  const _: typeof lodash;
}
```

This allows:

```ts
_.isEqual(a, b);
```

without importing Lodash in the solution.

### datastructures-js

The following versions are included:

```text
@datastructures-js/binary-search-tree   5.4.0
@datastructures-js/deque                1.0.8
@datastructures-js/graph                5.3.1
@datastructures-js/heap                 4.3.7
@datastructures-js/linked-list          6.1.4
@datastructures-js/priority-queue       6.3.5
@datastructures-js/queue                4.3.0
@datastructures-js/set                  4.2.2
@datastructures-js/stack                3.1.6
@datastructures-js/trie                 4.2.3
```

Documentation:

https://datastructures-js.info/docs

For Binary Search Tree, Trie, and Graph, import the package manually when required because some of their exported names can conflict with names used by LeetCode problems.

For example:

```ts
import h from "@datastructures-js/heap";

const { MinHeap } = h;
```

or:

```ts
import bst from "@datastructures-js/binary-search-tree";

const { BinarySearchTree } = bst;
```

---

## License

MIT
