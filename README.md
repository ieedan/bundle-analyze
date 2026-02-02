# Bundle Analyze

Analyze the unpacked size of an npm package with a simple, fast CLI.

```bash
npx bundle-analyze
```

### Options

- `--fail-if-exceeds-bytes <bytes>` Exit with code 1 if the size exceeds the limit.
- `--json` Output results as JSON.

### Examples

### Analyze a specific path

```bash
npx bundle-analyze ./packages/ui
```

### Fail if bundle size exceeds limit

```bash
npx bundle-analyze --fail-if-exceeds-bytes 1048576
```

### Output results as JSON

```bash
npx bundle-analyze --json
```
