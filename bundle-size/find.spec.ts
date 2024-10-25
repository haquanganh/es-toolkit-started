import { describe, expect, it } from 'vitest';
import { getBundleSize } from './getBundleSize';

describe('find bundle size', () => {
  it('lodash-es', async () => {
    const bundleSize = await getBundleSize('lodash-es', 'find');
    console.log('lodash-es-find', bundleSize);
    expect(true);
  });

  it('es-toolkit', async () => {
    const bundleSize = await getBundleSize('es-toolkit/compat', 'find');
    console.log('es-toolkit', bundleSize);
    expect(true);
  });
});
