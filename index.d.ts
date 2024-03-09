type NonZeroDigit = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Digit = '0' | NonZeroDigit;
type Digits = `${NonZeroDigit}${Digit | string}`;

type Triple = `${Digits}.${Digits}.${Digits}`;
type PreRelease = `-${string}`;
type Semver = `${Triple}${PreRelease | ''}`;

declare namespace deprecations {
    type DeprecationsByVersion = { [version: Semver]: string };

    type DeprecationsByVersionByName<T extends string> = Record<T, deprecations.DeprecationsByVersion>;
}

declare function deprecations<T extends string = string>(
    ...packageNames: T[],
): Promise<deprecations.DeprecationsByVersionByName<T>>;

export = deprecations;
