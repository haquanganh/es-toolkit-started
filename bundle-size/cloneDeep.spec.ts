import { describe, expect, it } from 'vitest';
import { getBundleSize } from './getBundleSize';

describe('cloneDeep bundle size', () => {
  it('lodash-es', async () => {
    const bundleSize = await getBundleSize('lodash-es', 'cloneDeep');
    console.log('lodash-es-bundle-size', bundleSize);
    expect(true);
  });

  it('es-toolkit', async () => {
    const bundleSize = await getBundleSize('es-toolkit', 'cloneDeep');
    console.log('es-toolkit-bundle-size', bundleSize);
    expect(true);
  });

  it('es-toolkit/compat', async () => {
    const bundleSize = await getBundleSize('es-toolkit/compat', 'cloneDeep');
    console.log('es-toolkit/compat', bundleSize);
    expect(true);
  });
});
