type NonZeroDigit = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Digit = '0' | NonZeroDigit;
type Digits = `${NonZeroDigit}${Digit | string}`;

type Triple = `${Digits}.${Digits}.${Digits}`;
type PreRelease = `-${string}`;

type Semver = `${Triple}${PreRelease | ''}`;

type DeprecationsByVersion = { [version: Semver]: string };

declare function deprecations<T extends string = string>(...packageNames: T[]): Promise<Record<T, DeprecationsByVersion>>;

export = deprecations;
