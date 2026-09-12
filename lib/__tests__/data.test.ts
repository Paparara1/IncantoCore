import { describe, it, expect } from "vitest";
import { TECHNOLOGY_ASSETS } from "../data/technology-assets";
import { COMMERCIAL_MODELS } from "../data/commercial-models";
import { TECH_MAP_LAYERS } from "../data/tech-map-layers";

describe("Technology Assets Registry", () => {
  it("should contain exactly 10 technology assets", () => {
    expect(TECHNOLOGY_ASSETS).toHaveLength(10);
  });

  it("should have valid unique IDs and slugs for all assets", () => {
    const ids = new Set();
    const slugs = new Set();
    TECHNOLOGY_ASSETS.forEach((asset) => {
      expect(asset.id).toBeTruthy();
      expect(asset.slug).toBeTruthy();
      expect(asset.name).toBeTruthy();
      expect(asset.trl).toContain("Indicative internal TRL assessment");
      ids.add(asset.id);
      slugs.add(asset.slug);
    });
    expect(ids.size).toBe(10);
    expect(slugs.size).toBe(10);
  });

  it("should contain required asset names", () => {
    const names = TECHNOLOGY_ASSETS.map((a) => a.name);
    expect(names).toContain("NeuroAI");
    expect(names).toContain("NeuroMusic");
    expect(names).toContain("NeuroLight");
    expect(names).toContain("Brain-to-World");
    expect(names).toContain("AI Robotics");
    expect(names).toContain("Machine Perception");
    expect(names).toContain("Edge Intelligence");
    expect(names).toContain("Immersive AI");
    expect(names).toContain("Neuro-Smart Home");
    expect(names).toContain("Assistive Intelligence");
  });
});

describe("Commercial Models & Tech Map Layers", () => {
  it("should define 6 commercial pathways", () => {
    expect(COMMERCIAL_MODELS).toHaveLength(6);
    const ids = COMMERCIAL_MODELS.map((m) => m.id);
    expect(ids).toEqual(["acquire", "license", "partner", "transfer", "investment", "joint-venture"]);
  });

  it("should define 6 architecture layers", () => {
    expect(TECH_MAP_LAYERS).toHaveLength(6);
    expect(TECH_MAP_LAYERS[0].name).toContain("AI / ML MODULATION LAYER");
    expect(TECH_MAP_LAYERS[5].name).toContain("COMMERCIAL & GO-TO-MARKET LAYER");
  });
});
