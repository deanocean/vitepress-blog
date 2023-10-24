# Nuxt で TypeScript のglobal interface を使う

Nuxtのプロジェクトの配下に `types/index.d.ts` ファイルを作成します。

```ts
// types/index.d.ts
declare global {
  interface IApidata {
    items: object;
    totalResults: number;
  }
}

export {};
```

<br>

`<IApidata>` を任意の `*.vue` ファイルで使えます。
```ts
// *.vue
const computedData = computed(()=> (<IApidata>rawData.value).items);
```
