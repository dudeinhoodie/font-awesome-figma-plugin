/**
 * Combine two class names;
 *
 * @param base {string}      – base class name;
 * @param className {string} – additional class name;
 */
export function concatClassName(base: string, className: string[]): string {
    const cnArr = className.map((cn) => cn);
    return [base, ...cnArr].filter((cn) => cn).join(' ');
}
