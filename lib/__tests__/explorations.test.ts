import { describe, it, expect } from 'vitest';
import { EXPLORATIONS, getExplorationBySlug } from '../data/explorations';

describe('Exploration Assets Data Layer', () => {
  it('should contain exactly 10 technology explorations', () => {
    expect(EXPLORATIONS).toHaveLength(10);
  });

  it('should have required slugs for all 10 explorations', () => {
    const requiredSlugs = [
      'neuroai',
      'neuromusic',
      'neurolight',
      'brain-to-world',
      'ai-robotics',
      'machine-perception',
      'edge-intelligence',
      'immersive-ai',
      'neuro-smart-home',
      'assistive-intelligence',
    ];

    const actualSlugs = EXPLORATIONS.map((e) => e.slug);
    requiredSlugs.forEach((slug) => {
      expect(actualSlugs).toContain(slug);
    });
  });

  it('should retrieve exploration asset by slug', () => {
    const neuromusic = getExplorationBySlug('neuromusic');
    expect(neuromusic).toBeDefined();
    expect(neuromusic?.name).toBe('NeuroMusic');
    expect(neuromusic?.assetLayer.trl).toBeDefined();
  });

  it('should have valid roadmap phases for all assets', () => {
    EXPLORATIONS.forEach((asset) => {
      expect(asset.roadmap.explore).toBeTruthy();
      expect(asset.roadmap.prototype).toBeTruthy();
      expect(asset.roadmap.integrate).toBeTruthy();
      expect(asset.roadmap.productize).toBeTruthy();
    });
  });
});
