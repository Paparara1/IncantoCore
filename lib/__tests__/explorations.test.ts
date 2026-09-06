import { describe, it, expect } from 'vitest';
import { EXPLORATIONS, getExplorationBySlug } from '../data/explorations';

describe('Technology Asset Registry Data Layer Validation', () => {
  it('should contain exactly 10 technology explorations', () => {
    expect(EXPLORATIONS).toHaveLength(10);
  });

  it('should have all 10 required technology slugs with no duplicates', () => {
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
    expect(new Set(actualSlugs).size).toBe(10);

    requiredSlugs.forEach((slug) => {
      expect(actualSlugs).toContain(slug);
    });
  });

  it('should retrieve exploration assets by slug correctly', () => {
    const neuromusic = getExplorationBySlug('neuromusic');
    expect(neuromusic).toBeDefined();
    expect(neuromusic?.name).toBe('NeuroMusic');
    expect(neuromusic?.demonstratorType).toBe('neuromusic');

    const edge = getExplorationBySlug('edge-intelligence');
    expect(edge).toBeDefined();
    expect(edge?.name).toBe('Edge Intelligence');
  });

  it('should validate that TRL levels fall within valid range (1 to 9)', () => {
    EXPLORATIONS.forEach((asset) => {
      expect(asset.trl).toBeGreaterThanOrEqual(1);
      expect(asset.trl).toBeLessThanOrEqual(9);
    });
  });

  it('should validate status values', () => {
    const validStatuses = ['Active R&D', 'Proof of Concept', 'Prototype', 'Validation', 'Integration Ready'];
    EXPLORATIONS.forEach((asset) => {
      expect(validStatuses).toContain(asset.status);
    });
  });

  it('should validate complete asset layer matrix fields', () => {
    EXPLORATIONS.forEach((asset) => {
      const layer = asset.assetLayer;
      expect(layer.trl).toBeTruthy();
      expect(layer.technologyStatus).toBeTruthy();
      expect(layer.coreTechnology).toBeTruthy();
      expect(layer.ipKnowHow).toBeTruthy();
      expect(layer.prototypeDemo).toBeTruthy();
      expect(layer.technologyStack.length).toBeGreaterThan(0);
      expect(layer.applications.length).toBeGreaterThan(0);
      expect(layer.targetIndustries.length).toBeGreaterThan(0);
      expect(layer.commercialPotential).toBeTruthy();
      expect(layer.licensingPotential).toBeTruthy();
      expect(layer.strategicPartnershipPotential).toBeTruthy();
      expect(layer.nextMilestone).toBeTruthy();
    });
  });

  it('should validate complete 4-stage roadmap for all assets', () => {
    EXPLORATIONS.forEach((asset) => {
      expect(asset.roadmap.explore).toBeTruthy();
      expect(asset.roadmap.prototype).toBeTruthy();
      expect(asset.roadmap.integrate).toBeTruthy();
      expect(asset.roadmap.productize).toBeTruthy();
    });
  });

  it('should validate technology map layer connections', () => {
    EXPLORATIONS.forEach((asset) => {
      expect(asset.techMapLayers.length).toBeGreaterThan(0);
    });
  });
});
