// utils/toMeters.ts

export type Vec2 = { x: number; y: number };
export type Vec3 = { x: number; y: number; z: number };

type CentimeterValue = number | Vec2 | Vec3;

// Sobrecargas
export function toMeters(value: number): number;
export function toMeters(value: Vec2): Vec2;
export function toMeters(value: Vec3): Vec3;

// Implementação
export function toMeters(value: CentimeterValue): number | Vec2 | Vec3 {
  if (typeof value === "number") {
    return value / 100;
  }

  if ("x" in value && "y" in value && "z" in value) {
    return {
      x: value.x / 100,
      y: value.y / 100,
      z: value.z / 100,
    };
  }

  if ("x" in value && "y" in value) {
    return {
      x: value.x / 100,
      y: value.y / 100,
    };
  }

  throw new Error("Formato inválido para conversão em metros.");
}
