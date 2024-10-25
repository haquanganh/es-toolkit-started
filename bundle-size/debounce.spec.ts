import { describe, expect, it } from 'vitest';
import { getBundleSize } from './getBundleSize';

describe('debounce bundle size', () => {
  it('lodash-es', async () => {
    const bundleSize = await getBundleSize('lodash-es', 'debounce');
    console.log('lodash-es-debounce', bundleSize);
    expect(true);
  });

  it('es-toolkit', async () => {
    const bundleSize = await getBundleSize('es-toolkit', 'debounce');
    console.log('es-toolkit', bundleSize);
    expect(true);
  });

  it('es-toolkit/compat', async () => {
    const bundleSize = await getBundleSize('es-toolkit/compat', 'debounce');
    console.log('es-toolkit/compat', bundleSize);
    expect(true);
  });
});
