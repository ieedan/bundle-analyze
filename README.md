# Bundle Analyze

Analyze the unpacked size of an npm package with a simple, fast CLI.

```bash
npx bundle-analyze

Total unpacked size: 9 KB
├── dist 6.14 KB (68.2%)
│  └── index.cjs 6.14 KB (68.2%)
├── package.json 1.32 KB (14.7%)
├── LICENSE 1.04 KB (11.6%)
└── README.md 511 B (5.5%)
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
