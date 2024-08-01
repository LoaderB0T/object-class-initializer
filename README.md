[![npm](https://img.shields.io/npm/v/object-class-initializer?color=%2300d26a&style=for-the-badge)](https://www.npmjs.com/package/object-class-initializer)
[![Build Status](https://img.shields.io/github/actions/workflow/status/LoaderB0T/object-class-initializer/build.yml?branch=main&style=for-the-badge)](https://github.com/LoaderB0T/object-class-initializer/actions/workflows/build.yml)
[![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/LoaderB0T_object-class-initializer?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge)](https://sonarcloud.io/summary/new_code?id=LoaderB0T_object-class-initializer)
[![bundle size](https://img.shields.io/bundlephobia/minzip/object-class-initializer?color=%23FF006F&label=Bundle%20Size&style=for-the-badge)](https://bundlephobia.com/package/object-class-initializer)

# Object Class Initializer

Demo repo for using an anonymous class as an object initializer in TypeScript.

## Motivation 💥

Create an object using an anonymous class to access the 'object' during its initialization. It's 6 lines of code, you might want to just copy paste this instead of installing this package, but who am I to judge?

## Read About This 📖

I wrote a [medium post](https://loaderb0t.medium.com/you-cannot-access-a-javascript-object-during-its-initialization-or-can-you-513fa248cfb7) about the idea of this package. Please read the post to get all the details!

## Features 🔥

✅ Create an object instance using an anonymous class

✅ Access the object during its initialization

✅ Type the object using generics (type safety)

✅ No dependencies

## Built With 🔧

- [TypeScript](https://www.typescriptlang.org/)

## Installation 📦

```console
pnpm i object-class-initializer
// or
yarn add object-class-initializer
// or
npm i object-class-initializer
```

## Usage Example 🚀

```typescript
import { createObject } from 'object-class-initializer';
```

```typescript
const obj = createObject(
  class {
    a = 'foo';
    b = 'bar';
    c = this.a + this.b; // foobar
  }
);
// obj is now typed as { a: string, b: string, c: string }

// OR typed

type FooBar = {
  a: string;
  b: string;
  c: string;
};

const obj = createObject<FooBar>(
  class {
    a = 'foo';
    b = 'bar';
    c = this.a + this.b; // foobar
  }
);
// obj is now typed as FooBar
```

## Contributing 🧑🏻‍💻

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 🔑

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact 📧

Janik Schumacher - [@LoaderB0T](https://twitter.com/LoaderB0T) - [linkedin](https://www.linkedin.com/in/janikschumacher/)

Project Link: [https://github.com/LoaderB0T/object-class-initializer](https://github.com/LoaderB0T/object-class-initializer)
